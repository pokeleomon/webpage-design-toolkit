---
name: webpage-design
description: Co-design intentional, distinctive webpages via ask, playback, plan-gate, build, audit, verify, and safety phases.
---

## Ask

Ask sharp, plain questions before proposing anything. Pull out purpose,
audience, feeling, and sections. Keep it short and concrete: what the page
is for, who it is for, what feeling it should leave, and which sections it
needs. Do not jump to style picks or code yet.

## Playback

Play back what you heard before planning: "here's what I heard, here's the
direction I think fits and why". Name 1–3 vibe references grounding the
direction (e.g. a Balatro-like world, a CARI aesthetic name, a DESIGN.md
pick). Wait for the user to refine; repeat Ask → Playback until the style
and design feel concrete and locked.

## Plan-gate

Write a final draft/plan and get approval before implementing. The plan
states the page structure, why each section and element earns its place,
the design tokens used, the shelf parts used, and the verify steps
(audit, browser check, safety gate). No code before approval. If the user
corrects the plan, revise and re-seek approval.

## Boundaries

Default: read all project files for context. Change only design-space
files: `app/**`, `components/**`, `*.css`, `tailwind.*`, `DESIGN.md`,
`public/**`, plus page copy and public assets. The game engine, rules,
server logic, and migrations are hands-off. Expand scope only on the
user's written override per task; without it, stay in the design lane.

## Memory

Remember requested features and style choices to project memory on disk:
the root `DESIGN.md` tokens file plus `docs/webpages/choices.md` (or
equivalent) recording decisions. Write both so choices persist across
sessions. If the agent has no file-write ability, fall back to an in-chat
recap the user pastes back next session.

## Kill-generic

Run a taste pass so the page stops looking AI-made. Everything below
references upstream skills by install command + invoke phrase — never copy
their rule sets into this repo. (Upstream skill names shifted Apr 2026;
re-verify exact `--skill` names before installing.)

1. Taste flow (`design-taste-frontend`, Leonxlnx/taste-skill). Six steps:
   (1) read the brief, (2) deal one researched direction and set the
   variance / motion / density dials, (3) build with openly-licensed
   photos only, (4) self-check at 3 widths, (5) fix the top-3 issues,
   (6) repeat the fix round ×3.
   - Install: `npx skills add Leonxlnx/taste-skill`
   - Invoke: `design-taste-frontend`
   - SKIP: `SKIP: taste-skill absent — running direction-by-hand
     (brief → direction → openly-licensed photos → 3-width check →
     top-3 ×3). Continuing without hard-fail.`
2. Token start (VoltAgent/awesome-design-md). Copy one `DESIGN.md` from
   `references/DESIGN-PICKS.md` (shortlist pinned 2026-10-14) to the
   project root and build every color/type choice from its tokens. Do
   not invent palette or type. Fallback: the alexpate list
   (https://github.com/alexpate/awesome-design-systems) if the user
   meant a systems list. Tokens only — brands remain owners; verify
   every font/image license before shipping.
   - Install: none (copy one file, `cp <pick>.md DESIGN.md`)
   - Invoke: "build to the root DESIGN.md tokens"
   - SKIP: `SKIP: no DESIGN.md pick fits — deriving minimal tokens
     from the locked direction and recording why.`
3. Motion taste (`review-animations`, emilkowalski/skill). Use its
   curves/durations vocabulary; every animation must serve the page's
   intent, never decoration for its own sake.
   - Install: `npx skills add emilkowalski/skill`
   - Invoke: `review-animations`
   - SKIP: `SKIP: motion skill absent — static-first with one
     intent-serving transition. Continuing without hard-fail.`
4. Polish gate (`/impeccable audit → polish`, pbakaus/impeccable).
   Run the audit with its anti-pattern detectors and PRODUCT.md /
   DESIGN.md context, then polish what it flags. Taste makes the page
   distinctive; impeccable de-slops it.
   - Install: `npx skills add pbakaus/impeccable`
   - Invoke: `/impeccable audit`, then `/impeccable polish`
   - SKIP: `SKIP: impeccable absent — hand audit against the
     anti-slop bans below. Continuing without hard-fail.`
5. Guidelines audit (`web-design-guidelines`, vercel-labs/agent-skills).
   Fetch the latest rules at runtime and audit the built page against
   them. Pin the install command, never a rule snapshot.
   - Install: `npx skills add vercel-labs/agent-skills --skill web-design-guidelines`
   - Invoke: `web-design-guidelines`
   - SKIP: `SKIP: guidelines unreachable — auditing against the
     root DESIGN.md do's and don'ts. Continuing without hard-fail.`

Anti-slop bans (always on, whichever tools are present): no generic
purple-blue gradients, no identical centered-hero-plus-CTA layouts, no
lorem ipsum or placeholder copy, no unlicensed or public-domain-claimed
assets, no default system font stack without intent, no motion that
explains nothing.

## Fidelity

Bridge the gap between direction and a page that holds up in a real
browser. State which pipeline each section used in the output. Detects
the project stack first, then adapts: React + Tailwind + shadcn
examples below are defaults (detect-then-adapt). On a non-React stack,
map every shelf part to its local equivalent — never force React.

1. Image pipeline (image-to-code skill in Leonxlnx/taste-skill, for
   visually important sections only: heroes, marketing bands, gallery
   moments). Generate
   one large section-specific reference image with the user's chosen
   image generator → analyze its type/spacing/proportions → code the
   section to match. State the pipeline in the output
   ("reference-image → analysis → code"). Dense dashboards and data UI
   take the minimalist path instead: no reference image, DESIGN.md
   tokens plus minimal chrome.
   - Install package `Leonxlnx/taste-skill`, skill `image-to-code`:
     `npx skills add Leonxlnx/taste-skill --skill image-to-code`
     (needs a user-chosen image generator alongside it)
   - Invoke skill: `image-to-code`
   - SKIP: `SKIP: no image generator — minimalist path for this
     section (tokens + type, no reference image).`
2. Figma path (Figma MCP, only when the user links a Figma file).
   Pull the selection/node-tree, variables, components, and Code
   Connect output. Figma tokens override the root DESIGN.md only where
   Figma is newer; otherwise DESIGN.md wins.
   - Install (remote Figma MCP server; needs Figma access/seat, then
     authenticate via `/mcp` → Authenticate):
     `claude plugin install figma@claude-plugins-official`
     (recommended — includes MCP settings + workflow skills), or
     manually: `claude mcp add --transport http figma https://mcp.figma.com/mcp`.
     Other agents: add an MCP server pointing at
     `https://mcp.figma.com/mcp`
     (`"mcpServers": {"figma": {"url": "https://mcp.figma.com/mcp"}}`).
     Docs: https://developers.figma.com/docs/figma-mcp-server/remote-server-installation
   - Invoke: pull selection, variables, components, Code Connect
   - SKIP: `SKIP: no Figma link or seat — DESIGN.md tokens govern.`
3. Browser verify (playwright-cli, needs Node 18+ and Chromium).
   Scripted loop, not vibes: `open <dev URL> → snapshot →
   screenshot → fix → re-verify`. Attach trace/video evidence
   (emit/regress) with the report. This wires the taste flow's
   "check in a real browser" step to commands.
   - Install: `npm i -D @playwright/test && npx playwright install chromium`
   - Invoke: `playwright-cli open <dev URL>`, then `snapshot`,
     `screenshot`, fix, re-verify
   - SKIP: `SKIP: Playwright/Chromium absent — static audit notes
     only, no screenshots/traces. Loop still completes.`
