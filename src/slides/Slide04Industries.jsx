import { useEffect, useState } from 'react'

const SCENARIOS = [
  {
    key: 'Financial Services', row: 'industry',
    usecase: 'Risk & Compliance Intelligence',
    sources: ['Bloomberg', 'Salesforce', 'Customer360'],
    processing: ['Scanning counterparty exposure...', 'Correlating market sentiment signals', 'Scoring portfolio risk positions'],
    ml: { title: 'Credit Risk Model', steps: ['Loading 90-day market features...', 'Retraining gradient-boosted model', 'Validating against hold-out set → AUC 0.94'] },
    action: { do: 'Flagging 3 at-risk positions to compliance team', win: 'Proactive risk mitigation before market close' },
    progress: 0,
    quote: ['Capital One', 'Snowflake enables us to run ML at petabyte scale, serving our risk and fraud models in near real time.'],
  },
  {
    key: 'Insurance', row: 'industry',
    usecase: 'Automated Claims & Fraud Detection',
    sources: ['Claims DB', 'Weather API', 'Policyholder CRM'],
    processing: ['Ingesting new claims batch (1,247)...', 'Correlating with weather event patterns', 'Flagging anomalous claim clusters'],
    ml: { title: 'Fraud Probability Scorer', steps: ['Enriching claims with geo + weather data...', 'Running fraud detection ensemble', 'Scoring complete → 23 flagged for review'] },
    action: { do: 'Auto-routing 1,224 clean claims; escalating 23 to SIU', win: '70% faster claims processing, reduced fraud loss' },
    progress: 0,
    quote: ['Zurich Insurance', 'Snowflake allows us to be more precise in our pricing while keeping underwriters in control.'],
  },
  {
    key: 'HCLS', row: 'industry',
    usecase: 'Patient Risk & Clinical Intelligence',
    sources: ['EHR System', 'Claims Data', 'Clinical Trials'],
    processing: ['Matching patient cohorts to protocols...', 'Analyzing treatment outcome patterns', 'Detecting adverse event signals'],
    ml: { title: 'Patient Risk Stratifier', steps: ['Building features from longitudinal EHR...', 'Training readmission risk model', 'Validating against outcomes → AUC 0.91'] },
    action: { do: 'Flagging 12 high-risk patients for care coordinator review', win: '28% reduction in unplanned readmissions' },
    progress: 2,
    quote: ['Bupa', 'Snowflake gives us the ability to connect patients to the right treatments faster than ever before.'],
  },
  {
    key: 'Travel', row: 'industry',
    usecase: 'Dynamic Pricing & Personalisation',
    sources: ['Booking Engine', 'Loyalty DB', 'Pricing API'],
    processing: ['Pulling 30-day booking velocity...', 'Analyzing route demand elasticity', 'Computing competitor fare deltas'],
    ml: { title: 'Dynamic Pricing Model', steps: ['Building elasticity curves per route...', 'Optimizing yield with demand forecast', 'Generating pricing recommendations'] },
    action: { do: 'Adjusting 14 route pricing tiers, notifying RM team', win: '3-5% yield improvement per route per quarter' },
    progress: 2,
    quote: ['Travel Client (via Tredence)', 'NPS +7 points, avg member value +$500 via personalization'],
  },
  {
    key: 'Telecomms', row: 'industry',
    usecase: 'Churn Prevention & Retention',
    sources: ['Network Logs', 'CRM', 'Usage DB'],
    processing: ['Streaming usage pattern changes...', 'Detecting engagement drop signals', 'Cross-referencing support tickets'],
    ml: { title: 'Churn Propensity Model', steps: ['Feature engineering on 90-day behavior...', 'Training survival model with tenure features', 'Scoring base → 842 high-risk subscribers'] },
    action: { do: 'Triggering retention offers via preferred channel', win: '22% reduction in high-value churn' },
    progress: 2,
    quote: ['AT&T', 'We achieved 84% annual cost savings and dramatically accelerated our time to insight.'],
  },
  {
    key: 'Retail', row: 'industry',
    usecase: 'Inventory & Demand Forecasting',
    sources: ['POS System', 'Inventory', 'Supplier Portal'],
    processing: ['Analyzing real-time sales velocity...', 'Predicting stock-out risk by SKU', 'Checking supplier lead times'],
    ml: { title: 'Demand Forecast Model', steps: ['Retraining on latest 14-day sales...', 'Factoring seasonality + promotions', 'Generating reorder recommendations'] },
    action: { do: 'Auto-reordering 38 SKUs, alerting merchandising team', win: '40% reduction in lost sales from stock-outs' },
    progress: 2,
    quote: ['ABB', 'Snowflake brought together 40 ERP systems — unlocking roughly $200M in annual inventory savings.'],
  },
  {
    key: 'Logistics', row: 'industry',
    usecase: 'Fleet & Freight Optimization',
    sources: ['Telematics / ELD', 'TMS & Load Board', 'Fuel & Weather API'],
    processing: ['Streaming 12,400 vehicle GPS pings...', 'Detecting route delay & idle patterns', 'Matching load demand to fleet capacity'],
    ml: { title: 'Route & ETA Optimizer', steps: ['Building features from telematics + traffic...', 'Optimizing multi-stop routes vs. demand forecast', 'Scoring lanes → 96% on-time ETA confidence'] },
    action: { do: 'Rerouting 47 loads, dispatching drivers, flagging 6 trucks for maintenance', win: '11% fewer empty miles, 8% fuel savings, higher on-time delivery' },
    progress: 2,
    quote: ['Schneider National', 'Snowflake gives us one source of truth across fleet and freight data — powering smarter, faster dispatch and pricing decisions.'],
  },
  {
    key: 'Finance', row: 'lob',
    usecase: 'Close Automation & Variance Analysis',
    sources: ['ERP', 'Banking Feeds', 'General Ledger'],
    processing: ['Pulling daily transaction feeds...', 'Matching GL entries across entities', 'Detecting unreconciled variances'],
    ml: { title: 'Forecast Variance Model', steps: ['Computing rolling actuals vs. plan...', 'Identifying systematic drift patterns', 'Generating correction recommendations'] },
    action: { do: 'Drafting 4 journal entry corrections for review', win: '5-day faster close, 90% fewer manual reconciliations' },
    progress: 1,
    quote: ['ABB', 'Millions in savings from unified ERP data'],
  },
  {
    key: 'Marketing', row: 'lob',
    usecase: 'Multi-Touch Attribution & Optimisation',
    sources: ['Ad Platforms', 'CRM', 'Web Analytics'],
    processing: ['Aggregating multi-channel spend...', 'Computing multi-touch attribution', 'Scoring campaign performance'],
    ml: { title: 'Campaign Optimizer', steps: ['Segmenting audiences by LTV...', 'Modeling channel interaction effects', 'Recommending budget reallocation'] },
    action: { do: 'Reallocating $42K to top performers, pausing 3 campaigns', win: '18% improvement in CAC efficiency' },
    progress: 0,
    quote: ['Digital Virgo', 'Snowflake cut our data latency by 90% and eliminated silos across 40+ markets.'],
  },
  {
    key: 'Sales', row: 'lob',
    usecase: 'Pipeline Intelligence & Rep Productivity',
    sources: ['CRM', 'Email', 'Call Transcripts'],
    processing: ['Analyzing deal engagement signals...', 'Computing pipeline velocity metrics', 'Detecting stalled opportunities'],
    ml: { title: 'Win Probability Model', steps: ['Extracting sentiment from calls...', 'Scoring deals on engagement recency', 'Ranking pipeline by close likelihood'] },
    action: { do: 'Prioritizing 8 deals for outreach, drafting follow-ups', win: '15% uplift in conversion rate, 2x rep productivity' },
    progress: 1,
    quote: ['Snowflake', '25% higher engagement, 2x conversion with propensity scoring'],
  },
  {
    key: 'HR', row: 'lob',
    usecase: 'Workforce Analytics & Retention',
    sources: ['HRIS', 'Pulse Surveys', 'Perf Reviews'],
    processing: ['Analyzing engagement survey trends...', 'Correlating with tenure + performance', 'Detecting early flight risk signals'],
    ml: { title: 'Flight Risk Model', steps: ['Building features from HR signals...', 'Training attrition predictor', 'Scoring workforce → 14 high-risk flagged'] },
    action: { do: 'Triggering retention workflow, alerting skip-level manager', win: '30% reduction in regrettable attrition' },
    progress: 1,
    quote: ['SD Worx', 'We surface daily workforce insights on anomalies and absenteeism across our entire customer base.'],
  },
]

const INDUSTRY = SCENARIOS.filter((s) => s.row === 'industry')
const LOB = SCENARIOS.filter((s) => s.row === 'lob')
const CODE_STEPS = ['Building pipeline...', 'Identifying patterns...', 'Actioning insights...']

const COCO_GRID = [
  '...BBBBB...',
  '..BBBBBBB..',
  '..BKKBKKB..',
  '..BKKBKKB..',
  'BBBBBOBBBBB',
  'BBBBBOBBBBB',
  'BBBCCCCCBBB',
  'BBBCCCCCBBB',
  '.BBCCCCCBB.',
  '.BOOBCBOOB.',
  '..OO.B.OO..',
]
const COCO_COLORS = { B: '#8CA6E8', K: '#141414', O: '#E8963C', C: '#FCF6E7' }

function CortexCodeLogo() {
  const cell = 8
  const cols = COCO_GRID[0].length
  const rows = COCO_GRID.length
  return (
    <svg width="24" height="24" className="invert-safe" viewBox={`0 0 ${cols * cell} ${rows * cell}`} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
      {COCO_GRID.flatMap((line, y) =>
        line.split('').map((ch, x) =>
          COCO_COLORS[ch] ? (
            <rect key={`${x}-${y}`} x={x * cell} y={y * cell} width={cell} height={cell} fill={COCO_COLORS[ch]} />
          ) : null,
        ),
      )}
    </svg>
  )
}

export default function Slide04Industries() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SCENARIOS.length), 4200)
    return () => clearInterval(t)
  }, [])
  const d = SCENARIOS[idx]
  const select = (key) => setIdx(SCENARIOS.findIndex((s) => s.key === key))

  return (
    <div className="flex h-full w-full flex-col items-center justify-center py-2">
      <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-sf-blue">Art of the Possible</p>
      <h2 className="mt-1 text-[38px] font-extrabold tracking-tight text-sf-navy">
        With Cortex, <span className="gradient-text">now you can</span>
      </h2>

      <div className="mt-3 flex items-center gap-2">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-wider text-sf-mist">Industry</span>
        {INDUSTRY.map((it) => (
          <button key={it.key} onClick={() => select(it.key)}
            className={`rounded-full border px-3 py-1 text-[12px] transition ${d.key === it.key ? 'border-transparent bg-sf-blue text-white shadow-sm' : 'border-sf-line bg-white/70 text-sf-slate'}`}>
            {it.key}
          </button>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-2">
        <span className="mr-1 text-[10px] font-semibold uppercase tracking-wider text-sf-mist">LOB</span>
        {LOB.map((it) => (
          <button key={it.key} onClick={() => select(it.key)}
            className={`rounded-full border px-3 py-1 text-[12px] transition ${d.key === it.key ? 'border-transparent bg-sf-blue text-white shadow-sm' : 'border-sf-line bg-white/70 text-sf-slate'}`}>
            {it.key}
          </button>
        ))}
      </div>

      <p className="mt-3 text-[13px] text-sf-blue">Snowflake accelerates time to value by integrating agents directly where data work happens.</p>
      <p className="mt-2 text-[13px] font-medium text-sf-slate">{d.usecase}</p>

      {/* pipeline */}
      <div className="mt-3 flex w-full items-stretch gap-2">
        <Col title="Source Systems">
          {d.sources.map((s) => (
            <div key={s} className="rounded-md border border-sf-line bg-white px-2.5 py-1.5 text-[11.5px] text-sf-ink">{s}</div>
          ))}
        </Col>
        <Arrow />
        <Col title="Processing">
          {d.processing.map((p) => (
            <p key={p} className="font-mono text-[10.5px] leading-snug text-sf-slate"><span className="text-sf-blue">§</span> {p}</p>
          ))}
          <p className="font-mono text-[10.5px] text-sf-green">✓ Complete</p>
        </Col>
        <Arrow />
        <Col title="Agentic ML">
          <div className="mb-1 flex items-center gap-1.5 rounded-md bg-sf-purple/8 px-2 py-1 text-[11px] font-medium text-sf-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-sf-purple" />{d.ml.title}
          </div>
          {d.ml.steps.map((s, i) => (
            <p key={i} className="font-mono text-[10.5px] leading-snug text-sf-slate"><span className="text-sf-mist">[{i + 1}]</span> {s}</p>
          ))}
        </Col>
        <Arrow />
        <Col title="Agent Action" tint="linear-gradient(180deg,#f0f9ff,#ecfdf5)">
          <p className="text-[11.5px] leading-snug text-sf-ink">{d.action.do}</p>
          <div className="mt-2 rounded-md bg-emerald-100/70 px-2 py-1.5 text-[10.5px] text-sf-teal">✓ {d.action.win}</div>
        </Col>
      </div>

      {/* cortex code progress */}
      <div className="mt-3 flex w-full items-center gap-3 rounded-xl border border-sf-line bg-white/80 px-4 py-2.5">
        <span className="flex items-center gap-1.5 text-[12.5px] font-semibold text-sf-purple">
          <span className="grid h-6 w-6 place-items-center"><CortexCodeLogo /></span> Cortex Code
        </span>
        <span className="text-sf-line">|</span>
        <div className="flex flex-1 items-center gap-5 font-mono text-[11.5px]">
          {CODE_STEPS.map((s, i) => (
            <span key={s} className={i === d.progress ? 'font-semibold text-sf-purple' : 'text-sf-mist'}>
              {i === d.progress && <span className="mr-1">●</span>}{s}
            </span>
          ))}
        </div>
        <span className="text-[11px] text-sf-mist">● Running</span>
      </div>

      {/* quote */}
      <div className="mt-2.5 flex w-full items-center gap-3 rounded-xl border border-sf-line bg-white/60 px-4 py-2.5 text-[12.5px]">
        <span className="font-semibold text-sf-ink">{d.quote[0]}</span>
        <span className="italic text-sf-slate">&ldquo;{d.quote[1]}&rdquo;</span>
      </div>
    </div>
  )
}

function Col({ title, children, tint }) {
  return (
    <div className="flex-1 rounded-xl border border-sf-line p-3" style={{ background: tint || 'rgba(255,255,255,0.75)' }}>
      <p className="mb-2 text-[9.5px] font-semibold uppercase tracking-wider text-sf-mist">{title}</p>
      <div className="space-y-1.5">{children}</div>
    </div>
  )
}
const Arrow = () => <div className="flex items-center text-sf-mist">→</div>
