# Webpage Design Kit

Single-toggle `webpage-design` skill kit for intentional, distinctive webpages.
One skill, one toggle: `/webpage-design` (model-invoked when a webpage task
fits, slash-invoked by you). All loop phases — ask → playback → plan-gate →
build → audit → verify → safety — are internal sections of that one SKILL.md,
not separate installs.

Works with no Superpowers present. If Superpowers is installed, the kit
coexists with it — it never requires or imports Superpowers skills.

Core kit is Markdown-only: no API keys required, no global daemon. Optional
externals (Playwright/Chromium, an image generator, a Figma seat) degrade to
graceful `SKIP` notes per phase — the loop still completes (see
`skills/webpage-design/SKILL.md` for each phase's `SKIP:` copy).

## Install

```bash
npx skills@latest add <repo>
```

Replace `<repo>` with this repo's `owner/name` (or full Git URL) when public.
Re-verify upstream `--skill` names before installing optionals (names shifted
Apr 2026). Optional upstream skills referenced by the kit (install only what
the locked direction needs):

```bash
npx skills add Leonxlnx/taste-skill
npx skills add Leonxlnx/taste-skill --skill image-to-code
npx skills add emilkowalski/skill
npx skills add pbakaus/impeccable
npx skills add vercel-labs/agent-skills --skill web-design-guidelines
```

### Engine matrix

| Engine | Install | Notes |
|---|---|---|
| Claude | Claude plugin via `.claude-plugin/plugin.json` (`skills: ["./skills/webpage-design"]`), or `npx skills@latest add <repo> -a claude-code` | Slash `/webpage-design` + model-invoked. Manual copy: repo `skills/webpage-design/` → `<project>/.claude/skills/webpage-design/` |
| Codex | Codex marketplace entry, or `npx skills@latest add <repo> -a codex` | Manual copy: repo `skills/webpage-design/` → `<project>/.agents/skills/webpage-design/` |
| Cursor | `npx skills@latest add <repo> -a cursor` | Manual copy: repo `skills/webpage-design/` → `<project>/.agents/skills/webpage-design/` (or Cursor skills dir) |
| Copilot | `npx skills@latest add <repo> -a copilot` | Manual copy per Copilot skills docs |
| OpenCode | `npx skills@latest add <repo> -a opencode` | Manual copy: repo `skills/webpage-design/` → `<project>/.opencode/` skills path as applicable |
| Gemini / other SKILL.md agents | `npx skills@latest add <repo> -a <agent>` or manual copy | Any engine that reads SKILL.md (`name:` + `description:` frontmatter) works; no API key needed for the core loop |
| No-Superpowers projects | Same commands — no Superpowers install needed | Pilot passes with SKIPs allowed (Playwright/image-gen/Figma absent) as long as ask → playback → plan → build → audit notes → safety report all complete |

Manual-copy paths summary: `.claude/skills/` (Claude), `.agents/skills/`
(Codex/Cursor), `.opencode/` (OpenCode) as applicable — copy the whole
`skills/webpage-design/` folder, plus `references/` if you want the pinned
DESIGN picks, shelf, vibe index, and safety checklist alongside it.

## Use

1. Invoke `/webpage-design` (or let the model invoke it on a webpage task).
2. Answer the Ask questions (purpose, audience, feeling, sections).
3. Confirm or correct the Playback direction, then approve the Plan-gate draft.
   No code is written before approval.
4. Build runs in the design lane only (`app/**`, `components/**`, `*.css`,
   `tailwind.*`, `DESIGN.md`, `public/**`); engine/rules/server/migrations
   stay hands-off without your written override.
5. Audit → browser verify → safety gate run before ship; `SKIP` notes cover
   absent optionals. Screenshots/traces attach only when a browser is present.

## Layout

- `skills/webpage-design/SKILL.md` — the single skill (all phases).
- `references/` — `DESIGN-PICKS.md`, `SHELF.md`, `VIBE-INDEX.md`,
  `SAFETY-CHECKLIST.md` (pins dated 2026-10-14).
- `.claude-plugin/plugin.json` — Claude plugin manifest.
- `docs/PILOT.md` — pilot dry-run checklist (card-game + empty-project).
- `ATTRIBUTION.md`, `LICENSE` (MIT).
