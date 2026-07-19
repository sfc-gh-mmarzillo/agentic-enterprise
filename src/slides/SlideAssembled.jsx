import { motion } from 'framer-motion'

// Canvas: 840 × 380
// Slide sets its OWN dark background — independent of app-level white gradient

const NODES = [
  { id: 'models',  x: 345, y: 32,  w: 150, h: 44, label: 'Models',           icon: '⚡' },
  { id: 'runtime', x: 310, y: 116, w: 150, h: 44, label: 'Runtime'                      },
  { id: 'agent',   x: 182, y: 166, w: 148, h: 44, label: 'Agent'                         },
  { id: 'codeint', x: 490, y: 166, w: 162, h: 44, label: 'Code Interpreter'              },
  { id: 'memory',  x: 408, y: 238, w: 120, h: 38, label: 'Memory'                        },
  { id: 'kb',      x: 136, y: 252, w: 130, h: 38, label: 'Knowledge Base'                },
  { id: 's3',      x: 266, y: 268, w: 136, h: 38, label: 'S3 Data Store'                 },
  { id: 'actions', x: 520, y: 252, w: 130, h: 38, label: 'Action Groups'                 },
]

const GRAY_NODES = [
  { id: 'identity', x: 666, y: 126, w: 108, h: 38, label: 'Identity' },
  { id: 'gateway',  x: 666, y: 178, w: 108, h: 38, label: 'Gateway'  },
]

// OSS right edge = 20+140=160. Agent left = 182. Gap = 22px ✓
// CodeInt right = 490+162=652. Identity left = 666. Gap = 14px ✓
const OSS = { x: 20, y: 144, w: 140, h: 72 }

const cx = n => n.x + n.w / 2
const cy = n => n.y + n.h / 2

// Arrows: all connections from the reference screenshot
const ARROWS = [
  // Models ↓ Runtime
  { x1: 420, y1: 76,  x2: 385, y2: 116, iam: true,  lx: 426, ly: 99  },
  // Models ↘ Agent (direct diagonal)
  { x1: 364, y1: 76,  x2: 254, y2: 166, iam: true,  lx: 298, ly: 118 },
  // OSS ➡ Agent (blue, short horizontal)
  { x1: 160, y1: 180, x2: 182, y2: 188, blue: true },
  // OSS ➡ Runtime (blue, diagonal right-up — the long blue arrow in reference)
  { x1: 160, y1: 164, x2: 310, y2: 138, blue: true, lx: 240, ly: 146 },
  // Runtime ↙ Agent (IAM)
  { x1: 330, y1: 152, x2: 258, y2: 166, iam: true,  lx: 282, ly: 152 },
  // Runtime ↘ Code Interpreter (IAM)
  { x1: 460, y1: 138, x2: 490, y2: 166, iam: true,  lx: 488, ly: 146 },
  // Runtime ↘ Memory (IAM)
  { x1: 385, y1: 160, x2: 465, y2: 238, iam: true,  lx: 440, ly: 200 },
  // Agent ↓ Knowledge Base (IAM)
  { x1: 256, y1: 210, x2: 202, y2: 252, iam: true,  lx: 216, ly: 234 },
  // Agent ↘ S3 Data Store (IAM)
  { x1: 300, y1: 210, x2: 332, y2: 268, iam: true,  lx: 330, ly: 240 },
  // Code Interpreter ↓ Action Groups (IAM)
  { x1: 570, y1: 210, x2: 585, y2: 252, iam: true,  lx: 590, ly: 234 },
  // Identity → Code Interpreter (gray, from left edge of Identity to right edge of CodeInt)
  { x1: 666, y1: 145, x2: 652, y2: 188, gray: true },
  // Gateway → Code Interpreter (gray, near horizontal)
  { x1: 666, y1: 197, x2: 652, y2: 210, gray: true },
]

export default function SlideAssembled() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-4 py-3">

      {/* Title — entrance: slides down + fades in */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-2 shrink-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] mb-1 text-sf-blue">
          Cloud-Native Agent Platform
        </p>
        <h2 className="text-[44px] font-extrabold tracking-tight leading-none">
          <span className="text-sf-navy">Assembled,</span>{' '}
          <span style={{ color: '#f59e0b' }}>Not Unified</span>
        </h2>
        <p className="text-[13px] mt-1 text-sf-slate">
          Every capability is a separate service. Every service needs its own policy.
        </p>
      </motion.div>

      {/* SVG diagram — scales up from 90% + fades in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 w-full min-h-0">
        <svg viewBox="0 0 840 380" className="w-full h-full">
          <defs>
            <marker id="ao" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="#f59e0b" />
            </marker>
            <marker id="ab" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="#3b82f6" />
            </marker>
            <marker id="ag" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="#64748b" />
            </marker>
          </defs>

          {/* ── Arrows ── */}
          {ARROWS.map((a, i) => (
            <g key={i}>
              <line x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}
                stroke={a.blue ? '#3b82f6' : a.gray ? '#64748b' : '#f59e0b'}
                strokeWidth="1.7"
                markerEnd={`url(#${a.blue ? 'ab' : a.gray ? 'ag' : 'ao'})`}
              />
              {a.iam && (
                <text x={a.lx} y={a.ly} fill="#64748b" fontSize="10"
                  fontFamily="system-ui, sans-serif" fontWeight="500">IAM</text>
              )}
            </g>
          ))}

          {/* ── OSS Agent Framework (dashed blue) ── */}
          <rect x={OSS.x} y={OSS.y} width={OSS.w} height={OSS.h}
            rx={8} fill="rgba(59,130,246,0.05)" stroke="#3b82f6"
            strokeWidth="1.5" strokeDasharray="5,3" />
          <text x={OSS.x + OSS.w/2} y={OSS.y + 22} textAnchor="middle"
            fill="#1d4ed8" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">
            OSS Agent Framework
          </text>
          <text x={OSS.x + OSS.w/2} y={OSS.y + 38} textAnchor="middle"
            fill="#3b82f6" fontSize="9" fontFamily="system-ui, sans-serif">
            LangGraph / Strands
          </text>

          {/* ── Orange nodes ── */}
          {NODES.map(n => (
            <g key={n.id}>
              <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={10}
                fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="1.8" />
              <text x={cx(n)} y={cy(n) + 5} textAnchor="middle"
                fill="#92400e" fontSize="14" fontFamily="system-ui, sans-serif" fontWeight="600">
                {n.icon ? `${n.icon} ${n.label}` : n.label}
              </text>
            </g>
          ))}

          {/* ── Gray nodes (Identity, Gateway) ── */}
          {GRAY_NODES.map(n => (
            <g key={n.id}>
              <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={8}
                fill="rgba(100,116,139,0.06)" stroke="#64748b" strokeWidth="1.2" />
              <text x={cx(n)} y={cy(n) + 5} textAnchor="middle"
                fill="#334155" fontSize="13" fontFamily="system-ui, sans-serif">
                {n.label}
              </text>
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Bottom badges — fade in last */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 mt-1 shrink-0">
        <div className="flex items-center gap-2 rounded-lg border border-amber-300 bg-amber-50 px-4 py-2">
          <span className="text-amber-500">⚠</span>
          <span className="text-[12px] font-semibold text-amber-800">8 services. 8 IAM policies.</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-sf-line bg-white/60 px-4 py-2">
          <span className="text-sf-slate text-[13px]">▪</span>
          <span className="text-[12px] font-medium text-sf-slate">No unified control plane</span>
        </div>
      </motion.div>
    </div>
  )
}
