import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from './logos'

const ROWS = [
  { label: 'Action Layer', color: '#d97706', tint: 'rgba(217,119,6,0.06)', items: ['CoWork', 'CoCo'], kind: 'pill' },
  { label: 'Agentic Service / Harness', color: '#0ea5e9', tint: 'rgba(14,165,233,0.06)', items: [], kind: 'pill' },
  { label: 'Data & Context', color: '#0d9488', tint: 'rgba(13,148,136,0.06)', items: ['Skills', 'Horizon Catalog', 'Semantic Views', 'Cortex Sense'], kind: 'pill' },
  { label: 'AI Models', color: '#8b5cf6', tint: 'rgba(139,92,246,0.05)', items: ['Anthropic', 'OpenAI', 'Meta', 'Mistral'], kind: 'logo' },
  { label: 'Interop & Systems', color: '#2563eb', tint: 'rgba(37,99,235,0.05)', items: ['Slack', 'GitHub', 'Glean', 'Salesforce'], kind: 'logo' },
]

const SnowflakeLogo = ({ className = '', style }) => (
  <img src="/logos/snowflake.png" alt="Snowflake logo" className={`invert-safe ${className}`}
    style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain', ...style }} />
)

// State 1: Simple Tool Ecosystem
function SimpleEcosystem() {
  return (
    <div className="w-full max-w-[1100px]">
      <div className="relative grid grid-cols-[320px_1fr_320px] gap-16 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <h3 className="mb-2 text-[14px] font-bold uppercase tracking-[0.12em] text-blue-500">
            Clients & Models
          </h3>
          <div className="rounded-xl bg-blue-50/50 border border-blue-200/30 px-4 py-3 text-[13px] font-medium text-slate-700">
            CoCo & CoWork
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200/30 px-4 py-3 text-[13px] font-medium text-slate-600">
            Claude · ChatGPT · Gemini
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200/30 px-4 py-3 text-[13px] font-medium text-slate-600">
            Copilot · Cursor · IDEs
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200/30 px-4 py-3 text-[13px] font-medium text-slate-600">
            Custom & autonomous agents
          </div>
        </div>

        {/* Center: Tools Box */}
        <div className="flex items-center justify-center py-20">
          <div className="rounded-2xl bg-blue-500 px-32 py-16 shadow-xl">
            <p className="text-center text-[40px] font-bold text-white whitespace-nowrap">Tools</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <h3 className="mb-2 text-[14px] font-bold uppercase tracking-[0.12em] text-blue-500">
            Tools & Data
          </h3>
          <div className="rounded-xl bg-blue-50/50 border border-blue-200/30 px-4 py-3 text-[13px] font-medium text-slate-700">
            Snowflake data & apps
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200/30 px-4 py-3 text-[13px] font-medium text-slate-600">
            SaaS applications
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200/30 px-4 py-3 text-[13px] font-medium text-slate-600">
            Cloud & on-prem systems
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200/30 px-4 py-3 text-[13px] font-medium text-slate-600">
            Custom & internal tools
          </div>
        </div>

        {/* SVG Arrows - Dashed converging */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
          <defs>
            <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
            </marker>
          </defs>
          
          {/* Left arrows converging */}
          <line x1="320" y1="68" x2="465" y2="180" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
          <line x1="320" y1="119" x2="465" y2="180" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
          <line x1="320" y1="170" x2="465" y2="180" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
          <line x1="320" y1="221" x2="465" y2="180" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
          
          {/* Right arrows diverging */}
          <line x1="547" y1="180" x2="692" y2="68" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
          <line x1="547" y1="180" x2="692" y2="119" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
          <line x1="547" y1="180" x2="692" y2="170" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
          <line x1="547" y1="180" x2="692" y2="221" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
        </svg>
      </div>

      {/* Bottom text */}
      <div className="mt-10 space-y-4 text-center">
        <p className="text-[13px] text-slate-500 font-medium">
          policy · identity · audit on every tool call
        </p>
        <p className="text-[15px] text-slate-600">
          <span className="font-semibold text-blue-600">Frictionless</span> with Snowflake clients · <span className="font-semibold text-blue-600">Neutral</span> across everything else
        </p>
      </div>
    </div>
  )
}

// State 2: Full AI Gateway Architecture
function AIGateway() {
  return (
    <div className="w-full max-w-[980px] rounded-2xl border border-emerald-200/50 bg-white/40 p-4">
      <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-sf-teal">
        Cortex AI Gateway &mdash; Control and Govern Agents, Models and MCPs
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

export default function Slide05bTools() {
  const [step, setStep] = useState(0)

  const advance = useCallback(() => {
    setStep(s => Math.min(s + 1, 1))
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (['ArrowRight', ' ', 'PageDown'].includes(e.key)) {
        if (step < 1) {
          e.preventDefault()
          e.stopImmediatePropagation()
          advance()
        }
        // On last step: fall through so App.jsx advances main slide
      }
    }
    window.addEventListener('keydown', onKey, { capture: true })
    return () => window.removeEventListener('keydown', onKey, { capture: true })
  }, [step, advance])

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <h2 className="mb-8 text-[42px] font-extrabold tracking-tight text-sf-navy">
        {step === 0 ? 'Agent Tool Ecosystem' : 'Cortex AI Gateway'}
      </h2>
      
      <AnimatePresence mode="wait">
        {step === 0 ? (
          <motion.div
            key="simple"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <SimpleEcosystem />
          </motion.div>
        ) : (
          <motion.div
            key="gateway"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <AIGateway />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
