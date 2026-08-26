import type { ReactNode } from 'react'

type N = number | string

/**
 * Stylised SVG illustrations, one per console id.
 * All drawn in a 240×140 viewBox, front-facing, with gentle lighting.
 */
const D = {
  dark: '#1b1e27', dark2: '#0f1117', mid: '#2c3140', light: '#3d4353',
  grey: '#b8bcc4', grey2: '#8d929c', white: '#eef0f3', white2: '#c9ccd3',
  edge: 'rgba(255,255,255,.18)', shade: 'rgba(0,0,0,.35)',
}

const Defs = () => (
  <defs>
    <linearGradient id="gDark" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={D.mid} /><stop offset="1" stopColor={D.dark2} /></linearGradient>
    <linearGradient id="gDarkH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor={D.light} /><stop offset="1" stopColor={D.dark} /></linearGradient>
    <linearGradient id="gGrey" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d5d8de" /><stop offset="1" stopColor="#8f949e" /></linearGradient>
    <linearGradient id="gWhite" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#c3c7d0" /></linearGradient>
    <linearGradient id="gWhiteH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#b9bec8" /></linearGradient>
    <linearGradient id="gRed" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff5a68" /><stop offset="1" stopColor="#c4000f" /></linearGradient>
    <linearGradient id="gBlue" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4fa3ff" /><stop offset="1" stopColor="#0b5fd3" /></linearGradient>
    <linearGradient id="gGreen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4fe04f" /><stop offset="1" stopColor="#0c6b0c" /></linearGradient>
    <linearGradient id="gPurple" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7a5cff" /><stop offset="1" stopColor="#3d2c9c" /></linearGradient>
    <linearGradient id="gOrange" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffb266" /><stop offset="1" stopColor="#e05e00" /></linearGradient>
    <linearGradient id="gBeige" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#efe9dc" /><stop offset="1" stopColor="#c2b9a5" /></linearGradient>
    <linearGradient id="gScreen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1f6bff" /><stop offset=".5" stopColor="#00e0ff" /><stop offset="1" stopColor="#ff2d95" /></linearGradient>
    <radialGradient id="gDisc" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#4a4f5c" /><stop offset=".55" stopColor="#8f95a3" /><stop offset=".7" stopColor="#c9cdd6" /><stop offset="1" stopColor="#6b707c" /></radialGradient>
    <filter id="sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000" floodOpacity=".55" /></filter>
  </defs>
)

/* small helpers */
const Vents = ({ x, y, w, n = 8, gap = 5, color = D.shade }: { x: N; y: N; w: N; n?: number; gap?: number; color?: string }) => (
  <g fill={color}>{Array.from({ length: n }, (_, i) => <rect key={i} x={x} y={Number(y) + i * gap} width={w} height="1.6" rx=".8" />)}</g>
)
const Led = ({ x, y, c, r = 2 }: { x: N; y: N; c: string; r?: number }) => (
  <circle cx={x} cy={y} r={r} fill={c} style={{ filter: `drop-shadow(0 0 4px ${c})` }} />
)
const Slot = ({ x, y, w, h = 3 }: { x: N; y: N; w: N; h?: number }) => <rect x={x} y={y} width={w} height={h} rx="1.5" fill={D.dark2} />
const Base = ({ children }: { children: ReactNode }) => <g filter="url(#sh)">{children}</g>

const ART: Record<string, () => ReactNode> = {
  /* ---------- PlayStation ---------- */
  ps1: () => (
    <Base>
      <rect x="30" y="38" width="180" height="72" rx="8" fill="url(#gGrey)" stroke={D.edge} />
      <rect x="30" y="98" width="180" height="12" rx="6" fill="#7d828c" />
      <circle cx="120" cy="66" r="34" fill="url(#gDisc)" stroke="#6b707c" />
      <circle cx="120" cy="66" r="9" fill="#9da2ad" stroke="#5a5f6a" />
      <rect x="40" y="46" width="22" height="7" rx="2" fill="#7d828c" />
      <rect x="178" y="46" width="22" height="7" rx="2" fill="#7d828c" />
      <rect x="48" y="102" width="14" height="6" rx="2" fill={D.dark} />
      <rect x="70" y="102" width="14" height="6" rx="2" fill={D.dark} />
      <Led x="190" y="105" c="#3ddc3d" r={1.8} />
    </Base>
  ),
  ps2: () => (
    <Base>
      <rect x="86" y="14" width="68" height="116" rx="4" fill="url(#gDarkH)" stroke={D.edge} />
      <rect x="92" y="14" width="56" height="116" fill="url(#gDark)" />
      <rect x="98" y="26" width="44" height="38" rx="3" fill={D.dark2} stroke={D.edge} />
      <Vents x="103" y="72" w="34" n={9} gap={4.5} color="rgba(255,255,255,.08)" />
      <rect x="100" y="115" width="40" height="3" rx="1.5" fill="#1e5bd6" />
      <Led x="120" y="110" c="#3a7bff" />
      <rect x="80" y="126" width="80" height="6" rx="3" fill={D.dark2} />
    </Base>
  ),
  ps3: () => (
    <Base>
      <path d="M28 52 Q28 36 44 36 H196 Q212 36 212 52 V104 Q212 112 204 112 H36 Q28 112 28 104 Z" fill="url(#gDark)" stroke={D.edge} />
      <path d="M28 56 Q120 28 212 56" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1.5" />
      <path d="M32 100 Q120 116 208 100" fill="none" stroke="rgba(0,0,0,.5)" />
      <Slot x="60" y="60" w="120" h={2.5} />
      <rect x="150" y="72" width="40" height="12" rx="2" fill={D.dark2} stroke={D.edge} />
      <rect x="120" y="76" width="18" height="6" rx="1" fill="#2a2e3b" />
      <Led x="205" y="70" c="#ff3b3b" r={1.6} />
      <text x="48" y="90" fontSize="10" fontWeight="700" fill="#9aa0a6" fontFamily="Orbitron,sans-serif" letterSpacing="1">PS3</text>
    </Base>
  ),
  ps4: () => (
    <Base>
      <path d="M20 44 L200 36 L220 48 V98 L40 106 L20 96 Z" fill="url(#gDark)" stroke={D.edge} />
      <path d="M20 44 L200 36 L220 48 L40 56 Z" fill={D.light} />
      <path d="M40 56 L220 48 V98 L40 106 Z" fill="url(#gDark)" />
      <path d="M20 44 L40 56 V106 L20 96 Z" fill={D.dark2} />
      <path d="M40 60 L220 52 L220 56 L40 64 Z" fill="#0b0c11" />
      <Led x="30" y="76" c="#3a7bff" r={1.5} />
      <path d="M26 66 L34 63 V88 L26 91 Z" fill="#3a7bff" opacity=".7" />
    </Base>
  ),
  ps5: () => (
    <Base>
      <rect x="104" y="12" width="32" height="120" rx="6" fill="url(#gDark)" stroke={D.edge} />
      <path d="M74 20 Q92 10 104 14 L104 132 Q90 128 80 118 Z" fill="url(#gWhiteH)" stroke={D.edge} />
      <path d="M166 20 Q148 10 136 14 L136 132 Q150 128 160 118 Z" fill="url(#gWhite)" stroke={D.edge} />
      <path d="M78 22 Q92 14 104 16" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".7" />
      <path d="M104 40 V110" stroke="#3a7bff" strokeWidth="2" opacity=".8" style={{ filter: 'drop-shadow(0 0 4px #3a7bff)' }} />
      <path d="M136 40 V110" stroke="#3a7bff" strokeWidth="2" opacity=".8" style={{ filter: 'drop-shadow(0 0 4px #3a7bff)' }} />
      <rect x="112" y="60" width="16" height="2" rx="1" fill="#0b0c11" />
      <rect x="100" y="126" width="40" height="8" rx="4" fill={D.dark2} />
    </Base>
  ),

  /* ---------- Xbox ---------- */
  xbox: () => (
    <Base>
      <rect x="28" y="40" width="184" height="70" rx="6" fill="url(#gDark)" stroke={D.edge} />
      <rect x="28" y="40" width="184" height="10" rx="4" fill={D.light} />
      <circle cx="120" cy="76" r="24" fill="#0c6b0c" stroke="#3ddc3d" strokeWidth="1.5" />
      <circle cx="120" cy="76" r="14" fill="#0a3f0a" />
      <path d="M112 68 L128 84 M128 68 L112 84" stroke="#3ddc3d" strokeWidth="3" strokeLinecap="round" />
      <rect x="40" y="90" width="12" height="10" rx="2" fill={D.dark2} stroke={D.edge} />
      <rect x="58" y="90" width="12" height="10" rx="2" fill={D.dark2} stroke={D.edge} />
      <rect x="170" y="90" width="12" height="10" rx="2" fill={D.dark2} stroke={D.edge} />
      <rect x="188" y="90" width="12" height="10" rx="2" fill={D.dark2} stroke={D.edge} />
      <rect x="50" y="58" width="60" height="4" rx="2" fill={D.dark2} />
    </Base>
  ),
  xbox360: () => (
    <Base>
      <path d="M92 14 Q86 70 92 130 H148 Q154 70 148 14 Z" fill="url(#gWhiteH)" stroke={D.edge} />
      <path d="M96 18 Q90 70 96 126 H120 Q114 70 120 18 Z" fill="#fff" opacity=".4" />
      <circle cx="120" cy="50" r="10" fill="#e8ebef" stroke="#8d929c" />
      <path d="M120 40 A10 10 0 0 1 130 50" fill="none" stroke="#3ddc3d" strokeWidth="2.5" />
      <path d="M110 50 A10 10 0 0 1 120 40" fill="none" stroke="#3ddc3d" strokeWidth="2.5" opacity=".5" />
      <rect x="98" y="70" width="44" height="40" rx="3" fill="#d6d9de" stroke="#8d929c" />
      <Slot x="102" y="88" w={36} h={2} />
      <Vents x="100" y="116" w="40" n={2} gap={4} color="#b0b5be" />
    </Base>
  ),
  xboxone: () => (
    <Base>
      <rect x="26" y="40" width="188" height="66" rx="3" fill="url(#gDark)" stroke={D.edge} />
      <rect x="26" y="40" width="94" height="66" fill="#0b0c11" />
      <rect x="26" y="40" width="188" height="6" fill={D.light} />
      <Vents x="34" y="52" w="78" n={10} gap={4.4} color="rgba(255,255,255,.09)" />
      <Slot x="132" y="52" w={70} h={2.5} />
      <circle cx="200" cy="90" r="5" fill="#0a3f0a" stroke="#3ddc3d" strokeWidth="1.2" />
      <Led x="200" y="90" c="#3ddc3d" r={1.5} />
    </Base>
  ),
  xseries: () => (
    <Base>
      <rect x="82" y="10" width="76" height="124" rx="6" fill="url(#gDarkH)" stroke={D.edge} />
      <rect x="82" y="10" width="76" height="10" rx="4" fill={D.dark2} />
      <g fill="#3ddc3d" opacity=".55">{Array.from({ length: 6 }, (_, r) => Array.from({ length: 6 }, (_, c) => <circle key={`${r}${c}`} cx={95 + c * 10} cy={22 + r * 0} r="0" />))}</g>
      <g fill="#0a3f0a">{Array.from({ length: 7 }, (_, c) => <circle key={c} cx={90 + c * 10} cy={15} r="2.6" />)}</g>
      <g fill="#3ddc3d" opacity=".9">{Array.from({ length: 7 }, (_, c) => <circle key={c} cx={90 + c * 10} cy={15} r="1.2" />)}</g>
      <Slot x="92" y="40" w={4} h={50} />
      <circle cx="120" cy="118" r="5" fill="#0a3f0a" stroke="#3ddc3d" strokeWidth="1.2" />
      <Led x="120" y="118" c="#3ddc3d" r={1.5} />
      <rect x="108" y="100" width="24" height="3" rx="1.5" fill={D.dark2} />
    </Base>
  ),

  /* ---------- Nintendo ---------- */
  fc: () => (
    <Base>
      <rect x="34" y="46" width="172" height="62" rx="6" fill="url(#gWhite)" stroke={D.edge} />
      <rect x="34" y="46" width="172" height="26" rx="6" fill="url(#gRed)" />
      <rect x="34" y="66" width="172" height="6" fill="#a0000c" />
      <rect x="60" y="52" width="120" height="14" rx="2" fill="#7a0008" opacity=".5" />
      <rect x="72" y="56" width="96" height="10" rx="1" fill={D.dark2} />
      <rect x="46" y="80" width="40" height="18" rx="3" fill="url(#gRed)" />
      <rect x="46" y="80" width="40" height="18" rx="3" fill="none" stroke="#7a0008" />
      <rect x="150" y="78" width="12" height="22" rx="2" fill="#a0000c" />
      <rect x="168" y="78" width="12" height="22" rx="2" fill="#a0000c" />
      <rect x="100" y="84" width="34" height="8" rx="2" fill="#d6d9de" />
      <rect x="196" y="82" width="6" height="16" rx="2" fill="#d6d9de" />
    </Base>
  ),
  sfc: () => (
    <Base>
      <rect x="30" y="42" width="180" height="70" rx="12" fill="url(#gGrey)" stroke={D.edge} />
      <rect x="30" y="42" width="180" height="70" rx="12" fill="none" stroke="#6b707c" />
      <rect x="80" y="48" width="80" height="14" rx="3" fill="#7d828c" />
      <rect x="86" y="52" width="68" height="8" rx="1" fill={D.dark2} />
      <rect x="40" y="72" width="26" height="14" rx="4" fill="#7d828c" />
      <rect x="40" y="92" width="26" height="14" rx="4" fill="#7d828c" />
      <circle cx="150" cy="86" r="5" fill="#d33" /><circle cx="162" cy="86" r="5" fill="#fc3" /><circle cx="174" cy="86" r="5" fill="#3a3" /><circle cx="186" cy="86" r="5" fill="#36c" />
      <rect x="84" y="92" width="52" height="10" rx="5" fill="#8d929c" />
      <Led x="70" y="100" c="#ff3b3b" r={1.5} />
    </Base>
  ),
  n64: () => (
    <Base>
      <path d="M26 66 Q26 48 44 48 H196 Q214 48 214 66 V100 Q214 110 204 110 H36 Q26 110 26 100 Z" fill="url(#gDark)" stroke={D.edge} />
      <path d="M40 72 Q40 60 52 60 H188 Q200 60 200 72 V80 H40 Z" fill={D.light} />
      <rect x="78" y="52" width="84" height="14" rx="3" fill={D.dark2} stroke={D.edge} />
      <rect x="84" y="56" width="72" height="7" rx="1" fill="#000" />
      <g fill={D.dark2}>{[0, 1, 2, 3].map((i) => <rect key={i} x={54 + i * 36} y="88" width="22" height="12" rx="3" />)}</g>
      <g stroke={D.edge} fill="none">{[0, 1, 2, 3].map((i) => <rect key={i} x={54 + i * 36} y="88" width="22" height="12" rx="3" />)}</g>
      <rect x="32" y="66" width="10" height="12" rx="2" fill={D.light} />
      <Led x="204" y="94" c="#ff3b3b" r={1.5} />
    </Base>
  ),
  gc: () => (
    <Base>
      <rect x="68" y="26" width="104" height="100" rx="12" fill="url(#gPurple)" stroke={D.edge} />
      <rect x="68" y="26" width="104" height="14" rx="6" fill="#4a3ab3" />
      <path d="M96 22 Q120 8 144 22" fill="none" stroke="#4a3ab3" strokeWidth="6" strokeLinecap="round" />
      <circle cx="120" cy="64" r="30" fill="#3d2c9c" stroke="#7a5cff" />
      <circle cx="120" cy="64" r="22" fill="url(#gDisc)" opacity=".8" />
      <circle cx="120" cy="64" r="6" fill="#3d2c9c" />
      <rect x="80" y="102" width="20" height="10" rx="2" fill="#2a1f7a" />
      <rect x="106" y="102" width="20" height="10" rx="2" fill="#2a1f7a" />
      <rect x="132" y="102" width="20" height="10" rx="2" fill="#2a1f7a" />
      <rect x="158" y="102" width="8" height="10" rx="2" fill="#2a1f7a" />
      <Led x="80" y="46" c="#ff9a4d" r={1.6} />
    </Base>
  ),
  wii: () => (
    <Base>
      <rect x="92" y="12" width="56" height="120" rx="5" fill="url(#gWhiteH)" stroke={D.edge} />
      <rect x="92" y="12" width="12" height="120" rx="3" fill="#fff" opacity=".6" />
      <rect x="104" y="20" width="36" height="8" rx="4" fill="#d6d9de" />
      <Slot x="108" y="23" w={28} h={2} />
      <Led x="122" y="40" c="#3a7bff" r={2} />
      <rect x="110" y="52" width="24" height="22" rx="3" fill="#e4e7ec" stroke="#b0b5be" />
      <circle cx="122" cy="63" r="4" fill="#d6d9de" stroke="#8d929c" />
      <rect x="86" y="126" width="68" height="8" rx="3" fill="#d6d9de" stroke="#b0b5be" />
    </Base>
  ),
  wiiu: () => (
    <Base>
      <rect x="30" y="60" width="180" height="46" rx="6" fill="url(#gDark)" stroke={D.edge} />
      <rect x="30" y="60" width="180" height="6" fill={D.light} />
      <Slot x="60" y="76" w={90} h={2.5} />
      <rect x="164" y="74" width="30" height="16" rx="3" fill={D.dark2} stroke={D.edge} />
      <Led x="42" y="82" c="#3a7bff" r={1.6} />
      <rect x="66" y="22" width="108" height="36" rx="10" fill="url(#gDark)" stroke={D.edge} />
      <rect x="82" y="27" width="76" height="26" rx="2" fill="url(#gScreen)" opacity=".85" />
      <circle cx="74" cy="34" r="4" fill={D.light} stroke={D.edge} />
      <circle cx="166" cy="34" r="4" fill={D.light} stroke={D.edge} />
      <g fill={D.light}><circle cx="72" cy="46" r="1.6" /><circle cx="76" cy="46" r="1.6" /><circle cx="164" cy="46" r="1.6" /><circle cx="168" cy="46" r="1.6" /></g>
    </Base>
  ),
  switch: () => (
    <Base>
      <rect x="34" y="34" width="172" height="76" rx="8" fill="url(#gDark)" stroke={D.edge} />
      <rect x="34" y="34" width="22" height="76" rx="8" fill="url(#gBlue)" />
      <rect x="184" y="34" width="22" height="76" rx="8" fill="url(#gRed)" />
      <rect x="60" y="40" width="120" height="64" rx="2" fill="url(#gScreen)" />
      <rect x="60" y="40" width="120" height="64" rx="2" fill="url(#gDark)" opacity=".15" />
      <circle cx="45" cy="52" r="6" fill="#1d4fa8" stroke="#7fb3ff" /><circle cx="45" cy="52" r="3" fill="#0b3577" />
      <circle cx="195" cy="88" r="6" fill="#a30010" stroke="#ff8a94" /><circle cx="195" cy="88" r="3" fill="#7a0008" />
      <g fill="#0b3577"><rect x="41" y="70" width="8" height="8" rx="1.5" /><rect x="41" y="82" width="8" height="8" rx="1.5" /><rect x="36" y="76" width="7" height="7" rx="1.5" /></g>
      <g fill="#7a0008"><circle cx="195" cy="52" r="2.5" /><circle cx="195" cy="64" r="2.5" /><circle cx="189" cy="58" r="2.5" /><circle cx="201" cy="58" r="2.5" /></g>
    </Base>
  ),
  switch2: () => (
    <Base>
      <rect x="26" y="30" width="188" height="84" rx="10" fill="url(#gDark)" stroke={D.edge} />
      <rect x="26" y="30" width="22" height="84" rx="10" fill={D.mid} stroke={D.edge} />
      <rect x="192" y="30" width="22" height="84" rx="10" fill={D.mid} stroke={D.edge} />
      <rect x="48" y="32" width="4" height="80" fill="#3a7bff" opacity=".9" />
      <rect x="188" y="32" width="4" height="80" fill="#ff4d5a" opacity=".9" />
      <rect x="54" y="36" width="132" height="72" rx="2" fill="url(#gScreen)" />
      <rect x="54" y="36" width="132" height="72" rx="2" fill="url(#gDark)" opacity=".15" />
      <circle cx="37" cy="52" r="6" fill={D.dark2} stroke={D.light} /><circle cx="37" cy="52" r="3" fill={D.dark} />
      <circle cx="203" cy="92" r="6" fill={D.dark2} stroke={D.light} /><circle cx="203" cy="92" r="3" fill={D.dark} />
      <g fill={D.dark2}><rect x="33" y="72" width="8" height="8" rx="1.5" /><rect x="33" y="84" width="8" height="8" rx="1.5" /><rect x="28" y="78" width="7" height="7" rx="1.5" /></g>
      <g fill={D.dark2}><circle cx="203" cy="52" r="2.5" /><circle cx="203" cy="64" r="2.5" /><circle cx="197" cy="58" r="2.5" /><circle cx="209" cy="58" r="2.5" /></g>
      <rect x="198" y="74" width="10" height="4" rx="2" fill={D.dark2} />
    </Base>
  ),

  /* ---------- 小霸王 ---------- */
  'xbw-fc': () => (
    <Base>
      <rect x="34" y="46" width="172" height="62" rx="6" fill="url(#gDark)" stroke={D.edge} />
      <rect x="34" y="46" width="172" height="24" rx="6" fill="url(#gOrange)" />
      <rect x="34" y="64" width="172" height="6" fill="#b34a00" />
      <rect x="72" y="54" width="96" height="12" rx="1" fill={D.dark2} />
      <rect x="46" y="80" width="40" height="18" rx="3" fill="url(#gOrange)" />
      <rect x="150" y="78" width="12" height="22" rx="2" fill="#b34a00" />
      <rect x="168" y="78" width="12" height="22" rx="2" fill="#b34a00" />
      <rect x="100" y="84" width="34" height="8" rx="2" fill={D.light} />
      <rect x="196" y="82" width="6" height="16" rx="2" fill={D.light} />
      <Led x="66" y="102" c="#ff6b00" r={1.5} />
    </Base>
  ),
  'xbw-study': () => (
    <Base>
      <path d="M22 62 Q22 54 30 54 H210 Q218 54 218 62 L226 112 H14 Z" fill="url(#gBeige)" stroke={D.edge} />
      <rect x="30" y="58" width="180" height="14" rx="2" fill="#a89e8a" />
      <rect x="40" y="60" width="160" height="10" rx="1" fill={D.dark2} />
      <g fill="#3a3630">{Array.from({ length: 4 }, (_, r) => Array.from({ length: 16 }, (_, c) => <rect key={`${r}${c}`} x={26 + c * 11.5 + r * 2} y={78 + r * 8} width="9" height="6" rx="1" />))}</g>
      <rect x="62" y="102" width="112" height="6" rx="1.5" fill="#3a3630" />
      <rect x="76" y="40" width="34" height="12" rx="2" fill="url(#gOrange)" />
      <rect x="130" y="40" width="34" height="12" rx="2" fill="url(#gOrange)" />
      <Led x="206" y="64" c="#ff6b00" r={1.5} />
    </Base>
  ),
  'xbw-late': () => (
    <Base>
      <rect x="40" y="42" width="160" height="64" rx="10" fill="url(#gDark)" stroke={D.edge} />
      <rect x="40" y="42" width="160" height="8" rx="4" fill={D.light} />
      <path d="M40 62 Q120 50 200 62 V70 Q120 58 40 70 Z" fill="#ff6b00" opacity=".75" />
      <rect x="60" y="80" width="12" height="14" rx="2" fill={D.dark2} stroke={D.edge} />
      <rect x="78" y="80" width="12" height="14" rx="2" fill={D.dark2} stroke={D.edge} />
      <rect x="130" y="84" width="50" height="8" rx="4" fill={D.dark2} />
      <Led x="52" y="90" c="#ff6b00" r={1.8} />
      <text x="110" y="92" fontSize="9" fontWeight="700" fill="#ff9a4d" fontFamily="Orbitron,sans-serif">SB</text>
    </Base>
  ),

  /* ---------- Steam ---------- */
  steammachine2015: () => (
    <Base>
      <rect x="34" y="44" width="172" height="62" rx="4" fill="url(#gDark)" stroke={D.edge} />
      <path d="M34 44 H120 L206 106 H34 Z" fill="rgba(255,255,255,.04)" />
      <rect x="34" y="44" width="172" height="4" fill={D.light} />
      <rect x="58" y="70" width="70" height="3" rx="1.5" fill="#66c0f4" opacity=".7" />
      <rect x="150" y="86" width="20" height="10" rx="2" fill={D.dark2} stroke={D.edge} />
      <rect x="176" y="86" width="20" height="10" rx="2" fill={D.dark2} stroke={D.edge} />
      <circle cx="48" cy="62" r="6" fill={D.dark2} stroke="#66c0f4" />
      <circle cx="48" cy="62" r="2" fill="#66c0f4" />
      <circle cx="44" cy="66" r="1.6" fill="#66c0f4" />
    </Base>
  ),
  steamdeck: () => (
    <Base>
      <path d="M14 46 Q14 32 28 32 H212 Q226 32 226 46 V96 Q226 112 208 112 H186 L180 100 H60 L54 112 H32 Q14 112 14 96 Z" fill="url(#gDark)" stroke={D.edge} />
      <rect x="62" y="38" width="116" height="62" rx="2" fill="url(#gScreen)" />
      <rect x="62" y="38" width="116" height="62" rx="2" fill="url(#gDark)" opacity=".2" />
      <circle cx="36" cy="54" r="7" fill={D.dark2} stroke={D.light} /><circle cx="36" cy="54" r="3.5" fill={D.dark} />
      <circle cx="204" cy="54" r="7" fill={D.dark2} stroke={D.light} /><circle cx="204" cy="54" r="3.5" fill={D.dark} />
      <rect x="26" y="70" width="22" height="22" rx="3" fill={D.dark2} stroke={D.light} />
      <rect x="192" y="70" width="22" height="22" rx="3" fill={D.dark2} stroke={D.light} />
      <g fill={D.dark2}><rect x="49" y="46" width="6" height="6" rx="1" /><rect x="49" y="55" width="6" height="6" rx="1" /><rect x="185" y="44" width="5" height="5" rx="2.5" /><rect x="185" y="52" width="5" height="5" rx="2.5" /></g>
      <rect x="112" y="104" width="16" height="3" rx="1.5" fill={D.light} />
    </Base>
  ),
  steammachine2026: () => (
    <Base>
      <rect x="66" y="22" width="108" height="108" rx="10" fill="url(#gDark)" stroke={D.edge} />
      <rect x="66" y="22" width="108" height="108" rx="10" fill="url(#gDarkH)" opacity=".5" />
      <rect x="66" y="22" width="108" height="10" rx="5" fill={D.dark2} />
      <rect x="74" y="34" width="92" height="88" rx="6" fill={D.dark2} stroke="rgba(255,255,255,.06)" />
      <rect x="74" y="112" width="92" height="3" rx="1.5" fill="#66c0f4" style={{ filter: 'drop-shadow(0 0 6px #66c0f4)' }} />
      <circle cx="120" cy="72" r="18" fill="none" stroke="#66c0f4" strokeWidth="2" opacity=".8" />
      <circle cx="120" cy="72" r="7" fill="#66c0f4" opacity=".9" />
      <circle cx="108" cy="82" r="4" fill="#66c0f4" opacity=".9" />
      <Vents x="82" y="40" w="18" n={6} gap={4} color="rgba(255,255,255,.08)" />
      <Vents x="140" y="40" w="18" n={6} gap={4} color="rgba(255,255,255,.08)" />
    </Base>
  ),
}

export function ConsoleArt({ id }: { id: string }) {
  const Art = ART[id] ?? ART.ps1
  return (
    <svg viewBox="0 0 240 140" className="console-art" aria-hidden>
      <Defs />
      <Art />
    </svg>
  )
}
