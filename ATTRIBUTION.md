# Attribution

Upstream projects referenced by this kit retain their own licenses.
Verify each license at build time — rows below were pinned 2026-10-14.

| Upstream | Used for | License |
|---|---|---|
| Leonxlnx/taste-skill (`design-taste-frontend`, `image-to-code`) | Kill-generic taste flow; image pipeline | MIT |
| VoltAgent/awesome-design-md (tokens only) | DESIGN.md token start | MIT |
| emilkowalski/skill (`review-animations`) | Motion taste vocabulary | MIT |
| pbakaus/impeccable (`/impeccable audit`, `/impeccable polish`) | Polish gate | Apache-2.0 |
| vercel-labs/agent-skills (`web-design-guidelines`) | Guidelines audit (runtime fetch) | MIT |
| Playwright (`@playwright/test`) | Browser verify | Apache-2.0 |
| pmndrs/react-three-fiber + drei | 3D heroes/viewers | MIT |
| `rdev/liquid-glass-react` | Glass nav/cards | MIT |
| Shadergradient (`@shadergradient/react`) | Animated gradient heroes | Per-repo — verify before shipping |
| collidingScopes Liquid Logo | Pre-render logo assets only | MIT — verify before shipping |
| Refero Styles | Section patterns (beta free; full MCP is Pro) | Beta free / Pro paid — document tier used |
| Cult UI | Animated shadcn extensions | Core free / Pro paid — never ship Pro parts unlicensed |
| UI Watermelon | Copy-paste blocks | MIT |
| CARI | Aesthetics vocabulary (link-out only) | Research-only reference |
| Design Reviewed | Print grid/type study (link-out only) | Research-only reference |
| Artvee | Public-domain art pool | Public-domain per-image — verify each download's page |
| Gurafiku | Layout/poster logic (link-out only) | Research-only reference |
| eMuseum (Gallery Systems SaaS) | Collection UX study (quote-only) | Proprietary — reference only |
| Figma MCP | Figma path (selection, variables, Code Connect) | Proprietary — needs Figma access/seat |

## Ambiguous picks (explicit)

- liquid-glass fork: pinned to `rdev/liquid-glass-react`; other
  liquid-glass variants share the MIT line but differ in API — verify
  the fork's LICENSE + README at build time. Safari/Firefox rendering
  is partial; ship a CSS fallback.
- awesome-design pick: default is VoltAgent/awesome-design-md (tokens
  only — brand identities remain their owners'); the alexpate
  awesome-design-systems list is the fallback when the user meant a
  systems list. Record which was used.
- eMuseum instance: the Gallery Systems SaaS-hosted eMuseum
  (proprietary collection platform) — quoted/UX-studied only, never
  scraped or vendored.
