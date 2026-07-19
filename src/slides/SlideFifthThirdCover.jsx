export default function SlideFifthThirdCover() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center px-10">
      {/* co-brand logos */}
      <div className="flex items-center gap-6 mb-10">
        <img src="/logos/snowflake.png" alt="Snowflake" className="h-10 object-contain" />
        <span className="text-[28px] font-thin text-sf-mist">×</span>
        <img src="/team/fifth-third-logo.png" alt="Fifth Third Bank" className="h-44 object-contain" />
      </div>

      <h1 className="leading-[1.06] tracking-tight">
        <span className="block text-[68px] font-extrabold gradient-text">The Agentic</span>
        <span className="block text-[68px] font-extrabold text-sf-navy">Enterprise</span>
      </h1>

      <p className="mt-5 text-[18px] text-sf-slate max-w-[600px]">
        Turning Enterprise Context into Governed Agentic Action
      </p>

      <div className="mt-10 flex items-center gap-3">
        <span className="h-px w-12 bg-sf-line" />
        <p className="text-[13px] text-sf-mist uppercase tracking-[0.22em] font-semibold">Snowflake · Fifth Third Bank</p>
        <span className="h-px w-12 bg-sf-line" />
      </div>
    </div>
  )
}
