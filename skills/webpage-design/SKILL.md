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
