import { motion } from 'framer-motion'

const MONTHS = [
  {
    month: 'February', color: '#29b5e8', bg: 'rgba(41,181,232,0.07)',
    items: [
      { text: 'Cortex Code CLI', tag: 'GA' },
      { text: 'Cortex Search Component Scores', tag: 'GA' },
      { text: 'CORTEX_AGENT_USAGE_HISTORY view', tag: 'GA' },
      { text: 'AI Functions account spending controls', tag: 'GA' },
    ],
  },
  {
    month: 'March', color: '#8b5cf6', bg: 'rgba(139,92,246,0.07)',
    items: [
      { text: 'Multi-index Cortex Search', tag: 'GA' },
      { text: 'Custom vector embeddings', tag: 'GA' },
      { text: 'Enhanced Search tool for Agents', tag: 'GA' },
      { text: 'AI code suggestions in Workspaces', tag: 'Preview' },
    ],
  },
  {
    month: 'April', color: '#2563eb', bg: 'rgba(37,99,235,0.07)',
    items: [
      { text: 'Cortex Search Service replication', tag: 'GA' },
    ],
  },
  {
    month: 'May', color: '#0d9488', bg: 'rgba(13,148,136,0.07)',
    items: [
      { text: 'Auto-suspend/resume for Cortex Search', tag: 'Preview' },
      { text: 'Batch Cortex Search', tag: 'GA' },
      { text: 'Gemini 3.5 Flash multimodal analysis', tag: 'GA' },
    ],
  },
  {
    month: 'June', color: '#d97706', bg: 'rgba(217,119,6,0.07)',
    items: [
      { text: 'Agent tool evaluation metrics', tag: 'Preview' },
      { text: 'AI Guardrails Usage History view', tag: 'GA' },
      { text: 'Analytical search', tag: 'Preview' },
    ],
  },
  {
    month: 'July', color: '#e11d48', bg: 'rgba(225,29,72,0.07)',
    items: [
      { text: 'Resource budgets for Cortex Search', tag: 'GA' },
      { text: 'AI_TRANSLATE long-document translation', tag: 'GA' },
      { text: 'Deep Research in Snowflake CoWork', tag: 'GA' },
      { text: 'Online Feature Store', tag: 'Preview' },
      { text: 'AI_TRANSCRIBE supports AAC audio', tag: 'GA' },
    ],
  },
]

const UPCOMING = [
  'Cortex Sense', 'Business Glossaries', 'Advanced Model Training',
  'BYO Models from HuggingFace', 'AI Gateway', 'CoWork Enhancements', 'Ongoing Harness Improvements',
]

function Badge({ tag }) {
  const isGA = tag === 'GA'
  return (
    <span className="shrink-0 rounded-full px-1.5 py-px text-[7.5px] font-bold"
      style={{
        background: isGA ? 'rgba(13,148,136,0.12)' : 'rgba(217,119,6,0.12)',
        color: isGA ? '#0d9488' : '#d97706',
      }}>
      {tag}
    </span>
  )
}

function MonthCard({ month, color, bg, items, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col rounded-xl border border-sf-line bg-white/70 overflow-hidden"
    >
      <div className="px-2.5 py-1.5" style={{ background: bg, borderBottom: `2px solid ${color}22` }}>
        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]" style={{ color }}>{month}</span>
      </div>
      <div className="flex-1 px-2.5 py-1.5 space-y-1">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-1.5">
            <span className="text-sf-mist mt-0.5 shrink-0 text-[9px]">•</span>
            <span className="text-[10px] text-sf-slate leading-snug flex-1">{item.text}</span>
            <Badge tag={item.tag} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function SlideReleases() {
  return (
    <div className="flex h-full w-full flex-col px-2 py-2 gap-2">

      {/* header */}
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }} className="shrink-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sf-blue">What's New</p>
        <h2 className="text-[34px] font-extrabold tracking-tight text-sf-navy leading-tight">
          Cortex AI — Last 6 Months
        </h2>
      </motion.div>

      {/* 6 month grid — 2 rows × 3 columns */}
      <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2 min-h-0">
        {MONTHS.map((m, i) => (
          <MonthCard key={m.month} {...m} delay={0.08 + i * 0.08} />
        ))}
      </div>

      {/* upcoming bar — enlarged */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="shrink-0 rounded-xl border border-sf-blue/30 bg-sf-blue/5 px-5 py-3"
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-sf-blue mb-2">Coming Soon</p>
        <div className="flex flex-wrap gap-2">
          {UPCOMING.map((item, i) => (
            <span key={i} className="rounded-full border border-sf-blue/25 bg-white/70 px-3 py-1 text-[12px] font-medium text-sf-slate">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
