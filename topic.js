(() => {
  'use strict';

  const config = window.LEARNING_MAP;
  const nodes = new Map();
  const map = document.getElementById('topic-map');
  const heading = document.getElementById('topic-title');
  const breadcrumbs = document.getElementById('breadcrumbs');
  const breadcrumbList = document.getElementById('breadcrumb-list');
  const ranks = config?.ranks || {};
  const weights = Object.fromEntries(Object.entries(ranks).map(([rank, value]) => [rank, value.weight]));
  const completedLabel = config?.completedLabel || 'OK';
  let visible = [];
  let frame;
  window.LEARNING_MAP_BRANCHES = Object.create(null);
  const tooltip = element('div', 'topic-tooltip');
  tooltip.id = 'topic-tooltip';
  tooltip.setAttribute('role', 'tooltip');
  tooltip.hidden = true;
  document.body.append(tooltip);
  let tooltipTile = null;

  function hideTooltip() {
    tooltip.hidden = true;
    tooltipTile?.removeAttribute('aria-describedby');
    tooltipTile = null;
  }

  function positionTooltip(event) {
    if (!tooltipTile || tooltip.hidden) return;
    const margin = 10;
    const bounds = tooltipTile.getBoundingClientRect();
    const x = event ? event.clientX : bounds.left + bounds.width / 2;
    const y = event ? event.clientY : bounds.bottom;
    const width = tooltip.offsetWidth;
    const height = tooltip.offsetHeight;
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    const left = Math.max(margin, Math.min(x + 14, viewportWidth - width - margin));
    const top = y + 16 + height <= viewportHeight - margin ? y + 16 : y - height - 16;
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${Math.max(margin, Math.min(top, viewportHeight - height - margin))}px`;
  }

  function showTooltip(tile, node, event) {
    hideTooltip();
    tooltip.replaceChildren(
      element('strong', 'tooltip-title', node.title),
      element('p', 'tooltip-description', node.description?.trim() || '暂无简介。'),
    );
    tooltipTile = tile;
    tile.setAttribute('aria-describedby', tooltip.id);
    tooltip.hidden = false;
    positionTooltip(event);
  }

  function bindTooltip(tile, node) {
    tile.addEventListener('mouseenter', (event) => showTooltip(tile, node, event));
    tile.addEventListener('mousemove', positionTooltip);
    tile.addEventListener('mouseleave', () => {
      if (tooltipTile === tile) hideTooltip();
    });
    tile.addEventListener('focus', () => showTooltip(tile, node));
    tile.addEventListener('blur', () => {
      if (tooltipTile === tile) hideTooltip();
    });
    tile.addEventListener('click', hideTooltip);
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hideTooltip();
  });
  window.addEventListener('resize', hideTooltip);
  window.addEventListener('blur', hideTooltip);

  // Classic scripts work when the site is opened directly with file://.
  function loadBranch(node) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = node.source;
      script.onload = () => {
        const children = window.LEARNING_MAP_BRANCHES[node.id];
        if (!Array.isArray(children)) {
          reject(new Error(`${node.source} 必须为 ${node.id} 提供 children 数组。`));
          return;
        }
        resolve(children);
      };
      script.onerror = () => reject(new Error(`无法加载数据文件：${node.source}`));
      document.head.append(script);
    });
  }

  async function indexTree(data, parentId = null) {
    if (!data || typeof data.id !== 'string' || !data.id.trim()) {
      throw new Error('每个节点都需要非空的字符串 id。');
    }
    if (nodes.has(data.id)) throw new Error(`节点 ID 重复：${data.id}`);
    if (typeof data.title !== 'string' || !data.title.trim()) {
      throw new Error(`节点 ${data.id} 缺少名称。`);
    }
    if (parentId !== null && !Object.hasOwn(weights, data.rank)) {
      throw new Error(`节点 ${data.id} 的等级无效，请使用 ${Object.keys(ranks).join('、')}。`);
    }
    if (data.completed !== undefined && typeof data.completed !== 'boolean') {
      throw new Error(`节点 ${data.id} 的 completed 必须是 true 或 false。`);
    }
    if (data.description !== undefined && typeof data.description !== 'string') {
      throw new Error(`节点 ${data.id} 的 description 必须是文本。`);
    }
    if (data.source !== undefined && (typeof data.source !== 'string' || !data.source.trim())) {
      throw new Error(`节点 ${data.id} 的 source 必须是文件路径。`);
    }
    if (data.source && data.children !== undefined) {
      throw new Error(`节点 ${data.id} 请只选择 children 或 source 中的一种。`);
    }
    const node = { ...data, parentId, children: [] };
    nodes.set(node.id, node);
    const children = data.source ? await loadBranch(data) : (data.children ?? []);
    if (!Array.isArray(children)) throw new Error(`节点 ${data.id} 的 children 必须是数组。`);
    for (const child of children) {
      await indexTree(child, node.id);
      node.children.push(child.id);
    }
  }

  function element(tag, className, text) {
    const result = document.createElement(tag);
    result.className = className;
    if (text !== undefined) result.textContent = text;
    return result;
  }

  function urlFor(id) {
    if (id === config.root.id) return 'index.html';
    return `topic.html#${encodeURIComponent(id)}`;
  }

  function renderLegend() {
    const legend = document.getElementById('map-legend');
    legend.replaceChildren();
    for (const [rank, details] of Object.entries(ranks)) {
      const item = element('span', 'legend-item');
      const swatch = element('i', `swatch level-${rank.toLowerCase()}`);
      swatch.setAttribute('aria-hidden', 'true');
      item.append(swatch, element('b', '', rank), document.createTextNode(details.label));
      legend.append(item);
    }
    const completed = element('span', 'legend-item');
    const swatch = element('i', 'swatch is-complete');
    swatch.setAttribute('aria-hidden', 'true');
    completed.append(swatch, element('b', '', completedLabel), document.createTextNode('已完成'));
    legend.append(completed);
  }

  function renderBreadcrumbs(node, errorTitle) {
    const path = [];
    for (let current = node; current; current = nodes.get(current.parentId)) {
      path.unshift(current);
    }
    if (!node) path.push({ title: config?.root?.title || '总览' });

    breadcrumbList.replaceChildren();
    heading.textContent = node
      ? `${node.title}${node.completed === true ? ` · ${completedLabel}` : ''}`
      : errorTitle;
    heading.classList.toggle('is-complete', node?.completed === true);
    heading.setAttribute('aria-current', 'page');

    function appendCrumb(content) {
      const item = element('li', 'breadcrumb-item');
      if (breadcrumbList.children.length) {
        const separator = element('span', 'breadcrumb-separator', '/');
        separator.setAttribute('aria-hidden', 'true');
        item.append(separator);
      }
      item.append(content);
      breadcrumbList.append(item);
    }

    for (const ancestor of path) {
      if (node && ancestor.id === node.id) {
        appendCrumb(heading);
      } else {
        const link = element('a', 'breadcrumb-link', ancestor.title);
        link.href = node ? urlFor(ancestor.id) : 'index.html';
        appendCrumb(link);
      }
    }
    if (!node) appendCrumb(heading);
    // Keep the current level visible when the full path exceeds a narrow screen.
    breadcrumbs.scrollLeft = breadcrumbs.scrollWidth;
  }

  // Divide the longer side into balanced groups. Leaves keep their source order,
  // and their areas depend only on this level's grades, not descendant counts.
  function partition(items, x, y, width, height) {
    if (!items.length) return [];
    if (items.length === 1) return [{ item: items[0], x, y, width, height }];

    const total = items.reduce((sum, item) => sum + weights[item.node.rank], 0);
    let partial = 0;
    let bestDifference = Infinity;
    let splitIndex = 1;
    let firstWeight = 0;
    for (let index = 1; index < items.length; index++) {
      partial += weights[items[index - 1].node.rank];
      const difference = Math.abs(total / 2 - partial);
      if (difference < bestDifference) {
        bestDifference = difference;
        splitIndex = index;
        firstWeight = partial;
      }
    }

    const first = items.slice(0, splitIndex);
    const second = items.slice(splitIndex);
    const ratio = firstWeight / total;
    if (width >= height) {
      const split = width * ratio;
      return [...partition(first, x, y, split, height), ...partition(second, x + split, y, width - split, height)];
    }
    const split = height * ratio;
    return [...partition(first, x, y, width, split), ...partition(second, x, y + split, width, height - split)];
  }

  function fitText(tile, width, height) {
    const copy = tile.firstElementChild;
    const style = getComputedStyle(tile);
    const availableHeight = tile.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
    let nameSize = Math.max(7, Math.min(32, width / 9, height / 5));
    tile.style.setProperty('--topic-name-size', `${nameSize}px`);

    // Long method names wrap; shrink the text as needed instead of clipping it.
    for (let attempt = 0; attempt < 24; attempt++) {
      if (copy.getBoundingClientRect().height <= availableHeight && copy.scrollWidth <= copy.clientWidth + 1) break;
      if (nameSize <= 6) break;
      nameSize = Math.max(6, nameSize * .9);
      tile.style.setProperty('--topic-name-size', `${nameSize}px`);
    }
  }

  function layout() {
    if (!visible.length) return;
    const style = getComputedStyle(map);
    const inset = parseFloat(style.paddingLeft);
    const gap = parseFloat(style.gap);
    const width = map.clientWidth - inset * 2;
    const height = map.clientHeight - inset * 2;
    if (width <= 0 || height <= 0) return;
    const rects = partition(visible, 0, 0, width + gap, height + gap);
    for (const rect of rects) {
      Object.assign(rect.item.tile.style, {
        left: `${inset + rect.x}px`,
        top: `${inset + rect.y}px`,
        width: `${Math.max(1, rect.width - gap)}px`,
        height: `${Math.max(1, rect.height - gap)}px`,
      });
    }
    for (const rect of rects) fitText(rect.item.tile, rect.width - gap, rect.height - gap);
  }

  function render(moveFocus = false) {
    hideTooltip();
    let id;
    try {
      id = location.hash ? decodeURIComponent(location.hash.slice(1)) :
        (document.body.dataset.node || config.root.id);
    } catch {
      id = null;
    }
    const node = nodes.get(id);
    visible = [];
    map.replaceChildren();
    if (!node) {
      renderBreadcrumbs(null, '未找到这个节点');
      document.title = `未找到节点 · ${config.title}`;
      map.setAttribute('aria-label', '未找到节点');
      map.append(element('p', 'topic-empty', '请返回总览，重新选择知识点。'));
      if (moveFocus) heading.focus({ preventScroll: true });
      return;
    }

    renderBreadcrumbs(node);
    document.title = node.id === config.root.id ? config.title : `${node.title} · ${config.title}`;
    map.setAttribute('aria-label', `${node.title} 下级知识地图`);

    // Leaf IDs can also be opened directly, while ordinary leaf tiles stay static.
    const children = node.children.length ? node.children.map((childId) => nodes.get(childId)) :
      (node.id === config.root.id ? [] : [node]);
    if (!children.length) map.append(element('p', 'topic-empty', '尚未添加知识点，请在数据中添加 children。'));
    for (const child of children) {
      const canDrill = child.children.length > 0;
      const completed = child.completed === true;
      const tile = element(canDrill ? 'a' : 'div', `tile topic-tile level-${child.rank.toLowerCase()}${canDrill ? ' tile-link' : ''}${completed ? ' is-complete' : ''}`);
      const copy = element('div', 'topic-copy');
      const importance = ranks[child.rank].label;
      copy.append(element('strong', 'topic-name', child.title));
      tile.append(copy);
      const label = `${child.title} · ${child.rank}｜${importance} · ${completed ? '已完成' : '未完成'}`;
      tile.setAttribute('aria-label', `${label}${canDrill ? '，查看下级' : ''}`);
      if (canDrill) {
        tile.href = urlFor(child.id);
        tile.append(element('span', 'drill-arrow', '↗'));
        tile.lastElementChild.setAttribute('aria-hidden', 'true');
      } else {
        tile.tabIndex = 0;
        tile.setAttribute('role', 'group');
      }
      bindTooltip(tile, child);
      map.append(tile);
      visible.push({ node: child, tile });
    }
    layout();
    if (moveFocus) heading.focus({ preventScroll: true });
  }

  async function start() {
    try {
      if (!config?.root || typeof config.title !== 'string') {
        throw new Error('请检查 map-data.js 中的 LEARNING_MAP 配置。');
      }
      if (!Object.keys(ranks).length || Object.values(ranks).some((rank) =>
        typeof rank.label !== 'string' || !Number.isFinite(rank.weight) || rank.weight <= 0)) {
        throw new Error('请在 map-data.js 中为每个等级设置名称和大于 0 的面积权重。');
      }
      renderLegend();
      await indexTree(config.root);
      window.addEventListener('hashchange', () => render(true));
      new ResizeObserver(() => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(layout);
      }).observe(map);
      render();
    } catch (error) {
      visible = [];
      renderBreadcrumbs(null, '知识数据加载失败');
      document.title = '知识数据加载失败';
      map.replaceChildren(element('p', 'topic-empty', error.message));
    }
  }
  start();
})();
