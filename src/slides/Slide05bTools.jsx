export default function Slide05bTools() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <h2 className="mb-8 text-[42px] font-extrabold tracking-tight text-sf-navy">
        Agent Tool Ecosystem
      </h2>
      
      <div className="w-full max-w-[1000px]">
        {/* Main content container */}
        <div className="relative grid grid-cols-[300px_1fr_300px] gap-12 items-center">
          
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

          {/* Center: Tools Box */}
          <div className="flex items-center justify-center">
            <div className="rounded-2xl bg-blue-500 px-20 py-10 shadow-xl">
              <p className="text-center text-[36px] font-bold text-white whitespace-nowrap">Tools</p>
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

          {/* SVG Arrows Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <defs>
              <marker id="arrowgreen" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#10b981" />
              </marker>
            </defs>
            
            {/* Left side arrows: from boxes to Tools center */}
            {/* Box 1 */}
            <line x1="300" y1="68" x2="370" y2="165" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowgreen)" />
            
            {/* Box 2 */}
            <line x1="300" y1="119" x2="370" y2="165" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowgreen)" />
            
            {/* Box 3 */}
            <line x1="300" y1="170" x2="370" y2="165" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowgreen)" />
            
            {/* Box 4 */}
            <line x1="300" y1="221" x2="370" y2="165" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowgreen)" />
            
            {/* Right side arrows: from Tools center to boxes */}
            {/* Box 1 */}
            <line x1="642" y1="165" x2="712" y2="68" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowgreen)" />
            
            {/* Box 2 */}
            <line x1="642" y1="165" x2="712" y2="119" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowgreen)" />
            
            {/* Box 3 */}
            <line x1="642" y1="165" x2="712" y2="170" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowgreen)" />
            
            {/* Box 4 */}
            <line x1="642" y1="165" x2="712" y2="221" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowgreen)" />
          </svg>
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
