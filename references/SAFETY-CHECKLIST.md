# Safety Checklist (pinned 2026-10-14)

Mandatory pre-ship audit for the built page. Run the six-risk entry
prompt first, then audit all 20 items below. This checklist is a
prompt + audit aid, not legal advice; when a finding touches real
legal exposure, tell the user to confirm with counsel.

## Entry prompt (run verbatim)

"Audit my app for these 6 legal risks and fix them: add an age gate to signup,
self-host my fonts, turn off session replay (or add consent + input masking),
add an unsubscribe link and postal address to every marketing email, show renewal
terms right next to the subscribe button, and walk me through registering a DMCA agent."

## Output format

One finding per issue: `file:line` + what failed + the fix applied
or to apply. Label every finding:

- Blocking — ship-stopper. Zero open Blocking findings to ship.
- Advisory — should-fix. May ship with it open only if the report
  records why it was deferred.

Gate rule: an item that escalated counts as Blocking. For every item
with an `Escalates to Blocking when:` line, the report must record
which branch applied (base Advisory or escalated Blocking) and why,
so the gate resolves without branching logic at ship time.

## The 20 items

### 1. Privacy policy (Blocking)

- Check: a privacy policy page exists, is linked from the page
  (typically footer), and matches what the page actually collects.
- Fix: add/update the policy page and link it; align every data
  claim with the real SDK and form inventory (see items 6–8).

### 2. Terms of service (Blocking)

- Check: terms of service exist, are linked from the page, and
  cover acceptable use plus liability limits for what the page does.
- Fix: add/update the terms page and link it; flag anything the
  terms promise that the page does not actually do.

### 3. Refund policy (Advisory)

- Escalates to Blocking when: the page takes payment or shows prices.
- Check: if the page takes payment, a refund policy exists, is
  linked near purchase, and states terms before the buy button.
- Fix: add the policy and link it at purchase; no page selling
  anything ships without one.

### 4. Cookie policy (Blocking)

- Check: a cookie policy exists naming each cookie family, purpose,
  and expiry, consistent with the consent banner (item 5).
- Fix: add/update the policy; every cookie the banner mentions
  must appear here and vice versa.

### 5. Cookie consent banner (Blocking)

- Check: a Cookie consent banner shows on first visit, blocks
  non-essential cookies until consent, and records the choice.
- Fix: add the banner with accept/reject granularity; default to
  essential-only before consent.

### 6. Form consents (Blocking)

- Check: every form states what the data is used for and gets
  explicit opt-in for marketing; no pre-ticked consent boxes.
- Fix: add per-form consent copy and unchecked opt-ins; separate
  required service consent from optional marketing consent.

### 7. No unnecessary data (Blocking)

- Check: every collected field earns its place; no nice-to-have
  fields, no silent fingerprinting or extra identifiers.
- Fix: delete unneeded fields and collectors; justify each
  remaining field in the audit report.

### 8. Audit third-party SDKs (Advisory)

- Escalates to Blocking when: any vendor SDK handles personal data
  without a data agreement.
- Check: list every third-party SDK (analytics, replay, fonts,
  chat, ads), what data each receives, and whether its terms cover
  that use.
- Fix: remove SDKs that fail the check; self-host or replace what
  cannot justify its data access.

### 9. Remove dark patterns (Blocking)

- Check: no dark patterns — no confirmshaming, no trick wording, no
  roach-motel cancellations, no fake urgency or countdown resets.
- Fix: rewrite the flow in plain words with symmetric choices;
  make cancelling as easy as signing up.

### 10. Remove hidden fees (Blocking)

- Check: the full price, including fees and renewals, shows before
  the buy/subscribe action; renewal terms sit next to subscribe.
- Fix: surface every fee and the renewal price/term at the point
  of action; link the refund policy (item 3) there too.

### 11. Remove fake reviews (Blocking)

- Check: every testimonial/review is real, attributed, and
  unedited in any way that changes its meaning.
- Fix: delete anything unverifiable; keep sources for what stays.

### 12. Remove unsupported claims (Blocking)

- Check: every efficacy, ranking, or results claim has evidence
  behind it; no absolute claims ("best", "guaranteed") without proof.
- Fix: soften or source each claim; delete what cannot be backed.

### 13. Accessibility alt text (Blocking)

- Check: every meaningful image has alt text describing its
  content or function; decorative images are marked as such.
- Fix: write the missing alt text; mark decorative images
  empty/decorative per the stack's convention.

### 14. Fix color contrast (Blocking)

- Check: body text meets WCAG AA contrast against its background;
  large text, icons, and focus states checked too.
- Fix: adjust the theme tokens / CSS until ratios pass (e.g. the
  root `DESIGN.md` tokens where that file exists);
  re-verify in a real browser where possible.

### 15. Keyboard navigation (Blocking)

- Check: every interactive element is reachable and operable by
  keyboard, with a visible focus indicator and sane tab order;
  no keyboard traps.
- Fix: repair tab order, add focus styles and skip links, trap
  focus only inside open modals and release it on close.

### 16. Add business details (Advisory)

- Escalates to Blocking when: the page sells goods/services or the
  operating jurisdiction requires a published business identity
  (e.g. imprint duty).
- Check: the legal business name, contact path, and jurisdiction
  appear where users expect them (footer, contact, legal pages).
- Fix: add the missing details; keep them identical everywhere.

### 17. Age consent for kids' data (Blocking)

- Check: where kids' data is possible, an age gate plus parental
  consent flow exists at signup before any collection.
- Fix: add the age gate and consent flow; default unknown-age
  users to the most restrictive path.

### 18. Unsubscribe link in emails (Blocking)

- Check: every marketing email carries a working one-click
  unsubscribe link plus the sender's postal address.
- Fix: add both to every marketing template; test the
  unsubscribe end to end.

### 19. License fonts/images (Blocking)

- Check: every font is self-hosted or licensed for this use, and
  every image/asset has a verified license with attribution where
  required; nothing claims public-domain without proof.
- Fix: replace or license what fails; record each license and
  attribution in the report.

### 20. Data deletion request (Blocking)

- Check: users can request deletion of their data through a
  stated path, and the path actually works end to end.
- Fix: add the request path (page, form, or contact flow),
  document the fulfilment steps, and test one request through.
