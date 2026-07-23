export default function Slide12FinOps() {
  return (
    <div className="flex h-full w-full flex-col px-2 py-2 gap-3">

      {/* ── header ── */}
      <div className="shrink-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sf-blue">Accountability</p>
        <h2 className="text-[36px] font-extrabold tracking-tight text-sf-navy leading-tight">
          FinOps for the <span className="gradient-text">Agentic Era</span>
        </h2>
      </div>

      {/* ── two-panel main area ── */}
      <div className="flex-1 flex gap-4 min-h-0">

        {/* LEFT — live demo GIF */}
        <div className="flex-[3] rounded-2xl overflow-hidden border border-sf-line shadow-sm min-h-0">
          <img
            src="/accountoverviewdemo.gif"
            alt="Account Overview Demo"
            className="w-full h-full object-cover object-left-top"
          />
        </div>

        {/* RIGHT — Quota UI recreation + bullets */}
        <div className="flex-[2] flex flex-col gap-3 min-h-0">

          {/* Quota UI mockup */}
          <div className="flex-1 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden min-h-0 flex flex-col">
            {/* title bar */}
            <div className="shrink-0 px-3 py-2 border-b border-gray-100 bg-gray-50">
              <p className="text-[11px] font-bold text-sf-ink">New Quota</p>
            </div>
            <div className="flex flex-1 min-h-0">
              {/* left nav steps */}
              <div className="shrink-0 w-[110px] border-r border-gray-100 p-2.5 flex flex-col gap-2">
                {[
                  { label: 'Quota scope', done: true, active: true },
                  { label: 'Basic information', done: true },
                  { label: 'Alert notifications', done: true },
                  { label: 'Enforcement', done: false },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-1.5">
                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 text-[8px]
                        ${s.active ? 'bg-sf-blue border-sf-blue text-white' :
                          s.done ? 'bg-sf-blue/10 border-sf-blue text-sf-blue' : 'border-gray-300'}`}>
                      {s.done ? '✓' : ''}
                    </div>
                    <span className={`text-[8.5px] leading-tight ${s.active ? 'text-sf-blue font-bold' : s.done ? 'text-sf-ink' : 'text-gray-400'}`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* form content */}
              <div className="flex-1 p-2.5 space-y-2.5 overflow-hidden">
                {/* users section */}
                <div className="rounded-lg border border-gray-200 p-2">
                  <p className="text-[8.5px] font-semibold text-sf-ink mb-1.5">Specify which users to monitor in the account</p>
                  <div className="rounded border border-gray-200 bg-gray-50 px-2 py-1 flex items-center justify-between">
                    <span className="text-[8px] text-sf-ink">All users in the account</span>
                    <span className="text-gray-400 text-[9px]">∨</span>
                  </div>
                  <p className="text-[7px] text-gray-400 mt-1 mb-1">Optionally exclude users carrying specific tags.</p>
                  <div className="flex items-center gap-1">
                    <div className="rounded border border-gray-200 px-1.5 py-0.5 flex items-center gap-0.5">
                      <span className="text-[7px] text-gray-500">◇ DEPT</span>
                      <span className="text-[7px] font-medium text-sf-ink ml-0.5">engineering</span>
                      <span className="text-gray-400 text-[8px] ml-0.5 cursor-pointer">×</span>
                    </div>
                  </div>
                </div>

                {/* resources section */}
                <div className="rounded-lg border border-gray-200 p-2">
                  <p className="text-[8.5px] font-semibold text-sf-ink mb-1.5">Specify which resources to track</p>
                  <div className="rounded border border-gray-200 bg-gray-50 px-2 py-1 flex items-center justify-between mb-1.5">
                    <span className="text-[8px] text-sf-ink">AI-related features</span>
                    <span className="text-gray-400 text-[9px]">∨</span>
                  </div>
                  {['AI functions', 'CoCo', 'Cortex Agents', 'Snowflake CoWork'].map(item => (
                    <div key={item} className="flex items-center justify-between py-0.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded bg-sf-blue flex items-center justify-center">
                          <span className="text-white text-[7px]">✓</span>
                        </div>
                        <span className="text-[8px] text-sf-ink">{item}</span>
                      </div>
                      <span className="text-[7px] text-gray-400">All (auto) ∨</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── bottom capability pills + blog link ── */}
      <div className="shrink-0 flex flex-col gap-1.5">
        <div className="grid grid-cols-4 gap-2">
        {[
          { icon: '🏷️', title: 'Resource-level Budgets', desc: 'Tag-based tracking across teams, projects, and AI features' },
          { icon: '👤', title: 'User-level Quotas', desc: 'Hard limits or soft warnings per user, role, or department tag' },
          { icon: '🔔', title: 'Anomaly Detection', desc: 'Auto-detect unusual AI spend spikes before they become budget overruns' },
          { icon: '💬', title: 'Budget Assistant', desc: 'Ask CoCo any question about AI spend, utilization, or cost attribution' },
        ].map(c => (
          <div key={c.title} className="rounded-xl border border-sf-line bg-white/70 px-3 py-2.5 flex gap-2.5 items-start">
            <span className="text-[18px] shrink-0 leading-none mt-0.5">{c.icon}</span>
            <div>
              <p className="text-[11px] font-bold text-sf-ink leading-tight">{c.title}</p>
              <p className="text-[10px] text-sf-slate mt-0.5 leading-snug">{c.desc}</p>
            </div>
          </div>
        ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="h-px flex-1 bg-sf-line" />
          <a href="https://www.snowflake.com/en/blog/ai-finops-cost-management-governance-snowflake/"
            target="_blank" rel="noopener noreferrer"
            className="text-[9px] text-sf-blue/70 hover:text-sf-blue transition-colors">
            snowflake.com/en/blog/ai-finops-cost-management-governance-snowflake
          </a>
          <span className="h-px flex-1 bg-sf-line" />
        </div>
      </div>
    </div>
  )
}
