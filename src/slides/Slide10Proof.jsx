const DECAY = ['Schema Discovery', 'JSON Serialize', 'LLM Context', 'SQL Generate', 'MCP Execute', 'Deserialize', 'Re-interpret', 'Result']

const ACC = [
  ['General agent + MCP', '24.1%', 'text-sf-mist', 'bg-slate-200', '38%'],
  ['CoCo — no context', '47.1%', 'text-sf-blue', 'bg-sf-blue', '55%'],
  ['CoCo + Cortex Sense', '86.3%', 'text-sf-navy', 'bg-gradient-to-r from-sf-blue to-sf-purple', '100%'],
]

const EFFICIENCY = [
  ['4×', 'fewer tokens', '476M vs 1,990M', 'text-sf-amber'],
  ['28%', 'faster pipelines', '102 dbt-bench tasks', 'text-sf-green'],
  ['66%', 'lower cost / prompt', '$0.59 vs $1.76', 'text-sf-blue'],
]

const CUSTOMERS = [
  ['Public Healthcare System', '3–10× productivity', 'Legacy migration 10× faster than manual · reporting cycles cut from months to minutes · analytics backlog eliminated for clinical data teams.'],
  ['Professional Services', '≈ $100K value / 20 days', '500+ engineering hours saved in the first 20 days · < $5 per occasional user / month · cost scales with usage, not headcount.'],
]

const HARD_Q = [
  'Reverse-engineer a semantic view from raw dbt marts and explain the join logic',
  'Reconstruct legacy stored-procedure logic into a governed dbt pipeline',
  'Reconcile revenue variance across ERP, CRM, and the warehouse in one pass',
]

export default function Slide10Proof() {
  return (
    <div className="flex h-full w-full flex-col pt-1">
      <h2 className="text-center text-[38px] font-extrabold tracking-tight text-sf-navy">
        Why Snowflake is <span className="gradient-blue">Differentiated.</span>
      </h2>
      <p className="mt-1 text-center text-[13px] text-sf-mist">
        More accurate, more efficient, and faster for enterprise-grade data work — proof, not promises.
      </p>

      <div className="mt-4 grid flex-1 grid-cols-2 gap-5">
        {/* LEFT — context decay vs native + accuracy proof */}
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border border-sf-line bg-white/80 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-sf-mist">Why the gap? Context.</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {/* decaying general agent */}
              <div className="rounded-xl border border-sf-line bg-slate-50 p-3">
                <p className="text-[11px] font-semibold text-sf-slate">General agent + MCP</p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[22%] rounded-full bg-slate-400" />
                </div>
                <p className="mt-1 text-[8.5px] text-sf-mist">context decays to ~20%</p>
                <div className="mt-2 space-y-1">
                  {DECAY.map((s, i) => (
                    <div key={s} className="flex items-center gap-1.5" style={{ opacity: 1 - i * 0.09 }}>
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sf-blue" style={{ filter: `grayscale(${i * 14}%)` }} />
                      <span className="text-[9px] text-sf-slate">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* native */}
              <div className="rounded-xl border border-sf-blue/30 bg-sf-blue/5 p-3">
                <p className="text-[11px] font-semibold text-sf-blue">CoCo — Snowflake-native</p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-sf-blue to-sf-purple" />
                </div>
                <p className="mt-1 text-[8.5px] text-sf-mist">context stays 100%</p>
                <div className="mt-2 grid place-items-center">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-sf-line bg-white p-2 shadow-md"><img src="/logos/snowflake.png" alt="Snowflake logo" className="invert-safe" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} /></span>
                  <p className="mt-1.5 text-[9.5px] font-semibold text-sf-navy">Live Snowflake Context</p>
                </div>
                <div className="mt-2 space-y-1">
                  {['Catalog', 'RBAC enforced', 'Session state'].map((s) => (
                    <div key={s} className="flex items-center gap-1.5">
                      <span className="text-[9px] text-sf-green">✓</span>
                      <span className="text-[9px] text-sf-slate">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* accuracy stat bars */}
          <div className="rounded-2xl border border-sf-line bg-white/80 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-sf-mist">Accuracy on hard enterprise questions</p>
            <div className="mt-3 space-y-2.5">
              {ACC.map(([label, val, color, bar, w]) => (
                <div key={label}>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-sf-slate">{label}</span>
                    <span className={`font-extrabold ${color}`}>{val}</span>
                  </div>
                  <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className={`h-full rounded-full ${bar} transition-all duration-700`} style={{ width: w }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2.5 text-[9.5px] text-sf-mist">Same model. Different context. 14.4% → 55.8% aggregate lift across three enterprise datasets.</p>
          </div>
        </div>

        {/* RIGHT — efficiency + customers + hard questions */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-3">
            {EFFICIENCY.map(([val, label, sub, color]) => (
              <div key={label} className="rounded-xl border border-sf-line bg-white/80 p-3 text-center">
                <p className={`text-[26px] font-extrabold ${color}`}>{val}</p>
                <p className="text-[10px] font-semibold text-sf-navy">{label}</p>
                <p className="mt-0.5 text-[9px] text-sf-mist">{sub}</p>
              </div>
            ))}
          </div>
          <p className="-mt-1 text-[10px] text-sf-slate">
            Independently validated: <span className="font-semibold text-sf-navy">61.2% vs 59.2%</span> task completion while finishing in <span className="font-semibold text-sf-navy">86.7h vs 120.8h</span> — higher accuracy, a fraction of the tokens.
          </p>

          <div className="space-y-2">
            {CUSTOMERS.map(([industry, headline, desc]) => (
              <div key={industry} className="rounded-xl border border-sf-line bg-white/80 px-4 py-2.5">
                <div className="flex items-baseline justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-sf-mist">{industry}</p>
                  <p className="text-[13px] font-extrabold gradient-blue">{headline}</p>
                </div>
                <p className="mt-1 text-[11px] leading-snug text-sf-slate">{desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-sf-line bg-white/80 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-sf-mist">Complex questions Snowflake excels at</p>
            <ul className="mt-2 space-y-1.5">
              {HARD_Q.map((q) => (
                <li key={q} className="flex items-start gap-2 text-[11.5px] text-sf-slate">
                  <span className="mt-0.5 text-sf-purple">▹</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
