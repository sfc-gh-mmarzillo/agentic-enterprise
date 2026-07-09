const CARDS = [
  {
    title: 'Agent Cost Attribution', color: 'text-sf-blue',
    desc: 'Per-agent, per-team cost visibility. Know exactly which agents are driving spend — down to the query.',
    bars: [['Revenue Risk Agent', '$1,240', '#29b5e8', 62], ['Data Pipeline Monitor', '$890', '#8b5cf6', 45], ['Customer Onboarding', '$650', '#0d9488', 32]],
  },
  {
    title: 'AI Budgets', color: 'text-sf-amber',
    desc: 'User-level limits and controls. Set spending guardrails before problems occur, not after.',
    bars: [['Engineering', '70% of $5,000', '#29b5e8', 70], ['Finance', '45% of $2,000', '#38bdf8', 45], ['Marketing', '91% of $1,500', '#d97706', 91]],
  },
]

const LOGS = [
  ['07:14', 'agent:revenue-risk', 'allowed'],
  ['07:15', 'tool:salesforce.write', 'allowed'],
  ['07:16', 'tool:export.bulk', 'blocked'],
  ['07:17', 'agent:audit-log', 'allowed'],
]

export default function Slide12FinOps() {
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-sf-blue">Accountability</p>
      <h2 className="mt-1 text-[42px] font-extrabold leading-[1.05] tracking-tight text-sf-navy">
        FinOps for the
        <br /><span className="gradient-text">agentic era.</span>
      </h2>

      <div className="mt-6 grid grid-cols-3 gap-4">
        {CARDS.map((c) => (
          <div key={c.title} className="rounded-2xl border border-sf-line bg-white/80 p-4">
            <p className={`text-[14px] font-semibold ${c.color}`}>{c.title}</p>
            <p className="mt-1 text-[11.5px] leading-snug text-sf-slate">{c.desc}</p>
            <div className="mt-4 space-y-2.5">
              {c.bars.map(([label, val, color, pct]) => (
                <div key={label}>
                  <div className="flex justify-between text-[11px]"><span className="text-sf-ink">{label}</span><span className="text-sf-mist">{val}</span></div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-2xl border border-sf-line bg-white/80 p-4">
          <p className="text-[14px] font-semibold text-sf-teal">Observability & Guardrails</p>
          <p className="mt-1 text-[11.5px] leading-snug text-sf-slate">Audit logging for every agent action. Full traceability from prompt to outcome.</p>
          <div className="mt-4 space-y-2 font-mono text-[11px]">
            {LOGS.map(([t, a, s]) => (
              <div key={t} className="flex items-center justify-between">
                <span className="text-sf-mist">{t}</span>
                <span className="flex-1 pl-3 text-sf-slate">{a}</span>
                <span className={`rounded px-1.5 py-0.5 text-[10px] ${s === 'blocked' ? 'bg-rose-50 text-sf-red' : 'bg-emerald-50 text-sf-teal'}`}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-8 rounded-2xl border border-sf-line bg-white/60 px-6 py-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-sf-mist">Customer Proof Point</p>
          <p className="text-[15px] font-bold text-sf-navy">TS Imagine</p>
        </div>
        <div className="text-center"><p className="text-[26px] font-extrabold text-sf-teal">30%</p><p className="text-[10px] text-sf-mist">cost reduction</p></div>
        <div className="text-center"><p className="text-[26px] font-extrabold gradient-blue">4,000+</p><p className="text-[10px] text-sf-mist">hours saved</p></div>
        <p className="flex-1 text-[12.5px] italic text-sf-slate">&ldquo;Available 24/7. Analysts focus on higher-value analysis.&rdquo;</p>
      </div>
    </div>
  )
}
