import { motion } from 'framer-motion'

export default function Slide11aCoCoVsClaude() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 px-12 py-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 text-center"
      >
        <h1 className="text-[40px] font-black text-slate-900 mb-1">CoCo vs. Claude Code</h1>
        <p className="text-[16px] text-slate-600 font-medium">
          Claude Code's continuous re-discovery erodes quality while compounding cost
        </p>
      </motion.div>

      <div className="w-full max-w-[1100px] grid grid-cols-2 gap-6 mb-6">
        {/* Claude Code Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-orange-200 p-5 shadow-lg"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="bg-orange-100 px-6 py-2 rounded-full">
              <h2 className="text-[14px] font-bold text-slate-700">Claude Code</h2>
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-[18px] font-bold text-orange-600 mb-3">A General Purpose Coding Agent</h3>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-[13px] font-bold text-slate-900 mb-2">Enterprise AI Coding Productivity</h4>
              <ul className="space-y-2 text-[12px] text-slate-700">
                <li className="flex gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><span className="font-semibold">Must repeatedly rediscover enterprise context</span> through fragmented MCP calls instead of working from governed, native business context.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><span className="font-semibold">Lower quality:</span> Without a context layer, Claude Code inspects tables and schemas individually to locate relevant data, and build the query.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><span className="font-semibold">Claude Code is anchored to Anthropic model stack</span> and connects to enterprise systems through external MCP integrations.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] font-bold text-slate-900 mb-2">Tokenomics</h4>
              <ul className="space-y-2 text-[12px] text-slate-700">
                <li className="flex gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><span className="font-semibold">Runaway tokens —</span> Every turn re-discovers your schema with more turns to get the right answer, then every turn rediscovers. Per-person token costs are high.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><span className="font-semibold">Locked into Claude model family,</span> making it costly to switch as prompts, evaluations, and tools often need to be reworked.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CoCo Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-blue-300 p-5 shadow-lg"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-500 px-6 py-2 rounded-full">
              <h2 className="text-[14px] font-bold text-white">CoCo</h2>
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-[18px] font-bold text-blue-600 mb-3">Built For Data-Intensive AI Coding</h3>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-[13px] font-bold text-slate-900 mb-2">Enterprise AI Coding Productivity</h4>
              <ul className="space-y-2 text-[12px] text-slate-700">
                <li className="flex gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><span className="font-semibold">CoCo starts with native Snowflake context:</span> semantic definitions, metrics, documents, workflows, permissions, tools, evals, observability, and cost controls.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><span className="font-semibold">Higher quality</span> CoCo outperforms Claude Code on ADE Bench and pulls even further ahead on real Snowflake dbt project tasks.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><span className="font-semibold">CoCo intelligently selects the highest-quality available model</span> and continuously improving routing logic to optimize performance and reduce cost.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] font-bold text-slate-900 mb-2">Tokenomics</h4>
              <ul className="space-y-2 text-[12px] text-slate-700">
                <li className="flex gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><span className="font-semibold">Token efficiency advantage –</span> developers solve complex engineering projects up to 2X faster with -51% less tokens used and in 1hr less time.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><span className="font-semibold">Built-in cost governance</span> - AI Credits, AI Budgets, per-user quotas, tag-based cost attribution, near-real-time visibility, and proactive budget alerts.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Risks & Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-[1100px] bg-white/60 backdrop-blur-sm rounded-xl border border-slate-300 p-4"
      >
        <div className="flex items-start gap-8">
          <div className="flex items-center gap-3 min-w-[140px]">
            <span className="text-[13px] font-bold text-slate-700">Risks &<br/>Impact</span>
          </div>
          
          <div className="flex-1 grid grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[12px] font-bold text-slate-600">1</span>
              </div>
              <p className="text-[12px] text-slate-700 leading-relaxed">
                <span className="font-semibold">Claude Code reconstructs Snowflake context through MCP and tool calls</span>
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[12px] font-bold text-slate-600">2</span>
              </div>
              <p className="text-[12px] text-slate-700 leading-relaxed">
                <span className="font-semibold">Context rediscovery, fragmented data access leads to hidden costs from inefficient token usage.</span>
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[12px] font-bold text-slate-600">3</span>
              </div>
              <p className="text-[12px] text-slate-700 leading-relaxed">
                <span className="font-semibold">Teams become systems integrators, connecting context, governance, tools</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
