function SectionBreak({ title }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center px-16">
      <div className="flex items-center gap-5 mb-8">
        <span className="h-px w-24" style={{ background: 'linear-gradient(to right, transparent, #29b5e8)' }} />
        <img src="/logos/snowflake.png" alt="" className="h-8 object-contain opacity-50" />
        <span className="h-px w-24" style={{ background: 'linear-gradient(to left, transparent, #29b5e8)' }} />
      </div>
      <h2 className="text-[54px] font-extrabold tracking-tight text-sf-navy leading-tight max-w-[860px]">
        {title}
      </h2>
    </div>
  )
}

export function SlideBreakAgenticCP() {
  return <SectionBreak title="Agentic Control Plane &amp; Release Updates" />
}

export function SlideBreakGoverned() {
  return <SectionBreak title="Business-First Governed, Efficient AI Framework" />
}

export function SlideBreakBanking() {
  return <SectionBreak title="Agentic AI in Regulated Banking" />
}

export function SlideBreakNextSteps() {
  return <SectionBreak title="Next Steps &amp; Q&amp;A" />
}
