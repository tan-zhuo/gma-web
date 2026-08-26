# Console Archive — 人类游戏机历史档案

Vite + React 19 + TypeScript + Tailwind CSS v4 实现的游戏机历史归档站。

## 启动

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # 输出到 dist/
npm run preview    # 预览生产构建
npm run typecheck
```

## 目录结构

```
index.html                 Vite 入口
src/
  main.tsx                 React 挂载
  App.tsx                  页面组装（Nav / Hero / Timeline / ConsoleGrid / CompareTable / About / Footer）
  index.css                Tailwind @theme 设计令牌 + 背景 / 3D 卡片 / 动画等自定义样式
  types/console.ts         Console / Generation / CompareRow 类型
  data/consoles.json       全部内容数据（唯一数据源）
  data/index.ts            数据导出 + 导航配置
  hooks/                   useActiveSection（导航高亮）、useLockBody（弹窗锁滚动）
  components/
    Nav / Hero / SectionHead
    Timeline / BrandChip
    ConsoleGrid / FilterTabs / ConsoleCard / Console3D / DetailModal
    CompareTable / About / Footer
prototype/index.html       方案 A 单文件原型（保留作参考，可直接打开）
docs/DESIGN.md             设计说明
```

## 添加 / 修改机型

编辑 `src/data/consoles.json` 的 `consoles` 数组即可，字段见 `src/types/console.ts`。
`shape` 取值 `flat | tall | cube | handheld`，控制卡片里 3D 主机块的形状。
