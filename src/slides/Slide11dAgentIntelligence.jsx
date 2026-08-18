import { motion } from 'framer-motion'

export default function Slide11dAgentIntelligence() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 px-16 py-12">
      <div className="w-full max-w-[1150px] relative">
        
        {/* Top boxes */}
        <div className="flex justify-between items-start mb-16">
          {/* Left box */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-[450px] bg-white/90 backdrop-blur-sm border-2 border-blue-400 rounded-2xl px-8 py-6 shadow-lg"
          >
            <p className="text-[18px] text-center leading-relaxed text-slate-800">
              Cortex AI Gateway<br/>
              enables the <span className="font-bold text-blue-600">agent intelligence<br/>layer</span>
            </p>
          </motion.div>

          {/* Right box */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-[450px] bg-white/90 backdrop-blur-sm border-2 border-blue-400 rounded-2xl px-8 py-6 shadow-lg"
          >
            <p className="text-[18px] text-center leading-relaxed text-slate-800">
              Snowflake is already the trusted<br/>
              <span className="font-bold text-blue-600">enterprise data & context<br/>layer</span> for AI
            </p>
          </motion.div>
        </div>

        {/* Center circular flow diagram */}
        <div className="flex items-center justify-center">
          <div className="relative w-[750px] h-[380px]">
            
            {/* Background circle guide */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 750 380" style={{ overflow: 'visible' }}>
              <defs>
                {/* Gradient for arrow */}
                <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>

              {/* Circular path - smooth and clean, no arrowhead */}
              <motion.path
                d="M 520 100 
                   C 620 100, 680 160, 680 260
                   C 680 340, 640 370, 560 370
                   C 480 370, 375 370, 375 370
                   C 375 370, 270 370, 190 370
                   C 110 370, 70 340, 70 260
                   C 70 160, 130 100, 230 100"
                fill="none"
                stroke="url(#arrow-gradient)"
                strokeWidth="20"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
              />
            </svg>

            {/* Circular boxes positioned around the flow */}
            
            {/* Top: Agents Run - moved down to fit in circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: "spring" }}
              className="absolute top-[50px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2C5F7C] to-[#3d7a9c] rounded-2xl px-14 py-4 shadow-xl border-2 border-white/20"
            >
              <p className="text-[24px] font-bold text-white whitespace-nowrap">Agents Run</p>
            </motion.div>

            {/* Right: Logs Stored */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute right-0 top-[45%] -translate-y-1/2 bg-gradient-to-r from-[#2C5F7C] to-[#3d7a9c] rounded-2xl px-10 py-4 shadow-xl border-2 border-white/20"
            >
              <p className="text-[20px] font-bold text-white whitespace-nowrap">
                Logs Stored in<br/>Snowflake
              </p>
            </motion.div>

            {/* Bottom: Performance & Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2C5F7C] to-[#3d7a9c] rounded-2xl px-8 py-4 shadow-xl border-2 border-white/20"
            >
              <p className="text-[18px] font-bold text-white text-center leading-snug">
                Agent Performance Dashboards<br/>
                CoCo Recommends Optimizations
              </p>
            </motion.div>

            {/* Left: Govern & Build */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute left-0 top-[45%] -translate-y-1/2 bg-gradient-to-r from-[#2C5F7C] to-[#3d7a9c] rounded-2xl px-10 py-4 shadow-xl border-2 border-white/20"
            >
              <p className="text-[20px] font-bold text-white text-center leading-snug">
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
