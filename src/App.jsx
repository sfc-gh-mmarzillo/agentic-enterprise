import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ParticleBackground from './components/ParticleBackground'

const DESIGN_W = 1180
const DESIGN_H = 664

import Slide01Cover from './slides/Slide01Cover'
import Slide02Insight from './slides/Slide02Insight'
import Slide03NotReady from './slides/Slide03NotReady'
import Slide04Industries from './slides/Slide04Industries'
import Slide05ControlPlane from './slides/Slide05ControlPlane'
import Slide06Customers from './slides/Slide06Customers'
import Slide07AgentsAct from './slides/Slide07AgentsAct'
import Slide08AgentsBuild from './slides/Slide08AgentsBuild'
import Slide09Meaning from './slides/Slide09Meaning'
import Slide10Proof from './slides/Slide10Proof'
import Slide10Secure from './slides/Slide10Secure'
import Slide11Models from './slides/Slide11Models'
import Slide12FinOps from './slides/Slide12FinOps'
import Slide13OnePlatform from './slides/Slide13OnePlatform'
import Slide14CTA from './slides/Slide14CTA'
import Slide15CTAClean from './slides/Slide15CTAClean'
import SlideCoverClean from './slides/SlideCoverClean'
import SlideQuoteLisa from './slides/SlideQuoteLisa'

const SLIDES = [
  SlideCoverClean, SlideQuoteLisa, Slide01Cover, Slide02Insight, Slide03NotReady, Slide04Industries,
  Slide05ControlPlane, Slide06Customers, Slide07AgentsAct, Slide08AgentsBuild,
  Slide09Meaning, Slide10Proof, Slide10Secure, Slide11Models, Slide12FinOps,
  Slide13OnePlatform, Slide14CTA, Slide15CTAClean,
]

const TITLES = [
  'Title', 'Quote', 'Cover', 'The Insight', 'Not Ready', 'Art of the Possible',
  'The Control Plane', 'Customers', 'Agents that Act', 'Agents that Build',
  'Meaning', 'Why We Win', 'Secure by Design', 'Model Flexibility', 'FinOps',
  'One Platform', 'Call to Action', 'Close',
]

const NOTES = [
  'Opening title slide — The Agentic Enterprise.',
  'Icebreaker quote.',
  'Open with the vision: Snowflake Cortex Code brings agentic AI directly to where data work happens.',
  'Frame the core insight driving the shift to the agentic enterprise.',
  'Most organizations are not yet ready for agents — call out the readiness gap.',
  'Walk through a live use case per industry and LOB: sources → processing → agentic ML → agent action. Let the pipeline animate.',
  'Position Cortex as the control plane that unifies governance, compute, and models.',
  'Reinforce with customer proof points and outcomes.',
  'Show agents taking action against governed data, not just answering questions.',
  'Show how teams build and deploy agents quickly on Snowflake.',
  'Tie the capabilities back to business meaning and value.',
  'Assertive proof slide: same model, better accuracy (24.1%→47.1%→86.3%), 4× fewer tokens, 28% faster pipelines, 66% lower cost. Anonymized customer outcomes by industry (3–10× productivity; zero data egress) and the hard question types CoCo excels at. Context is the differentiator.',
  'AI security: three pillars — Agent, Data, Platform Security. Deep dive on Agent Security: Horizon AI Guardrails (real-time prompt-injection/jailbreak prevention, on by default) and automated AI Security Posture Management vs. CIS benchmarks via Trust Center. Customer proof: 20+ governed agents in production.',
  'Every frontier model, one endpoint — switch providers with no code changes, spend draws down on committed Snowflake.',
  'Cover FinOps: cost visibility and control for AI workloads.',
  'One platform across clouds and tools — highlight the ecosystem logos.',
  'Close with a clear call to action and next steps.',
  'Clean close — no action items, just the statement.',
]

const variants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
}

export default function App() {
  const [[index, dir], setState] = useState([0, 0])
  const [dark, setDark] = useState(false)
  const [panel, setPanel] = useState(null) // 'notes' | 'slides' | null
  const [hidden, setHidden] = useState(() => new Set())
  const [order, setOrder] = useState(() => SLIDES.map((_, i) => i))
  const dragRef = useRef(null)
  const total = SLIDES.length

  const visible = order.filter((i) => !hidden.has(i))
  const pos = visible.indexOf(index)

  const goToPos = useCallback((p, d) => {
    if (!visible.length) return
    const clamped = Math.max(0, Math.min(visible.length - 1, p))
    setState([visible[clamped], d])
  }, [visible])

  const next = useCallback(() => goToPos(pos + 1, 1), [goToPos, pos])
  const prev = useCallback(() => goToPos(pos - 1, -1), [goToPos, pos])
  const go = useCallback((abs) => {
    if (!hidden.has(abs)) setState(([cur]) => [abs, abs > cur ? 1 : -1])
  }, [hidden])

  // If the active slide gets hidden, jump to the nearest visible one.
  useEffect(() => {
    if (hidden.has(index) && visible.length) {
      const nearest = visible.reduce((a, b) => (Math.abs(b - index) < Math.abs(a - index) ? b : a), visible[0])
      setState([nearest, 1])
    }
  }, [hidden, index, visible])

  const toggleHidden = (i) => {
    setHidden((prev) => {
      const nextSet = new Set(prev)
      if (nextSet.has(i)) nextSet.delete(i)
      else if (total - nextSet.size > 1) nextSet.add(i) // never hide the last visible slide
      return nextSet
    })
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); next() }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev() }
      else if (e.key === 'Home') goToPos(0, -1)
      else if (e.key === 'End') goToPos(visible.length - 1, 1)
      else if (e.key === 'Escape') setPanel(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, goToPos, visible.length])

  const Current = SLIDES[index]

  // Scale a fixed design canvas up/down to fill the browser window uniformly.
  const stageRef = useRef(null)
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const compute = () => {
      const { width, height } = el.getBoundingClientRect()
      setScale(Math.min(width / DESIGN_W, height / DESIGN_H))
    }
    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div className={`relative h-screen w-screen overflow-hidden ${dark ? 'deck-dark' : ''}`}
      style={{ background: 'radial-gradient(1200px 600px at 50% -10%, #ffffff 0%, #eef1f6 55%, #e7ebf2 100%)' }}>
      <ParticleBackground />

      {/* top progress bar */}
      <div className="absolute left-0 top-0 z-30 h-[3px] w-full bg-transparent">
        <div className="h-full transition-all duration-500"
          style={{ width: `${((pos + 1) / visible.length) * 100}%`, background: 'linear-gradient(90deg,#29b5e8,#6366f1,#8b5cf6)' }} />
      </div>

      {/* click zones */}
      <button aria-label="Previous" onClick={prev}
        className="absolute left-0 top-0 z-10 h-full w-[18%] cursor-w-resize bg-transparent" />
      <button aria-label="Next" onClick={next}
        className="absolute right-0 top-0 z-10 h-full w-[18%] cursor-e-resize bg-transparent" />

      {/* slide stage */}
      <div ref={stageRef} className="absolute inset-0 z-[5] flex items-center justify-center px-6 pb-14 pt-6">
        <div className="relative" style={{ width: DESIGN_W, height: DESIGN_H, transform: `scale(${scale})`, transformOrigin: 'center center' }}>
          <AnimatePresence custom={dir} mode="wait">
            <motion.div key={index} custom={dir} variants={variants}
              initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center">
              <Current />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* speaker notes overlay */}
      <AnimatePresence>
        {panel === 'notes' && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}
            className="absolute bottom-20 left-1/2 z-40 w-[560px] max-w-[88vw] -translate-x-1/2 rounded-2xl border border-sf-line bg-white p-4 shadow-[0_18px_50px_-16px_rgba(15,23,42,0.4)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sf-blue">
              Slide {pos + 1} · {TITLES[index]}
            </p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-sf-ink">{NOTES[index]}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* slide show/hide manager */}
      <AnimatePresence>
        {panel === 'slides' && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}
            className="absolute bottom-20 right-6 z-40 max-h-[62vh] w-[300px] overflow-auto rounded-2xl border border-sf-line bg-white p-3 shadow-[0_18px_50px_-16px_rgba(15,23,42,0.4)]">
            <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sf-blue">Show / hide · drag to reorder</p>
            <div className="space-y-0.5">
              {order.map((origIdx, orderPos) => {
                const isHidden = hidden.has(origIdx)
                return (
                  <div key={origIdx}
                    draggable
                    onDragStart={() => { dragRef.current = orderPos }}
                    onDragOver={(e) => {
                      e.preventDefault()
                      const from = dragRef.current
                      if (from === null || from === orderPos) return
                      setOrder((prev) => {
                        const next = [...prev]
                        const [item] = next.splice(from, 1)
                        next.splice(orderPos, 0, item)
                        return next
                      })
                      dragRef.current = orderPos
                    }}
                    onDragEnd={() => { dragRef.current = null }}
                    className={`flex cursor-grab items-center gap-2 rounded-lg px-2 py-1.5 text-[12.5px] active:cursor-grabbing ${origIdx === index ? 'bg-sf-blue/10' : ''}`}>
                    <GripIcon />
                    <button onClick={() => go(origIdx)} disabled={isHidden}
                      className={`flex-1 text-left ${isHidden ? 'text-sf-mist line-through' : 'text-sf-ink'} disabled:cursor-not-allowed`}>
                      <span className="tabular-nums text-sf-mist">{orderPos + 1}.</span> {TITLES[origIdx]}
                    </button>
                    <button onClick={() => toggleHidden(origIdx)} aria-label={isHidden ? 'Show slide' : 'Hide slide'}
                      className="grid h-6 w-6 place-items-center rounded text-sf-slate transition hover:bg-sf-panel">
                      {isHidden ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* bottom nav */}
      <div className="absolute bottom-0 left-0 z-30 flex w-full items-center justify-between px-6 py-4 text-sf-mist">
        <button onClick={prev} disabled={pos <= 0}
          className="grid h-8 w-8 place-items-center rounded-full text-sf-slate transition hover:bg-white/70 disabled:opacity-30">
          <Chevron dir="left" />
        </button>

        <div className="flex items-center gap-1.5">
          {visible.map((i) => (
            <button key={i} onClick={() => go(i)} aria-label={`Slide ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? 26 : 6,
                background: i === index ? '#29b5e8' : '#cbd5e1',
              }} />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[13px] tabular-nums text-sf-slate">{pos + 1} / {visible.length}</span>
          <NavIcon label="Slide notes" active={panel === 'notes'} onClick={() => setPanel((p) => (p === 'notes' ? null : 'notes'))}><IconDoc /></NavIcon>
          <NavIcon label="Show / hide slides" active={panel === 'slides'} onClick={() => setPanel((p) => (p === 'slides' ? null : 'slides'))}><IconLayers /></NavIcon>
          <NavIcon label="Toggle dark mode" active={dark} onClick={() => setDark((v) => !v)}>{dark ? <IconMoon /> : <IconSun />}</NavIcon>
          <button onClick={next} disabled={pos >= visible.length - 1}
            className="grid h-8 w-8 place-items-center rounded-lg border border-sf-blue text-sf-blue transition hover:bg-sf-blue hover:text-white disabled:opacity-30">
            <Chevron dir="right" />
          </button>
        </div>
      </div>
    </div>
  )
}

function NavIcon({ label, active, onClick, children }) {
  return (
    <button aria-label={label} title={label} onClick={onClick}
      className={`grid h-8 w-8 place-items-center rounded-lg transition hover:bg-white/70 ${active ? 'bg-sf-blue/12 text-sf-blue' : 'text-sf-mist'}`}>
      {children}
    </button>
  )
}

function Chevron({ dir }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {dir === 'left' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
    </svg>
  )
}
const IconDoc = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>)
const IconLayers = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>)
const IconSun = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>)
const IconMoon = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>)
const Eye = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>)
const EyeOff = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M17.9 17.9A10.6 10.6 0 0 1 12 19c-6.5 0-10-7-10-7a18 18 0 0 1 5.1-5.9m3.3-1A10.6 10.6 0 0 1 12 5c6.5 0 10 7 10 7a18 18 0 0 1-2.3 3.3M1 1l22 22"/></svg>)
const GripIcon = () => (<svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="shrink-0 text-sf-mist"><circle cx="4" cy="3" r="1"/><circle cx="8" cy="3" r="1"/><circle cx="4" cy="6" r="1"/><circle cx="8" cy="6" r="1"/><circle cx="4" cy="9" r="1"/><circle cx="8" cy="9" r="1"/></svg>)
