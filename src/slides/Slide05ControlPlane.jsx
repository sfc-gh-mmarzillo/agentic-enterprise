import { useState } from 'react'
import { motion } from 'framer-motion'
import { Logo } from './logos'

// Step 0: classic Snowflake arch
// Step 1: AI Data Cloud  (click → zooms into AI box → step 2)
// Step 2: Agentic Control Plane (original 5-layer table)

const ROWS = [
  { label: 'Action Layer', color: '#d97706', tint: 'rgba(217,119,6,0.06)', items: ['CoWork', 'CoCo', 'Custom Agents'], kind: 'pill' },
  { label: 'Agentic Service / Harness', color: '#0ea5e9', tint: 'rgba(14,165,233,0.06)', items: ['Agent SDK', 'Skills Runtime', 'Tool Router', 'MCP Gateway', 'Eval & Guardrails'], kind: 'pill' },
  { label: 'AI Models', color: '#8b5cf6', tint: 'rgba(139,92,246,0.05)', items: ['Anthropic', 'OpenAI', 'Meta', 'Mistral', 'Deepseek', 'Grok', 'Gemini'], kind: 'logo' },
  { label: 'Interop & Systems', color: '#2563eb', tint: 'rgba(37,99,235,0.05)', items: ['Slack', 'Atlassian', 'GitHub', 'Glean', 'Linear', 'Salesforce', 'Natoma'], kind: 'logo' },
  { label: 'Data & Context', color: '#0d9488', tint: 'rgba(13,148,136,0.06)', items: ['Skills', 'Horizon Catalog', 'Semantic Views', 'Cortex Sense'], kind: 'pill' },
]

const STEPS_META = [
  { label: 'The Data Platform',         sublabel: 'Centralized storage · Multi-cluster compute · Cloud services' },
  { label: 'The AI Data Cloud',         sublabel: 'Every data & AI workload on one platform' },
  { label: 'The Agentic Control Plane', sublabel: 'Easy · Connected · Trusted' },
]

export default function Slide05ControlPlane() {
  const [step, setStep] = useState(0)
  const [zooming, setZooming] = useState(false)

  const advance = () => {
    if (zooming) return
    if (step === 1) {
      setZooming(true) // triggers zoom animation; step changes in onAnimationComplete
    } else {
      setStep((s) => (s + 1) % 3)
    }
  }

  const { label, sublabel } = STEPS_META[step]

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center"
      onClick={advance}
      style={{ cursor: zooming ? 'default' : 'pointer' }}
    >
      {/* header */}
      <div className="text-center mb-4 select-none">
        <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-sf-blue">Platform Architecture</p>
        <h2 className="mt-1 text-[36px] font-extrabold tracking-tight text-sf-navy">{label}</h2>
        <p className="mt-1 text-[13px] text-sf-mist">{sublabel}</p>
      </div>

      {/* step 0 — classic arch */}
      {step === 0 && (
        <motion.img
          key="classic"
          src="/slides/snowflake-arch-classic.png"
          alt="Classic Snowflake Architecture"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{ maxWidth: '82%', maxHeight: '460px', objectFit: 'contain', display: 'block' }}
        />
      )}

      {/* step 1 — AI Data Cloud, with zoom-into-AI-box transition */}
      {step === 1 && (
        <motion.img
          key="aicloud"
          src="/slides/ai-data-cloud.png"
          alt="Snowflake AI Data Cloud"
          initial={{ opacity: 0, scale: 1 }}
          animate={zooming
            ? { opacity: 0, scale: 10 }
            : { opacity: 1, scale: 1 }
          }
          transition={zooming
            ? { duration: 0.65, ease: [0.4, 0, 1, 1] }
            : { duration: 0.4 }
          }
          style={{
            maxWidth: '100%',
            maxHeight: '480px',
            objectFit: 'contain',
            display: 'block',
            transformOrigin: '63% 70%', // center of the "AI" box in the image
          }}
          onAnimationComplete={() => {
            if (zooming) {
              setStep(2)
              setZooming(false)
            }
          }}
        />
      )}

      {/* step 2 — Agentic Control Plane table */}
      {step === 2 && (
        <motion.div
          key="controlplane"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="w-full max-w-[960px] rounded-2xl border border-emerald-200/70 bg-white/70 p-4"
        >
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
        </motion.div>
      )}

      {/* step dots + hint */}
      <div className="mt-5 flex flex-col items-center gap-2 select-none">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              onClick={(e) => { e.stopPropagation(); if (!zooming) setStep(i) }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === step ? 'w-6 bg-sf-blue' : 'w-2 bg-sf-line'}`}
            />
          ))}
        </div>
        <p className="text-[10px] text-sf-mist">click to advance</p>
      </div>
    </div>
  )
}
