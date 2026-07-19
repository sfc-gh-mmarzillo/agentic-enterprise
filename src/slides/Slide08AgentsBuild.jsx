import { useEffect, useState } from 'react'
import CortexCodeLogo from './CortexCodeLogo'

const CYCLE = ['pipelines', 'agents', 'dashboards', 'migration workflows', 'ml models', 'analytics', 'automations', 'apps']

const STEPS = [
  ['1', 'Task described', '"Build a marketing performance dashboard with spend vs. conversion breakdowns"', 'text-sf-blue'],
  ['2', 'Context gathered', 'Reads schema, semantic views, git history, and skills library automatically', 'text-sf-slate'],
  ['3', 'Plan generated', '7-file implementation plan reviewed; SQL + Python components mapped out', 'text-sf-amber'],
  ['4', 'Code written & tested', 'Components built, SQL generated, unit tests run — all passing', 'text-sf-purple'],
  ['5', 'Deployed + documented', 'App live in Snowflake · PR raised · README updated · audit logged', 'text-sf-green'],
]
const PILLS = ['Shared Skills Catalog', 'Agent SDK', 'Governance', 'MCP Connectors']

const FEATURES = [
  ['Full codebase context:', 'reads schema, semantic views, git history, and skills automatically.'],
  ['Plans before it builds:', 'generates a reviewable multi-file implementation plan first.'],
  ['Writes and tests:', 'produces SQL + Python and runs unit tests until everything passes.'],
  ['Ships governed:', 'deploys in Snowflake with a PR, docs, and a full audit trail.'],
]

const TERM_LINES = [
  ['comment', 'name,type,kind,null?,default,primary key,unique key,check,expression,comment,...'],
  ['ok', 'SQL_EXECUTE  List current task run history with errors'],
  ['dim', 'Connection: demo'],
  ['dim', '20 row(s) returned.'],
  ['comment', 'NAME,QUERY_TEXT,CONDITION_TEXT,SCHEMA_NAME,TASK_SCHEMA_ID,DATABASE_NAME,TASK...'],
  ['plus', '+ Now let me also check for suspended tasks to complete the picture.'],
  ['ok', 'SQL_EXECUTE  Find currently suspended tasks'],
  ['dim', 'Connection: demo'],
  ['blue', 'SQL Result (10 rows × 6 cols) [ctrl+t to navigate]'],
]

export default function Slide08AgentsBuild() {
  const [wi, setWi] = useState(5)
  const [tab, setTab] = useState('action')
  useEffect(() => {
    const t = setInterval(() => setWi((i) => (i + 1) % CYCLE.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="flex h-full w-full flex-col items-center pt-2">
      <h2 className="text-[40px] font-extrabold tracking-tight text-sf-navy">
        Agents that build <span className="gradient-text">{CYCLE[wi]}.</span>
      </h2>
      <p className="mt-1 text-[14px] text-sf-mist">Cortex Code &mdash; the AI coding agent, for data</p>

      <div className="mt-5 grid w-full flex-1 grid-cols-2 gap-5">
        {/* left */}
        <div className="rounded-2xl border border-sf-line bg-white/70 p-5">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-sf-purple/10 p-1"><CortexCodeLogo size={22} /></span>
            <div>
              <p className="text-[15px] font-bold text-sf-purple">Cortex Code</p>
              <p className="text-[11px] text-sf-mist">The AI Coding Agent, for Data</p>
            </div>
          </div>

          {/* terminal, moving */}
          <div className="mt-4 h-[190px] overflow-hidden rounded-xl border border-sf-navy/20 bg-[#0d1117] shadow-lg">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500" /><span className="h-2 w-2 rounded-full bg-yellow-400" /><span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="ml-2 text-[10px] text-white/50">cortex</span>
            </div>
            <div className="h-[157px] overflow-hidden px-3 py-2">
              <div className="animate-term-scroll space-y-1 font-mono text-[9.5px] leading-relaxed">
                {[...TERM_LINES, ...TERM_LINES].map((l, i) => (
                  <p key={i} className={{
                    comment: 'text-white/35', ok: 'text-emerald-300', dim: 'text-white/45', plus: 'text-sky-300', blue: 'text-sky-400',
                  }[l[0]]}>
                    {l[0] === 'ok' && <span className="mr-1 rounded bg-sky-500/20 px-1 text-sky-300">✓</span>}
                    {l[1]}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-sf-line pt-3">
            <p className="text-[22px] font-extrabold text-sf-purple">7,100+</p>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-sf-mist">Fastest-growing Snowflake product ever</p>
            <p className="mt-2 text-[11.5px] italic text-sf-slate">&ldquo;This translated into over 500 hours in time saving &ndash; roughly $100,000 in value &ndash; in just the first 20 days of adoption.&rdquo;</p>
            <p className="mt-1 text-[10px] text-sf-mist">Trent Foley, CTO, Evolv Consulting</p>
          </div>
        </div>

        {/* right */}
        <div className="rounded-2xl border border-sf-line bg-white/70 p-5">
          <div className="flex gap-2">
            <button onClick={() => setTab('action')} className={`rounded-full px-3 py-1 text-[12px] font-medium transition ${tab === 'action' ? 'bg-sf-purple text-white' : 'text-sf-mist hover:text-sf-slate'}`}>Agentic Action</button>
            <button onClick={() => setTab('features')} className={`rounded-full px-3 py-1 text-[12px] font-medium transition ${tab === 'features' ? 'bg-sf-purple text-white' : 'text-sf-mist hover:text-sf-slate'}`}>Features</button>
          </div>
          {tab === 'action' ? (
            <>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-sf-mist">Dev Team · Streamlit Dashboard Build</p>
              <div className="mt-3 space-y-2">
                {STEPS.map(([n, title, desc, color]) => (
                  <div key={n} className="rounded-xl border border-sf-line bg-white px-4 py-2.5">
                    <p className={`text-[13px] font-semibold ${color}`}><span className="mr-2 text-sf-mist">{n}</span>{title}</p>
                    <p className="mt-0.5 pl-5 text-[11.5px] text-sf-slate">{desc}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-sf-mist">Why Cortex Code</p>
              <div className="mt-3 space-y-2.5">
                {FEATURES.map(([lead, rest]) => (
                  <div key={lead} className="flex gap-3 rounded-xl border border-sf-line bg-white px-4 py-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sf-purple/10 text-[11px] font-bold text-sf-purple">✓</span>
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
