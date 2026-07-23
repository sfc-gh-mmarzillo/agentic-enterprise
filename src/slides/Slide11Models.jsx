import { motion } from 'framer-motion'
import { Logo } from './logos'

const RING = [
  { name: 'Anthropic', bg: '#f1f2f4' },
  { name: 'OpenAI', bg: '#f1f2f4' },
  { name: 'Meta', bg: '#f1f2f4' },
  { name: 'Mistral', bg: '#f1f2f4' },
  { name: 'Deepseek', bg: '#f1f2f4' },
  { name: 'xAI', bg: '#f1f2f4' },
  { name: 'google cloud', bg: '#f1f2f4' },
]

export default function Slide11Models() {
  const R = 138
  return (
    <div className="grid h-full w-full grid-cols-2 items-center gap-10 px-6">
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-sf-purple">Model Flexibility</p>
        <h2 className="mt-2 text-[48px] font-extrabold leading-[1.02] tracking-tight text-sf-navy">
          Every frontier model.
          <br /><span className="text-sf-mist">One endpoint.</span>
        </h2>
        <p className="mt-3 text-[14px] text-sf-mist">Multi-provider routing at production scale</p>
        <ul className="mt-6 space-y-3 text-[14px] text-sf-slate">
          {['Switch models without code changes', 'Data never leaves the security boundary', 'Draws down on committed Snowflake spend'].map((b) => (
            <li key={b} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-sf-purple" />{b}</li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto h-[380px] w-[380px]">
        {/* orbit ring */}
        <div className="absolute inset-8 rounded-full border border-dashed border-sf-line" />
        {/* center */}
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 180, damping: 14 }}
          className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-sf-line bg-white p-4 shadow-[0_0_50px_-10px_rgba(41,181,232,0.6)]">
          <img src="/logos/snowflake.png" alt="Snowflake logo" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>
        {RING.map((m, i) => {
          const angle = (i / RING.length) * Math.PI * 2 - Math.PI / 2
          const left = 190 + Math.cos(angle) * R - 38
          const top = 190 + Math.sin(angle) * R - 38
          return (
            <motion.span key={m.name}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 + i * 0.18, type: 'spring', stiffness: 200, damping: 15 }}
              className="absolute grid h-[76px] w-[76px] place-items-center rounded-2xl p-3.5 shadow-[0_4px_14px_-6px_rgba(17,24,42,0.25)]"
              style={{ left, top, background: m.bg }}>
              <Logo name={m.name} />
            </motion.span>
          )
        })}
      </div>
    </div>
  )
}
