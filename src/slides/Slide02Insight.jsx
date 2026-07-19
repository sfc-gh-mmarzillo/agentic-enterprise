import { useEffect, useState } from 'react'
import { Card } from './ui'

const timeline = [
  ['8:42 AM', 'Risk detected'],
  ['8:43 AM', 'VP notified with options'],
  ['9:15 AM', 'One-tap approval'],
  ['9:16 AM', 'Action executed + audit logged'],
]

export default function Slide02Insight() {
  const [stage, setStage] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStage((s) => (s + 1) % 2), 3600)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="grid h-full w-full grid-cols-2 items-center gap-12">
      {/* left */}
      <div>
        <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-sf-slate">Monday Morning</p>
        <h2 className="text-[52px] font-extrabold leading-[1.02] tracking-tight text-sf-navy">
          From insight to action
          <br />
          <span className="gradient-blue">in minutes.</span>
        </h2>

        <ul className="mt-8 space-y-3">
          {timeline.map(([t, label], i) => (
            <li key={t} className="flex items-center gap-4 text-[15px]">
              <span className="w-16 font-mono text-[12px] text-sf-mist">{t}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-sf-blue" />
              <span className="text-sf-ink">{label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl border border-sf-blue/25 bg-sf-blue/5 px-4 py-3 text-[13px] text-sf-slate">
          Powered by Snowflake Cortex
        </div>
      </div>

      {/* right chat */}
      <Card className="h-[420px] overflow-hidden p-0">
        <div className="flex items-center justify-between border-b border-sf-line px-5 py-3">
          <span className="flex items-center gap-2 text-[14px] font-semibold text-sf-ink">
            <span className="h-2 w-2 rounded-full bg-sf-green" /># revenue-alerts
          </span>
          <span className="text-[12px] text-sf-mist">Snowflake CoWork</span>
        </div>

        <div className="slide-scroll h-[calc(420px-49px)] overflow-y-auto px-5 py-4 text-[13.5px]">
          <ChatFlow key={stage} stage={stage} />
        </div>
      </Card>
    </div>
  )
}

function ChatFlow({ stage }) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2.5">
        <Avatar />
        <div>
          <p className="mb-1 text-[12px] font-semibold text-sf-teal">CoWork <span className="rounded bg-sf-blue/10 px-1 text-[10px] text-sf-blue">APP</span></p>
          <p className="text-sf-ink">Scanning pipeline health across Horizon catalog&hellip;</p>
        </div>
      </div>

      <div className="rounded-lg bg-sf-panel px-3 py-2 font-mono text-[11.5px] text-sf-slate">
        <span className="text-sf-purple">MCP</span> · read_crm(account='Acme Corp', fields=<br />
        <span className="pl-6 text-sf-teal">['champion','last_contact','open_opps']</span>)
      </div>

      <p className="font-mono text-[12px] leading-relaxed text-sf-teal">
        → 3 churn signals · champion went dark 12d ago · QBR overdue 3 weeks<br />
        · Q1 renewal at risk
      </p>

      {stage === 0 ? (
        <p className="text-[18px] tracking-widest text-sf-mist">• • •</p>
      ) : (
        <div className="space-y-3">
          <div className="rounded-lg border border-amber-200 bg-amber-50/70 p-3">
            <p className="text-[13px] font-semibold text-sf-ink">⚠ Revenue risk: <span className="text-sf-blue">Acme Corp ($2.4M)</span></p>
            <p className="mt-1 text-[12px] text-sf-slate">Pattern matches 3 previous losses. Champion contact dark 12d. QBR overdue 3 weeks.</p>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-sf-mist">Recommended actions</p>
            {[
              ['1', 'Executive outreach + QBR scheduling', 'High', 'text-sf-green bg-emerald-50'],
              ['2', 'Technical deep-dive with champion', 'Med', 'text-sf-slate bg-slate-100'],
              ['3', 'Competitive displacement package', 'Med', 'text-sf-slate bg-slate-100'],
            ].map(([n, label, tag, cls]) => (
              <div key={n} className="mt-1.5 flex items-center justify-between text-[12px]">
                <span className="text-sf-ink"><span className="mr-2 text-sf-mist">{n}</span>{label}</span>
                <span className={`rounded px-1.5 py-0.5 text-[10px] ${cls}`}>{tag}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <div className="flex items-end gap-2">
              <div className="max-w-[240px] rounded-lg bg-sf-blue/10 px-3 py-2 text-[12.5px] text-sf-ink">
                Go with Option 1. Loop in Marcus on the QBR.
              </div>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-[10px] font-bold text-sf-teal">VP</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Avatar />
            <div>
              <p className="mb-1 text-[12px] font-semibold text-sf-teal">CoWork <span className="rounded bg-sf-blue/10 px-1 text-[10px] text-sf-blue">APP</span></p>
              <p className="text-[12.5px] text-sf-teal">✓ Email drafted · 📅 QBR scheduled · ⟳ CRM updated · Audit logged</p>
              <p className="mt-1 text-[10.5px] text-sf-mist">Attribution: Agent recommended · VP approved</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const Avatar = () => (
  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-sf-blue/10 text-sf-blue">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/></svg>
  </span>
)
