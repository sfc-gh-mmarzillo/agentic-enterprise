import { useEffect, useState } from 'react'
import { Card } from './ui'

const stats = [
  ['57%', 'cite data reliability as their top AI barrier', '1'],
  ['6%', 'of companies fully trust AI agents for core processes', '2'],
  ['61%', "of AI adopters can't point to measurable business impact", '3'],
]

export default function Slide03NotReady() {
  const [stage, setStage] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStage((s) => (s + 1) % 2), 3800)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="grid h-full w-full grid-cols-2 items-center gap-12">
      <div>
        <h2 className="text-[46px] font-extrabold leading-[1.04] tracking-tight text-sf-navy">
          Every enterprise
          <br />wants agentic AI.
          <br /><span className="gradient-text">Most aren&rsquo;t ready.</span>
        </h2>
        <p className="mt-5 text-[15px] text-sf-mist">
          The failure mode isn&rsquo;t weak reasoning &mdash; it&rsquo;s missing context.
        </p>

        <div className="mt-8 space-y-5">
          {stats.map(([n, label, sup]) => (
            <div key={n} className="flex items-baseline gap-4">
              <span className="w-20 text-[34px] font-extrabold gradient-blue">{n}</span>
              <span className="text-[14px] text-sf-slate">
                {label}<sup className="text-sf-mist">{sup}</sup>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-1 text-[10.5px] text-sf-mist">
          <p><sup>1</sup> Informatica CDO Insights, 2026</p>
          <p><sup>2</sup> Harvard Business Review, 2025</p>
          <p><sup>3</sup> McKinsey State of AI, Nov 2025</p>
        </div>
      </div>

      <Card className="h-[430px] overflow-hidden p-0">
        <div className="flex items-center justify-between border-b border-sf-line px-5 py-3">
          <span className="flex items-center gap-2 text-[14px] font-semibold text-sf-ink">
            <span className="h-2 w-2 rounded-full bg-amber-400" />Revenue Analyst Agent
          </span>
          <span className="text-[12px] text-sf-mist">2m 14s elapsed</span>
        </div>
        <div className="slide-scroll h-[calc(430px-49px)] overflow-y-auto px-5 py-4 text-[13px]">
          <Flow key={stage} stage={stage} />
        </div>
      </Card>
    </div>
  )
}

function UserBubble({ children }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-lg bg-sf-blue/10 px-3 py-2 text-[12.5px] text-sf-ink">{children}</div>
    </div>
  )
}
const Code = ({ children }) => (
  <div className="rounded-lg bg-sf-panel px-3 py-2 font-mono text-[11.5px] text-sf-slate">{children}</div>
)

function Flow({ stage }) {
  return (
    <div className="space-y-3.5">
      <UserBubble>What was our EMEA revenue last quarter, including the Acme Corp renewal?</UserBubble>
      <p className="text-sf-slate">Looking into this for you&hellip;</p>
      <Code>SELECT * FROM analytics.revenue WHERE region = <span className="text-sf-teal">'EMEA'</span></Code>
      <p className="font-mono text-[12px] text-sf-red">✗ Table not found: analytics.revenue</p>

      {stage === 0 ? (
        <p className="text-[18px] tracking-widest text-sf-mist">• • •</p>
      ) : (
        <>
          <p className="font-mono text-[12px] text-sf-red">✗ Access denied: salesforce schema requires role DATA_ANALYST</p>
          <div className="rounded-lg bg-sf-panel px-3 py-2 text-[12.5px] text-sf-slate">
            I&rsquo;m having difficulty locating the right data. Let me try another approach&hellip;
          </div>
          <Code>SELECT SUM(amount) FROM finance.revenue_summary WHERE segment = <span className="text-sf-teal">'EMEA'</span> AND<br />quarter = <span className="text-sf-teal">'Q1-2026'</span></Code>
          <p className="font-mono text-[11.5px] text-sf-mist">→ 1 row returned</p>
          <div className="rounded-lg bg-sf-panel px-3 py-2 text-[12.5px] text-sf-slate">
            Based on what I found, EMEA revenue last quarter was $4.2M. Note: I wasn&rsquo;t able to verify the Acme Corp renewal or cross-reference with CRM data.
          </div>
          <UserBubble>that&rsquo;s incorrect&hellip;</UserBubble>
          <div className="flex justify-end">
            <span className="rounded-md bg-rose-50 px-2 py-1 text-[11px] font-medium text-sf-red">👎 Reason: way out!!</span>
          </div>
        </>
      )}
    </div>
  )
}
