export default function Slide05bTools() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <h2 className="mb-6 text-[42px] font-extrabold tracking-tight text-sf-navy">
        Agent Tool Ecosystem
      </h2>
      
      <div className="w-full max-w-[900px] rounded-2xl border border-slate-200/50 bg-white/60 p-6 shadow-lg">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
          
          {/* Left: CLIENTS & MODELS */}
          <div>
            <h3 className="mb-3 text-[15px] font-bold uppercase tracking-[0.12em] text-blue-500">
              Clients & Models
            </h3>
            <div className="space-y-2.5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[12.5px] text-slate-700">
                CoCo & CoWork
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[12.5px] text-slate-700">
                Claude · ChatGPT · Gemini
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[12.5px] text-slate-700">
                Copilot · Cursor · IDEs
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[12.5px] text-slate-700">
                Custom & autonomous agents
              </div>
            </div>
          </div>

          {/* Center: Tools */}
          <div className="relative flex flex-col items-center">
            {/* Left arrows - tighter spacing */}
            <div className="absolute left-[-60px] top-1/2 -translate-y-1/2">
              {[0, 1, 2, 3].map((i) => (
                <svg key={`l${i}`} width="60" height="1" className="absolute" style={{ top: `${i * 18 - 27}px` }}>
                  <defs>
                    <marker id={`arrowL${i}`} markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                      <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
                    </marker>
                  </defs>
                  <line x1="0" y1="0" x2="60" y2="0" stroke="#10b981" strokeWidth="2" strokeDasharray="4,2" markerEnd={`url(#arrowL${i})`} />
                </svg>
              ))}
            </div>

            {/* Tools box */}
            <div className="rounded-2xl bg-blue-500 px-10 py-5 shadow-lg">
              <p className="text-center text-[26px] font-bold text-white">Tools</p>
            </div>

            {/* Right arrows - tighter spacing */}
            <div className="absolute right-[-60px] top-1/2 -translate-y-1/2">
              {[0, 1, 2, 3].map((i) => (
                <svg key={`r${i}`} width="60" height="1" className="absolute" style={{ top: `${i * 18 - 27}px` }}>
                  <defs>
                    <marker id={`arrowR${i}`} markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                      <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
                    </marker>
                  </defs>
                  <line x1="0" y1="0" x2="60" y2="0" stroke="#10b981" strokeWidth="2" strokeDasharray="4,2" markerEnd={`url(#arrowR${i})`} />
                </svg>
              ))}
            </div>
          </div>

          {/* Right: TOOLS & DATA */}
          <div>
            <h3 className="mb-3 text-[15px] font-bold uppercase tracking-[0.12em] text-blue-500">
              Tools & Data
            </h3>
            <div className="space-y-2.5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[12.5px] text-slate-700">
                Snowflake data & apps
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[12.5px] text-slate-700">
                SaaS applications
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[12.5px] text-slate-700">
                Cloud & on-prem systems
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[12.5px] text-slate-700">
                Custom & internal tools
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <p className="mt-5 text-center text-[12.5px] text-slate-500">
          policy · identity · audit on every tool call
        </p>
      </div>

      <div className="mt-5 flex flex-col items-center gap-2">
        <p className="text-[15px] text-slate-600">
          <span className="font-semibold text-blue-600">Frictionless</span> with Snowflake clients · <span className="font-semibold text-blue-600">Neutral</span> across everything else
        </p>
        <a href="https://www.snowflake.com/en/blog/enterprise-ai-security-agentic-mcp-governance/" 
           target="_blank" rel="noopener noreferrer"
           className="text-[12px] text-blue-500 hover:text-blue-600 hover:underline">
          → Read more: Enterprise AI Security & Agentic MCP Governance
        </a>
      </div>
    </div>
  )
}
