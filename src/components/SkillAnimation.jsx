// Animações temáticas (line-art dourado) exibidas ao passar o mouse sobre
// cada card de software. Cada variante remete à ferramenta correspondente.
// As animações em si são controladas por CSS em index.css (seção SKILLS).

// Curvas reaproveitadas tanto no traço desenhado quanto no offset-path do
// elemento que percorre o caminho (caneta / ponto), garantindo sincronia.
// "R" desenhado como traço único e contínuo (haste -> barra -> pança ->
// volta à haste -> perna), para a caneta percorrer a letra inteira.
const AI_PATH = 'M26 58 L26 16 L38 16 C 50 16 50 36 38 36 L26 36 L48 58';
const AE_PATH = 'M12 52 C 24 14 48 14 60 52';

function Photoshop() {
  return (
    <svg className="skill-anim skill-anim--ps" viewBox="0 0 72 72" aria-hidden="true">
      {/* corpo da câmera */}
      <rect className="draw cam-body" pathLength="1" x="10" y="26" width="52" height="30" rx="4" />
      {/* visor / prisma no topo */}
      <path className="draw cam-hump" pathLength="1" d="M27 27 L31 20 L41 20 L45 27" />
      {/* lente */}
      <circle className="draw lens-out" pathLength="1" cx="36" cy="42" r="11" />
      <circle className="draw lens-in" pathLength="1" cx="36" cy="42" r="5" />
      {/* anel de captura ("clique") */}
      <circle className="capture" cx="36" cy="42" r="11" />
      {/* flash disparando para cima */}
      <g className="flash">
        <line x1="36" y1="16" x2="36" y2="9" />
        <line x1="31" y1="17" x2="27" y2="11" />
        <line x1="41" y1="17" x2="45" y2="11" />
        <line x1="28" y1="19" x2="22" y2="15" />
        <line x1="44" y1="19" x2="50" y2="15" />
      </g>
    </svg>
  );
}

function Illustrator() {
  return (
    <svg className="skill-anim skill-anim--ai" viewBox="0 0 72 72" aria-hidden="true">
      <path className="draw" pathLength="1" d={AI_PATH} />
      <rect className="anchor a1" x="23" y="13" width="6" height="6" />
      <rect className="anchor a2" x="35" y="33" width="6" height="6" />
      <rect className="anchor a3" x="45" y="55" width="6" height="6" />
      <g className="nib" style={{ offsetPath: `path('${AI_PATH}')` }}>
        <polygon points="0,0 10,4 4,10" />
        <line x1="3.5" y1="3.5" x2="6.5" y2="6.5" />
      </g>
    </svg>
  );
}

function InDesign() {
  return (
    <svg className="skill-anim skill-anim--id" viewBox="0 0 72 72" aria-hidden="true">
      <rect className="draw frame" pathLength="1" x="14" y="9" width="44" height="54" rx="3" />
      <line className="draw txt t1" pathLength="1" x1="22" y1="23" x2="50" y2="23" />
      <line className="draw txt t2" pathLength="1" x1="22" y1="31" x2="50" y2="31" />
      <line className="draw txt t3" pathLength="1" x1="22" y1="39" x2="42" y2="39" />
      <line className="draw txt t4" pathLength="1" x1="22" y1="47" x2="50" y2="47" />
      <line className="draw txt t5" pathLength="1" x1="22" y1="55" x2="36" y2="55" />
    </svg>
  );
}

function Premiere() {
  return (
    <svg className="skill-anim skill-anim--pr" viewBox="0 0 72 72" aria-hidden="true">
      <polygon className="draw play" pathLength="1" points="28,19 28,49 52,34" />
      <line className="draw track" pathLength="1" x1="14" y1="59" x2="58" y2="59" />
      <circle className="scrub" cx="14" cy="59" r="3" />
    </svg>
  );
}

function AfterEffects() {
  return (
    <svg className="skill-anim skill-anim--ae" viewBox="0 0 72 72" aria-hidden="true">
      <path className="draw mpath" pathLength="1" d={AE_PATH} />
      <rect className="kf k1" x="9" y="49" width="6" height="6" />
      <rect className="kf k2" x="57" y="49" width="6" height="6" />
      <circle className="travel" cx="0" cy="0" r="3" style={{ offsetPath: `path('${AE_PATH}')` }} />
    </svg>
  );
}

function Figma() {
  return (
    <svg className="skill-anim skill-anim--figma" viewBox="0 0 72 72" aria-hidden="true">
      <circle className="fill-dot d1" cx="30" cy="18" r="7" />
      <circle className="fill-dot d2" cx="42" cy="18" r="7" />
      <circle className="fill-dot d3" cx="30" cy="32" r="7" />
      <circle className="fill-dot d4" cx="42" cy="32" r="7" />
      <circle className="fill-dot d5" cx="30" cy="46" r="7" />
      <path className="draw" pathLength="1" d="M30 25 L30 39 M42 25 L42 39 M30 32 L42 32" />
    </svg>
  );
}

function Code() {
  return (
    <svg className="skill-anim skill-anim--code" viewBox="0 0 72 72" aria-hidden="true">
      <path className="draw" pathLength="1" d="M26 20 L12 36 L26 52" />
      <path className="draw" pathLength="1" d="M46 20 L60 36 L46 52" />
      <line className="draw" pathLength="1" x1="39" y1="18" x2="33" y2="54" />
      <line className="draw code-line c1" pathLength="1" x1="27" y1="60" x2="45" y2="60" />
    </svg>
  );
}

function ReactOrbit() {
  return (
    <svg className="skill-anim skill-anim--react" viewBox="0 0 72 72" aria-hidden="true">
      <ellipse className="draw" pathLength="1" cx="36" cy="36" rx="25" ry="10" />
      <ellipse className="draw" pathLength="1" cx="36" cy="36" rx="25" ry="10" transform="rotate(60 36 36)" />
      <ellipse className="draw" pathLength="1" cx="36" cy="36" rx="25" ry="10" transform="rotate(-60 36 36)" />
      <circle className="fill-dot d2" cx="36" cy="36" r="4" />
    </svg>
  );
}

function Workflow() {
  return (
    <svg className="skill-anim skill-anim--workflow" viewBox="0 0 72 72" aria-hidden="true">
      <rect className="draw" pathLength="1" x="10" y="14" width="18" height="14" rx="4" />
      <rect className="draw" pathLength="1" x="44" y="29" width="18" height="14" rx="4" />
      <rect className="draw" pathLength="1" x="10" y="44" width="18" height="14" rx="4" />
      <path className="draw" pathLength="1" d="M28 21 C40 21 36 36 44 36 M28 51 C40 51 36 36 44 36" />
      <circle className="fill-dot d3" cx="53" cy="36" r="3" />
    </svg>
  );
}

function GitFlow() {
  return (
    <svg className="skill-anim skill-anim--git" viewBox="0 0 72 72" aria-hidden="true">
      <path className="draw" pathLength="1" d="M24 14 L24 58" />
      <path className="draw" pathLength="1" d="M24 28 C42 28 48 36 48 48" />
      <circle className="fill-dot d1" cx="24" cy="14" r="5" />
      <circle className="fill-dot d2" cx="24" cy="58" r="5" />
      <circle className="fill-dot d3" cx="48" cy="48" r="5" />
    </svg>
  );
}

function ApiPlug() {
  return (
    <svg className="skill-anim skill-anim--api" viewBox="0 0 72 72" aria-hidden="true">
      <path className="draw" pathLength="1" d="M16 36 L28 36" />
      <path className="draw" pathLength="1" d="M44 36 L56 36" />
      <path className="draw" pathLength="1" d="M28 24 L28 48 L44 48 L44 24 Z" />
      <line className="draw" pathLength="1" x1="32" y1="18" x2="32" y2="24" />
      <line className="draw" pathLength="1" x1="40" y1="18" x2="40" y2="24" />
      <circle className="fill-dot d2" cx="36" cy="36" r="3" />
    </svg>
  );
}

function Network() {
  return (
    <svg className="skill-anim skill-anim--network" viewBox="0 0 72 72" aria-hidden="true">
      <path className="draw" pathLength="1" d="M36 18 L18 48 M36 18 L54 48 M18 48 L54 48" />
      <circle className="fill-dot d1" cx="36" cy="18" r="5" />
      <circle className="fill-dot d2" cx="18" cy="48" r="5" />
      <circle className="fill-dot d3" cx="54" cy="48" r="5" />
    </svg>
  );
}

const VARIANTS = {
  photoshop: Photoshop,
  illustrator: Illustrator,
  indesign: InDesign,
  premiere: Premiere,
  aftereffects: AfterEffects,
  figma: Figma,
  web: Code,
  javascript: Code,
  typescript: Code,
  node: Code,
  python: Code,
  react: ReactOrbit,
  n8n: Workflow,
  git: GitFlow,
  api: ApiPlug,
  network: Network,
};

export default function SkillAnimation({ variant }) {
  const Component = VARIANTS[variant];
  return Component ? <Component /> : null;
}
