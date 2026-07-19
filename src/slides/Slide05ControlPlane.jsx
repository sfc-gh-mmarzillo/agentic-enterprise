import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from './logos'

const ROWS = [
  { label: 'Action Layer', color: '#d97706', tint: 'rgba(217,119,6,0.06)', items: ['CoWork', 'CoCo', 'Custom Agents'], kind: 'pill' },
  { label: 'Agentic Service / Harness', color: '#0ea5e9', tint: 'rgba(14,165,233,0.06)', items: ['Agent SDK', 'Skills Runtime', 'Tool Router', 'MCP Gateway', 'Eval & Guardrails'], kind: 'pill' },
  { label: 'AI Models', color: '#8b5cf6', tint: 'rgba(139,92,246,0.05)', items: ['Anthropic', 'OpenAI', 'Meta', 'Mistral', 'Deepseek', 'Grok', 'Gemini'], kind: 'logo' },
  { label: 'Interop & Systems', color: '#2563eb', tint: 'rgba(37,99,235,0.05)', items: ['Slack', 'Atlassian', 'GitHub', 'Glean', 'Linear', 'Salesforce', 'Natoma'], kind: 'logo' },
  { label: 'Data & Context', color: '#0d9488', tint: 'rgba(13,148,136,0.06)', items: ['Skills', 'Horizon Catalog', 'Semantic Views', 'Cortex Sense'], kind: 'pill' },
]

const PHASE_META = [
  { tag: '2014 — The Elastic Data Warehouse', title: 'Snowflake Architecture', sub: 'Storage, compute, and services — decoupled and elastic.' },
  { tag: 'Today — The AI Data Cloud', title: 'One Platform, Every Workload', sub: 'Snowflake powers every data and AI workload.' },
  { tag: 'Next — The Agentic Era', title: 'The AI Control Plane', sub: 'Easy, Connected, Trusted' },
]

const SnowflakeLogo = ({ className = '', style }) => (
  <img src="/logos/snowflake.png" alt="Snowflake logo" className={`invert-safe ${className}`}
    style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain', ...style }} />
)

/* ---------- Phase 0: legacy Snowflake architecture (exact image) ---------- */
function LegacyArchitecture() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img src="/slide05-legacy-architecture.png" alt="Snowflake Architecture"
          className="max-h-[390px] w-auto object-contain block" />
      </div>
    </div>
  )
}

/* ---------- Phase 1: AI Data Cloud (exact image, same framing as legacy) ---------- */
function AIDataCloud() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img src="/slide05-ai-data-cloud.png" alt="Snowflake powers every data and AI workload"
          className="max-h-[390px] w-auto object-contain block" />
      </div>
    </div>
  )
}

/* ---------- Phase 2: AI Control Plane ---------- */
function ControlPlane() {
  return (
    <div className="w-full max-w-[980px] rounded-2xl border border-emerald-200/50 bg-white/40 p-4">
      <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-sf-teal">
        Agentic Control Plane &mdash; Security · Governance · Identity · FinOps
      </p>
      <div className="space-y-2.5">
        {ROWS.map((r) => (
          <div key={r.label} className="flex items-center rounded-xl border border-sf-line px-4 py-3" style={{ background: r.tint }}>
            <span className="w-52 shrink-0 text-[14px] font-semibold" style={{ color: r.color }}>{r.label}</span>
            <div className="flex flex-1 flex-wrap items-center justify-end gap-2">
              {r.items.map((it) => (
                r.kind === 'logo' ? (
                  <div key={it} className="flex flex-col items-center gap-1">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-sf-line bg-white p-1.5"><Logo name={it} /></span>
                    <span className="text-[9px] text-sf-mist">{it}</span>
                  </div>
                ) : (
                  <span key={it} className="rounded-full border border-sf-line bg-white px-3 py-1 text-[12px] text-sf-slate">{it}</span>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 flex items-center justify-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-sf-blue">
        <span className="inline-block h-4 w-4"><SnowflakeLogo /></span> Snowflake
      </p>
    </div>
  )
}

const PHASES = [LegacyArchitecture, AIDataCloud, ControlPlane]

export default function Slide05ControlPlane() {
  const [phase, setPhase] = useState(0)
  const [prevPhase, setPrevPhase] = useState(0)

  const advance = useCallback(() => {
    setPhase(p => {
      const next = Math.min(p + 1, PHASES.length - 1)
      setPrevPhase(p)
      return next
    })
  }, [])

  // Capture phase ensures this runs BEFORE App.jsx's bubble-phase listener,
  // regardless of registration order (re-registration on phase change).
  useEffect(() => {
    const onKey = (e) => {
      if (['ArrowRight', ' ', 'PageDown'].includes(e.key)) {
        if (phase < PHASES.length - 1) {
          e.preventDefault()
          e.stopImmediatePropagation()
          advance()
        }
        // On last phase: fall through so App.jsx advances main slide
      }
    }
    window.addEventListener('keydown', onKey, { capture: true })
    return () => window.removeEventListener('keydown', onKey, { capture: true })
  }, [advance, phase])

  const meta = PHASE_META[phase]
  const Body = PHASES[phase]
  const zoom = phase === 2
  const last = phase === PHASES.length - 1

  return (
    <div onClick={advance}
      className={`flex h-full w-full flex-col items-center justify-center ${last ? '' : 'cursor-pointer'}`}>
      <AnimatePresence mode="wait">
        <motion.p key={`tag-${phase}`} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.4 }} className="text-[12px] font-semibold uppercase tracking-[0.24em] text-sf-blue">
          {meta.tag}
        </motion.p>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.h2 key={`ttl-${phase}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }} className="mt-1 text-[38px] font-extrabold tracking-tight text-sf-navy">
          {meta.title}
        </motion.h2>
      </AnimatePresence>
      <p className="mt-1 text-[14px] text-sf-mist">{meta.sub}</p>

      <div className="relative mt-5 flex min-h-[420px] w-full items-center justify-center">
        <AnimatePresence mode="wait">
          {/* prevPhase===1 → we're leaving AI Data Cloud → zoom into the AI box */}
          <motion.div key={phase}
            initial={zoom ? { opacity: 0, scale: 0.55 } : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={prevPhase === 1
              ? { opacity: 0, scale: 11, transition: { duration: 0.65, ease: [0.4, 0, 1, 1] } }
              : { opacity: 0, scale: 1.06, transition: { duration: 0.4 } }
            }
            style={prevPhase === 1 ? { transformOrigin: '63% 70%' } : undefined}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex w-full items-center justify-center">
            <Body />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* phase progress dots + click hint */}
      <div className="mt-4 flex items-center gap-3">
        <div className="flex items-center gap-2">
          {PHASE_META.map((_, i) => (
            <span key={i} className="h-1.5 rounded-full transition-all duration-300"
              style={{ width: i === phase ? 22 : 6, background: i === phase ? '#29b5e8' : '#cbd5e1' }} />
          ))}
        </div>
        {!last && (
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-sf-blue">Click to advance &rsaquo;</span>
        )}
      </div>
    </div>
  )
}
