import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Slide05bTools() {
  const [step, setStep] = useState(0)

  const advance = useCallback(() => {
    setStep(s => Math.min(s + 1, 1))
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (['ArrowRight', ' ', 'PageDown'].includes(e.key)) {
        if (step < 1) {
          e.preventDefault()
          e.stopImmediatePropagation()
          advance()
        }
      }
    }
    window.addEventListener('keydown', onKey, { capture: true })
    return () => window.removeEventListener('keydown', onKey, { capture: true })
  }, [step, advance])

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <AnimatePresence mode="wait">
        {step === 0 ? (
          <motion.div
            key="tools"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex items-center justify-center p-8"
          >
            <img 
              src="/tools.png" 
              alt="Agent Tool Ecosystem"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        ) : (
          <motion.div
            key="gateway"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex items-center justify-center p-8"
          >
            <img 
              src="/gateway.png" 
              alt="Cortex AI Gateway"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
