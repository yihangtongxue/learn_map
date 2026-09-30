# 一航同学的学习地图

个人使用的静态学习地图。用浏览器直接打开 `index.html`，无需安装依赖、构建或启动服务器。

页面内容由数据生成。修改数据文件并保存后，刷新浏览器即可看到变化；没有页面上的编辑操作，也不使用 localStorage 或数据库。

## 平时修改哪些文件

| 文件 | 用途 |
| --- | --- |
| `map-data.js` | 网站名称、等级名称与权重、完成标识、最上层知识体系入口及其完成状态 |
| `spring-data.js` | Spring 生态中的项目、等级、完成状态及其知识树文件入口 |
| `framework-data.js` | Spring Framework 的模块与下级知识点、等级和完成状态 |
| 自己新增的 `*-data.js` | 可选，用来单独维护其他项目的大型知识树 |

`index.html`、`framework.html`、`topic.html` 只是页面外壳，`topic.js` 负责通用导航和布局，`styles.css` 负责公共样式。增加知识内容或修改学习状态无需编辑这些文件。

拼块只显示知识点名称，有下级时保留导航箭头。重要程度和完成状态通过颜色区分，顶部图例统一解释颜色；鼠标悬停可查看简短中文简介。数据维护 `id`、`title`、`rank`、可选的 `description` 和 `completed`，以及需要时的 `children` 或 `source`，不再维护分类和学习要求字段。

## 修改悬浮简介

在对应节点的数据中填写一句中文 `description`，保存后刷新页面即可：

```js
{
  id: 'framework',
  title: 'Spring Framework',
  description: 'Spring 的基础框架，提供对象管理、依赖注入、事务和 Web 开发等能力。',
  rank: 'S',
  completed: false,
  source: 'framework-data.js',
}
```

现有 Spring 生态入口、26 个项目及 Framework 下各层节点均已填写简介。鼠标悬停或键盘 Tab 聚焦拼块时显示提示；移开、失焦、点击跳转或按 Esc 关闭。简介不会常驻在拼块上，不改变布局；新节点暂未填写简介时显示“暂无简介。”。简介按纯文本显示。

简介用于快速理解概念，参考 [Spring 项目介绍](https://spring.io/projects/)、[Spring Framework 参考文档](https://docs.spring.io/spring-framework/reference/overview.html)及相关 API 文档整理，不替代具体版本的使用说明。

## 增加与 Spring 同级的知识体系

当前层级为：`一航同学的学习地图 / Spring 生态地图 / Spring Framework / …`。首页目前只有已有内容的 Spring 入口，其他知识体系按需添加。

在 `map-data.js` 的 `root.children` 数组中，紧接 Spring 对象后添加一个对象即可，例如：

```js
{
  id: 'databases',
  title: '数据库',
  rank: 'A',
  completed: false,
  children: [
    {
      id: 'databases-mysql',
      title: 'MySQL',
      rank: 'A',
      completed: false,
    },
  ],
},
```

首页会自动增加“数据库”，进入后展示 MySQL，面包屑自动生成。大型体系也可以使用 `source` 拆成独立数据文件，方法见下文。顶层名称可通过 `map-data.js` 的 `title`（网站标题）与 `root.title`（根节点名称）修改。

## 标记学习完成

重要程度从高到低：**S 非常重要 → T 重要 → A 比较重要 → B 一般 → C 了解即可**。

`OK` 表示已完成，是独立状态，不是重要程度等级。等级名称与面积权重统一在 `map-data.js` 的 `ranks` 中维护，完成标识由 `completedLabel` 控制；图例和拼块自动使用这些配置。

旧数据的等级迁移规则：S→S、A→T、A/B→A、B→B、C/B→B、C→C。

找到对应节点，将 `completed: false` 改为 `completed: true`。Framework 数据中的 JSON 风格写法是 `"completed": true`，两者含义相同。

```js
{
  id: 'spring-boot',
  title: 'Spring Boot',
  rank: 'S',
  completed: true,
}
```

- `true`：拼块显示绿色，块内仍只显示名称；顶部图例用 `OK` 说明完成状态。
- `false` 或省略：按等级显示红色。
- 只影响当前节点，不自动改变父级或子级。父级完成、子级未完成也可以分别记录。
- 完成后等级与面积不变，带下级的节点依旧可以点击进入。
- 恢复 `false` 即可取消完成状态；必须填写布尔值，不能填写字符串 `"true"`。

目前所有节点初始均为 `false`，没有替你标记任何学习进度。

## 增加知识点

直接在所属节点的 `children` 数组中添加对象。没有下级的节点可以省略 `children`；加上非空 `children` 后，页面会自动显示箭头并支持下钻。

例如，给 `spring-data.js` 中现有的 Spring Boot 项目增加下级，可把该对象改为：

```js
{
  id: 'spring-boot',
  title: 'Spring Boot',
  rank: 'S',
  completed: false,
  children: [
    {
      id: 'spring-boot-auto-configuration',
      title: '自动配置',
      rank: 'S',
      completed: false,
    },
  ],
}
```

继续嵌套 `children` 即可增加层级。父子关系由程序生成，不需要维护 `parentId` 或另外一份子节点 ID 列表。调整数组顺序即可调整拼块的布局顺序。

| 字段 | 说明 |
| --- | --- |
| `id` | 必填，全站唯一的字符串，创建后保持不变 |
| `title` | 必填，显示名称 |
| `description` | 可选，一句中文简介，仅在悬浮提示中显示 |
| `rank` | 知识节点必填：`S`、`T`、`A`、`B`、`C`；不要填写 `OK` |
| `completed` | 可选，是否完成，默认 `false` |
| `children` | 可选，直接嵌套下级节点数组 |
| `source` | 可选，独立知识树文件路径，与 `children` 二选一 |

建议新 ID 使用项目名前缀，例如 `spring-boot-auto-configuration`，避免同名知识点冲突。现有 Framework 的数字 ID 已保留；它们现在只是稳定标识，移动节点时不要重新编号。修改名称、移动层级或调整顺序都不需要修改 ID。

## 拆分大型知识树

知识点较多时，新建一个数据文件，例如 `boot-data.js`：

```js
window.LEARNING_MAP_BRANCHES['spring-boot'] = [
  {
    id: 'spring-boot-auto-configuration',
    title: '自动配置',
    rank: 'S',
    completed: false,
  },
];
```

然后只修改 `spring-data.js` 中对应节点，添加：

```js
source: 'boot-data.js'
```

该节点不再填写 `children`。程序自动加载文件，无需增加 HTML 中的 `<script>` 标签。文件中 `LEARNING_MAP_BRANCHES` 的键必须与引用它的节点 ID 完全一致。

`source` 路径相对于 HTML 所在目录；独立文件只提供下级数组，父节点自身的名称、等级和完成状态仍在引用它的对象里维护。例如 Spring 生态整体状态在 `map-data.js` 中，Framework 整体完成状态在 `spring-data.js` 中，模块和知识点状态在 `framework-data.js` 中。

## 页面与导航

- 总览、模块和更深层级使用同一套矩形布局，添加数据后自动重新分配空间。
- 面积依据当前层级的等级权重：S=8、T=5、A=4、B=3、C=2；不受后代数量或完成状态影响。
- 每次展示直接子级，末级拼块为静态内容。直接打开末级地址时显示该节点。
- 原 `framework.html` 和 `topic.html#0-0` 等链接继续可用。新节点地址为 `topic.html#节点ID`。
- 顶部面包屑根据数据中的实际父子关系展示完整路径，点击任意祖先层级即可返回；当前层级加粗且不作为链接。小屏路径较长时可以横向滚动。
- 浏览器前进、后退和刷新按当前地址恢复层级。
- 页面保留一屏布局，根据可用空间调整字号；知识点非常密集时，建议按主题增加中间层级以便阅读。
- 数据文件加载失败、ID 重复、等级无效等情况会在页面显示错误提示。

按使用者要求，本次改造未启动项目、未运行测试，实际浏览器效果由使用者验证。
