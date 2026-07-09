import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const PILLARS = [
  {
    title: 'Agent Security',
    sub: 'Purpose-built controls for agentic AI',
    accent: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M12 8V4M8 4h8" /><circle cx="9" cy="14" r="1" /><circle cx="15" cy="14" r="1" /></svg>
    ),
    items: [
      'Horizon AI Guardrails',
      'Agent Identity & audit',
      'Restricted Session Scopes',
      'Cortex Code CLI Sandbox',
    ],
  },
  {
    title: 'Data Security',
    sub: 'Defense-in-depth for your data estate',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>
    ),
    items: [
      'Sensitive Data Protection',
      'Tri-Secret Secure encryption',
      'Data Exfiltration Protection',
      'Ransomware / WORM backups',
    ],
  },
  {
    title: 'Platform Security',
    sub: 'Built-in trust for your AI foundation',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
    ),
    items: [
      'Horizon Catalog',
      'AI Security Posture Mgmt',
      'Trust Center',
      'Security Skills',
    ],
  },
]

const CUSTOMERS = [
  {
    stat: '20+',
    label: 'Governed agents in production',
    quote: 'We’ve built more than 20 purpose-built agents across revenue ops, legal, finance, and IT — every one connects back to Snowflake, because that’s where our governance and business context live.',
    who: 'VP, Enterprise Digital Platforms · Semiconductors',
  },
  {
    stat: '2,500+',
    label: 'Queries answered monthly',
    quote: 'With Cortex Agents we return answers in under a minute — all inside our governed data boundary, with RBAC enforced on every query.',
    who: 'AI Engineer · Cybersecurity / DevSecOps',
  },
  {
    stat: '0',
    label: 'PHI records leaving the boundary',
    quote: 'Sensitive data never leaves Snowflake’s governance perimeter, and we still achieved 3–10× productivity across clinical data teams.',
    who: 'Data Platform Lead · Public Healthcare',
  },
]

const DEEPDIVE = [
  {
    title: 'Horizon AI Guardrails',
    icon: '🛡',
    color: 'text-sf-teal',
    ring: 'border-emerald-200 bg-emerald-50',
    body: 'Real-time prompt-injection & jailbreak prevention across Cortex Code, Agents & Snowflake Intelligence. On by default — zero config. Author custom zero-day policies in natural language.',
  },
  {
    title: 'AI Security Posture Management',
    icon: '◎',
    color: 'text-sf-blue',
    ring: 'border-sky-200 bg-sky-50',
    body: 'Automated posture checks against CIS benchmarks across 5 pillars, auto-enabled in every account via Trust Center. Just ask CoCo: “Remediate all medium findings from CIS 4.x scanners.”',
  },
]

export default function Slide10Secure() {
  const [ci, setCi] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setCi((i) => (i + 1) % CUSTOMERS.length), 3200)
    return () => clearInterval(t)
  }, [])
  const c = CUSTOMERS[ci]
  return (
    <div className="flex h-full w-full flex-col pt-1">
      <div className="text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-sf-teal">AI Security</p>
        <h2 className="mt-1 text-[38px] font-extrabold tracking-tight text-sf-navy">Secure by default.</h2>
        <p className="mt-1 text-[13px] text-sf-mist">Proactive enterprise-grade security for data and AI — built-in, not bolted on.</p>
      </div>

      {/* three pillars */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        {PILLARS.map((p) => (
          <div key={p.title}
            className={`rounded-2xl border p-4 ${p.accent ? 'border-sf-teal/40 bg-sf-teal/5 shadow-[0_10px_30px_-18px_rgba(16,185,129,0.6)]' : 'border-sf-line bg-white/80'}`}>
            <div className="flex items-center gap-2.5">
              <span className={`grid h-9 w-9 place-items-center rounded-xl ${p.accent ? 'bg-sf-teal/15 text-sf-teal' : 'bg-sf-panel text-sf-slate'}`}>{p.icon}</span>
              <div>
                <p className="text-[14px] font-bold text-sf-navy">{p.title}</p>
                <p className="text-[9.5px] text-sf-mist">{p.sub}</p>
              </div>
            </div>
            <div className="mt-3 space-y-1.5">
              {p.items.map((name) => (
                <div key={name} className="flex items-center gap-2 rounded-lg border border-sf-line bg-white px-2.5 py-1.5">
                  <span className="text-[10px] text-sf-teal">✓</span>
                  <span className="text-[11px] text-sf-ink">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* prominent quote callout */}
      <div className="mt-3 flex items-center gap-3 rounded-xl border border-sf-teal/40 bg-sf-teal/6 px-4 py-3">
        <span className="text-[32px] font-extrabold leading-none text-sf-teal">&ldquo;</span>
        <div>
          <p className="text-[14.5px] font-bold text-sf-navy">
            ⅔ of leaders cite security as the #1 barrier to scaling agentic AI
          </p>
          <p className="mt-0.5 text-[11.5px] text-sf-slate">Gartner: &gt;50% of agent attacks through 2029 will exploit access control &mdash; Snowflake closes both.</p>
        </div>
      </div>

      {/* deep dive + customer proof */}
      <div className="mt-2 grid flex-1 grid-cols-[1fr_1fr_0.9fr] gap-4">
        {DEEPDIVE.map((d) => (
          <div key={d.title} className={`rounded-2xl border p-4 ${d.ring}`}>
            <div className="flex items-center gap-2">
              <span className={`text-[18px] ${d.color}`}>{d.icon}</span>
              <p className={`text-[13.5px] font-bold ${d.color}`}>{d.title}</p>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-sf-slate">{d.body}</p>
          </div>
        ))}

        {/* customer proof (rotating) */}
        <div className="relative overflow-hidden rounded-2xl border border-sf-line bg-white/80 p-4">
          <AnimatePresence mode="wait">
            <motion.div key={ci}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}>
              <p className="text-[30px] font-extrabold text-sf-teal">{c.stat}</p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-sf-mist">{c.label}</p>
              <p className="mt-2 text-[10.5px] leading-snug text-sf-slate">&ldquo;{c.quote}&rdquo;</p>
              <p className="mt-2 text-[9.5px] text-sf-mist">{c.who}</p>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-3 right-4 flex gap-1">
            {CUSTOMERS.map((_, i) => (
              <span key={i} className="h-1.5 rounded-full transition-all duration-300" style={{ width: i === ci ? 14 : 5, background: i === ci ? '#10b981' : '#cbd5e1' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
