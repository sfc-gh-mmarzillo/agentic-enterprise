export default function Slide01Cover() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center">
      <h1 className="leading-[1.08] tracking-tight">
        <span className="block pb-1 text-[64px] font-extrabold gradient-text sm:text-[80px]">The Agentic</span>
        <span className="block text-[64px] font-extrabold text-sf-navy sm:text-[80px]">Enterprise</span>
      </h1>

      <p className="mt-6 text-[19px] text-sf-slate">
        Turning Enterprise Context into Governed Agentic Action
      </p>

      <div className="mt-14 max-w-[720px]">
        <p className="text-[17px] leading-relaxed text-sf-mist">
          &ldquo;We are entering the era of the agentic enterprise, ushering in a fundamentally
          new way to work&hellip; unlocking new levels of productivity &amp; efficiency by embedding
          intelligence directly into the operating fabric of the enterprise&rdquo;
        </p>
        <p className="mt-4 text-[14px] font-medium text-sf-teal">Sridhar Ramaswamy, June 2026</p>
      </div>
    </div>
  )
}
