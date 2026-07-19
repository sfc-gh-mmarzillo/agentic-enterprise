# Agentic Enterprise Strategy Deck — Build Prompt

This document contains the full prompt you can paste into Cortex Code (or any capable coding agent) to recreate this interactive presentation deck from scratch. It describes every design decision, slide, interaction, and deployment detail.

---

## The Ask

Build an interactive presentation deck deployed as a **Snowpark Container Services (SPCS)** app on Snowflake. The deck tells the story of the Agentic Enterprise — Snowflake's strategic narrative for 2026 — and is used by Sales Engineers and Technical Account Managers in customer meetings.

The tech stack is: **React + Vite + Tailwind CSS v4 + Framer Motion**, built into a Docker container (nginx serving the static build), pushed to the Snowflake image registry, and run as an SPCS service.

---

## Visual Design System

Use a clean, enterprise-grade light theme based on Snowflake's brand palette:

```css
--color-sf-blue: #29b5e8        /* Snowflake cyan */
--color-sf-blue-deep: #1a91d1
--color-sf-purple: #8b5cf6
--color-sf-teal: #11a683
--color-sf-navy: #11182a        /* dark headings */
--color-sf-ink: #1e293b
--color-sf-slate: #64748b
--color-sf-mist: #94a3b8        /* secondary text */
--color-sf-line: #e2e8f0        /* borders */
--color-sf-panel: #f8fafc
```

Slide background: `radial-gradient(1200px 600px at 50% -10%, #ffffff 0%, #eef1f6 55%, #e7ebf2 100%)`

Typography: Inter (sans-serif). Headings at 36–64px font-extrabold, tracking-tight. Use `gradient-text` (blue→indigo→purple linear gradient on text) for emphasis spans.

A subtle animated particle background (`ParticleBackground` component) adds depth — small floating dots at low opacity.

Fixed design canvas: **1180×664px**, scaled uniformly to fill the browser window via a `ResizeObserver` + `Math.min(width/1180, height/664)` scale factor.

---

## App Shell (`App.jsx`)

### Navigation
- Left 18% of screen = invisible click zone → previous slide
- Right 18% = next slide
- Arrow keys (←/→), Space, PageUp/PageDown, Home, End
- Animated top progress bar (gradient fill, 3px height)
- Bottom nav: chevron buttons + dot indicators (active dot is wider, blue)

### Slide Counter & Controls (bottom bar)
- `{pos + 1} / {visible.length}` counter
- Speaker notes button (toggles a floating panel above the nav bar)
- **Show/Hide + Reorder panel** — lists all slides with:
  - Eye icon to show/hide each slide
  - Drag handle (grip dots icon) to reorder slides via HTML5 drag-and-drop
  - Panel header: "Show / hide · drag to reorder"
  - Slide order stored in `order` state (array of original indices)
  - `visible = order.filter(i => !hidden.has(i))`
- Dark mode toggle (inverts the whole deck, counter-inverts images/logos so brand colors stay true)

### Slide transitions
Framer Motion `AnimatePresence` with `variants`:
```js
enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 })
center: { opacity: 1, x: 0 }
exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 })
transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
```

---

## Slides (15 total)

### Slide 1 — Cover (`Slide01Cover`)
Large centered hero:
- Gradient text headline: **"The Agentic Enterprise"** (64px on desktop)
- Subtitle: "Turning Enterprise Context into Governed Agentic Action"
- Pull quote from Sridhar Ramaswamy (June 2026) about the agentic enterprise era

---

### Slide 2 — The Insight (`Slide02Insight`)
Two-column layout:
- Left: "Monday Morning" label, headline "From insight to action **in minutes.**", 4-item timeline (8:42 AM Risk detected → 8:43 notified → 9:15 approved → 9:16 executed + logged), teal callout "Powered by Snowflake Cortex"
- Right: Animated chat card showing CoWork detecting an Acme Corp churn risk, surfacing options, VP approving via one message — auto-cycles between pre-escalation and post-action states every 3.6s

---

### Slide 3 — Not Ready (`Slide03NotReady`)
Two-column layout:
- Left: "Every enterprise wants agentic AI. Most aren't ready." headline + 3 stats (57% cite data reliability, 6% fully trust agents, 61% can't show impact) with sources
- Right: Live chat agent demo card showing an agent hitting a missing table error, getting a wrong answer, user thumbs-downing it — auto-cycles between two failure stages every 3.8s

---

### Slide 4 — Art of the Possible (`Slide04Industries`)
**Click-to-navigate, no auto-rotation.**

Industry pill buttons (Financial Services, Insurance, HCLS, Travel, Telecomms, Retail, Logistics) + LOB pill buttons (Finance, Marketing, Sales, HR). Clicking any pill shows that use case.

For each use case, display a 4-column pipeline:
1. **Source Systems** — list of data sources
2. **Processing** — monospaced log-style steps
3. **[Dynamic column]** — label and color varies by `type`:
   - `ml` → "Agentic ML" (purple) — shows ML model name + training steps
   - `agent` → "CoWork Agent" (blue) — shows agent workflow steps
   - `app` → "AI-Powered App" (teal) — shows Streamlit/React app steps
4. **Agent Action** — what happens + outcome win (green)

Below the pipeline: a Cortex Code progress bar (3 steps: Building pipeline → Identifying patterns → Actioning insights) with the current step highlighted.

Below that: customer quote card.

**Type distribution:**
- `ml`: Financial Services, Insurance, Telecomms, Logistics, HR
- `agent`: HCLS (Clinical CoWork), Finance LOB (Close Automation), Sales LOB (Pipeline CoWork)
- `app`: Travel (Streamlit Pricing App), Retail (React Inventory App), Marketing (Attribution Streamlit App)

---

### Slide 5 — Platform Architecture (`Slide05ControlPlane`)
**3-step interactive click-through with a special zoom transition.**

Step indicator dots at bottom + "click to advance" hint. Clicking anywhere advances. Dots also let you jump directly.

**Step 0 — The Data Platform:**
Show `/slides/snowflake-arch-classic.png` (the classic Snowflake semicircle: Centralized Storage → Multi-Cluster Compute → Cloud Services, with Google Cloud / AWS / Azure logos). White background should be made transparent.

**Step 1 — The AI Data Cloud:**
Show `/slides/ai-data-cloud.png` (the "Snowflake powers every data and AI workload" architecture: All Teams/Tools/Data arrows into the AI DATA CLOUD sphere, with 5 inner boxes: Data Engineering, Analytics, Transactions, **AI**, Applications & Collaboration). Remove the title text and copyright watermark from the image; make white background transparent.

**Step 1 → Step 2 transition (the signature move):**
When the user clicks to advance from Step 1, instead of an instant swap:
1. Framer Motion zooms the AI Data Cloud image to **scale(10)** while fading opacity to 0 over **0.65s**, using `transformOrigin: '63% 70%'` — this is the center of the "AI" box in the image, creating the illusion of diving into that box
2. `onAnimationComplete` sets step to 2
3. Step 2 content fades in with opacity 0→1 over 0.45s

During animation: clicking is blocked (`zooming` state prevents double-fire). Dot navigation also guarded during zoom.

**Step 2 — The Agentic Control Plane:**
5-layer architecture table inside a rounded card:
- Action Layer (amber) — CoWork, CoCo, Custom Agents (pill badges)
- Agentic Service / Harness (sky) — Agent SDK, Skills Runtime, Tool Router, MCP Gateway, Eval & Guardrails
- AI Models (purple) — Anthropic, OpenAI, Meta, Mistral, Deepseek, Grok, Gemini (logo icons)
- Interop & Systems (blue) — Slack, Atlassian, GitHub, Glean, Linear, Salesforce, Natoma (logo icons)
- Data & Context (teal) — Skills, Horizon Catalog, Semantic Views, Cortex Sense

Header: "Agentic Control Plane — Security · Governance · Identity · FinOps"

---

### Slide 6 — Customers (`Slide06Customers`)
3-column customer cards, each with colored top border, industry tag, company name, large metric, body text, pull quote, and product tags:
- **Sanofi** (biopharma, teal) — Hours→seconds for field rep pre-call plans, 20,000+ global sales reps
- **AstraZeneca** (pharma, blue) — $10M+ productivity savings, OpenFlow for clinical data ingestion
- **Toyota Motor Europe** (automotive, purple) — 100 data products live, CoWork for NLQ analytics

---

### Slide 7 — Agents that Act (`Slide07AgentsAct`)
Two-column layout. Left panel: CoWork personal work agent card with:
- **Official Snowflake logo PNG** (not a unicode snowflake — use `/logos/snowflake.png`) in a rounded square
- "CoWork" title, animated phone mock-up scrolling a monthly close report
- Snyk customer quote (2,500+ queries answered monthly)

Right panel: tabs "Agentic Action" / "Features"
- Action tab: CFO monthly close review — 4 steps (Data gathered → Agent analysis → Draft prepared → One-tap approval)
- Features tab: 4 feature cards (One AI workspace, More than chat, Personal to you, Enterprise-grade)

Bottom: 4 pill tags (Shared Skills Catalog, Agent SDK, Governance, MCP Connectors)

---

### Slide 8 — Agents that Build (`Slide08AgentsBuild`)
Two-column layout. Left panel: Cortex Code card with:
- **CoCo owl character image** (`/logos/coco-owl.png`, rendered with `imageRendering: pixelated`) — NOT a robot emoji
- "Cortex Code" title, animated terminal scrolling SQL execution output
- Trent Foley/Evolv Consulting quote (500 hours saved in 20 days)

Right panel: 5-step agentic build flow (Task described → Context gathered → Plan generated → Code written & tested → Deployed + documented)

Bottom: same 4 pill tags

---

### Slide 9 — Meaning (`Slide09Meaning`)
Two-column layout:
- Left: 3 metric cards (3.5× accuracy, −51% tokens, 66% lower cost) + Cortex Sense explainer + 4-quadrant context ecosystem (Connectors, Structured Knowledge, Unstructured Knowledge, Business Logic)
- Right: Animated bar chart — "Accuracy by domain" cycling through Baseline → + Cortex Sense → + Semantic Views with 3 colored phases

---

### Slide 10 — Why We Win (`Slide10Proof`)
Two-column layout:
- Left: Context decay comparison (General agent + MCP vs CoCo native) + accuracy bars (24.1% → 47.1% → 86.3%)
- Right: 3 efficiency stats + 2 customer outcomes + "hard questions Snowflake excels at"
- Snowflake logo PNG in the CoCo-native panel

---

### Slide 11 — Secure by Default (`Slide10Secure`)
**No "AI Security" label at top** — just the title "Secure by default." starts the slide to avoid text cutoff.

3 pillars: Agent Security (teal accent), Data Security, Platform Security — each with 4 feature bullets.

**Prominent quote callout** (between pillars and deep-dive section):
- Teal border box with large `"` mark
- Bold headline: "⅔ of leaders cite security as the #1 barrier to scaling agentic AI"
- Sub-text: Gartner stat about agent attacks

2 deep-dive cards (Horizon AI Guardrails, AI Security Posture Management) + rotating customer proof panel (3 customers, cycling every 3.2s with dot indicators).

---

### Slide 12 — Model Flexibility (`Slide11Models`)
Two-column layout:
- Left: "Every frontier model. One endpoint." headline + 3 bullets + tag line
- Right: Animated orbit diagram — Snowflake logo PNG in center (glowing blue shadow), 7 model provider logos (Anthropic, OpenAI, Meta, Mistral, Deepseek, xAI, Google Cloud) orbiting on a dashed circle, staggered entrance animations

---

### Slide 13 — FinOps (`Slide12FinOps`)
3-column grid of cards:
- Agent Cost Attribution (bar charts per agent)
- AI Budgets (budget utilization bars)
- Observability & Guardrails (action log with allowed/blocked status)

Bottom: TS Imagine customer proof (30% cost reduction, 4,000+ hours saved)

---

### Slide 14 — One Platform (`Slide13OnePlatform`)
Centered layout:
- Headline: "One platform. Easy. Connected. Trusted."
- 5 connected pills (Data & Context, Model Choice, Interop, Action Layer, Control Plane)
- Partner ecosystem grid (11 logos: AWS, Azure, Google Cloud, Salesforce, Slack, Atlassian, GitHub, Glean, Linear, Natoma, Microsoft 365)

---

### Slide 15 — Call to Action (`Slide14CTA`)
Closing slide — clear next steps for the prospect.

---

## Logo System (`logos.jsx`)

Two-tier system:
1. **Local SVG files** in `/public/logos/` — for logos that need to be pixel-perfect (Anthropic, OpenAI, Meta, Mistral, Deepseek, Grok, Slack, Atlassian, GitHub, Glean, Linear, Salesforce, AWS, Azure, Google Cloud, Microsoft)
2. **Inline SVG marks** via `MARKS` object — fallback for any logo not in FILES
3. `FILES` map: logo name (lowercase) → filename
4. `ALIASES`: xAI → grok, m365 → microsoft, etc.

Dark mode: `.deck-dark img, .deck-dark .invert-safe { filter: invert(1) hue-rotate(180deg) }` — preserves brand colors.

Special assets:
- `/public/logos/snowflake.png` — official Snowflake snowflake mark
- `/public/logos/coco-owl.png` — CoCo pixel art owl mascot character
- `/public/slides/ai-data-cloud.png` — processed AI Data Cloud architecture (transparent bg, title removed, copyright removed)
- `/public/slides/snowflake-arch-classic.png` — classic semicircle architecture (transparent bg)

---

## Deployment

### Container
`Dockerfile` uses multi-stage build:
1. `node:20-alpine` → `npm ci` → `vite build`
2. `nginx:alpine` → copy `dist/` → custom `nginx.conf`

`nginx.conf`: serves on port 8080, `try_files $uri $uri/ /index.html` for SPA routing.

### Snowhouse SPCS
- Account: `SFCOGSOPS-SNOWHOUSE_AWS_US_WEST_2`
- Image registry: `sfcogsops-snowhouse-aws-us-west-2.registry.snowflakecomputing.com`
- Image repo path: `temp/mmarzillo_coco/coco_images`
- Service: `TEMP.MMARZILLO_COCO.COCO_PRESENTATION_SERVICE`
- Compute pool: `MATTMARZILLOCP` (CPU_X64_M)
- Service owner role: `TECHNICAL_ACCOUNT_MANAGER`
- Public URL: `https://oa2nhaixd-spcs.sfcogsops-snowhouse-aws-us-west-2.us-west-2.aws.snowflake.app/`

**Critical deployment detail:** SPCS requires the image spec to use an **explicit SHA256 digest** (not just `:latest`) — otherwise the service stays PENDING indefinitely. The deploy script extracts the amd64 digest with `docker manifest inspect` and pins it in the `ALTER SERVICE FROM SPECIFICATION` call.

**Critical auth detail:** The Snowhouse connection uses `externalbrowser` SSO. If `SNOWFLAKE_CONNECTIONS_*_SESSION_TOKEN` and `SNOWFLAKE_CONNECTIONS_*_MASTER_TOKEN` env vars are set (from a previous cortex session), they override the browser auth and fail with "Session and master tokens invalid". Always unset them: `env -u "SNOWFLAKE_CONNECTIONS_SFCOGSOPS-SNOWHOUSE_AWS_US_WEST_2_SESSION_TOKEN" -u "SNOWFLAKE_CONNECTIONS_SFCOGSOPS-SNOWHOUSE_AWS_US_WEST_2_MASTER_TOKEN" snow sql ...`

### `deploy-snowhouse.sh`
```bash
# 1. snow spcs image-registry login (browser SSO)
# 2. docker build --platform linux/amd64
# 3. docker tag + docker push
# 4. Get amd64 digest via docker manifest inspect
# 5. ALTER SERVICE FROM SPECIFICATION with pinned digest (USE ROLE TECHNICAL_ACCOUNT_MANAGER)
# 6. SHOW ENDPOINTS to confirm URL
```

---

## Image Processing

For the architecture images, use Python + Pillow to:
1. Remove title text area: paint top N rows transparent
2. Remove copyright artifacts: paint specific pixel regions transparent
3. Make white background transparent: `(R > 245) & (G > 245) & (B > 245)` → alpha = 0
4. Save as PNG with RGBA mode

---

## Package Dependencies

```json
{
  "react": "^19",
  "framer-motion": "^12",
  "@tailwindcss/vite": "^4",
  "tailwindcss": "^4",
  "vite": "^8"
}
```
