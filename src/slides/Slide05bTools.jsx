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
            <div className="relative rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              CoCo & CoWork
              {/* Right arrow */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-16 h-0.5 bg-green-500">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-green-500"></div>
              </div>
            </div>
            <div className="relative rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              Claude · ChatGPT · Gemini
              {/* Right arrow */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-16 h-0.5 bg-green-500">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-green-500"></div>
              </div>
            </div>
            <div className="relative rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              Copilot · Cursor · IDEs
              {/* Right arrow */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-16 h-0.5 bg-green-500">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-green-500"></div>
              </div>
            </div>
            <div className="relative rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              Custom & autonomous agents
              {/* Right arrow */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-16 h-0.5 bg-green-500">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-green-500"></div>
              </div>
            </div>
          </div>

          {/* Center: Tools Box */}
          <div className="flex items-center justify-center py-20">
            <div className="rounded-2xl bg-blue-500 px-24 py-12 shadow-xl">
              <p className="text-center text-[40px] font-bold text-white whitespace-nowrap">Tools</p>
            </div>
          </div>

          {/* Right Column: TOOLS & DATA */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-[14px] font-bold uppercase tracking-[0.12em] text-blue-500">
              Tools & Data
            </h3>
            <div className="relative rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              {/* Left arrow */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-16 h-0.5 bg-green-500">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-green-500"></div>
              </div>
              Snowflake data & apps
            </div>
            <div className="relative rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              {/* Left arrow */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-16 h-0.5 bg-green-500">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-green-500"></div>
              </div>
              SaaS applications
            </div>
            <div className="relative rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              {/* Left arrow */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-16 h-0.5 bg-green-500">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-green-500"></div>
              </div>
              Cloud & on-prem systems
            </div>
            <div className="relative rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-[13px] font-medium text-slate-700">
              {/* Left arrow */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-16 h-0.5 bg-green-500">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-green-500"></div>
              </div>
              Custom & internal tools
            </div>
          </div>
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
