export default function Slide05bTools() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <h2 className="mb-8 text-[42px] font-extrabold tracking-tight text-sf-navy">
        Agent Tool Ecosystem
      </h2>
      
      <div className="w-full max-w-[1100px]">
        {/* Main content container */}
        <div className="relative grid grid-cols-[320px_1fr_320px] gap-16 items-center">
          
          {/* Left Column: CLIENTS & MODELS */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-[14px] font-bold uppercase tracking-[0.12em] text-blue-500">
              Clients & Models
            </h3>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              CoCo & CoWork
            </div>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              Claude · ChatGPT · Gemini
            </div>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              Copilot · Cursor · IDEs
            </div>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              Custom & autonomous agents
            </div>
          </div>

          {/* Center: Tools Box */}
          <div className="flex items-center justify-center py-20">
            <div className="rounded-2xl bg-blue-500 px-32 py-16 shadow-xl">
              <p className="text-center text-[40px] font-bold text-white whitespace-nowrap">Tools</p>
            </div>
          </div>

          {/* Right Column: TOOLS & DATA */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-[14px] font-bold uppercase tracking-[0.12em] text-blue-500">
              Tools & Data
            </h3>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              Snowflake data & apps
            </div>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              SaaS applications
            </div>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              Cloud & on-prem systems
            </div>
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              Custom & internal tools
            </div>
          </div>

          {/* SVG Arrows Overlay - Dashed converging style */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <defs>
              <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
              </marker>
            </defs>
            
            {/* Left side arrows: from boxes converging to Tools center */}
            {/* Box 1 - top */}
            <line x1="320" y1="68" x2="465" y2="180" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
            
            {/* Box 2 */}
            <line x1="320" y1="119" x2="465" y2="180" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
            
            {/* Box 3 */}
            <line x1="320" y1="170" x2="465" y2="180" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
            
            {/* Box 4 - bottom */}
            <line x1="320" y1="221" x2="465" y2="180" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
            
            {/* Right side arrows: from Tools center diverging to boxes */}
            {/* Box 1 - top */}
            <line x1="547" y1="180" x2="692" y2="68" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
            
            {/* Box 2 */}
            <line x1="547" y1="180" x2="692" y2="119" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
            
            {/* Box 3 */}
            <line x1="547" y1="180" x2="692" y2="170" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
            
            {/* Box 4 - bottom */}
            <line x1="547" y1="180" x2="692" y2="221" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#arrowgreen)" />
          </svg>
        </div>

        {/* Bottom text */}
        <p className="mt-10 text-center text-[13px] text-slate-500 font-medium">
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
