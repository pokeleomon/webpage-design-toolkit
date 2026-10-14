# Parts Shelf (pinned 2026-10-14)

Allow-list of reusable parts. Rule: prefer a shelf part over custom
code when it matches the locked direction. Custom code only when no
shelf part fits — record why in the plan. React examples are defaults
(detect-then-adapt): on non-React stacks map to local equivalents.

## Moment components

### 1. React Three Fiber (+ drei) — 3D heroes/viewers

- Upstream: pmndrs/react-three-fiber + drei (MIT).
- Install: `npm i three @react-three/fiber @react-three/drei`
- Use: one hero or viewer moment, not whole-page 3D.

### 2. liquid-glass — glass nav/cards

- Upstream: pinned to `rdev/liquid-glass-react` (MIT; variants share
  the MIT line — verify the fork's LICENSE before shipping).
- Fallback note: Safari/Firefox rendering is partial — ship plain
  blur/translucency CSS fallback and verify in a real browser.
- Install: follow the pinned fork's README install.

### 3. Shadergradient — animated gradient heroes

- Upstream: Shadergradient (license per its repo — verify before
  shipping; no hand-written GLSL needed).
- Install: `npm i @shadergradient/react`

### 4. Liquid Logo (collidingScopes) — pre-render only

- Upstream: collidingScopes Liquid Logo (MIT — verify before shipping).
- Use: pre-render asset tool, NOT a runtime component. Render out,
  ship frames/video as a static asset; never add as a page dependency.

## System components

### 5. Refero Styles (refero) — section patterns

- Upstream: Refero Styles DESIGN.md examples + screens (beta free;
  full MCP is Pro — document which tier was used).
- Use: copy the pattern, rebuild to root DESIGN.md tokens.
- Registry/MCP: no shadcn registry form on record — copy-pattern is
  the only pinned path. At build time check refero.design /
  styles.refero.design for any registry/MCP invocation and record what
  was used.

### 6. Cult UI (cult) — animated shadcn extensions

- Upstream: Cult UI (core free; Pro paid — keep the separation, never
  ship Pro parts without a license).
- Install a part: `npx shadcn add <cult registry URL>` (replace with
  the named part's registry URL from upstream docs at build time) for
  the named part only; shadcn MCP where available.

### 7. UI Watermelon (watermelon) — copy-paste blocks

- Upstream: UI Watermelon (MIT).
- Install: `npx shadcn add <registry URL>` (replace with the named
  part's registry URL from upstream docs at build time) plus its
  llms.txt context.
