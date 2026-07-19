import { Logo } from './logos'

const PILLS = [
  ['Data & Context', '#29b5e8'],
  ['Model Choice', '#8b5cf6'],
  ['Interop', '#11182a'],
  ['Action Layer', '#d97706'],
  ['Control Plane', '#0d9488'],
]

const LOGOS = ['AWS', 'Azure', 'Google Cloud', 'Salesforce', 'Slack', 'Atlassian', 'Github', 'Glean', 'Linear', 'Natoma', 'Microsoft 365']

export default function Slide13OnePlatform() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h2 className="text-center text-[42px] font-extrabold tracking-tight text-sf-navy">
        One platform. <span className="gradient-blue">Easy.</span> <span className="text-sf-blue">Connected.</span> <span className="text-sf-purple">Trusted.</span>
      </h2>
      <p className="mt-2 text-[14px] text-sf-mist">Fully managed, end-to-end, Agentic Workflows. Sat next to your data.</p>

      <div className="mt-8 flex items-center">
        {PILLS.map(([label, color], i) => (
          <div key={label} className="flex items-center">
            <span className="flex items-center gap-2 rounded-full border border-sf-line bg-white/80 px-4 py-1.5 text-[12.5px] text-sf-ink">
              <span className="h-2 w-2 rounded-full" style={{ background: color }} />{label}
            </span>
            {i < PILLS.length - 1 && <span className="mx-1 h-px w-6 bg-sf-line" />}
          </div>
        ))}
      </div>

      <p className="mt-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-sf-mist">Works with what you have</p>
      <div className="mt-5 flex flex-wrap items-start justify-center gap-6">
        {LOGOS.map((name) => (
          <div key={name} className="flex w-[70px] flex-col items-center gap-2">
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-sf-line bg-white p-2.5 shadow-sm">
              <Logo name={name} />
            </span>
            <span className="text-center text-[10px] text-sf-mist">{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
