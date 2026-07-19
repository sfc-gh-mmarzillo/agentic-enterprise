const ACTIONS = [
  { label: 'Cortex Build Day', desc: 'A full-day hands-on session building your first agentic workflow on Snowflake — with your data, your use case, your team.' },
  { label: 'Architecture Workshop', desc: 'Deep-dive on your data estate, governance requirements, and agentic roadmap with Snowflake solutions engineering.' },
]

export default function SlideClose() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center px-10">
      {/* co-brand */}
      <div className="flex items-center gap-5 mb-8">
        <img src="/logos/snowflake.png" alt="Snowflake" className="h-8 object-contain" />
        <span className="h-5 w-px bg-sf-line" />
        <img src="/team/fifth-third-logo.png" alt="Fifth Third Bank" className="h-8 object-contain" />
      </div>

      <h2 className="text-[52px] font-extrabold tracking-tight text-sf-navy mb-3">
        Ready to <span className="gradient-blue">build</span> together?
      </h2>
      <p className="text-[16px] text-sf-mist max-w-[560px] mb-10">
        Your data is already in Snowflake. The intelligence layer is ready.<br />
        The only question is where to start.
      </p>

      <div className="grid grid-cols-2 gap-6 w-full max-w-[720px]">
        {ACTIONS.map((a) => (
          <div key={a.label} className="rounded-2xl border border-sf-line bg-white/70 px-4 py-5 text-left">
            <p className="text-[13.5px] font-bold text-sf-ink mb-2">{a.label}</p>
            <p className="text-[12px] text-sf-slate leading-snug">{a.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-[13px] text-sf-mist">
        Let&rsquo;s find 30 minutes to align on the right starting point.
      </p>
    </div>
  )
}
