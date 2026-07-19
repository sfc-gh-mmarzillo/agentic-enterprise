import { Logo } from './logos'

const BI_TOOLS = [
  { name: 'Tableau', color: '#E97627', description: 'Native connector · live queries' },
  { name: 'Power BI', color: '#F2C811', description: 'DirectQuery · certified connector' },
  { name: 'Looker', color: '#4285F4', description: 'Native Snowflake dialect' },
  { name: 'ThoughtSpot', color: '#E8543A', description: 'AI-powered analytics · liveboards' },
  { name: 'Sigma', color: '#8B5CF6', description: 'Cloud-native spreadsheet UX' },
  { name: 'Qlik', color: '#009845', description: 'Associative analytics engine' },
]

const FEATURES = [
  'Query Snowflake directly — no data movement',
  'Row-level security enforced for every BI user',
  'Semantic views expose governed metrics to every tool',
  'AI-generated insights via Cortex in any BI layer',
]

export default function SlideBIIntegrations() {
  return (
    <div className="flex h-full w-full flex-col items-center pt-3">
      <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-sf-blue">BI &amp; Analytics</p>
      <h2 className="mt-1 text-[38px] font-extrabold tracking-tight text-sf-navy">
        Native BI Integration
      </h2>
      <p className="mt-1 text-[13px] text-sf-mist">Your existing BI tools. Snowflake data. Zero copy.</p>

      <div className="mt-6 grid grid-cols-3 gap-4 w-full">
        {BI_TOOLS.map((tool) => (
          <div key={tool.name} className="flex items-center gap-3 rounded-xl border border-sf-line bg-white/70 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: tool.color }} />
            <div>
              <p className="text-[13.5px] font-semibold text-sf-ink">{tool.name}</p>
              <p className="text-[11px] text-sf-mist">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 w-full">
        {FEATURES.map((f) => (
          <div key={f} className="flex items-center gap-2.5 rounded-xl border border-sf-line bg-white/60 px-3 py-2.5">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sf-blue/10 text-[11px] font-bold text-sf-blue">✓</span>
            <p className="text-[12.5px] text-sf-slate">{f}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
