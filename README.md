# Console Archive — 人类游戏机历史档案

Vite + React 19 + TypeScript + Tailwind CSS v4 + React Router 实现的游戏机历史归档站。

路由：`/` 首页 · `/timeline` 世代时间线 · `/consoles?brand=ps#ps5` 核心系列（支持品牌筛选与直达弹窗）· `/compare?a=fc&b=ps5` 性能对比（含任选两台对决）· `/about` 关于

多语言：中文为默认（无前缀），英文 `/en/...`，日文 `/ja/...`；UI 文案在 `src/i18n/ui.ts`，内容翻译在 `src/data/content.{en,ja}.json`（按 id 覆盖 `consoles.json` 的字段）。

SEO：`index.html` 含 OG / Twitter / JSON-LD；`src/hooks/useSeo.ts` 按路由设置 title / description / canonical / hreflang；`public/sitemap.xml`、`robots.txt`、`site.webmanifest`、`og.png` 与图标由 `public/logo.svg` 生成。部署到自有域名后请把 `sitemap.xml` 与 `robots.txt` 里的 `https://gma-web.vercel.app` 换成实际域名。

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
  data/consoles.json       全部内容数据（中文，唯一数据源；含 hw 数值参数）
  data/content.en.json     英文内容包
  data/content.ja.json     日文内容包
  i18n/                    语言上下文、UI 文案（zh / en / ja）
  data/index.ts            数据导出 + 导航配置
  hooks/                   useTilt（鼠标 3D 倾斜）、useLockBody（弹窗锁滚动）
  components/
    Nav / Hero / SectionHead / PageHead
    Timeline / BrandChip
    ConsoleGrid / FilterTabs / ConsoleCard / ConsoleArt / DetailModal
    CompareTable / Versus / About / Footer / LangSwitch / Logo
prototype/index.html       方案 A 单文件原型（保留作参考，可直接打开）
docs/DESIGN.md             设计说明
```

## 添加 / 修改机型

编辑 `src/data/consoles.json` 的 `consoles` 数组即可，字段见 `src/types/console.ts`。
机型图片：`public/consoles/<id>.jpg|png` + `src/data/credits.json` 记录来源/作者/许可（Wikimedia Commons）。没有图片的机型回退为 `src/components/ConsoleArt.tsx` 中的 SVG 示意图。

## 许可

代码：MIT（见 `LICENSE`）。机型照片来自 Wikimedia Commons，各自许可见 `src/data/credits.json` 与站内「关于」页；品牌 Logo 为各公司商标，仅用于标识。
