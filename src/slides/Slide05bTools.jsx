export default function Slide05bTools() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <h2 className="mb-8 text-[42px] font-extrabold tracking-tight text-sf-navy">
        Agent Tool Ecosystem
      </h2>
      
      <div className="w-full max-w-[950px]">
        {/* Main content container */}
        <div className="grid grid-cols-[280px_1fr_280px] gap-0 items-center">
          
          {/* Left Column: CLIENTS & MODELS */}
          <div className="flex flex-col gap-3">
            <h3 className="mb-1 text-[14px] font-bold uppercase tracking-[0.12em] text-blue-500">
              Clients & Models
            </h3>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-2.5 text-[13px] font-medium text-slate-700">
              CoCo & CoWork
            </div>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-2.5 text-[13px] font-medium text-slate-700">
              Claude · ChatGPT · Gemini
            </div>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-2.5 text-[13px] font-medium text-slate-700">
              Copilot · Cursor · IDEs
            </div>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-2.5 text-[13px] font-medium text-slate-700">
              Custom & autonomous agents
            </div>
          </div>

          {/* Center: Tools with Arrows */}
          <div className="relative flex items-center justify-center">
            {/* SVG for all arrows */}
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
                </marker>
              </defs>
              
              {/* Left arrows - connecting from left boxes to center Tools */}
              <line x1="0" y1="22%" x2="38%" y2="22%" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
              <line x1="0" y1="39%" x2="38%" y2="45%" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
              <line x1="0" y1="61%" x2="38%" y2="55%" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
              <line x1="0" y1="78%" x2="38%" y2="78%" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
              
              {/* Right arrows - connecting from center Tools to right boxes */}
              <line x1="62%" y1="22%" x2="100%" y2="22%" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
              <line x1="62%" y1="45%" x2="100%" y2="39%" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
              <line x1="62%" y1="55%" x2="100%" y2="61%" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
              <line x1="62%" y1="78%" x2="100%" y2="78%" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
            </svg>

            {/* Center Tools Box */}
            <div className="relative z-10 rounded-2xl bg-blue-500 px-16 py-8 shadow-xl">
              <p className="text-center text-[32px] font-bold text-white whitespace-nowrap">Tools</p>
            </div>
          </div>

          {/* Right Column: TOOLS & DATA */}
          <div className="flex flex-col gap-3">
            <h3 className="mb-1 text-[14px] font-bold uppercase tracking-[0.12em] text-blue-500">
              Tools & Data
            </h3>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-2.5 text-[13px] font-medium text-slate-700">
              Snowflake data & apps
            </div>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-2.5 text-[13px] font-medium text-slate-700">
              SaaS applications
            </div>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-2.5 text-[13px] font-medium text-slate-700">
              Cloud & on-prem systems
            </div>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-2.5 text-[13px] font-medium text-slate-700">
              Custom & internal tools
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <p className="mt-8 text-center text-[13px] text-slate-500 font-medium">
          policy · identity · audit on every tool call
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center gap-2">
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
