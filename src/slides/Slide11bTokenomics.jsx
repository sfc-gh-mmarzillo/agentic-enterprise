import { motion } from 'framer-motion'

export default function Slide11bTokenomics() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 px-12 py-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 text-center"
      >
        <h1 className="text-[40px] font-black text-slate-900 mb-1">CoCo Delivers Better Tokenomics vs. Claude Code</h1>
        <p className="text-[16px] text-slate-600 font-medium">
          Enterprise AI coding productivity is more efficient on CoCo
        </p>
      </motion.div>

      {/* Example Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-[1050px] bg-blue-50/80 backdrop-blur-sm rounded-2xl border-2 border-blue-200 p-5 mb-6"
      >
        <div className="text-center mb-3">
          <p className="text-[20px] font-bold text-slate-800">
            Example: 20-step task (CoCo: <span className="text-blue-600 underline decoration-2 underline-offset-2">8 steps</span>, Claude+MCP: <span className="text-orange-600 underline decoration-2 underline-offset-2">20 steps</span>)
          </p>
          <p className="text-[14px] text-slate-600 italic mt-1">
            CoCo's Agent Harness drives coding productivity with better tokenomics
          </p>
        </div>

        {/* Visual comparison */}
        <div className="space-y-3">
          {/* CoCo row */}
          <div className="flex items-center gap-3">
            <div className="w-32 bg-blue-500 text-white font-bold text-[13px] py-2.5 px-4 rounded-lg shadow-md flex items-center justify-center">
              CoCo
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <div
                  key={num}
                  className="w-11 h-11 bg-blue-400 text-white font-bold text-[13px] rounded-lg shadow-sm flex items-center justify-center"
                >
                  {num}
                </div>
              ))}
              <div className="w-14 h-11 bg-slate-700 text-white font-bold text-[11px] rounded-lg shadow-md flex items-center justify-center">
                DONE
              </div>
            </div>
          </div>

          {/* Claude Code row */}
          <div className="flex items-center gap-3">
            <div className="w-32 bg-orange-500 text-white font-bold text-[12px] py-2.5 px-4 rounded-lg shadow-md flex items-center justify-center leading-tight">
              Claude Code +<br/>MCP
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => (
                <div
                  key={num}
                  className="w-11 h-11 bg-orange-200 text-slate-700 font-bold text-[13px] rounded-lg shadow-sm flex items-center justify-center"
                >
                  {num}
                </div>
              ))}
              <div className="w-14 h-11 bg-orange-500 text-white font-bold text-[11px] rounded-lg shadow-md flex items-center justify-center">
                ✓<br/>DONE
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Two columns */}
      <div className="w-full max-w-[1050px] grid grid-cols-2 gap-6">
        {/* Left: CoCo's Agent Harness */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl border-2 border-blue-200 p-5 shadow-lg"
        >
          <h2 className="text-[20px] font-bold text-blue-600 mb-4">CoCo's Agent Harness</h2>
          
          <ul className="space-y-3 text-[13px]">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold text-[14px]">•</span>
              <div>
                <span className="text-slate-700">Data built on live connection to Snowflake</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold text-[14px]">•</span>
              <div>
                <span className="font-bold text-slate-900">Token savings:</span>
                <span className="text-slate-700"> ~12K tokens/task × hundreds of tasks/week = significant cost reduction</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold text-[14px]">•</span>
              <div>
                <span className="font-bold text-slate-900">Time savings:</span>
                <span className="text-slate-700"> ~30-90 sec/task × hundreds of tasks/week = hours recovered</span>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Right: Claude Code + MCP */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-orange-50/80 backdrop-blur-sm rounded-xl border-2 border-orange-200 p-5 shadow-lg"
        >
          <h2 className="text-[20px] font-bold text-orange-600 mb-4">Claude Code + MCP = Less Efficient</h2>
          
          <ul className="space-y-3 text-[13px]">
            <li className="flex gap-3">
              <span className="text-orange-500 font-bold text-[14px]">•</span>
              <div>
                <span className="text-slate-700">Context built on system prompts trained on general world knowledge, NOT Snowflake specific information</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-orange-500 font-bold text-[14px]">•</span>
              <div>
                <span className="font-bold text-slate-900">More tokens:</span>
                <span className="text-slate-700"> ~500-2K TOKENS Per LLM round-trip</span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-orange-500 font-bold text-[14px]">•</span>
              <div>
                <span className="font-bold text-slate-900">Higher Latency:</span>
                <span className="text-slate-700"> ~2-8 sec LATENCY Per Snowflake call (query + network)</span>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
