export default function SlideQuote() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center px-12">
      <div className="max-w-[760px]">
        <p className="text-[42px] font-light text-sf-blue leading-none mb-6">&ldquo;</p>
        <p className="text-[26px] font-medium italic leading-snug text-sf-slate">
          Every company is becoming a data company. The ones that win will be the ones
          that can act on that data &mdash; intelligently, at speed, and at scale.
        </p>
        <p className="mt-8 text-[14px] font-semibold text-sf-blue">Sridhar Ramaswamy</p>
        <p className="mt-1 text-[12px] text-sf-mist">CEO, Snowflake</p>
      </div>

      <div className="mt-12 flex items-center gap-3">
        <img src="/logos/snowflake.png" alt="Snowflake" className="h-6 object-contain opacity-50" />
      </div>
    </div>
  )
}
