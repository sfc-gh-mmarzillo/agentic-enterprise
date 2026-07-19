// ── Data ─────────────────────────────────────────────────────────────────
import { motion } from 'framer-motion'

const AGENT_ITEMS = [
  'Agent Identify & Scope', 'Tool Selection Logic', 'Business Rules & Conditions',
  'Tone & Comms Style', 'Response Structure Template', 'Domain Context',
  'Boundaries and Limitations', 'Domain-specific Workflows', 'Data Presentation Format',
  'Error and Edge Case Messaging',
]

const COWORK_TOOLS = ['Visualization', 'Web Search', 'Coding']
const CUSTOM_TOOLS = ['Filtered Search', 'Template', 'Book of Business']

const ROW1 = [
  {
    type: 'Cortex Analyst', name: 'Sales Data Assistant',
    view: 'Sales Data Semantic View',
    tables: ['Consumption Daily', 'Consumption Summary', 'SFDC Accounts', 'Fiscal Calendar', 'Opportunity'],
  },
  {
    type: 'Cortex Analyst', name: 'Account 360 Assistant',
    view: 'A360 Semantic View',
    tables: ['Customer Support Cases', 'Daily Product Revenue', 'Daily Credit Consumption', 'Contracts', 'SFDC Accounts', 'Fiscal Calendar'],
  },
  {
    type: 'Cortex Analyst', name: 'Account Lookup',
    view: 'Account Lookup Semantic View',
    tables: ['SFDC Account Customers', 'Snowflake Accounts'],
  },
  {
    type: 'Cortex Analyst', name: 'Use Case Explorer',
    view: 'Use Case Explorer Semantic View',
    tables: ['SFDC Accounts', 'Use Cases'],
  },
  {
    type: 'Cortex Analyst', name: 'Org Chart Assistant',
    view: 'Org Chart Semantic View',
    tables: ['Org Structure', 'Employee Information', 'Reporting Relationships', 'Manager Hierarchies'],
  },
]

const ROW2 = [
  {
    type: 'Cortex Analyst', name: 'Quota Attainment',
    view: 'Quota Attainment Semantic View',
    tables: ['Quota Targets', 'Attainment Metrics', 'Reporting Structures', 'Employee Information'],
  },
  {
    type: 'Cortex Analyst', name: 'Marketing & Campaign',
    view: 'Marketing DB Campaign Reporting Semantic View',
    tables: ['Marketing Database', 'Engagement Data'],
  },
  {
    type: 'Cortex Analyst', name: 'Support Cases',
    view: 'Support Semantic View',
    tables: ['SFDC Account Customers', 'Snowflake Accounts'],
  },
  {
    type: 'Cortex Analyst', name: 'Partner Ecosystem Data',
    view: 'Partner Ecosystem Semantic View',
    tables: ['Snowflake Products', 'Snowflake Partners', 'Industry Examples', 'Customer Stories'],
  },
  {
    type: 'Cortex Search', name: 'Sales Knowledge Assistant',
    view: 'Sales Knowledge Base',
    tables: ['Snowflake Products', 'Snowflake Partners', 'Industry Examples', 'Customer Stories'],
  },
]

const PROOF = [
  { stat: '1,000s', desc: 'enterprises running Cortex in production' },
  { stat: '100s',   desc: 'Fortune 500 references we can make for you' },
  { stat: '20+',    desc: 'referenceable FS & banking customers by name' },
  { stat: '3–10×',  desc: 'documented productivity gains across data teams' },
]

// ── Agent box ────────────────────────────────────────────────────────────
function AgentBox({ type, name, view, tables }) {
  const isSearch = type === 'Cortex Search'
  const typeColor = isSearch ? '#0d9488' : '#1565a3'
  const viewBg    = isSearch ? '#0d9488' : '#1976a8'
  const tableBg   = '#e8f4fb'
  const tableBd   = '#b3d4e8'

  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden bg-white"
      style={{ border: '1.5px solid #1e3a5f' }}>

      {/* CORTEX ANALYST → shows as SEMANTIC VIEWS per design; CORTEX SEARCH stays as-is */}
      <div className="px-2 pt-1.5 pb-0.5">
        <span className="text-[7px] font-extrabold uppercase tracking-widest"
          style={{ color: typeColor, textDecoration: 'underline' }}>
          {isSearch ? type : 'Semantic Views'}
        </span>
      </div>

      {/* Agent name */}
      <div className="px-2 pb-1 text-center">
        <span className="text-[10.5px] font-extrabold leading-tight"
          style={{ color: '#1e3a5f' }}>{name}</span>
      </div>

      {/* Semantic view teal bar */}
      <div className="mx-1.5 mb-1 rounded py-0.5 px-1 text-center"
        style={{ background: viewBg }}>
        <span className="text-[7px] font-semibold text-white leading-tight">{view}</span>
      </div>

      {/* Data table grid */}
      <div className="flex-1 grid grid-cols-2 gap-0.5 px-1.5 pb-1 overflow-hidden">
        {tables.map((t, i) => (
          <div key={i}
            className="rounded flex items-center justify-center text-center leading-tight px-0.5 py-[3px]"
            style={{ background: tableBg, border: `0.5px solid ${tableBd}` }}>
            <span className="text-[6.5px] text-gray-600">{t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Slide ────────────────────────────────────────────────────────────────
export default function SlideRavenAtScale() {
  return (
    <div className="flex h-full w-full flex-col gap-2 px-1 py-1">

      {/* ━━━ TOP 2/3 — Raven architecture ━━━ */}
      <div className="flex flex-col rounded-2xl overflow-hidden min-h-0"
        style={{ flex: '2', border: '2px solid #4ba3c7', background: 'rgba(255,255,255,0.93)' }}>

        {/* Title with decorative lines — matching reference */}
        <div className="shrink-0 flex items-center gap-3 px-4 py-1.5">
          <div className="flex-1 h-px" style={{ background: '#4ba3c7' }} />
          <span className="text-[12px] font-bold tracking-wide" style={{ color: '#1565a3' }}>
            Raven Sales Assistant on{' '}
            <span style={{ color: '#1976a8' }}>Snowflake CoWork</span>
          </span>
          <div className="flex-1 h-px" style={{ background: '#4ba3c7' }} />
        </div>

        {/* Top row: Cortex Agents (gray) + Snowflake CoWork (blue) */}
        <div className="shrink-0 flex gap-2 px-2 pb-1">

          {/* Cortex Agents */}
          <div className="flex-1 rounded-lg p-2"
            style={{ background: '#e9ecef', border: '1px solid #adb5bd' }}>
            <p className="text-[10.5px] font-bold text-center text-gray-700 mb-1.5">Cortex Agents</p>
            <div className="grid grid-cols-5 gap-1">
              {AGENT_ITEMS.map(item => (
                <div key={item}
                  className="rounded text-[7px] text-center text-gray-600 px-0.5 py-0.5 leading-tight"
                  style={{ background: '#ced4da', border: '0.5px solid #adb5bd' }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Snowflake CoWork */}
          <div className="w-[36%] shrink-0 rounded-lg p-2"
            style={{ background: '#4ba3c7' }}>
            <p className="text-[10.5px] font-bold text-center text-white mb-1.5">Snowflake CoWork</p>
            <div className="flex justify-center gap-1.5 mb-1.5">
              {COWORK_TOOLS.map(t => (
                <div key={t} className="rounded text-white text-center px-2 py-0.5"
                  style={{ background: 'rgba(255,255,255,0.22)', fontSize: '8.5px' }}>{t}</div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: 4 }}>
              <p className="text-center mb-0.5" style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.7)' }}>
                Custom Tools
              </p>
              <div className="flex justify-center gap-1">
                {CUSTOM_TOOLS.map(t => (
                  <div key={t} className="rounded text-white text-center px-1.5 py-0.5"
                    style={{ background: 'rgba(255,255,255,0.25)', fontSize: '7.5px' }}>{t}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Connector arrows */}
        <div className="shrink-0 flex justify-around px-10 py-0.5"
          style={{ fontSize: 10, color: '#9ca3af' }}>
          {['↓','↓','↓','↓','↓'].map((a, i) => <span key={i}>{a}</span>)}
        </div>

        {/* Agent rows — full detail */}
        <div className="flex-1 flex flex-col gap-1 px-2 pb-1 min-h-0">
          {[ROW1, ROW2].map((row, ri) => (
            <div key={ri} className="grid grid-cols-5 gap-1.5 min-h-0" style={{ flex: 1 }}>
              {row.map(agent => <AgentBox key={agent.name} {...agent} />)}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="shrink-0 flex justify-center gap-14 py-1"
          style={{ borderTop: '1px solid #dee2e6', fontSize: 9, fontWeight: 600,
                   letterSpacing: '0.15em', color: '#4ba3c7' }}>
          <span>Reflect</span><span>Monitor</span><span>Iterate</span>
        </div>
      </div>

      {/* ━━━ SEPARATOR — gradient divider with label ━━━ */}
      <div className="shrink-0 flex items-center gap-3 py-0.5">
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #4ba3c7 40%, #4ba3c7 60%, transparent)' }} />
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] shrink-0" style={{ color: '#1565a3' }}>
          Enterprise-Grade · Proven at Scale
        </p>
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #4ba3c7 40%, #4ba3c7 60%, transparent)' }} />
      </div>

      {/* ━━━ BOTTOM 1/3 — Animated large enterprise metrics ━━━ */}
      <div className="shrink-0 flex items-stretch gap-3 px-1" style={{ flex: '1', minHeight: 0 }}>
        {PROOF.map((p, i) => (
          <motion.div key={p.stat}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col items-center justify-center rounded-2xl border border-sf-line bg-white/80 py-2 px-2">
            <p className="text-[36px] font-extrabold gradient-blue leading-none">{p.stat}</p>
            <p className="mt-1.5 text-[10.5px] text-sf-slate text-center leading-snug max-w-[140px]">{p.desc}</p>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 + PROOF.length * 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="w-[210px] shrink-0 flex flex-col items-center justify-center rounded-2xl
                      border border-sf-blue/25 bg-sf-blue/5 py-2 px-3 text-center">
          <p className="text-[13px] font-bold text-sf-blue leading-snug">Reference customers available</p>
          <p className="text-[10px] text-sf-slate mt-1.5 leading-snug">
            Peer calls, architecture reviews, and site visits with FS customers running Cortex in production.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
