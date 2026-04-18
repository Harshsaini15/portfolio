import type { ReactNode } from 'react'

export type TechBackdropVariant =
  | 'stack-overview'
  | 'python'
  | 'machine-learning'
  | 'data-structures'
  | 'data-engineering'
  | 'full-stack'

type Layer = {
  labels: string[]
  ornament?: ReactNode
}

const LAYERS: Record<TechBackdropVariant, Layer> = {
  'stack-overview': {
    labels: [
      'Python',
      'ML',
      'Data Science',
      'pandas',
      'TensorFlow',
      'Big-O',
      'SQL',
    ],
    ornament: <OrnamentNodes />,
  },
  python: {
    labels: [
      'Python 3',
      'pandas',
      'NumPy',
      'pip install',
      'asyncio',
      'Jupyter',
      'matplotlib',
    ],
    ornament: <OrnamentPython />,
  },
  'machine-learning': {
    labels: [
      'TensorFlow',
      'Keras',
      'scikit-learn',
      'epochs',
      'features',
      'loss ↓',
      'train / val',
    ],
    ornament: <OrnamentML />,
  },
  'data-structures': {
    labels: [
      'Binary Tree',
      'Graph',
      'HashMap',
      'Heap',
      'O(n log n)',
      'DFS · BFS',
      'Dynamic Prog.',
    ],
    ornament: <OrnamentTree />,
  },
  'data-engineering': {
    labels: [
      'SQL',
      'ETL',
      'Schema',
      'CSV → clean',
      'JOIN',
      'normalization',
      'DataFrame',
    ],
    ornament: <OrnamentDB />,
  },
  'full-stack': {
    labels: [
      'React',
      'REST',
      'JSON',
      'Java',
      'MySQL',
      'Sockets',
      'HTTP',
    ],
    ornament: <OrnamentStack />,
  },
}

/** Faint tech-themed background: keywords, grid, and a small SVG motif per section. */
export function TechSectionBackdrop({
  variant,
  className = '',
}: {
  variant: TechBackdropVariant
  className?: string
}) {
  const { labels, ornament } = LAYERS[variant]

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      {/* Radial vignette + grid */}
      <div
        className="absolute inset-0 opacity-[0.45] dark:opacity-[0.55]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(196, 92, 62, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196, 92, 62, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px',
          maskImage:
            'radial-gradient(ellipse 85% 70% at 50% 45%, black 15%, transparent 72%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 85% 70% at 50% 45%, black 15%, transparent 72%)',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_40%,transparent_0%,var(--app-bg)_75%)]" />

      {/* Floating keywords */}
      <div className="absolute inset-0">
        {labels.map((text, i) => {
          const left = ((i * 37 + 13) % 88) + 2
          const top = ((i * 41 + 19) % 82) + 4
          const rotate = -18 + (i % 6) * 6
          const size = 2.75 + (i % 4) * 0.65
          return (
            <span
              key={`${variant}-${text}-${i}`}
              className="absolute select-none font-mono font-semibold text-app-fg"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                fontSize: `clamp(${size}rem, ${size + 2}vw, ${size + 3.5}rem)`,
                opacity: 0.045,
              }}
            >
              {text}
            </span>
          )
        })}
      </div>

      {/* Corner ornament */}
      {ornament ? (
        <div className="absolute -right-4 bottom-0 w-[min(55%,420px)] opacity-[0.07] dark:opacity-[0.11]">
          {ornament}
        </div>
      ) : null}
    </div>
  )
}

function OrnamentML() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-full" aria-hidden>
      <circle cx="40" cy="60" r="8" fill="currentColor" className="text-terracotta" />
      <circle cx="100" cy="30" r="8" fill="currentColor" className="text-terracotta" />
      <circle cx="100" cy="90" r="8" fill="currentColor" className="text-terracotta" />
      <circle cx="160" cy="60" r="8" fill="currentColor" className="text-terracotta" />
      <path
        d="M48 58 L92 34 M48 62 L92 86 M108 34 L152 58 M108 86 L152 62 M100 38 L100 82"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-app-fg"
        opacity="0.5"
      />
    </svg>
  )
}

function OrnamentPython() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-full" aria-hidden>
      <path
        d="M60 20 Q30 20 30 50 L30 70 Q30 95 55 95 L75 95 Q95 95 95 75 L95 55 Q95 35 75 35 L55 35 Q45 35 45 45"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-terracotta"
      />
      <path
        d="M140 100 Q170 100 170 70 L170 50 Q170 25 145 25 L125 25 Q105 25 105 45 L105 65 Q105 85 125 85 L145 85 Q155 85 155 75"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-terracotta"
        opacity="0.65"
      />
      <circle cx="52" cy="48" r="3" fill="currentColor" className="text-app-fg" />
      <circle cx="148" cy="72" r="3" fill="currentColor" className="text-app-fg" />
    </svg>
  )
}

function OrnamentTree() {
  return (
    <svg viewBox="0 0 200 140" fill="none" className="w-full" aria-hidden>
      <circle cx="100" cy="28" r="10" fill="currentColor" className="text-terracotta" />
      <circle cx="60" cy="78" r="9" fill="currentColor" className="text-terracotta" />
      <circle cx="140" cy="78" r="9" fill="currentColor" className="text-terracotta" />
      <circle cx="100" cy="118" r="9" fill="currentColor" className="text-terracotta" />
      <path
        d="M100 38 L60 69 M100 38 L140 69 M60 87 L100 109 M140 87 L100 109"
        stroke="currentColor"
        strokeWidth="2"
        className="text-app-fg"
        opacity="0.45"
      />
    </svg>
  )
}

function OrnamentDB() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-full" aria-hidden>
      <ellipse cx="100" cy="28" rx="52" ry="14" stroke="currentColor" strokeWidth="2" className="text-terracotta" />
      <path
        d="M48 28 V72 Q100 88 152 72 V28"
        stroke="currentColor"
        strokeWidth="2"
        className="text-terracotta"
        opacity="0.8"
      />
      <ellipse cx="100" cy="72" rx="52" ry="14" stroke="currentColor" strokeWidth="2" className="text-terracotta" />
      <path d="M48 72 V92 Q100 108 152 92 V72" stroke="currentColor" strokeWidth="2" className="text-terracotta" opacity="0.6" />
      <ellipse cx="100" cy="92" rx="52" ry="14" stroke="currentColor" strokeWidth="2" className="text-terracotta" opacity="0.45" />
    </svg>
  )
}

function OrnamentStack() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-full" aria-hidden>
      <rect x="36" y="24" width="128" height="72" rx="8" stroke="currentColor" strokeWidth="2" className="text-terracotta" />
      <path d="M52 44 H148 M52 60 H120 M52 76 H136" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-app-fg" opacity="0.4" />
      <circle cx="160" cy="36" r="6" fill="currentColor" className="text-terracotta" opacity="0.5" />
      <path d="M168 36 L188 36 M178 28 L188 36 L178 44" stroke="currentColor" strokeWidth="1.5" className="text-app-fg" opacity="0.35" />
    </svg>
  )
}

function OrnamentNodes() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-full" aria-hidden>
      <circle cx="50" cy="40" r="6" fill="currentColor" className="text-terracotta" />
      <circle cx="100" cy="24" r="6" fill="currentColor" className="text-terracotta" />
      <circle cx="150" cy="40" r="6" fill="currentColor" className="text-terracotta" />
      <circle cx="75" cy="88" r="6" fill="currentColor" className="text-terracotta" />
      <circle cx="125" cy="88" r="6" fill="currentColor" className="text-terracotta" />
      <path
        d="M56 40 L94 28 M106 28 L144 40 M65 46 L78 82 M122 82 L135 46 M81 88 H119"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-app-fg"
        opacity="0.4"
      />
    </svg>
  )
}
