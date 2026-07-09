const BUTTONS = ['AI Readiness Assessment', 'CoWork Pilot', 'Architecture Workshop']

export default function Slide14CTA() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center">
      <div className="max-w-[760px]">
        <p className="text-[30px] font-medium italic leading-snug text-sf-slate">
          &ldquo;The true magic of great technology is taking something very complicated and making it feel easy.&rdquo;
        </p>
        <p className="mt-4 text-[14px] text-sf-mist">&mdash; Sridhar Ramaswamy</p>
      </div>

      <div className="mt-12 max-w-[640px]">
        <p className="text-[16px] text-sf-slate">The question is not whether your enterprise will adopt agentic AI.</p>
        <p className="mt-2 text-[22px] font-bold gradient-text">
          It&rsquo;s whether you&rsquo;ll have the foundation to do it safely, at scale, with trust.
        </p>
      </div>

      <div className="mt-12 flex items-center gap-4">
        {BUTTONS.map((b) => (
          <button key={b}
            className="rounded-full bg-sf-blue px-6 py-2.5 text-[14px] font-medium text-white shadow-sm transition hover:bg-sf-blue-deep">
            {b}
          </button>
        ))}
      </div>
    </div>
  )
}
