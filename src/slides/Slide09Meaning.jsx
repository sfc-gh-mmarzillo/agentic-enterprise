import { useEffect, useState } from 'react'
import { Logo } from './logos'

const CONNECTORS = ['salesforce', 'microsoft 365', 'aws', 'azure', 'google cloud', 'slack', 'github', 'atlassian']

const METRICS = [
  { label: 'Accuracy Improvement', val: '3.5×', desc: '23% → 83% on hard enterprise queries', src: 'Snowflake CoWork blog', color: 'text-sf-blue', tint: 'rgba(41,181,232,0.06)', icon: '◎' },
  { label: 'Tokens Used', val: '−51%', desc: 'CoCo vs Claude Code (Opus 4.7)', src: 'ADE-Bench, dbt Labs', color: 'text-sf-amber', tint: 'rgba(217,119,6,0.06)', icon: '⚡' },
  { label: 'Lower Cost per Prompt', val: '66%', desc: '$0.59 vs $1.76 — frontier agent', src: 'Snowflake internal benchmark', color: 'text-sf-green', tint: 'rgba(16,185,129,0.06)', icon: '▤' },
]

const DOMAINS = ['Sales', 'Marketing', 'Product', 'Finance', 'Support', 'Operations', 'HR', 'Partners']
const DATA = {
  baseline: [8, 12, 10, 9, 11, 14, 7, 10],
  sense: [67, 63, 61, 68, 65, 62, 60, 64],
  semantic: [96, 63, 97, 98, 65, 62, 60, 64],
}
const TABS = [
  ['baseline', 'Baseline'],
  ['sense', '+ Cortex Sense'],
  ['semantic', '+ Semantic Views'],
]

const ECO = [
  { n: '01', k: 'Ecosystem', t: 'Connectors', items: [] },
  { n: '02', k: 'Structured', t: 'Structured Knowledge', items: ['Semantic Views', 'Lineage & Query Patterns', 'Schema Metadata'] },
  { n: '03', k: 'Unstructured', t: 'Unstructured Knowledge', items: ['Cortex Search', 'SharePoint & Drive MCP', 'Internal Wikis', 'Docs & PDFs'] },
  { n: '04', k: 'Operational', t: 'Business Logic', items: ['Business Glossary', 'Reusable Skills'] },
]

export default function Slide09Meaning() {
  const [tab, setTab] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setTab((i) => (i + 1) % 3), 2600)
    return () => clearInterval(t)
  }, [])
  const key = TABS[tab][0]

  return (
    <div className="flex h-full w-full flex-col pt-2">
      <h2 className="text-center text-[38px] font-extrabold tracking-tight text-sf-navy">
        With context, data becomes <span className="gradient-blue">meaning.</span>
      </h2>

      <div className="mt-4 grid flex-1 grid-cols-2 gap-5">
        {/* left column */}
        <div className="flex flex-col">
          <div className="grid grid-cols-3 gap-3">
            {METRICS.map((m) => (
              <div key={m.label} className="rounded-xl border border-sf-line p-3" style={{ background: m.tint }}>
                <p className="text-[9px] font-semibold uppercase tracking-wider text-sf-mist">{m.icon} {m.label}</p>
                <p className={`mt-1 text-[26px] font-extrabold ${m.color}`}>{m.val}</p>
                <p className="mt-1 text-[10px] leading-snug text-sf-slate">{m.desc}</p>
                <p className="mt-1.5 text-[9px] text-sf-mist">↗ {m.src}</p>
              </div>
            ))}
          </div>

          <p className="mt-3 text-[12px] text-sf-slate">
            Context eliminates schema re-discovery at every model turn &mdash; reducing wasted inference and keeping costs low without sacrificing accuracy.
          </p>

          <div className="mt-3 flex items-center gap-3 rounded-xl border border-sf-line bg-white/70 px-4 py-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-sf-blue/10 text-sf-blue">◈</span>
            <div>
              <p className="text-[13px] font-semibold text-sf-blue">Cortex Sense</p>
              <p className="text-[11px] text-sf-slate">Always-on runtime &mdash; continuously learning your data landscape</p>
            </div>
          </div>

          <div className="mt-3 grid flex-1 grid-cols-4 gap-2">
            {ECO.map((e) => (
              <div key={e.n} className="rounded-xl border border-sf-line bg-white/70 p-2.5">
                <p className="text-[9px] font-semibold uppercase text-sf-mist">{e.n} {e.k}</p>
                <p className="mt-1 text-[11.5px] font-semibold text-sf-navy">{e.t}</p>
                {e.n === '01' ? (
                  <div className="mt-2 grid grid-cols-4 gap-1">
                    {CONNECTORS.map((name) => (
                      <span key={name} className="grid h-5 w-5 place-items-center rounded bg-white p-[3px] shadow-sm ring-1 ring-sf-line">
                        <Logo name={name} />
                      </span>
                    ))}
                  </div>
                ) : (
                  <ul className="mt-1.5 space-y-1">
                    {e.items.map((it) => <li key={it} className="text-[10px] text-sf-slate">• {it}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* right chart */}
        <div className="flex flex-col rounded-2xl border border-sf-line bg-white/80 p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[15px] font-semibold text-sf-navy">Accuracy by domain</p>
              <p className="text-[11px] text-sf-mist">% correct responses per business function</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              {TABS.map(([k, label], i) => (
                <button key={k} onClick={() => setTab(i)}
                  className={`rounded-full px-2.5 py-0.5 text-[11px] transition ${i === tab ? (i === 2 ? 'bg-sf-purple text-white' : i === 1 ? 'bg-sf-blue text-white' : 'bg-sf-navy text-white') : 'text-sf-mist'}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-1 flex-col justify-center space-y-3">
            {DOMAINS.map((d, i) => {
              const base = DATA.baseline[i]
              const sense = DATA.sense[i]
              const sem = DATA.semantic[i]
              const shown = key === 'baseline' ? base : key === 'sense' ? sense : sem
              return (
                <div key={d} className="flex items-center gap-3">
                  <span className="w-16 text-right text-[11px] text-sf-slate">{d}</span>
                  <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div className={`absolute inset-y-0 left-0 rounded-full transition-all duration-700 ${key === 'baseline' ? 'bg-slate-300' : 'bg-sf-blue-deep'}`}
                      style={{ width: `${key === 'baseline' ? base : sense}%` }} />
                    {key === 'semantic' && sem > sense && (
                      <div className="absolute inset-y-0 rounded-r-full bg-sf-purple transition-all duration-700"
                        style={{ left: `${sense}%`, width: `${sem - sense}%` }} />
                    )}
                  </div>
                  <span className={`w-9 text-right text-[11px] font-semibold ${key === 'semantic' ? 'text-sf-purple' : key === 'sense' ? 'text-sf-blue-deep' : 'text-sf-slate'}`}>{shown}%</span>
                </div>
              )
            })}
          </div>

          <div className="mt-5 flex items-center gap-4 text-[10px] text-sf-mist">
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-slate-300" /> Baseline</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-sf-blue-deep" /> + Cortex Sense</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-sf-purple" /> + Semantic Views</span>
          </div>
        </div>
      </div>
    </div>
  )
}
