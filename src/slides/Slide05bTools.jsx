import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SnowflakeLogo = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" className="w-full h-full">
    <path d="M16 4l-2 2 2 2 2-2-2-2zm0 18l2 2-2 2-2-2 2-2zM8 12l-2 2 2 2 2-2-2-2zm16 0l-2 2 2 2 2-2-2-2zM12 8l-1-1-1 1 1 1 1-1zm12 0l-1 1 1 1 1-1-1-1zM12 24l-1-1-1 1 1 1 1-1zm12 0l-1-1-1 1 1 1 1-1z"/>
  </svg>
)

// State 1: Tool Ecosystem
function ToolEcosystem() {
  return (
    <div className="w-full max-w-[1100px] mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center text-[40px] font-extrabold text-sf-navy"
      >
        Agent Tool Ecosystem
      </motion.h2>

      <div className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-100/40 via-transparent to-transparent blur-3xl" />
        
        <div className="relative grid grid-cols-[300px_1fr_300px] gap-14 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <h3 className="mb-3 text-[12px] font-bold uppercase tracking-[0.2em] text-blue-600">
              Clients & Models
            </h3>
            {['CoCo & CoWork', 'Claude · ChatGPT · Gemini', 'Copilot · Cursor · IDEs', 'Custom & autonomous agents'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 px-4 py-3 shadow-sm hover:shadow-md transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-[13px] font-medium text-slate-700">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Tools Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex items-center justify-center py-16"
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 blur-2xl"
              />
              <div className="relative rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 px-20 py-12 shadow-2xl">
                <p className="text-center text-[48px] font-black text-white tracking-tight">Tools</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <h3 className="mb-3 text-[12px] font-bold uppercase tracking-[0.2em] text-blue-600">
              Tools & Data
            </h3>
            {['Snowflake data & apps', 'SaaS applications', 'Cloud & on-prem systems', 'Custom & internal tools'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 px-4 py-3 shadow-sm hover:shadow-md transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-[13px] font-medium text-slate-700">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Arrows */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <defs>
              <marker id="arrowhead-animated" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="url(#gradient-arrow)" />
              </marker>
              <linearGradient id="gradient-arrow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            
            {/* Left converging arrows */}
            {[50, 95, 140, 185].map((y, i) => (
              <motion.line
                key={`left-${i}`}
                x1="300" y1={y} x2="450" y2="165"
                stroke="url(#gradient-arrow)"
                strokeWidth="2.5"
                strokeDasharray="6,4"
                markerEnd="url(#arrowhead-animated)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              />
            ))}
            
            {/* Right diverging arrows */}
            {[50, 95, 140, 185].map((y, i) => (
              <motion.line
                key={`right-${i}`}
                x1="650" y1="165" x2="800" y2={y}
                stroke="url(#gradient-arrow)"
                strokeWidth="2.5"
                strokeDasharray="6,4"
                markerEnd="url(#arrowhead-animated)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Bottom text with fade-in */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-14 space-y-4 text-center"
      >
        <p className="text-[13px] font-medium text-slate-500 tracking-wide">
          policy · identity · audit on every tool call
        </p>
        <p className="text-[15px] text-slate-600">
          <span className="font-bold text-blue-600">Frictionless</span> with Snowflake clients · <span className="font-bold text-blue-600">Neutral</span> across everything else
        </p>
      </motion.div>
    </div>
  )
}

// State 2: Cortex AI Gateway
function CortexGateway() {
  const pillars = [
    {
      title: 'Model\nOptimization',
      color: 'from-purple-500 to-violet-500',
      items: ['Intelligent Routing', 'Latency', 'Accuracy']
    },
    {
      title: 'Cost\nGovernance',
      color: 'from-emerald-500 to-teal-500',
      items: ['Cost Tracking', 'Budget Management', 'Telemetry']
    },
    {
      title: 'Security',
      color: 'from-blue-500 to-cyan-500',
      items: ['Access Control', 'Policy Guardrails', 'Data Protection']
    },
    {
      title: 'Observability',
      color: 'from-orange-500 to-amber-500',
      items: ['Real-time Monitoring', 'Performance Metrics', 'Anomaly Detection']
    }
  ]

  return (
    <div className="relative w-full max-w-[1150px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-[52px] font-black text-sf-navy mb-2 bg-gradient-to-br from-sf-navy to-blue-600 bg-clip-text text-transparent">
          Cortex AI Gateway
        </h1>
        <p className="text-[20px] font-semibold text-blue-600">
          Control and Govern Agents, Models and MCPs.
        </p>
      </motion.div>

      {/* Snowflake logo badge - top left */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-blue-100"
      >
        <img src="/logos/snowflake.png" alt="Snowflake" className="w-10 h-10 invert-safe" />
      </motion.div>

      <div className="grid grid-cols-4 gap-6">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className="flex flex-col"
          >
            {/* Header - fixed height */}
            <div className={`h-[100px] rounded-2xl bg-gradient-to-br ${pillar.color} p-4 shadow-lg flex items-center justify-center mb-3`}>
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-white whitespace-pre-line leading-tight text-center">
                {pillar.title}
              </h3>
            </div>

            {/* Items - equal height boxes */}
            <div className="flex flex-col gap-2.5 flex-1">
              {pillar.items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 + i * 0.05 }}
                  className="group relative overflow-hidden rounded-xl bg-white border-2 border-slate-200 px-3.5 py-3.5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex items-center justify-center min-h-[48px]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <p className="relative text-[13px] font-semibold text-slate-700 text-center leading-tight">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom branding */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 flex items-center justify-center gap-3 text-slate-400"
      >
        <img src="/logos/snowflake.png" alt="Snowflake" className="w-7 h-7 invert-safe" />
        <span className="text-[13px] font-bold text-blue-500">snowflake</span>
        <span className="text-[11px]">© 2026 Snowflake Inc. All Rights Reserved.</span>
      </motion.div>
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
      }
    }
    window.addEventListener('keydown', onKey, { capture: true })
    return () => window.removeEventListener('keydown', onKey, { capture: true })
  }, [step, advance])

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-12">
      <AnimatePresence mode="wait">
        {step === 0 ? (
          <motion.div
            key="ecosystem"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <ToolEcosystem />
          </motion.div>
        ) : (
          <motion.div
            key="gateway"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <CortexGateway />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
