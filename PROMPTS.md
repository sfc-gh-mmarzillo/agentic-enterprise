# CoCo Presentation App — Prompts for Recreation & Variants

---

## PROMPT 1: Recreate This 200-Level App (Exact Reproduction)

```
Build a React presentation app for Snowflake Cortex Code (CoCo) that runs as an interactive slide deck in the browser. Deploy it to Snowpark Container Services (SPCS).

### Tech Stack
- Vite + React 19
- Framer Motion for slide transitions and element animations
- Tailwind CSS v4 with custom Snowflake brand colors
- Nginx serving static build in Docker container on SPCS

### Visual Design
- Dark navy background (#0F0F1A / #1A1A2E)
- Animated particle/speckle background (subtle blue dots with faint connecting lines, slow movement, calming not distracting) that persists across all slides
- Smooth left/right slide transitions with opacity and x-position animations
- Bottom dot navigation + left/right arrow buttons
- Keyboard navigation (arrow keys + spacebar)
- Font: Inter (Google Fonts)
- Snowflake brand colors: Blue #29B5E8, Purple #6E56CF, Accent #00D4AA

### Slides (9 total, in order):

1. **Opening**: Large "Snowflake Cortex Code" title with gradient icon (blue-to-purple), subtitle "The coding agent where you build faster", hint to press arrow/space

2. **CoCo Introduction**: Left side: "AI That Understands Your Data" headline + description about native RBAC/schema awareness. Right side: Animated mock terminal window showing cycling alerts (Revenue Alert, Pipeline Built, Query Generated, Model Deployed) — one highlighted at a time every 3 seconds

3. **Industry Use Cases**: Tab-style buttons for 5 industries (Healthcare, Financial Services, Retail & CPG, Technology, Public Sector). Auto-cycles every 4 seconds. Content card below shows 3 bullet-point use cases per industry. Examples:
   - Healthcare: Legacy migration (200+ reports), clinical pipelines with HIPAA, patient readmission analytics
   - Financial Services: Revenue alerting, risk modeling, regulatory reporting (SOX, Basel III)
   - Retail: Demand forecasting, supply chain multi-source joins, CLV with subscription tiers
   - Technology: Data mesh orchestration, ML feature engineering, multi-tenant SaaS analytics
   - Public Sector: Citizen services with governed PII, cross-agency sharing, operational efficiency

4. **Accuracy Visualization**: Animated bar chart showing three bars growing upward:
   - Generic AI Tool + SQL MCP: 24.1% (gray)
   - CoCo Standalone: 47.1% (Snowflake blue)
   - CoCo + Cortex Context: 86.3% (accent green)
   - Below: cost comparison cards ($0.59/prompt, 72% less, 4x fewer tokens)
   - Caption: "Same model. Different context. On enterprise-grade questions."

5. **Where Snowflake Wins (Complex Questions)**: 2x2 grid of cards. Each card has a complexity tag, an italicized example question in quotes, and explanation of why it's hard:
   - Multi-join + business logic: "MoM revenue trend by product line excluding churned accounts, by region"
   - Cross-domain + governed PII: "Patient readmission rates correlated with staffing across hospitals"
   - Pipeline generation: "Build a dbt model for CLV with refunds, discounts, subscription tiers"
   - Operational analytics: "Which warehouses drive cost overruns relative to query throughput?"

6. **Customer Stories (Anonymized)**: Three-column card layout:
   - Global Healthcare Network: 10x faster, migrated 200+ reports, competitors couldn't handle governed PHI
   - Fitness & Health Tech: PII never leaves Snowflake, external agents required sending data to 3rd parties
   - Government Health Agency: 3-10x productivity, other tools got 24% vs 86% accuracy

7. **Cortex Ecosystem**: Three-column layout:
   - Left: "Model Agnostic" — logos/pills appearing one by one (Claude, GPT-4, Gemini, Llama, Mistral, Command R+)
   - Center: "Agentic Harness Layer" — stacked service cards with colored left borders (Cortex Code, Analyst, Search, Agents)
   - Right: "Integrations" — list with green dots (Slack, Microsoft 365, dbt, GitHub, Terraform)

8. **Agentic Capabilities**: Left side: "The Agentic Future" heading + cycling animated text ("Agents that build pipelines / agents / dashboards / migration workflows / ML models / analytics / automations / apps" — changes every 2.5s). Right side: Phone-shaped mock device showing all capabilities as mini cards, active one highlighted.

9. **CTA**: "Ready to Build Faster?" headline, subtitle about native context + model agnostic + governed. Three uniform-color blue buttons: "Start Free Trial", "Schedule Demo", "View Documentation"

### Deployment
- Dockerfile: multi-stage (node:20-alpine build + nginx:alpine serve)
- Nginx listens on port 8080, serves SPA with try_files fallback
- SPCS service spec with 256M-512M memory, 0.5-1 CPU
- Push to Snowflake image registry, create service on SYSTEM_COMPUTE_POOL_CPU
```

---

## PROMPT 2: Executive (100-Level) Version

```
Build a React presentation app for Snowflake Cortex Code (CoCo) targeting C-level executives. This is a shorter, high-impact version focused on business outcomes and ROI, NOT technical details.

### Tech Stack
Same as 200-level: Vite + React 19, Framer Motion, Tailwind CSS v4, dark Snowflake theme with particles.

### Design Principles
- Fewer slides (5-6 max)
- Larger text, more whitespace
- Focus on: money saved, time saved, risk reduced
- No technical jargon (no "dbt", "RBAC", "multi-join")
- Customer outcomes front and center
- Bold numbers and metrics

### Slides:

1. **Opening**: "Snowflake Cortex Code — Your Data Team, 10x Faster" — single powerful tagline, no subtitle clutter

2. **The Problem**: Large animated counter showing "44% of data engineering time is spent on maintenance, not innovation." Then transitions to "Your backlog is growing 10x faster than your team." Clean, impactful stat presentation.

3. **The Solution (30 seconds)**: Three large animated metric cards side by side:
   - "10x Faster" — pipeline delivery
   - "72% Lower Cost" — vs. alternative AI tools
   - "86% Accuracy" — on complex enterprise questions
   Subtitle: "One native AI agent. No new tools. No data leaves Snowflake."

4. **Customer Results**: Full-width cards, one per customer (cycling):
   - "A Fortune 500 healthcare network delivered in weeks what would have taken a quarter with 6-8 engineers"
   - "A health-tech company chose Snowflake over all competitors for one reason: their data never leaves the platform"
   - "A government agency achieved 3-10x productivity gains while maintaining full compliance"

5. **Why Now**: "Your competitors are already using AI coding agents. The question isn't whether to adopt — it's whether you adopt one that understands your data, respects your governance, and works inside your platform." — single powerful paragraph with fade-in words.

6. **CTA**: "Let's Talk" — single large blue button. Calendar booking link style. Executive-friendly.

### Key Differences from 200-level
- No industry use case cycling (too detailed)
- No bar charts or benchmark data (executives don't need methodology)
- No ecosystem architecture diagram
- Bigger fonts, fewer words per slide
- More emotional/urgency framing
```

---

## PROMPT 3: Technical Deep-Dive (300-Level)

```
Build a React presentation app for Snowflake Cortex Code (CoCo) targeting data engineers, architects, and technical decision-makers. This is the deep-dive version with architecture details, benchmark methodology, token economics, and code examples.

### Tech Stack
Same as 200-level: Vite + React 19, Framer Motion, Tailwind CSS v4, dark Snowflake theme with particles.

### Design Principles
- More slides (12-15)
- Code snippets and SQL examples
- Architecture diagrams (rendered as styled divs/SVG)
- Benchmark methodology explained
- Token economics with actual numbers
- Comparison tables with detailed metrics

### Slides:

1. **Opening**: "Snowflake Cortex Code — Architecture & Benchmarks" — technical subtitle

2. **Architecture Comparison**: Two-panel diagram:
   - LEFT "External Agent + MCP": 8 nodes in a chain (Schema Discovery → JSON Serialize → LLM Context → SQL Generate → MCP Execute → Deserialize → Re-interpret → Result). Context bar that decays/fades from left to right.
   - RIGHT "CoCo (Snowflake-Native)": Single node "Live Snowflake Context" with three arrows: Catalog, RBAC, Session State. Context bar stays full.
   Caption: "Context degrades with every hop. Native eliminates hops."

3. **Benchmark Methodology**: Table showing:
   - ADE-Bench: 43 tasks, dbt Labs framework, claude-opus-4-7
   - Internal eval: 157 questions across 3 datasets (dbt_mart_eval, sv_reverse_eval, sis_extracted)
   - Scoring: Binary pass/fail against expected outputs
   - Token measurement: Internal instrumentation via billing tables

4. **Detailed Results Table**: Full benchmark results:
   | Dataset | Claude Code + MCP | CoCo Bare | CoCo + Context |
   | dbt_mart_eval | 3.1% | 21.9% | 41.7% |
   | sv_reverse_eval | 11.4% | 15.4% | 38.8% |
   | sis_extracted | 24.1% | 47.1% | 83.3% |
   | AGGREGATE | 14.4% | 28.5% | 55.8% |

5. **Token Economics Deep-Dive**:
   - Per-prompt cost: External $1.76 vs CoCo $0.49 vs CoCo+Context $0.59
   - Monthly cost (44 prompts/day): External $78.08 vs CoCo $18.81 vs CoCo+Context $19.47
   - Token count: External 1,990M vs CoCo 476M (on ADE-Bench 43 tasks)
   - Why: Native context eliminates serialization overhead

6. **How CoCo Uses Context**: Technical breakdown:
   - Cortex Sense context layer (early private preview)
   - Snowflake product skills (dbt, Streamlit, SQL, notebooks)
   - RBAC-aware catalog traversal
   - Session state persistence across turns
   - Code example: "CoCo sees your dbt project structure, understands model dependencies, and generates incremental logic without being told"

7. **Pipeline Speed Benchmark**: 
   - DBT-Bench: 102 tasks, claude-opus-4-7
   - CoCo completes dbt pipeline tasks 28% faster than Claude Code
   - Why: Native Snowflake tooling sidesteps conversational bash workflow
   - Diagram showing CoCo's planning → skills → validation → execution loop

8. **Security Architecture**:
   - PII/PHI never leaves Snowflake
   - Data/prompts don't go to model providers
   - RBAC enforced on every query
   - Session isolation per user
   - Audit trail via query history

9. **Model Agnosticism Technical Details**:
   - Not tied to Claude, OpenAI, or Google
   - Cortex routes to best available model
   - Same tooling regardless of model backend
   - No prompt lock-in or provider-specific formatting

10. **Integration Architecture**:
    - Cortex Analyst: semantic models → natural language SQL
    - Cortex Search: vector retrieval for RAG
    - Cortex Agents: autonomous multi-step task orchestration
    - Managed MCP: external tool connectivity (Slack, M365, GitHub)
    - Diagram showing data flow between services

11. **Cost Scaling by User Segment**: 
    - Heavy users (data engineers): ~$20-40/month
    - Moderate users (analysts): ~$5-15/month
    - Occasional users: <$5/month
    - Cost scales with usage, not headcount

12. **Complex Query Walkthrough**: Step-by-step showing how CoCo handles:
    - Input: "Build me a revenue dashboard by region excluding churned accounts"
    - Step 1: Catalog lookup (finds tables, understands joins)
    - Step 2: RBAC check (user can access these tables)
    - Step 3: SQL generation (with proper CTEs, window functions)
    - Step 4: Validation (compiles against Snowflake)
    - Step 5: Execution + result
    Show actual SQL code snippets at each step

13. **Handling Objections (Technical)**:
    - "We already use Claude Code" → Context decay problem, 24% vs 86%
    - "It's just another wrapper" → Native execution, no MCP overhead
    - "What about vendor lock-in?" → Model agnostic, standard SQL output
    - "How does it handle our specific schemas?" → Catalog-aware, learns your lineage

14. **Getting Started (Technical)**:
    - Enable in Snowsight or CLI
    - No infrastructure to provision
    - Works with existing RBAC
    - First pipeline in <15 minutes
    - Code snippet showing initial setup

15. **CTA**: "Start Building" — links to docs, trial, and architecture whitepaper
```

---

## Usage Notes

- All three prompts assume the same tech stack and deployment pattern (Vite React → Docker → SPCS)
- The particle background and Snowflake brand theme are consistent across all versions
- Adjust the customer anecdotes as needed — keep them anonymized for external use
- The accuracy numbers (24.1%, 47.1%, 86.3%) are from internal benchmarks (May-June 2026) — verify before external presentation
- For the 300-level version, the detailed benchmark table data may need updating as new evaluations are run
