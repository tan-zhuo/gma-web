# gma — 人类游戏机历史网站 · 设计说明

> 版本：2026-08-26 · 实现方案：B（Vite + React + TypeScript + Tailwind v4）；方案 A 原型保留在 `prototype/index.html`

## 信息架构
首页 → Hero（标题 + 定位 + 4 个关键数字）→ 九代世代时间线 → 核心系列（筛选 Tabs + 3D 卡片网格 + 详情 Modal）→ 当代性能对比表 → 关于本站。Sticky 导航：世代时间线 / 核心系列 / 性能对比 / 关于。

## 内容范围
PlayStation（PS1–PS5 Pro）、Xbox（初代–Series X|S）、任天堂（FC–Switch 2，含 Wii U）、小霸王（FC 兼容机 / 学习机 / 后期机型）、Steam（2015 Steam Machine / Steam Deck / 2026 Steam Machine）。

## Console 字段
`id, brand, shape, name, year, media, sales, cpu, gpu, ram, control, ops, history, perf`（`shape` 为本实现新增：`flat | tall | cube | handheld`，控制 3D 卡片块的形状）。

## 设计系统
- 深色电竞档案 + 玻璃拟态 + 青/粉霓虹点缀
- 颜色：`--bg #0a0b0f` `--accent #00f0ff` `--accent2 #ff2d95`，品牌色 ps/xbox/nintendo/steam/xiaobawang
- 字体：Orbitron（标题）/ Noto Sans SC（正文）
- 卡片：180px 顶部视觉区 + CSS perspective 3D 主机块，悬停回正放大

## 交互
- 品牌筛选 Tabs；详情 Modal（遮罩 / 关闭键 / Esc 关闭，焦点回归）
- 平滑滚动、Sticky 导航高亮、响应式（≤680px 单列）

## 文案原则
专业、简洁、硬核；历史意义讲「为什么重要」，性能讲解区分「理论 vs 实际」；小霸王按「兼容机 + 学习机」双重身份记录。

## 文件
- `src/` — React 组件、类型、hooks（结构见 README.md）
- `src/data/consoles.json` — 唯一数据源（brands / generations / consoles / compare）
- `prototype/index.html` — 方案 A 单文件原型
- `docs/DESIGN.md` — 本文件
