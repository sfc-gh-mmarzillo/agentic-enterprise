import { motion } from 'framer-motion'

export default function Slide11dAgentIntelligence() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 px-12 py-8">
      <div className="w-full max-w-[1200px] relative">
        {/* Top left box */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-0 left-0 w-[380px] bg-white border-2 border-blue-400 rounded-lg p-6 shadow-lg"
        >
          <p className="text-[17px] text-center leading-tight">
            Cortex AI Gateway<br/>enables the <span className="font-bold">agent intelligence<br/>layer</span>
          </p>
        </motion.div>

        {/* Top right box */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-0 right-0 w-[380px] bg-white border-2 border-blue-400 rounded-lg p-6 shadow-lg"
        >
          <p className="text-[17px] text-center leading-tight">
            Snowflake is already the trusted<br/><span className="font-bold">enterprise data & context<br/>layer</span> for AI
          </p>
        </motion.div>

        {/* Center circular flow */}
        <div className="flex items-center justify-center mt-32">
          <div className="relative w-[700px] h-[420px]">
            {/* SVG Circle with arrows */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 420">
              <defs>
                <marker id="arrowhead-flow" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
                  <path d="M0,0 L0,8 L10,4 z" fill="#38bdf8" />
                </marker>
              </defs>
              
              {/* Circular arrow path */}
              <motion.path
                d="M 450 80 A 180 180 0 0 1 600 210 M 600 210 A 180 180 0 0 1 350 360 M 350 360 A 180 180 0 0 1 100 210 M 100 210 A 180 180 0 0 1 250 80"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="16"
                markerEnd="url(#arrowhead-flow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </svg>

            {/* Top box - Agents Run */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#2C5F7C] rounded-2xl px-16 py-4 shadow-xl"
            >
              <p className="text-[22px] font-bold text-white text-center whitespace-nowrap">Agents Run</p>
            </motion.div>

            {/* Right box - Logs Stored */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#2C5F7C] rounded-2xl px-10 py-4 shadow-xl"
            >
              <p className="text-[20px] font-bold text-white text-center whitespace-nowrap">Logs Stored in Snowflake</p>
            </motion.div>

            {/* Bottom box - Performance Dashboards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#2C5F7C] rounded-2xl px-8 py-4 shadow-xl"
            >
              <p className="text-[19px] font-bold text-white text-center leading-snug">
                Agent Performance Dashboards<br/>
                CoCo Recommends Optimizations
              </p>
            </motion.div>

            {/* Left box - Govern Better */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#2C5F7C] rounded-2xl px-10 py-4 shadow-xl"
            >
              <p className="text-[20px] font-bold text-white text-center leading-snug">
                Govern Better.<br/>
                Build Smarter.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom mountain decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1400 60" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,30 Q350,10 700,30 T1400,30 L1400,60 L0,60 Z" fill="#e0f2fe" opacity="0.3"/>
            <path d="M0,40 Q350,25 700,40 T1400,40 L1400,60 L0,60 Z" fill="#7dd3fc" opacity="0.4"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
