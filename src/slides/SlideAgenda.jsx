const ITEMS = [
  { num: '01', label: 'Welcome & Introductions' },
  { num: '02', label: 'Snowflake Strategic Vision: Agentic Control Plane' },
  { num: '03', label: 'Agentic AI in Regulated Banking' },
  { num: '04', label: 'Business-First Governed, Efficient AI Framework' },
  { num: '05', label: 'Architecture Review + Q&A' },
]

export default function SlideAgenda() {
  return (
    <div className="flex h-full w-full items-center gap-12 px-4">
      {/* left: agenda list */}
      <div className="flex-1">
        <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-sf-blue mb-2">Today&rsquo;s Agenda</p>
        <h2 className="text-[44px] font-extrabold tracking-tight text-sf-navy mb-8">
          What we&rsquo;ll <span className="gradient-blue">cover</span>
        </h2>

        <div className="space-y-3">
          {ITEMS.map((item) => (
            <div key={item.num} className="flex items-center gap-4 rounded-xl border border-sf-line bg-white/60 px-4 py-3">
              <span className="text-[11px] font-bold tabular-nums text-sf-blue/50 w-5 shrink-0">{item.num}</span>
              <p className="text-[15px] font-semibold text-sf-ink">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* right: mountain + co-brand */}
      <div className="flex w-[280px] shrink-0 flex-col items-center justify-center gap-6">
        {/* mountain SVG decoration */}
        <svg viewBox="0 0 280 200" className="w-full opacity-80" fill="none">
          {/* back range */}
          <polygon points="40,180 130,60 220,180" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5" />
          <polygon points="110,180 200,80 290,180" fill="rgba(41,181,232,0.1)" stroke="rgba(41,181,232,0.22)" strokeWidth="1.5" />
          {/* front peak */}
          <polygon points="0,180 100,40 200,180" fill="rgba(41,181,232,0.18)" stroke="#29b5e8" strokeWidth="2" />
          {/* snow cap */}
          <polygon points="100,40 82,85 118,85" fill="white" opacity="0.9" />
          {/* base line */}
          <line x1="0" y1="180" x2="280" y2="180" stroke="rgba(203,213,225,0.5)" strokeWidth="1" />
        </svg>

        <div className="flex flex-col items-center gap-3">
          {/* logo section removed per design direction */}
        </div>
      </div>
    </div>
  )
}
