import { motion } from 'framer-motion'

export default function Slide11dAgentIntelligence() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-16 py-10">
      <div className="w-full max-w-[1200px]">
        
        {/* Top section with two boxes */}
        <div className="flex justify-between items-start mb-12">
          {/* Left box */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-[480px] bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl px-10 py-7 shadow-sm"
          >
            <p className="text-[19px] text-center leading-relaxed text-slate-700">
              Cortex AI Gateway enables the<br/>
              <span className="font-bold text-slate-900">agent intelligence layer</span>
            </p>
          </motion.div>

          {/* Right box */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-[480px] bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl px-10 py-7 shadow-sm"
          >
            <p className="text-[19px] text-center leading-relaxed text-slate-700">
              Snowflake is already the trusted<br/>
              <span className="font-bold text-slate-900">enterprise data & context layer</span> for AI
            </p>
          </motion.div>
        </div>

        {/* Circular flow diagram */}
        <div className="flex items-center justify-center">
          <div className="relative w-[850px] h-[400px]">
            
            {/* SVG Circle */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 850 400" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Clean circular path */}
              <motion.circle
                cx="425"
                cy="200"
                r="150"
                fill="none"
                stroke="url(#flow-gradient)"
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray="942"
                strokeDashoffset="942"
                initial={{ strokeDashoffset: 942 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
              />
            </svg>

            {/* Flow boxes positioned around the circle */}
            
            {/* Top: Agents Run */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-[30px] left-1/2 -translate-x-1/2 bg-slate-700 rounded-xl px-12 py-3.5 shadow-md"
            >
              <p className="text-[22px] font-semibold text-white whitespace-nowrap">Agents Run</p>
            </motion.div>

            {/* Right: Logs Stored */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="absolute right-[20px] top-[50%] -translate-y-1/2 bg-slate-700 rounded-xl px-9 py-3.5 shadow-md text-center"
            >
              <p className="text-[19px] font-semibold text-white leading-snug">
                Logs Stored in<br/>Snowflake
              </p>
            </motion.div>

            {/* Bottom: Performance & Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-[20px] left-1/2 -translate-x-1/2 bg-slate-700 rounded-xl px-8 py-3.5 shadow-md"
            >
              <p className="text-[17px] font-semibold text-white text-center leading-snug">
                Agent Performance Dashboards<br/>
                CoCo Recommends Optimizations
              </p>
            </motion.div>

            {/* Left: Govern & Build */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute left-[20px] top-[50%] -translate-y-1/2 bg-slate-700 rounded-xl px-9 py-3.5 shadow-md text-center"
            >
              <p className="text-[19px] font-semibold text-white leading-snug">
                Govern Better.<br/>
                Build Smarter.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  )
}
