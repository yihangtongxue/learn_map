// 学习地图总入口。在 root.children 中添加与 Spring 同级的知识体系。
// completed: true 显示绿色；false 或省略表示未完成。状态仅影响当前节点。
// source 与 children 二选一：大型知识树用独立文件，小型知识树直接嵌套。
window.LEARNING_MAP = {
  title: '一航同学的学习地图',
  // 等级名称与面积权重统一在这里维护，图例和所有节点同步更新。
  ranks: {
    S: { label: '非常重要', weight: 8 },
    T: { label: '重要', weight: 5 },
    A: { label: '比较重要', weight: 4 },
    B: { label: '一般', weight: 3 },
    C: { label: '了解即可', weight: 2 },
  },
  completedLabel: 'OK',
  root: {
    id: 'learning-map',
    title: '一航同学的学习地图',
    children: [
      {
        id: 'ecosystem',
        title: 'Spring 生态地图',
        description: '围绕 Spring 构建 Java 应用的技术集合，涵盖开发框架、数据访问、安全与微服务。',
        rank: 'S',
        completed: false,
        source: 'spring-data.js',
      },
      // 其他知识体系添加在这里，作为与 Spring 同级的节点。
    ],
  },
};
