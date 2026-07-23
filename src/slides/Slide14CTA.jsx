import { motion } from 'framer-motion'

const BUTTONS = ['POC Day Workshop', 'Architecture Workshop']

export default function Slide14CTA() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center">

      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[760px]">
        <p className="text-[30px] font-medium italic leading-snug text-sf-slate">
          &ldquo;The true magic of great technology is taking something very complicated and making it feel easy.&rdquo;
        </p>
        <p className="mt-4 text-[14px] text-sf-mist">&mdash; Sridhar Ramaswamy</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.2 }}
        className="mt-12 max-w-[640px]">
        <p className="text-[16px] text-sf-slate">The question is not whether your enterprise will adopt agentic AI.</p>
        <p className="mt-2 text-[22px] font-bold gradient-text">
          It&rsquo;s whether you&rsquo;ll have the foundation to do it safely, at scale, with trust.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 flex items-center gap-4">
        {BUTTONS.map((b, i) => (
          <motion.button key={b}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-full bg-sf-blue px-8 py-3 text-[15px] font-semibold text-white shadow-sm transition hover:bg-sf-blue-deep">
            {b}
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}
