const ACCOUNT_TEAM = [
  { name: 'Laura Krisher', title: 'Account Executive',               img: '/team/laura.png',  pos: 'center' },
  { name: 'Chad Sturgis',  title: 'Solutions Engineer',              img: '/team/chad.png',   pos: 'center' },
]

const SOLUTIONS_TEAM = [
  { name: 'Travis Kerr',   title: 'District Manager',                img: '/team/travis.png', pos: 'center' },
  { name: 'Jeff LaCamera', title: 'SVP, Central Division Enterprise Sales', img: '/team/jeff.png', pos: 'center' },
  { name: 'David Kincaid', title: 'Sr Solutions Engineering Manager', img: '/team/david.png',  pos: 'top' },
  { name: 'Matt Marzillo', title: 'AI Solutions Specialist',         img: '/team/matt.png',   pos: 'center' },
]

function Headshot({ name, title, img, pos, size = 108 }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="rounded-full overflow-hidden shrink-0 bg-[#0d1b2a] ring-[5px] ring-[#29b5e8] ring-offset-[3px] ring-offset-[#0d1b2a]"
        style={{ width: size, height: size }}>
        <img src={img} alt={name}
          className="h-full w-full object-cover scale-[1.22] origin-center"
          style={{ objectPosition: pos === 'top' ? 'center 20%' : 'center center' }} />
      </div>
      <div className="text-center">
        <p className="font-bold text-sf-ink" style={{ fontSize: size >= 108 ? 14 : 12 }}>{name}</p>
        <p className="text-sf-mist leading-snug" style={{ fontSize: 10, maxWidth: 130 }}>{title}</p>
      </div>
    </div>
  )
}

export default function SlideTeamIntro() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6 gap-5">

      {/* Logo header */}
      <div className="flex items-center gap-5">
        <img src="/logos/snowflake.png" alt="Snowflake" className="h-8 object-contain" />
        <span className="h-6 w-px bg-sf-line" />
        <img src="/team/fifth-third-logo.png" alt="Fifth Third Bank" className="h-32 object-contain" />
      </div>

      <div className="text-center -mt-1">
        <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-sf-blue mb-0.5">Your Account Team</p>
        <h2 className="text-[32px] font-extrabold tracking-tight text-sf-navy">
          The people behind the partnership
        </h2>
      </div>

      {/* ── Laura & Chad — elevated account team box ── */}
      <div className="rounded-2xl border-2 border-sf-blue/30 bg-white/70 px-10 py-4 flex flex-col items-center gap-3
                      shadow-[0_4px_24px_-6px_rgba(41,181,232,0.18)]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sf-blue">Account Team</p>
        <div className="flex items-start gap-14">
          {ACCOUNT_TEAM.map(p => <Headshot key={p.name} {...p} size={112} />)}
        </div>
      </div>

      {/* ── Supporting team — 4 in a row ── */}
      <div className="flex items-start gap-10">
        {SOLUTIONS_TEAM.map(p => <Headshot key={p.name} {...p} size={96} />)}
      </div>
    </div>
  )
}
