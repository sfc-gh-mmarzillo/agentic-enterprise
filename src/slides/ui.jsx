export function Kicker({ children, color = 'text-sf-blue' }) {
  return (
    <p className={`mb-3 text-[12px] font-semibold uppercase tracking-[0.22em] ${color}`}>
      {children}
    </p>
  )
}

export function Card({ children, className = '', tint }) {
  return (
    <div
      className={`rounded-2xl border border-sf-line bg-white/85 shadow-[0_10px_40px_-18px_rgba(30,41,59,0.35)] backdrop-blur-sm ${className}`}
      style={tint ? { background: tint } : undefined}
    >
      {children}
    </div>
  )
}

export function Pill({ children, active, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12.5px] transition ${
        active
          ? 'border-transparent bg-sf-blue text-white shadow-sm'
          : 'border-sf-line bg-white/80 text-sf-slate'
      } ${className}`}
    >
      {children}
    </span>
  )
}

export function Dot({ color = '#8b5cf6' }) {
  return <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: color }} />
}
