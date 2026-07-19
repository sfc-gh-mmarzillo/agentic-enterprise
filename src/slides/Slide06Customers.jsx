const CARDS = [
  {
    tag: 'BIOPHARMA', color: '#0d9488', name: 'Sanofi', metric: 'Hours → seconds', metricColor: 'text-sf-teal',
    sub: 'for field rep pre-call plans',
    body: 'Cortex AI + CoWork powers 20,000+ global sales reps with AI-generated physician briefings, prescribing patterns, and next-best actions — delivered to their inbox before every visit.',
    quote: 'We are building AI directly on our data and reinventing how the company runs, from R&D to manufacturing to commercial. This is how Sanofi becomes the first biopharma powered by AI at scale.',
    who: 'Emmanuel Frenehard, Chief Digital Officer, Sanofi',
    tags: ['Cortex AI', 'CoWork', 'Agentic Workflows'],
  },
  {
    tag: 'PHARMACEUTICAL', color: '#2563eb', name: 'AstraZeneca', metric: '$10M+', metricColor: 'gradient-blue',
    sub: 'productivity savings',
    body: 'Unified research and ERP data across SAP and Snowflake via zero-copy integration. AI-driven drug discovery pipelines accelerate early disease detection and patient outcomes, with OpenFlow powering unstructured clinical data ingestion.',
    quote: 'Every minute matters to make breakthroughs for patients. Our collaboration with Snowflake accelerates our mission by letting us access, process, and analyze real-time data at scale.',
    who: 'Russell Smith, VP ERP Transformation Technology, AstraZeneca',
    tags: ['Cortex AI', 'OpenFlow', 'SAP + Snowflake'],
  },
  {
    tag: 'AUTOMOTIVE', color: '#8b5cf6', name: 'Toyota Motor Europe', metric: '100', metricColor: 'text-sf-purple',
    sub: 'data products live, 300+ more to come',
    body: 'Snowflake is the "cornerstone of Toyota Europe\'s data mesh." Snowflake CoWork lets business users query sales and product data in natural language — asking which vehicle specs perform best per market without writing a line of SQL.',
    quote: "This has fundamentally shifted our team's focus from writing code, to prioritizing what truly drives value: building rich business context and robust semantic models.",
    who: 'Thierry Martin, Head of Enterprise Data & Analytics, Toyota Motor Europe',
    tags: ['Snowflake CoWork', 'Data Mesh', 'Agentic AI'],
  },
]

export default function Slide06Customers() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-sf-blue">Customer Outcomes</p>
      <h2 className="mt-1 text-[36px] font-extrabold tracking-tight text-sf-navy">
        How the world&rsquo;s largest companies <span className="gradient-blue">drive outcomes</span>
      </h2>

      <div className="mt-7 grid w-full grid-cols-3 gap-5">
        {CARDS.map((c) => (
          <div key={c.name} className="flex flex-col rounded-2xl border border-sf-line bg-white/85 p-5"
            style={{ borderTopColor: c.color, borderTopWidth: 3 }}>
            <span className="w-fit rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider" style={{ color: c.color }}>{c.tag}</span>
            <h3 className="mt-3 text-[19px] font-bold text-sf-navy">{c.name}</h3>
            <p className={`mt-2 text-[30px] font-extrabold ${c.metricColor}`}>{c.metric}</p>
            <p className="text-[11px] text-sf-mist">{c.sub}</p>
            <p className="mt-3 text-[12.5px] leading-relaxed text-sf-slate">{c.body}</p>

            <div className="mt-auto pt-4">
              <p className="border-t border-sf-line pt-3 text-[11.5px] italic leading-relaxed text-sf-slate">&ldquo;{c.quote}&rdquo;</p>
              <p className="mt-2 text-[10.5px] text-sf-mist">{c.who}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-sf-slate">● {t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
