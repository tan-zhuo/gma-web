export type Lang = 'zh' | 'en' | 'ja'

export const LANGS: { code: Lang; label: string; htmlLang: string; prefix: string }[] = [
  { code: 'zh', label: '中文', htmlLang: 'zh-CN', prefix: '' },
  { code: 'en', label: 'English', htmlLang: 'en', prefix: '/en' },
  { code: 'ja', label: '日本語', htmlLang: 'ja', prefix: '/ja' },
]

const zh = {
  siteName: 'Console Archive',
  siteTitle: 'Console Archive — 人类游戏机历史档案',
  siteDesc: '从 1972 到 2026，九代家用游戏机与掌机演进档案：PlayStation、Xbox、任天堂、世嘉、小霸王、Steam、Windows 掌机。规格、操作方式、历史意义与性能讲解。',
  nav: { timeline: '世代时间线', consoles: '核心系列', compare: '性能对比', about: '关于', browse: '浏览机型', menu: '菜单', github: 'GitHub 开源仓库', lang: '语言' },
  hero: {
    eyebrow: 'Human Console History · 1972 — 2026',
    title1: '人类游戏机', title2: '历史档案',
    lead: '从 8 位芯片到光线追踪，从红白机到 Steam Machine。九代世代脉络、41 台核心机型的规格与操作方式，以及每台机器「为什么重要」——一份中文优先、硬核可查的家用游戏机演进归档。',
    ctaPrimary: '浏览核心系列', ctaSecondary: '九代时间线',
    stats: { gens: '主机世代', consoles: '核心机型', years: '年历史跨度', brands: '厂商系列' },
  },
  home: {
    seriesTag: 'Series', seriesTitle: '按系列浏览', seriesDesc: '九个系列、41 台机器。选一个厂商进入，或直接查看全部。', allConsoles: '全部机型',
    models: (n: number) => `${n} 台机型`, enter: '进入 →',
    featuredTag: 'Featured', featuredTitle: '改变行业的机器', featuredDesc: '六台在各自世代里改写规则的主机。',
    tlTag: 'Timeline', tlTitle: '从 1972 到 2026，九代主机演进',
    tlDesc: (n: number) => `${n} 个世代，每一代都有一个决定性的技术或市场转折：卡带、光盘、3D、高清、体感、SSD 与光追。`, tlCta: '查看时间线',
  },
  timeline: { no: '01', tag: 'Timeline', title: '九代世代时间线', desc: '「世代」并非官方标准，而是按硬件能力跃迁与主要厂商发布周期归纳的行业共识。每一代都有一个决定性的技术或市场转折。', gen: 'GEN' },
  consoles: {
    no: '02', tag: 'Core Series', title: '核心系列详解', desc: '九个系列、41 台机器。每张卡片给出定位、核心规格、代表作与首发价；点击「查看档案」展开操作方式、历史意义与性能讲解。',
    all: '全部', filterLabel: '按系列筛选', games: '代表作', price: '首发价', open: '查看档案',
    year: '年份', media: '介质', sales: '销量', cpu: 'CPU', gpu: 'GPU', ram: '内存',
    specs: '核心规格', ops: '操作方式', controller: '控制器', usage: '使用说明', history: '历史意义', perf: '性能讲解', close: '关闭',
    imageCredit: '图片', onCommons: 'Wikimedia Commons',
  },
  compare: {
    no: '03', tag: 'Benchmark', title: '当代性能横向对比', desc: '第九代主机、Steam 硬件与 Windows 掌机的账面规格。GPU 一栏附 FP32 TFLOPS 相对条，仅反映理论峰值——不同架构之间不可直接换算为帧率。',
    cols: ['机型', 'CPU', 'GPU', '内存', '存储', '目标性能', '形态'], na: '未公布', tableTag: '当代机型规格表',
    note: '注：', noteText: '以上均为理论值，实际表现受游戏优化、功耗策略、分辨率缩放（DLSS / FSR / PSSR）等影响。Switch 2 参数为公开信息与拆解推断；Steam Machine (2026) GPU 算力官方未给出 TFLOPS 数值。',
  },
  about: {
    no: '04', tag: 'About', title: '关于本站', desc: '编纂原则、数据来源与图片许可。',
    p1Title: '编纂原则',
    p1a: '本站是一份以中文为第一语言的游戏机历史归档。内容强调「为什么重要」而非「有多厉害」：每台机器的历史意义部分尽量客观说明其对行业、技术或市场的实际影响；性能讲解部分明确区分理论峰值与实际体验的边界。',
    p1b: '小霸王系列作为中国市场的特殊存在，同时具备「FC 兼容机」与「学习机」双重身份，本站按其真实定位而非情怀滤镜进行记录。',
    p2Title: '数据说明',
    p2: ['销量数据来自厂商财报与公开统计，截至 2026 年年中。', '发售年份标注首发地区；存在地区差异时以「/」分隔。首发价为首发地区定价。', 'Switch 2、Steam Machine (2026) 等新机型规格以公开发布信息为准，部分为推断。', '世代划分采用主流共识，非官方标准。'],
    repo: 'GitHub 开源仓库 ↗', blog: '作者博客 ↗',
    creditsTitle: '图片来源与许可', files: 'FILES', logosTitle: 'Brand Logos',
    creditsNote: '未列出的机型使用本站自绘示意图。CC BY-SA 图片依许可要求署名，如需再利用请遵循相应许可。PlayStation、Xbox、Nintendo、SEGA、Steam、Windows 等名称与 Logo 为各自公司的商标，本站仅用于标识，与各公司无关联。',
  },
  footer: { blurb: '人类游戏机历史档案。从 1972 到 2026，记录每一台改变行业的机器，以及它们为什么重要。', pages: 'Pages', links: 'Links', stack: 'Stack', repo: 'GitHub 开源仓库 ↗', blog: '作者博客 tanzhuo.xyz ↗', images: '图片：Wikimedia Commons', mit: 'MIT 开源', gens: '1972 — 2026 · 9 GENERATIONS' },
  versus: {
    tag: 'Versus', title: '任选两台机器对决', desc: '从 41 台机器里任选两台，逐项比较 CPU 频率、核心数、GPU 算力、内存、存储、首发价与年份。进度条按对数比例绘制，跨代对比也能看清差距。',
    sideA: '机器 A', sideB: '机器 B', swap: '交换', na: '—', lowerBetter: '（越低越好）',
    metrics: { cpuMHz: 'CPU 频率', cores: 'CPU 核心', gflops: 'GPU 算力', ramMB: '内存', storageGB: '内置存储', usd: '首发价（美元）', year: '发售年' },
    scoreLabel: '硬件项胜出数（不含年份与价格）',
    note: '数值为公开规格或估算值（早期机型的 GPU 算力按 0 处理，表示无可编程 3D 硬件；卡带机型无内置存储）。跨架构、跨年代的数字只能说明量级，不代表实际游戏体验。',
  },
  notFound: { title: '页面不存在', desc: '你访问的地址没有对应内容。', home: '回到首页' },
}

export type UI = typeof zh

const en: UI = {
  siteName: 'Console Archive',
  siteTitle: 'Console Archive — A History of Video Game Consoles',
  siteDesc: 'Nine generations of home consoles and handhelds from 1972 to 2026: PlayStation, Xbox, Nintendo, Sega, Subor, Steam and Windows handhelds. Specs, controls, why each machine mattered, and what the numbers really mean.',
  nav: { timeline: 'Timeline', consoles: 'Consoles', compare: 'Benchmark', about: 'About', browse: 'Browse consoles', menu: 'Menu', github: 'GitHub repository', lang: 'Language' },
  hero: {
    eyebrow: 'Human Console History · 1972 — 2026',
    title1: 'A History of', title2: 'Game Consoles',
    lead: 'From 8-bit chips to ray tracing, from the Famicom to the Steam Machine. Nine generations, 41 key machines with specs and controls, and — for each one — why it mattered. A hardcore, checkable archive of console evolution.',
    ctaPrimary: 'Browse the consoles', ctaSecondary: 'Nine generations',
    stats: { gens: 'Generations', consoles: 'Consoles', years: 'Years of history', brands: 'Series' },
  },
  home: {
    seriesTag: 'Series', seriesTitle: 'Browse by series', seriesDesc: 'Nine series, 41 machines. Pick a manufacturer, or see everything at once.', allConsoles: 'All consoles',
    models: (n: number) => `${n} machine${n === 1 ? '' : 's'}`, enter: 'Enter →',
    featuredTag: 'Featured', featuredTitle: 'Machines that changed the industry', featuredDesc: 'Six consoles that rewrote the rules of their generation.',
    tlTag: 'Timeline', tlTitle: 'Nine generations of consoles, 1972 to 2026',
    tlDesc: (n: number) => `${n} generations, each defined by a decisive technical or market shift: cartridges, discs, 3D, HD, motion control, SSDs and ray tracing.`, tlCta: 'View the timeline',
  },
  timeline: { no: '01', tag: 'Timeline', title: 'Nine console generations', desc: '"Generations" are not an official standard but an industry consensus based on hardware leaps and manufacturers\' release cycles. Each one has a decisive technical or market turning point.', gen: 'GEN' },
  consoles: {
    no: '02', tag: 'Core Series', title: 'The consoles in detail', desc: 'Nine series, 41 machines. Each card gives the positioning, core specs, defining games and launch price; open the file for controls, historical significance and a performance breakdown.',
    all: 'All', filterLabel: 'Filter by series', games: 'Key games', price: 'Launch price', open: 'Open file',
    year: 'Year', media: 'Media', sales: 'Sales', cpu: 'CPU', gpu: 'GPU', ram: 'Memory',
    specs: 'Core specs', ops: 'Controls & use', controller: 'Controller', usage: 'How it was used', history: 'Why it mattered', perf: 'Performance', close: 'Close',
    imageCredit: 'Image', onCommons: 'Wikimedia Commons',
  },
  compare: {
    no: '03', tag: 'Benchmark', title: 'Current-generation comparison', desc: 'Paper specs for ninth-generation consoles, Steam hardware and Windows handhelds. The GPU column includes a relative FP32 TFLOPS bar — theoretical peaks only; numbers across architectures do not translate directly into frame rates.',
    cols: ['Machine', 'CPU', 'GPU', 'Memory', 'Storage', 'Target', 'Form factor'], na: 'N/A', tableTag: 'Current-generation spec table',
    note: 'Note: ', noteText: 'All figures are theoretical. Real performance depends on optimisation, power limits and upscaling (DLSS / FSR / PSSR). Switch 2 figures combine public information with teardown estimates; Valve has not published a TFLOPS figure for the 2026 Steam Machine.',
  },
  about: {
    no: '04', tag: 'About', title: 'About this site', desc: 'Editorial principles, data sources and image licences.',
    p1Title: 'Editorial principles',
    p1a: 'Console Archive is a Chinese-first history of game consoles. It emphasises why a machine mattered rather than how powerful it was: each entry tries to state objectively what the console did to the industry, the technology or the market, and the performance notes draw a clear line between theoretical peaks and real-world experience.',
    p1b: 'The Subor (小霸王) machines occupy a unique place in the Chinese market as both Famicom clones and "learning machines"; they are recorded here by what they actually were, not through nostalgia.',
    p2Title: 'About the data',
    p2: ['Sales figures come from company reports and public statistics as of mid-2026.', 'Release years are given for the launch region; regional differences are separated by "/". Launch prices are for the launch region.', 'Specs for new hardware such as Switch 2 and the 2026 Steam Machine are based on public announcements and are partly estimated.', 'Generation boundaries follow mainstream consensus; they are not an official standard.'],
    repo: 'GitHub repository ↗', blog: 'Author\'s blog ↗',
    creditsTitle: 'Image sources & licences', files: 'FILES', logosTitle: 'Brand logos',
    creditsNote: 'Consoles not listed use illustrations drawn for this site. CC BY-SA images are attributed as required; reuse must follow the respective licence. PlayStation, Xbox, Nintendo, SEGA, Steam, Windows and other names and logos are trademarks of their owners, used here for identification only. This site is not affiliated with any of them.',
  },
  footer: { blurb: 'A history of video game consoles. From 1972 to 2026, every machine that changed the industry — and why.', pages: 'Pages', links: 'Links', stack: 'Stack', repo: 'GitHub repository ↗', blog: 'Author\'s blog tanzhuo.xyz ↗', images: 'Images: Wikimedia Commons', mit: 'MIT licensed', gens: '1972 — 2026 · 9 GENERATIONS' },
  versus: {
    tag: 'Versus', title: 'Head-to-head: any two machines', desc: 'Pick any two of the 41 machines and compare CPU clock, cores, GPU compute, memory, storage, launch price and year side by side. Bars use a log scale so cross-generation match-ups stay readable.',
    sideA: 'Machine A', sideB: 'Machine B', swap: 'Swap', na: '—', lowerBetter: '(lower is better)',
    metrics: { cpuMHz: 'CPU clock', cores: 'CPU cores', gflops: 'GPU compute', ramMB: 'Memory', storageGB: 'Built-in storage', usd: 'Launch price (USD)', year: 'Release year' },
    scoreLabel: 'Hardware categories won (excluding year and price)',
    note: 'Figures are public specs or estimates (GPU compute is 0 for early machines with no programmable 3D hardware; cartridge systems have no built-in storage). Numbers across architectures and decades show scale only, not real-world experience.',
  },
  notFound: { title: 'Page not found', desc: 'There is nothing at this address.', home: 'Back to home' },
}

const ja: UI = {
  siteName: 'Console Archive',
  siteTitle: 'Console Archive — ゲーム機の歴史アーカイブ',
  siteDesc: '1972 年から 2026 年まで、9 世代の家庭用ゲーム機と携帯機の進化の記録：PlayStation、Xbox、任天堂、セガ、小覇王、Steam、Windows 携帯機。スペック、操作方法、歴史的意義、性能解説。',
  nav: { timeline: '世代年表', consoles: '主要シリーズ', compare: '性能比較', about: 'このサイトについて', browse: '機種を見る', menu: 'メニュー', github: 'GitHub リポジトリ', lang: '言語' },
  hero: {
    eyebrow: 'Human Console History · 1972 — 2026',
    title1: 'ゲーム機の', title2: '歴史アーカイブ',
    lead: '8 ビットチップからレイトレーシングへ、ファミコンから Steam Machine へ。9 世代の流れ、41 機種のスペックと操作方法、そして各機種が「なぜ重要だったのか」——中国語を第一言語とした、硬派で検証可能な家庭用ゲーム機の進化記録。',
    ctaPrimary: '主要シリーズを見る', ctaSecondary: '9 世代の年表',
    stats: { gens: '世代', consoles: '主要機種', years: '年の歴史', brands: 'シリーズ' },
  },
  home: {
    seriesTag: 'Series', seriesTitle: 'シリーズから探す', seriesDesc: '9 シリーズ、41 機種。メーカーを選ぶか、すべてを一覧で。', allConsoles: 'すべての機種',
    models: (n: number) => `${n} 機種`, enter: '見る →',
    featuredTag: 'Featured', featuredTitle: '業界を変えたマシン', featuredDesc: 'それぞれの世代でルールを書き換えた 6 台。',
    tlTag: 'Timeline', tlTitle: '1972 年から 2026 年、9 世代の進化',
    tlDesc: (n: number) => `${n} つの世代。それぞれに決定的な技術的・市場的転換点がある：カートリッジ、ディスク、3D、HD、モーション操作、SSD、レイトレーシング。`, tlCta: '年表を見る',
  },
  timeline: { no: '01', tag: 'Timeline', title: '9 世代の年表', desc: '「世代」は公式の基準ではなく、ハードウェアの飛躍と主要メーカーの発売周期に基づく業界の共通認識です。各世代には決定的な技術的・市場的転換点があります。', gen: 'GEN' },
  consoles: {
    no: '02', tag: 'Core Series', title: '主要シリーズ詳細', desc: '9 シリーズ、41 機種。各カードに位置づけ、主要スペック、代表作、発売価格を掲載。「詳細を見る」で操作方法、歴史的意義、性能解説を表示します。',
    all: 'すべて', filterLabel: 'シリーズで絞り込む', games: '代表作', price: '発売価格', open: '詳細を見る',
    year: '発売年', media: 'メディア', sales: '販売台数', cpu: 'CPU', gpu: 'GPU', ram: 'メモリ',
    specs: '主要スペック', ops: '操作方法', controller: 'コントローラー', usage: '使い方', history: '歴史的意義', perf: '性能解説', close: '閉じる',
    imageCredit: '画像', onCommons: 'Wikimedia Commons',
  },
  compare: {
    no: '03', tag: 'Benchmark', title: '現行機の性能比較', desc: '第 9 世代機、Steam ハードウェア、Windows 携帯機の公称スペック。GPU 欄には FP32 TFLOPS の相対バーを併記——理論値のみで、アーキテクチャが異なればフレームレートには直接換算できません。',
    cols: ['機種', 'CPU', 'GPU', 'メモリ', 'ストレージ', '目標性能', '形態'], na: '非公開', tableTag: '現行機スペック表',
    note: '注：', noteText: 'すべて理論値です。実際の性能はゲームの最適化、電力設定、アップスケーリング（DLSS / FSR / PSSR）に左右されます。Switch 2 の数値は公開情報と分解による推定、Steam Machine (2026) の GPU 性能は公式の TFLOPS 値が未公表です。',
  },
  about: {
    no: '04', tag: 'About', title: 'このサイトについて', desc: '編集方針、データの出典、画像のライセンス。',
    p1Title: '編集方針',
    p1a: 'Console Archive は中国語を第一言語とするゲーム機の歴史アーカイブです。「どれだけ高性能か」ではなく「なぜ重要だったか」を重視し、各機種が業界・技術・市場に与えた実際の影響をできるだけ客観的に記述します。性能解説では理論値と実体験の境界を明確にします。',
    p1b: '小覇王（Subor）シリーズは中国市場特有の存在で、「ファミコン互換機」と「学習機」の二つの顔を持ちます。本サイトでは懐古的なフィルターではなく、実際の位置づけに沿って記録しています。',
    p2Title: 'データについて',
    p2: ['販売台数はメーカーの決算資料と公開統計に基づき、2026 年半ば時点のものです。', '発売年は最初に発売された地域のもの。地域差がある場合は「/」で区切ります。発売価格も同様です。', 'Switch 2、Steam Machine (2026) などの新機種のスペックは公開情報に基づき、一部は推定です。', '世代区分は一般的な共通認識に従っており、公式基準ではありません。'],
    repo: 'GitHub リポジトリ ↗', blog: '作者のブログ ↗',
    creditsTitle: '画像の出典とライセンス', files: 'FILES', logosTitle: 'ブランドロゴ',
    creditsNote: '掲載のない機種は本サイト作成のイラストを使用しています。CC BY-SA の画像はライセンスに従って帰属表示しています。再利用の際は各ライセンスに従ってください。PlayStation、Xbox、Nintendo、SEGA、Steam、Windows などの名称とロゴは各社の商標であり、識別目的でのみ使用しています。本サイトは各社とは無関係です。',
  },
  footer: { blurb: 'ゲーム機の歴史アーカイブ。1972 年から 2026 年まで、業界を変えたすべてのマシンと、その理由を記録します。', pages: 'Pages', links: 'Links', stack: 'Stack', repo: 'GitHub リポジトリ ↗', blog: '作者のブログ tanzhuo.xyz ↗', images: '画像：Wikimedia Commons', mit: 'MIT ライセンス', gens: '1972 — 2026 · 9 GENERATIONS' },
  versus: {
    tag: 'Versus', title: '任意の 2 台で対決', desc: '41 機種から 2 台を選び、CPU クロック、コア数、GPU 性能、メモリ、ストレージ、発売価格、発売年を項目ごとに比較。バーは対数スケールなので世代を超えた比較でも差が読み取れます。',
    sideA: 'マシン A', sideB: 'マシン B', swap: '入れ替え', na: '—', lowerBetter: '（低いほど良い）',
    metrics: { cpuMHz: 'CPU クロック', cores: 'CPU コア数', gflops: 'GPU 性能', ramMB: 'メモリ', storageGB: '内蔵ストレージ', usd: '発売価格（米ドル）', year: '発売年' },
    scoreLabel: 'ハードウェア項目の勝利数（年と価格を除く）',
    note: '数値は公開スペックまたは推定値です（初期の機種の GPU 性能はプログラマブル 3D ハードウェアがないため 0 として扱い、カートリッジ機には内蔵ストレージがありません）。アーキテクチャや年代を超えた数字は規模の目安であり、実際のゲーム体験を表すものではありません。',
  },
  notFound: { title: 'ページが見つかりません', desc: 'このアドレスには何もありません。', home: 'ホームへ戻る' },
}

export const UI_STRINGS: Record<Lang, UI> = { zh, en, ja }
