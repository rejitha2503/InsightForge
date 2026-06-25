# GEMINI.md

## ROLE
You are an expert full-stack frontend engineer working inside Antigravity. Your task is to build a complete, working, single-page dashboard web application called **InsightForge**, based strictly on the specifications below. Do not ask clarifying questions — make reasonable assumptions and use realistic mock data where actual data is not provided. Generate all necessary files (components, styles, mock data, config) so the project runs immediately after install.

## 1. Business Name
**InsightForge**

## 2. About the Business
InsightForge is an AI-powered Career Intelligence Platform that combines job market analytics, skill demand forecasting, salary benchmarking, resume evaluation, and personalized career guidance to help professionals make data-driven career decisions.

## 3. Products / Services Offered
- **Skill Demand Analytics** — tracks which technical skills are most sought after by employers
- **Salary Benchmarking Reports** — compares salary ranges across roles, experience levels, and locations
- **Hiring Trend Insights** — shows hiring activity trends by city/region over time
- **Skill Gap Analysis** — identifies gaps between job seeker skills and market demand
- **AI Career Advisor** — recommends career paths and matching roles based on selected skills
- **Resume Match Score (ATS Checker)** — evaluates resumes against job market standards
- **Future Skill Predictor** — forecasts which emerging skills will be in demand

## 4. Dashboard Functionalities — Build Each of These Exactly

### A. Summary Stats Row (render at the very top, 7 stat cards in a horizontal scrollable/wrapping row)
Build a `StatCard` component and render 7 instances with this mock data:
| Label | Value |
|---|---|
| Total Jobs Tracked | 48,250 |
| Avg. Salary | ₹9.8 LPA |
| Fastest Growing Skill | LangChain |
| Top Hiring City | Bengaluru |
| AI Match Score | 92% |
| Emerging Skill | Agentic AI |
| Career Growth Index | 7.4 / 10 |

Each card: icon + label (small, muted) + value (large, bold, neon cyan).

### B. Core Analytics Widgets (render as a 2x2 chart grid below the stats row)

1. **Top Skills in Demand** — Horizontal bar chart (Chart.js `bar` with `indexAxis: 'y'`). Mock data: Python (92), SQL (88), React (80), Power BI (75), Cloud/AWS (70), Excel (65).
2. **Salary by Role** — Vertical bar chart comparing avg. salary (in LPA) across: Data Analyst (8.5), Software Developer (10.2), ML Engineer (14.0), Business Analyst (7.8), DevOps Engineer (11.5).
3. **Hiring Trends by City** — Multi-line chart, x-axis = last 6 months, 3 lines for Bengaluru, Chennai, Hyderabad, each with mock upward-trending values.
4. **Skill Gap Analysis** — Grouped/radar bar chart comparing "Market Demand %" vs "Candidate Supply %" for: Power BI, Tableau, Python, Cloud, GenAI.

Each chart sits inside a card component (see Section 6 for card styling) with a title header and the chart canvas filling the body.

### C. AI-Powered Feature Panels (render as a 3-column section below the charts, titled "AI Career Tools")

Build these as separate React components. Since no live OpenAI key is configured at build time, implement each with a **mock/stubbed response function** that simulates the AI call (simple delay + canned logic based on input) so the UI is fully demoable. Structure the code so swapping the mock function for a real `fetch` call to the OpenAI API later requires editing only that one function.

5. **AI Career Advisor**
   - UI: multi-select dropdown/checkboxes for skills (Python, SQL, Excel, Power BI, React, Cloud)
   - On submit, call `getCareerMatch(selectedSkills)` (mocked) and render: a matched role name + match score % + one sentence of reasoning
   - Example expected output: "Learning Power BI matches you to the Data Analyst role with a 92% match score."

6. **Resume Match Score**
   - UI: file upload input (accept `.pdf,.docx`)
   - On upload, call `getResumeScore(file)` (mocked — does not need to actually parse the file, just simulate a response) and render: ATS Score as a circular progress indicator (e.g., 84/100) + a "Missing Skills" tag list (e.g., Power BI, Tableau)

7. **Future Skill Predictor**
   - UI: a single button "Predict Trends"
   - On click, call `getFutureSkills()` (mocked) and render a short paragraph + 3 tag chips for predicted skills
   - Example expected output: "Demand for GenAI, LangChain, and Agentic AI is expected to rise significantly over the next 12 months."

Visually distinguish all 3 AI panels with a subtle neon-purple glow border to signal "AI-powered," per Section 6.

### D. Filter Controls (footer or top-right of the chart section)
- Dropdown to filter by Job Role (All, Data Analyst, Software Developer, ML Engineer, Business Analyst, DevOps Engineer)
- Dropdown to filter by Time Period (Last 30 days, Last 6 months, Last 1 year)
- Wire these to re-render the chart mock data (can be simple client-side mock filtering — does not need a real backend query)

### E. Responsiveness
- Desktop: stat row in 7 columns, charts in 2x2 grid, AI panels in 3 columns
- Tablet: stats wrap to 3-4 per row, charts stack to 1 column, AI panels stack to 1-2 columns
- Mobile: everything stacks to a single column

## 5. Brand Guidelines (apply exactly these tokens)
- **Brand Name:** InsightForge
- **Tone:** Futuristic, data-driven, tech-forward, trustworthy
- **Color tokens — define these as CSS variables and use them everywhere, no hardcoded hex elsewhere:**
  - `--bg-primary: #0A0E17` (deep navy/black background)
  - `--bg-card: #121826` (card background, slightly lighter than page bg)
  - `--accent-cyan: #00F5D4` (primary brand accent — stat values, chart primary color, active states)
  - `--accent-purple: #B026FF` (secondary accent — AI panel borders/glow, highlights)
  - `--text-primary: #E6F1FF`
  - `--text-muted: #8B9CB3`
- **Typography:** Import "Inter" or "Poppins" from Google Fonts. Headings bold/600+, body regular/400.

## 6. Design Preferences (implement literally, not just as inspiration)
- Global page background: `--bg-primary`, full viewport height, no light mode toggle needed
- Every chart/stat/AI panel is wrapped in a shared `Card` component:
  - `background: var(--bg-card)`
  - `border-radius: 16px`
  - `border: 1px solid rgba(255,255,255,0.08)`
  - `box-shadow: 0 0 0px rgba(0,245,212,0)` by default, transitioning on hover to `0 0 24px rgba(0,245,212,0.25)` (cyan glow) for analytics cards, and `0 0 24px rgba(176,38,255,0.25)` (purple glow) for AI panels
  - Use `backdrop-filter: blur(10px)` with a semi-transparent background for a glassmorphism feel
- Chart.js global config: dark grid lines (`rgba(255,255,255,0.06)`), axis labels in `--text-muted`, dataset colors using `--accent-cyan` as primary and `--accent-purple` as secondary
- Page layout top-to-bottom: Navbar → Stats Row → 2x2 Chart Grid → AI Career Tools (3-column) → Filter/Footer
- Use generous spacing (`gap: 24px` between cards/sections) — avoid a cramped layout

## 7. Tech Stack — Use Exactly This Stack, No Substitutions
- **Frontend Framework:** React (functional components + hooks only, no class components)
- **Styling:** Tailwind CSS (configure `tailwind.config.js` to register the CSS variables from Section 5 as theme colors, e.g. `colors: { cyan: 'var(--accent-cyan)', purple: 'var(--accent-purple)' }`)
- **Charts:** Chart.js via `react-chartjs-2`
- **AI Layer:** OpenAI API — create a single service file (e.g. `src/services/aiService.js`) with exported functions `getCareerMatch()`, `getResumeScore()`, `getFutureSkills()`. For this build, implement these functions with mocked logic and `setTimeout` to simulate latency; leave a clear `// TODO: replace with real OpenAI API call` comment with the exact `fetch` shape needed for a real integration
- **Backend / Database:** Supabase — scaffold a `src/services/supabaseClient.js` with the standard `createClient` setup using environment variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`), but do not block the UI on a live connection; the dashboard must run fully on mock data even if Supabase is not yet connected
- **Build tool:** Vite (for fast local dev/build)

---

## 8. Required Project Structure
```
src/
  components/
    Navbar.jsx
    StatCard.jsx
    StatsRow.jsx
    ChartCard.jsx
    charts/
      TopSkillsChart.jsx
      SalaryByRoleChart.jsx
      HiringTrendsChart.jsx
      SkillGapChart.jsx
    ai/
      AICareerAdvisor.jsx
      ResumeMatchScore.jsx
      FutureSkillPredictor.jsx
    Filters.jsx
    Footer.jsx
  services/
    aiService.js
    supabaseClient.js
  data/
    mockData.js        // all mock numbers from Sections 4A/4B centralized here
  styles/
    theme.css           // CSS variables from Section 5
  App.jsx
  main.jsx
index.html
tailwind.config.js
vite.config.js
package.json
```

## 9. Step-by-Step Build Order
1. Scaffold the Vite + React project and install dependencies: `react-chartjs-2`, `chart.js`, `tailwindcss`, `@supabase/supabase-js`.
2. Create `styles/theme.css` with the CSS variables from Section 5 and import it in `main.jsx`.
3. Configure `tailwind.config.js` to expose the theme colors.
4. Build `data/mockData.js` with all mock values listed in Section 4.
5. Build the shared `Card` styling (Section 6) as a reusable Tailwind class or component.
6. Build `Navbar`, `StatsRow` + `StatCard`.
7. Build the 4 chart components inside `ChartCard` wrappers, arranged in a 2x2 grid.
8. Build `services/aiService.js` with the 3 mocked functions.
9. Build the 3 AI panels, wiring each to its corresponding service function.
10. Build `Filters` and wire them to filter the mock data reactively.
11. Assemble everything in `App.jsx` in the order: Navbar → StatsRow → Chart Grid → AI Career Tools → Filters/Footer.
12. Apply responsive breakpoints per Section 4E.

## 10. Definition of Done — Verify Before Finishing
- [ ] App builds and runs with no console errors
- [ ] All 7 stat cards render with correct mock values
- [ ] All 4 charts render with correct mock data and dark theme styling
- [ ] All 3 AI panels are interactive and return a mocked response within ~1 second of user action
- [ ] Cyan glow on hover for analytics cards, purple glow on hover for AI panels
- [ ] Layout is responsive at 375px (mobile), 768px (tablet), and 1440px (desktop) widths
- [ ] No hardcoded color hex values outside of `theme.css` — everything else references the CSS variables
- [ ] Code is componentized per the file structure in Section 8, not a single monolithic file

