# Pilot Dry-Run Checklist

Two dry runs prove the kit ships: (A) the card game (Next.js 16 + React 19 +
Tailwind 4, vinext/Cloudflare) and (B) an empty project. Both run with no
Superpowers present. SKIPs allowed for absent optionals (Playwright/Chromium,
image generator, Figma seat) — a pilot still passes as long as ask →
playback → plan → build → audit notes → safety report all complete.
Screenshots/traces attach only when a browser is present.

## A. Card-game pilot

Install: `npx skills@latest add <repo>` (replace `<repo>` with this repo)
into the card-game project with no Superpowers present.

- [ ] Ask: sharp questions answered (purpose, audience, feeling, sections).
- [ ] Playback: direction played back with 1–3 named vibe refs; user locks it.
- [ ] Plan: final draft approved before code (structure, why-each-element,
      tokens, shelf parts, verify steps). No code before approval.
- [ ] Build: design lane only (`app/**`, `components/**`, `globals.css`,
      `DESIGN.md`, `public/**`); core game/engine files untouched without a
      written override.
- [ ] Audit notes: guidelines audit recorded (or `SKIP:` copy if the
      upstream skill is unreachable); anti-slop bans checked.
- [ ] Browser verify: `open → snapshot → screenshot → fix → re-verify`
      with screenshots/traces attached — or `SKIP: Playwright/Chromium
      absent — static audit notes only` when no browser is present.
- [ ] Safety report: `file:line` findings, zero open Blocking findings,
      Advisory deferrals recorded with reasons; not-legal-advice noted.

Evidence to keep: plan file, before/after screenshots (only if browser
present), `file:line` audit with zero blocking findings, safety report.

## B. Empty-project pilot

Same install into a fresh/empty project (any stack — non-React maps shelf
parts to local equivalents per the detect-then-adapt rule, never forces
React).

- [ ] Ask → Playback → Plan → Build → Audit notes → Safety report all
      complete (same boxes as A, minimal scope is fine).
- [ ] Minimalist path accepted where optionals are absent (dashboards/empty
      pages: DESIGN.md tokens + type, no reference image).
- [ ] Memory files written (`DESIGN.md` + `docs/webpages/choices.md` or
      equivalent), or in-chat recap fallback recorded.

## Fail criteria (either pilot)

- Output still generic/indistinct after the full loop.
- Core game/engine files touched without explicit written override.
- Ship with open Blocking safety findings.
- Hard-fail on a missing optional (Playwright, image generator, Figma)
  instead of the phase's `SKIP` note.
