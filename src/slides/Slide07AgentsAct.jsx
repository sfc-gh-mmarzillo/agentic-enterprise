import { useEffect, useState } from 'react'

const CYCLE = ['report', 'work', 'analyze', 'automate', 'act', 'research']

const STEPS = [
  ['1', 'Data gathered', 'Cortex pulls from Snowflake, ERP, and Salesforce automatically', 'text-sf-blue'],
  ['2', 'Agent analysis', 'Variance flagged: EMEA revenue -$1.2M vs forecast', 'text-sf-amber'],
  ['3', 'Draft prepared', 'Board summary + slides generated, ready to review', 'text-sf-purple'],
  ['4', 'One-tap approval', 'CFO approves · distribution triggered · audit logged', 'text-sf-green'],
]
const FEATURES = [
  ['One AI workspace.', 'Every context. Any outcome.'],
  ['More than chat:', 'agents automate across Email, Slack, Salesforce, and more.'],
  ['Personal to you:', 'agent memory follows you wherever you work, including mobile.'],
  ['Enterprise-grade:', 'governed actions, audit trail, and human-in-the-loop approval.'],
]
const PILLS = ['Shared Skills Catalog', 'Agent SDK', 'Governance', 'MCP Connectors']

export default function Slide07AgentsAct() {
  const [wi, setWi] = useState(4)
  const [tab, setTab] = useState('action')
  useEffect(() => {
    const t = setInterval(() => setWi((i) => (i + 1) % CYCLE.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="flex h-full w-full flex-col items-center pt-2">
      <h2 className="text-[40px] font-extrabold tracking-tight text-sf-navy">
        Agents that <span className="gradient-blue">{CYCLE[wi]}.</span>
      </h2>
      <p className="mt-1 text-[14px] text-sf-mist">Snowflake CoWork &mdash; your personal AI work agent</p>

      <div className="mt-5 grid w-full flex-1 grid-cols-2 gap-5">
        {/* left */}
        <div className="rounded-2xl border border-sf-line bg-white/70 p-5">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-sf-blue/10 text-sf-blue">❄</span>
            <div>
              <p className="text-[15px] font-bold text-sf-blue">CoWork</p>
              <p className="text-[11px] text-sf-mist">Personal work agent</p>
            </div>
          </div>

          {/* phone with moving screen */}
          <div className="relative mx-auto mt-4 h-[250px] w-[128px] rounded-[26px] border-[6px] border-sf-navy bg-sf-navy shadow-xl">
            {/* side buttons */}
            <div className="absolute -left-[6px] top-[52px] h-9 w-[3px] rounded-l bg-sf-navy" />
            <div className="absolute -left-[6px] top-[72px] h-9 w-[3px] rounded-l bg-sf-navy" />
            <div className="absolute -right-[6px] top-[62px] h-12 w-[3px] rounded-r bg-sf-navy" />
            {/* screen */}
            <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-white">
              {/* dynamic island / notch */}
              <div className="absolute left-1/2 top-[7px] z-10 h-[14px] w-[42px] -translate-x-1/2 rounded-full bg-sf-navy" />
              <div className="h-[26px]" />
              <div className="h-[204px] overflow-hidden px-2">
                <div className="animate-phone-scroll space-y-1.5 py-2">
                  {Array.from({ length: 2 }).flatMap((_, k) => [
                    <p key={`h${k}`} className="text-[7px] font-bold text-sf-navy">Monthly Close · Forecast</p>,
                    <div key={`b${k}`} className="rounded bg-sf-panel p-1.5 text-[6px] leading-tight text-sf-slate">
                      Region trending 5% ahead of plan. EMEA -$1.2M vs forecast; APAC +$0.8M. Champion coverage improving across mid-market.
                    </div>,
                    <p key={`t${k}`} className="text-[7px] font-semibold text-sf-navy">Top Movers</p>,
                    ...['Acme Corp', 'Globex', 'Initech', 'Umbrella', 'Soylent'].map((r, i) => (
                      <div key={`r${k}${i}`} className="flex justify-between text-[6px] text-sf-slate"><span>{r}</span><span className="text-sf-teal">+{(i + 1) * 3}%</span></div>
                    )),
                    <div key={`c${k}`} className="rounded bg-sf-blue/10 p-1.5 text-[6px] text-sf-blue">External factors reviewed · variance explained</div>,
                  ])}
                </div>
              </div>
              {/* home indicator */}
              <div className="absolute bottom-[6px] left-1/2 h-[3px] w-[42px] -translate-x-1/2 rounded-full bg-sf-navy/40" />
            </div>
          </div>

          <div className="mt-4 border-t border-sf-line pt-3">
            <p className="text-[22px] font-extrabold gradient-blue">2,500+</p>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-sf-mist">Queries answered monthly</p>
            <p className="mt-2 text-[11.5px] italic text-sf-slate">&ldquo;With Cortex Agents, we can return answers in less than a minute. Whereas before, teams would have been working across multiple sources of data.&rdquo;</p>
            <p className="mt-1 text-[10px] text-sf-mist">Oliver Armstrong, AI Engineer at Snyk</p>
          </div>
        </div>

        {/* right */}
        <div className="rounded-2xl border border-sf-line bg-white/70 p-5">
          <div className="flex gap-2">
            <button onClick={() => setTab('action')} className={`rounded-full px-3 py-1 text-[12px] font-medium transition ${tab === 'action' ? 'bg-sf-blue text-white' : 'text-sf-mist hover:text-sf-slate'}`}>Agentic Action</button>
            <button onClick={() => setTab('features')} className={`rounded-full px-3 py-1 text-[12px] font-medium transition ${tab === 'features' ? 'bg-sf-blue text-white' : 'text-sf-mist hover:text-sf-slate'}`}>Features</button>
          </div>
          {tab === 'action' ? (
            <>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-sf-mist">CFO · Monthly Close Review</p>
              <div className="mt-3 space-y-2.5">
                {STEPS.map(([n, title, desc, color]) => (
                  <div key={n} className="rounded-xl border border-sf-line bg-white px-4 py-3">
                    <p className={`text-[13.5px] font-semibold ${color}`}><span className="mr-2 text-sf-mist">{n}</span>{title}</p>
                    <p className="mt-0.5 pl-5 text-[12px] text-sf-slate">{desc}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-sf-mist">Why CoWork</p>
              <div className="mt-3 space-y-2.5">
                {FEATURES.map(([lead, rest]) => (
                  <div key={lead} className="flex gap-3 rounded-xl border border-sf-line bg-white px-4 py-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sf-blue/10 text-[11px] font-bold text-sf-blue">✓</span>
                    <p className="text-[12.5px] leading-snug text-sf-slate"><span className="font-semibold text-sf-ink">{lead}</span> {rest}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        {PILLS.map((p) => (
          <span key={p} className="rounded-full border border-sf-line bg-white/70 px-3 py-1 text-[12px] text-sf-slate">● {p}</span>
        ))}
      </div>
    </div>
  )
}
