import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SnowflakeLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2L9.5 4.5L12 7L14.5 4.5L12 2ZM12 17L14.5 19.5L12 22L9.5 19.5L12 17ZM4.5 9.5L2 12L4.5 14.5L7 12L4.5 9.5ZM19.5 9.5L17 12L19.5 14.5L22 12L19.5 9.5ZM7.5 7.5L6 6L4.5 7.5L6 9L7.5 7.5ZM16.5 7.5L15 9L16.5 10.5L18 9L16.5 7.5ZM7.5 16.5L6 15L4.5 16.5L6 18L7.5 16.5ZM16.5 16.5L15 15L16.5 13.5L18 15L16.5 16.5Z"/>
  </svg>
)

// State 1: Simple Tool Ecosystem
function SimpleEcosystem() {
  return (
    <div className="w-full max-w-[1150px] mx-auto">
      <div className="relative grid grid-cols-[340px_1fr_340px] gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col gap-3.5">
          <h3 className="mb-1 text-[13px] font-bold uppercase tracking-[0.15em] text-[#0EA5E9]">
            Clients & Models
          </h3>
          <div className="rounded-[20px] bg-[#E0F2FE] border-2 border-[#7DD3FC] px-5 py-3 text-[14px] font-medium text-slate-700">
            CoCo & CoWork
          </div>
          <div className="rounded-[20px] bg-white border-2 border-slate-200 px-5 py-3 text-[14px] font-medium text-slate-600">
            Claude · ChatGPT · Gemini
          </div>
          <div className="rounded-[20px] bg-white border-2 border-slate-200 px-5 py-3 text-[14px] font-medium text-slate-600">
            Copilot · Cursor · IDEs
          </div>
          <div className="rounded-[20px] bg-white border-2 border-slate-200 px-5 py-3 text-[14px] font-medium text-slate-600">
            Custom & autonomous agents
          </div>
        </div>

        {/* Center: Tools Box */}
        <div className="flex items-center justify-center py-16">
          <div className="rounded-[24px] bg-[#0284C7] px-28 py-14 shadow-xl">
            <p className="text-center text-[44px] font-bold text-white whitespace-nowrap">Tools</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3.5">
          <h3 className="mb-1 text-[13px] font-bold uppercase tracking-[0.15em] text-[#0EA5E9]">
            Tools & Data
          </h3>
          <div className="rounded-[20px] bg-[#E0F2FE] border-2 border-[#7DD3FC] px-5 py-3 text-[14px] font-medium text-slate-700">
            Snowflake data & apps
          </div>
          <div className="rounded-[20px] bg-white border-2 border-slate-200 px-5 py-3 text-[14px] font-medium text-slate-600">
            SaaS applications
          </div>
          <div className="rounded-[20px] bg-white border-2 border-slate-200 px-5 py-3 text-[14px] font-medium text-slate-600">
            Cloud & on-prem systems
          </div>
          <div className="rounded-[20px] bg-white border-2 border-slate-200 px-5 py-3 text-[14px] font-medium text-slate-600">
            Custom & internal tools
          </div>
        </div>

        {/* SVG Arrows - Dashed converging with solid arrowheads */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
          <defs>
            <marker id="arrowhead" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
              <path d="M0,0 L0,8 L10,4 z" fill="#059669" />
            </marker>
          </defs>
          
          {/* Left arrows converging to center */}
          <line x1="340" y1="65" x2="490" y2="175" stroke="#059669" strokeWidth="3" strokeDasharray="8,5" markerEnd="url(#arrowhead)" />
          <line x1="340" y1="115" x2="490" y2="175" stroke="#059669" strokeWidth="3" strokeDasharray="8,5" markerEnd="url(#arrowhead)" />
          <line x1="340" y1="165" x2="490" y2="175" stroke="#059669" strokeWidth="3" strokeDasharray="8,5" markerEnd="url(#arrowhead)" />
          <line x1="340" y1="215" x2="490" y2="175" stroke="#059669" strokeWidth="3" strokeDasharray="8,5" markerEnd="url(#arrowhead)" />
          
          {/* Right arrows diverging from center */}
          <line x1="660" y1="175" x2="810" y2="65" stroke="#059669" strokeWidth="3" strokeDasharray="8,5" markerEnd="url(#arrowhead)" />
          <line x1="660" y1="175" x2="810" y2="115" stroke="#059669" strokeWidth="3" strokeDasharray="8,5" markerEnd="url(#arrowhead)" />
          <line x1="660" y1="175" x2="810" y2="165" stroke="#059669" strokeWidth="3" strokeDasharray="8,5" markerEnd="url(#arrowhead)" />
          <line x1="660" y1="175" x2="810" y2="215" stroke="#059669" strokeWidth="3" strokeDasharray="8,5" markerEnd="url(#arrowhead)" />
        </svg>
      </div>

      {/* Bottom text */}
      <div className="mt-12 space-y-5 text-center">
        <p className="text-[14px] text-slate-500 font-medium">
          policy · identity · audit on every tool call
        </p>
        <p className="text-[16px] text-slate-600">
          <span className="font-bold text-[#0EA5E9]">Frictionless</span> with Snowflake clients · <span className="font-bold text-[#0EA5E9]">Neutral</span> across everything else
        </p>
      </div>
    </div>
  )
}

// State 2: Cortex AI Gateway with 4 columns
function AIGateway() {
  const columns = [
    {
      icon: '🧠',
      title: 'MODEL\nOPTIMIZATION',
      items: [
        { icon: '⤢', label: 'Intelligent Routing' },
        { icon: '🕐', label: 'Latency' },
        { icon: '🎯', label: 'Accuracy' },
      ]
    },
    {
      icon: '💵',
      title: 'COST\nGOVERNANCE',
      items: [
        { icon: '📊', label: 'Cost Tracking' },
        { icon: '💰', label: 'Budget Management' },
        { icon: '📈', label: 'Telemetry' },
      ]
    },
    {
      icon: '🔒',
      title: 'SECURITY',
      items: [
        { icon: '👤', label: 'Access Control' },
        { icon: '✓', label: 'Policy Guardrails' },
        { icon: '🔐', label: 'Data Protection' },
      ]
    },
    {
      icon: '👁',
      title: 'OBSERVABILITY',
      items: [
        { icon: '📡', label: 'Real-time Monitoring' },
        { icon: '⚡', label: 'Performance Metrics' },
        { icon: '⚠', label: 'Anomaly Detection' },
      ]
    }
  ]

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
          <div className="w-10 h-10 text-[#0EA5E9]">
            <SnowflakeLogo />
          </div>
        </div>
        <div className="flex-1 bg-white/60 rounded-[28px] border-2 border-blue-200/40 px-8 py-6 backdrop-blur-sm">
          <div className="grid grid-cols-4 gap-6">
            {columns.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-[24px]">{col.icon}</div>
                  <div className="text-[11px] font-bold leading-tight whitespace-pre-line text-slate-800">
                    {col.title}
                  </div>
                </div>
                {col.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-white rounded-xl border border-slate-200 px-3 py-2.5 shadow-sm">
                    <span className="text-[16px]">{item.icon}</span>
                    <span className="text-[13px] font-medium text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mountain decoration at bottom */}
      <div className="relative h-24 -mx-12 mt-8">
        <svg viewBox="0 0 1400 120" className="absolute bottom-0 left-0 w-full" preserveAspectRatio="none">
          <path d="M0,60 L200,80 L400,40 L600,90 L800,30 L1000,70 L1200,50 L1400,80 L1400,120 L0,120 Z" 
            fill="#BAE6FD" opacity="0.3"/>
          <path d="M0,80 L300,60 L500,90 L700,50 L900,85 L1100,45 L1400,75 L1400,120 L0,120 Z" 
            fill="#7DD3FC" opacity="0.4"/>
          <path d="M0,90 L250,70 L450,95 L650,65 L850,88 L1050,58 L1250,82 L1400,70 L1400,120 L0,120 Z" 
            fill="#0EA5E9" opacity="0.5"/>
          <path d="M0,100 L200,85 L400,105 L600,80 L800,98 L1000,75 L1200,95 L1400,85 L1400,120 L0,120 Z" 
            fill="#0284C7" opacity="0.6"/>
        </svg>
      </div>

      {/* Bottom branding */}
      <div className="flex items-center gap-3 mt-4">
        <div className="w-8 h-8 text-[#0EA5E9]">
          <SnowflakeLogo />
        </div>
        <span className="text-[13px] font-medium text-[#0EA5E9]">snowflake</span>
        <span className="text-[11px] text-slate-400 ml-4">© 2026 Snowflake Inc. All Rights Reserved.</span>
      </div>
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
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-12">
      <AnimatePresence mode="wait">
        {step === 0 ? (
          <motion.div
            key="simple"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
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
            className="w-full"
          >
            <div className="text-center mb-8">
              <h1 className="text-[52px] font-bold text-[#0F172A] mb-2">Cortex AI Gateway</h1>
              <p className="text-[24px] font-medium text-[#0EA5E9]">Control and Govern Agents, Models and MCPs.</p>
            </div>
            <AIGateway />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
