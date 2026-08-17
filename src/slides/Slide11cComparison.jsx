import { motion } from 'framer-motion'

export default function Slide11cComparison() {
  const rows = [
    {
      category: 'Model Flexibility',
      coco: 'Model-agnostic — CoCo automatically routes prompts to best (most efficient) model for task (Claude, GPT, Gemini, DeepSeek, Grok, Kimi).',
      claude: 'Anthropic only — locked to a single model family. No cross-model routing or price/performance optimization.'
    },
    {
      category: 'Cost Controls',
      coco: 'Snowflake Budgets, Resource Monitors, and per-user Quotas apply directly to CoCo spend w/ hard caps, auto-suspend, quota notifications',
      claude: 'Rate limits and plan tiers set at the Anthropic account level. No native integration with Snowflake budgets or per-user quotas'
    },
    {
      category: 'Data Security',
      coco: 'Policies travel with the data. Native RBAC, masking, and audit built-in. Governed agents with agent identity, governed MCPs',
      claude: 'Connecting Claude to Snowflake via SQL MCP - data masking, cost controls and policy enforcement become a parallel governance layer'
    },
    {
      category: 'Enterprise Context',
      coco: 'Built-in: schemas, tables, metadata, governance out of the box',
      claude: 'Must build enterprise context through external APIs & MCPs'
    },
    {
      category: 'Pricing Model',
      coco: 'Pricing based on Snowflake AI Credits (usage based) drawing down from existing Snowflake commitments',
      claude: 'Combination pricing model including plan based, usage based, seat based, model based'
    },
    {
      category: 'Commercial Model',
      coco: 'Single contract',
      claude: 'May include multiple contracts'
    },
    {
      category: 'AI Security',
      coco: 'Snowflake SSO, MFA & SCIM — native identity governance',
      claude: 'Support for SSO, SCIM that require separate credential management outside Snowflake',
      claudeLink: true
    },
    {
      category: 'Connectivity (MCP)',
      coco: 'Snowflake managed MCP: Jira, Confluence, GitHub, SFDC, Google Workspace, Slack, plus growing verified library through Natoma acquisition',
      cocoLink: true,
      claude: 'Snowflake MCP connectors available but require separate configuration outside Snowflake governance'
    },
    {
      category: 'Token Consumption Visibility',
      coco: 'Token/credit visible in CORTEX_FUNCTIONS_USAGE_HISTORY attributed by user, role, and query tag.',
      claude: 'Consumption visible only in Anthropic\'s admin console. No SQL-queryable telemetry, no per-role/per-tag attribution'
    }
  ]

  return (
    <div className="flex h-full w-full flex-col items-center justify-start bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 px-12 py-6 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-center"
      >
        <h1 className="text-[36px] font-black text-slate-900 mb-1">Key Differences: CoCo and Claude Code</h1>
        <p className="text-[14px] text-slate-600 font-medium">
          A direct comparison of CoCo to Claude Code across AI coding capabilities
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-[1150px] mb-6"
      >
        <table className="w-full border-collapse bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
          <thead>
            <tr>
              <th className="bg-slate-100 border-b-2 border-slate-300 px-4 py-3 text-left w-[180px]"></th>
              <th className="bg-blue-500 border-b-2 border-blue-600 px-4 py-3 text-left text-white font-bold text-[14px]">
                Snowflake CoCo
              </th>
              <th className="bg-orange-500 border-b-2 border-orange-600 px-4 py-3 text-left text-white font-bold text-[14px]">
                Claude Code
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-b border-slate-200 hover:bg-blue-50/30 transition-colors">
                <td className="bg-slate-50 px-4 py-2.5 font-bold text-[11.5px] text-slate-800 align-top">
                  {row.category}
                </td>
                <td className="px-4 py-2.5 text-[11px] text-slate-700 leading-snug align-top">
                  {row.coco}
                  {row.cocoLink && (
                    <>
                      {' '}
                      <a href="#" className="text-blue-600 underline">Slack</a>
                      {', '}
                      <a href="#" className="text-blue-600 underline">Natoma acquisition</a>
                    </>
                  )}
                </td>
                <td className="px-4 py-2.5 text-[11px] text-slate-700 leading-snug align-top">
                  {row.claude}
                  {row.claudeLink && (
                    <>
                      {' '}
                      <a href="#" className="text-blue-600 underline">Support</a>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}
