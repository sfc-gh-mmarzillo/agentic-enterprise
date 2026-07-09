const S = ({ children, vb = '0 0 24 24' }) => (
  <svg viewBox={vb} width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
    {children}
  </svg>
)

const MARKS = {
  anthropic: (
    <S>
      <text
        x="12"
        y="17.5"
        textAnchor="middle"
        fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
        fontSize="16"
        fontWeight="900"
        letterSpacing="-0.5"
        fill="#181818"
      >
        {'A\\'}
      </text>
    </S>
  ),
  openai: (
    <S>
      <path
        fill="#0f0f0f"
        d="M21.55 10.2a5.4 5.4 0 0 0-.47-4.43 5.46 5.46 0 0 0-5.88-2.62A5.47 5.47 0 0 0 6.9 4.06a5.4 5.4 0 0 0-3.6 2.62 5.46 5.46 0 0 0 .67 6.4 5.4 5.4 0 0 0 .46 4.43 5.46 5.46 0 0 0 5.88 2.62 5.4 5.4 0 0 0 4.07 1.82 5.47 5.47 0 0 0 5.21-3.79 5.4 5.4 0 0 0 3.6-2.62 5.46 5.46 0 0 0-.67-6.4Zm-8.14 11.38a4.05 4.05 0 0 1-2.6-.94l.13-.07 4.32-2.5a.7.7 0 0 0 .35-.6v-6.1l1.82 1.06v5.05a4.07 4.07 0 0 1-4.06 4.06Zm-8.73-3.73a4.04 4.04 0 0 1-.48-2.72l.13.08 4.32 2.5a.7.7 0 0 0 .71 0l5.28-3.05v2.11l-4.38 2.53a4.07 4.07 0 0 1-5.55-1.45ZM3.42 8.3a4.05 4.05 0 0 1 2.13-1.78v5.14a.68.68 0 0 0 .35.6l5.26 3.03-1.82 1.06-4.37-2.52a4.07 4.07 0 0 1-1.55-5.53Zm14.99 3.48-5.28-3.06 1.82-1.05 4.37 2.52a4.06 4.06 0 0 1-.61 7.32v-5.13a.7.7 0 0 0-.3-.6Zm1.81-2.72-.13-.08-4.31-2.5a.7.7 0 0 0-.71 0L9.79 9.53V7.42l4.38-2.53a4.06 4.06 0 0 1 6.04 4.21ZM8.8 12.87 6.98 11.8V6.76a4.06 4.06 0 0 1 6.66-3.11l-.13.07L9.2 6.22a.7.7 0 0 0-.35.6l-.04 6.05Zm.99-2.13L12.14 9.4l2.35 1.35v2.7l-2.35 1.35-2.35-1.35v-2.7Z"
      />
    </S>
  ),
  meta: (
    <S>
      <defs>
        <linearGradient id="lg-meta" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0064E0" />
          <stop offset="1" stopColor="#0082FB" />
        </linearGradient>
      </defs>
      <path
        stroke="url(#lg-meta)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
        d="M4.4 15.6c-.9 0-1.6-.9-1.6-2.9 0-3 1.4-5.5 3.2-5.5 1.4 0 2.5 1.3 3.8 3.6 1.6 2.8 2.6 4.8 4.4 4.8 1.6 0 2.6-1.5 2.6-3.8 0-2.7-1.2-4.9-3-4.9-1.5 0-2.9 1.4-4.6 4.3"
      />
    </S>
  ),
  mistral: (
    <S>
      <g>
        <rect x="3" y="4.5" width="3.6" height="15" fill="#F7D046" />
        <rect x="17.4" y="4.5" width="3.6" height="15" fill="#F7D046" />
        <rect x="6.6" y="4.5" width="3.6" height="3.6" fill="#F2A73B" />
        <rect x="13.8" y="4.5" width="3.6" height="3.6" fill="#F2A73B" />
        <rect x="6.6" y="8.1" width="3.6" height="3.6" fill="#EE792F" />
        <rect x="13.8" y="8.1" width="3.6" height="3.6" fill="#EE792F" />
        <rect x="10.2" y="8.1" width="3.6" height="3.6" fill="#EE792F" />
        <rect x="6.6" y="11.7" width="3.6" height="3.6" fill="#EB5829" />
        <rect x="13.8" y="11.7" width="3.6" height="3.6" fill="#EB5829" />
        <rect x="6.6" y="15.9" width="3.6" height="3.6" fill="#EA3326" />
        <rect x="13.8" y="15.9" width="3.6" height="3.6" fill="#EA3326" />
      </g>
    </S>
  ),
  deepseek: (
    <S>
      <path
        fill="#4D6BFE"
        d="M3.2 10.6c1.9-.5 3.9.1 5.3 1.4 1.4-2.1 3.9-3.2 6.4-2.7 2 .4 3.6 1.7 4.4 3.5.4-.9 1.3-1.4 2.3-1.3-.2 1.8-1.7 3.2-3.5 3.4-2.7.4-5.5.2-8.2-.5-1.9-.5-3.8-1.4-5.2-2.8-.6-.5-1-1.1-1.5-1.8l0 .8Z"
      />
      <circle cx="7.6" cy="12" r=".8" fill="#fff" />
    </S>
  ),
  gemini: (
    <S>
      <defs>
        <linearGradient id="lg-gem" x1="2" y1="4" x2="22" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4" />
          <stop offset=".5" stopColor="#9B72CB" />
          <stop offset="1" stopColor="#D96570" />
        </linearGradient>
      </defs>
      <path
        fill="url(#lg-gem)"
        d="M12 2c.4 5.2 4.4 9.6 10 10-5.6.4-9.6 4.8-10 10-.4-5.2-4.4-9.6-10-10 5.6-.4 9.6-4.8 10-10Z"
      />
    </S>
  ),
  grok: (
    <S>
      <g stroke="#111111" strokeWidth="1.9" strokeLinecap="round">
        <line x1="5.5" y1="8.5" x2="12.5" y2="16.5" />
        <line x1="12.5" y1="8.5" x2="5.5" y2="16.5" />
        <line x1="16.9" y1="6.8" x2="15.1" y2="17.2" />
      </g>
    </S>
  ),
  slack: (
    <S vb="0 0 122.8 122.8">
      <path
        fill="#E01E5A"
        d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
      />
      <path
        fill="#36C5F0"
        d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
      />
      <path
        fill="#2EB67D"
        d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
      />
      <path
        fill="#ECB22E"
        d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
      />
    </S>
  ),
  atlassian: (
    <S>
      <defs>
        <linearGradient id="lg-atl" x1="7" y1="9" x2="3" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
      </defs>
      <path
        fill="url(#lg-atl)"
        d="M7.3 11.2c-.3-.4-.9-.4-1.1.1l-3.9 7.8c-.2.4.1 1 .6 1h5.4c.2 0 .4-.1.5-.3.9-1.9.3-4.8-1.5-8.6Z"
      />
      <path
        fill="#2684FF"
        d="M11.4 3.6c-2 3.1-1.9 6.6.1 9.6l2.6 5.2c.1.3.4.4.7.4h5.4c.4 0 .7-.4.5-.8L12.5 3.5c-.2-.5-.8-.4-1.1.1Z"
      />
    </S>
  ),
  github: (
    <S>
      <path
        fill="#181717"
        d="M12 1.3a10.7 10.7 0 0 0-3.4 20.9c.5.1.7-.2.7-.5v-2c-3 .6-3.6-1.3-3.6-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.4-.3-4.9-1.2-4.9-5.3 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 1.1a10.3 10.3 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.9 0 4.1-2.5 5-4.9 5.3.4.3.7 1 .7 2v3c0 .3.2.6.7.5A10.7 10.7 0 0 0 12 1.3Z"
      />
    </S>
  ),
  glean: (
    <S>
      <defs>
        <linearGradient id="lg-glean" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F63F5" />
          <stop offset="1" stopColor="#7C4DFF" />
        </linearGradient>
      </defs>
      <g fill="url(#lg-glean)">
        <path d="M12 2.4c1.2 2.3 2.9 4 5.2 5.2-2.3 1.2-4 2.9-5.2 5.2-1.2-2.3-2.9-4-5.2-5.2 2.3-1.2 4-2.9 5.2-5.2Z" />
        <path d="M12 11.2c1.2 2.3 2.9 4 5.2 5.2-2.3 1.2-4 2.9-5.2 5.2-1.2-2.3-2.9-4-5.2-5.2 2.3-1.2 4-2.9 5.2-5.2Z" opacity=".8" />
      </g>
    </S>
  ),
  linear: (
    <S>
      <g fill="#5E6AD2">
        <path d="M2.6 13.7 10.3 21.4c-4.1-.5-7.3-3.7-7.7-7.7Z" />
        <path d="M2.5 10.9 13.1 21.5h2.9L2.5 8v2.9Z" />
        <path d="M2.7 7.6 16.4 21.3c.9-.3 1.8-.8 2.5-1.4L4.1 5.1c-.6.7-1.1 1.6-1.4 2.5Z" />
        <path d="M5.8 3.7 20.3 18.2a9 9 0 0 0-1.5-11.7A9 9 0 0 0 5.8 3.7Z" />
      </g>
    </S>
  ),
  salesforce: (
    <S>
      <path
        fill="#00A1E0"
        d="M10.006 5.415a4.195 4.195 0 0 1 3.045-1.306c1.56 0 2.954.868 3.69 2.146a5.045 5.045 0 0 1 2.088-.445 5.115 5.115 0 0 1 0 10.23c-.315 0-.62-.03-.916-.086a3.71 3.71 0 0 1-3.244 1.918c-.475 0-.92-.104-1.335-.282a4.244 4.244 0 0 1-3.943 2.674 4.243 4.243 0 0 1-3.867-2.475 3.925 3.925 0 0 1-.813.086A3.998 3.998 0 0 1 .78 13.898c0-1.485.81-2.78 2.012-3.47a4.617 4.617 0 0 1-.382-1.84A4.638 4.638 0 0 1 7.045 3.95a4.611 4.611 0 0 1 2.96 1.465z"
      />
    </S>
  ),
  natoma: (
    <S>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#0d1117" />
      <path fill="#2fe6a8" d="M7 17V7h2.2l5.6 6.6V7H17v10h-2.2L9.2 10.4V17H7Z" />
    </S>
  ),
  aws: (
    <S vb="0 0 34 26">
      <text x="17" y="14" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700" fill="#232F3E">
        aws
      </text>
      <path d="M4 19c8 4 18 4 26 0" stroke="#FF9900" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M26 16.5l4.2 2.3-2.5 4" stroke="#FF9900" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </S>
  ),
  azure: (
    <S>
      <defs>
        <linearGradient id="lg-az" x1="4" y1="4" x2="18" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3CCBF4" />
          <stop offset="1" stopColor="#2892DF" />
        </linearGradient>
      </defs>
      <path fill="url(#lg-az)" d="M10.2 3.4h5.1l5.4 15.3c.2.5-.2 1-.7 1h-3.6c-.4 0-.7-.2-.8-.5L10.2 3.4Z" />
      <path fill="#0078D4" d="M9.4 5.1 3.3 18.7c-.3.6.2 1.3.9 1.3h7.4c.4 0 .7-.2.9-.6l1.6-4-6.5-.8 5-.4L9.4 5.1Z" />
    </S>
  ),
  'google cloud': (
    <S>
      <path fill="#EA4335" d="M14.6 8.6 16.4 6.8 16.5 6C13.4 3.3 8.5 3.6 6 6.7c-.7.8-1.2 1.9-1.4 3l.7-.1 3.6-.6.3-.3a4 4 0 0 1 5.4-.2l.1.1Z" />
      <path fill="#4285F4" d="M19 9.6a8 8 0 0 0-2.4-3.8l-2.5 2.5a4.4 4.4 0 0 1 1.6 3.5v.5a2.2 2.2 0 0 1 0 4.4h-4.5l-.4.5v2.7l.4.4h4.5c3.2 0 5.8-2.6 5.8-5.8a5.9 5.9 0 0 0-2.5-4.9Z" />
      <path fill="#34A853" d="M6.7 20.8h4.5v-3.6H6.7a2.2 2.2 0 0 1-.9-.2l-.6.2-1.8 1.8-.2.6a5.7 5.7 0 0 0 3.5 1.2Z" />
      <path fill="#FBBC05" d="M6.7 9.1a5.8 5.8 0 0 0-3.5 10.4l2.6-2.6a2.2 2.2 0 0 1 .9-4.2c.5 0 1 .2 1.4.5l2.6-2.6a5.8 5.8 0 0 0-4-1.5Z" />
    </S>
  ),
  'microsoft 365': (
    <S>
      <rect x="2.4" y="2.4" width="8.9" height="8.9" fill="#F25022" />
      <rect x="12.7" y="2.4" width="8.9" height="8.9" fill="#7FBA00" />
      <rect x="2.4" y="12.7" width="8.9" height="8.9" fill="#00A4EF" />
      <rect x="12.7" y="12.7" width="8.9" height="8.9" fill="#FFB900" />
    </S>
  ),
}

const ALIASES = {
  xai: 'grok',
  m365: 'microsoft 365',
  microsoft: 'microsoft 365',
  gcp: 'google cloud',
  google: 'google cloud',
}

// Official brand logos downloaded from Wikimedia Commons and served locally from /public/logos.
const FILES = {
  anthropic: 'anthropic',
  openai: 'openai',
  meta: 'meta',
  mistral: 'mistral',
  deepseek: 'deepseek',
  grok: 'grok',
  xai: 'grok',
  slack: 'slack',
  atlassian: 'atlassian',
  github: 'github',
  glean: 'glean',
  linear: 'linear',
  salesforce: 'salesforce',
  aws: 'aws',
  azure: 'azure',
  'google cloud': 'googlecloud',
  gcp: 'googlecloud',
  google: 'googlecloud',
  'microsoft 365': 'microsoft',
  microsoft: 'microsoft',
  m365: 'microsoft',
}

export function Logo({ name, className = '' }) {
  const key = String(name || '').trim().toLowerCase()
  const file = FILES[key]
  if (file) {
    return (
      <img
        src={`/logos/${file}.svg`}
        alt={`${name} logo`}
        className={className}
        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }}
      />
    )
  }
  const mark = MARKS[key] || MARKS[ALIASES[key]]
  if (!mark) {
    return (
      <span className={className} style={{ fontWeight: 700, fontSize: 12 }}>
        {String(name || '').slice(0, 2)}
      </span>
    )
  }
  return <span className={className} style={{ display: 'inline-flex', width: '100%', height: '100%' }}>{mark}</span>
}

export default Logo
