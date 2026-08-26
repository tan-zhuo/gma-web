# Console Archive — 人类游戏机历史档案

Vite + React 19 + TypeScript + Tailwind CSS v4 + React Router 实现的游戏机历史归档站。

路由：`/` 首页 · `/timeline` 世代时间线 · `/consoles?brand=ps#ps5` 核心系列（支持品牌筛选与直达弹窗）· `/compare` 性能对比 · `/about` 关于

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
  App.tsx                  路由 + 布局（Nav / Footer / ScrollToTop）
  pages/                   Home / Timeline / Consoles / Compare / About
  index.css                Tailwind @theme 设计令牌 + 背景 / 3D 卡片 / 动画等自定义样式
  types/console.ts         Console / Generation / CompareRow 类型
  data/consoles.json       全部内容数据（唯一数据源）
  data/index.ts            数据导出 + 导航配置
  hooks/                   useTilt（鼠标 3D 倾斜）、useLockBody（弹窗锁滚动）
  components/
    Nav / Hero / SectionHead / PageHead
    Timeline / BrandChip
    ConsoleGrid / FilterTabs / ConsoleCard / ConsoleArt / DetailModal
    CompareTable / About / Footer
prototype/index.html       方案 A 单文件原型（保留作参考，可直接打开）
docs/DESIGN.md             设计说明
```

## 添加 / 修改机型

编辑 `src/data/consoles.json` 的 `consoles` 数组即可，字段见 `src/types/console.ts`。
机型图片：`public/consoles/<id>.jpg|png` + `src/data/credits.json` 记录来源/作者/许可（Wikimedia Commons）。没有图片的机型回退为 `src/components/ConsoleArt.tsx` 中的 SVG 示意图。
