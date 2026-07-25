# Task 4 Rewrite — Capabilities Section (Dark Flip)

## Why this rewrite was needed

The original KB-004 was a single Coder-tier task with 12 acceptance criteria covering CSS, a complex multi-block React component, trust-strip chips, and GSAP animations. It repeatedly timed out workers (240s limit). A prior split into KB-004a / KB-004b fixed the size problem partially but introduced new blockers:

- Both subtasks were still assigned to `worker-coder` instead of T2 workers.
- Acceptance criteria required `next build` and qualitative rendering checks ("renders the exact H2"), which are not verifiable with grep/wc/cat and do not run without a server.
- `DO NOT TOUCH` listed `Capabilities.tsx (assumed existing)` while `FILES TO CREATE` also listed it — a direct contradiction.
- The spec referenced non-existent image assets (`rating_1` through `rating_4` are absent from `public/assets.json`).
- The spec referenced GSAP (`var(--color-dark)`) but `package.json` only has `framer-motion`; `globals.css` contains `--color-dark-surface`, not `--color-dark`.
- `globals.css` still contains old `.capabilities-section`, `.bond-grid`, and related classes from a prior failed attempt that would conflict with the new CSS module.

This rewrite splits Task 4 into **three T2 subtasks**, each with a single clear output, explicit file paths, and **binary pass/fail acceptance criteria verifiable with grep/wc/cat without running a server or making network calls**.

---

## Subtask KB-004a — Capabilities CSS cleanup and section shell

| Field | Value |
|-------|-------|
| **TASK ID** | KB-004a |
| **ASSIGNED TO** | workerT2 |
| **TIER** | T2 |
| **TITLE** | Capabilities section — CSS cleanup and section shell |
| **DESCRIPTION** | Overwrite the existing `app/components/Capabilities.tsx` and `app/components/Capabilities.module.css`. The current files contain an incorrect bond-grid implementation from a prior failed attempt. Remove all old capability-related CSS classes from `app/globals.css` (search for `.capabilities-section`, `.capabilities-heading`, `.capabilities-sub`, `.bond-grid`, `.bond-item`, `.bond-code`, `.bond-name`, `.underwriter-row`). Create a new CSS module with dark-flip capability section styling. Create a clean Capabilities.tsx shell containing only the section wrapper, H2 heading, subheading paragraph, and a text-based trust-strip row showing four underwriter names. Do NOT add the three capability blocks yet. |
| **FILES TO CREATE** | none |
| **FILES TO MODIFY** | `app/components/Capabilities.tsx`, `app/components/Capabilities.module.css`, `app/globals.css` |
| **DO NOT TOUCH** | `app/components/ProjectImage.tsx`, `app/page.tsx`, `public/assets.json` |
| **DEPENDENCIES** | KB-003 (Hero section) — provides CSS custom properties and the `ProjectImage` component |
| **INTERFACE CONTRACT** | `Capabilities.tsx` exports a default function named `Capabilities` that returns a `<section>` with `className={styles.capabilitiesSection}`. The component imports `styles` from `"./Capabilities.module.css"`. The trust strip is a `<div>` with `className={styles.underwriterRow}` containing four `<span>` elements with the underwriter names. |
| **ACCEPTANCE CRITERIA** | 1. `grep -c ".capabilities-section" app/globals.css` returns `0`.<br>2. `grep -c ".bond-grid" app/globals.css` returns `0`.<br>3. `grep -c ".bond-item" app/globals.css` returns `0`.<br>4. File `app/components/Capabilities.module.css` exists and `wc -l` returns `>= 30`.<br>5. `grep -c ".capabilitiesSection" app/components/Capabilities.module.css` returns `>= 1`.<br>6. `grep -c "background: var(--color-dark-surface)" app/components/Capabilities.module.css` returns `>= 1`.<br>7. `grep -c "color: var(--color-canvas)" app/components/Capabilities.module.css` returns `>= 1`.<br>8. `grep -c "padding-block: var(--space-3xl)" app/components/Capabilities.module.css` returns `>= 1`.<br>9. `grep -c ".underwriterRow" app/components/Capabilities.module.css` returns `>= 1`.<br>10. `grep -c "font-family: var(--font-mono)" app/components/Capabilities.module.css` returns `>= 1`.<br>11. File `app/components/Capabilities.tsx` exists and `grep -c "export default function Capabilities"` returns `>= 1`.<br>12. `grep -c "import styles from" app/components/Capabilities.tsx` returns `>= 1`.<br>13. `grep -c "Bonds & Trust" app/components/Capabilities.tsx` returns `>= 1`.<br>14. `grep -c "Trusted by leading underwriters" app/components/Capabilities.tsx` returns `>= 1`.<br>15. `grep -c "Best" app/components/Capabilities.tsx` returns `>= 1`.<br>16. `grep -c "Moody" app/components/Capabilities.tsx` returns `>= 1`.<br>17. `grep -c "Fitch" app/components/Capabilities.tsx` returns `>= 1`.<br>18. `grep -c "AA" app/components/Capabilities.tsx` returns `>= 1`.<br>19. `grep -c "className={styles.underwriterRow}" app/components/Capabilities.tsx` returns `>= 1`.<br>20. `wc -l app/components/Capabilities.tsx` returns `<= 55`. |
| **BRANCH NAME** | task/KB-004a |
| **ESTIMATED COMPLEXITY** | T2 |

---

## Subtask KB-004b — Three alternating capability blocks

| Field | Value |
|-------|-------|
| **TASK ID** | KB-004b |
| **ASSIGNED TO** | workerT2 |
| **TIER** | T2 |
| **TITLE** | Capabilities section — three alternating blocks |
| **DESCRIPTION** | Add three capability blocks to the existing `app/components/Capabilities.tsx` shell created in KB-004a. Place the blocks between the subheading paragraph and the trust strip. Each block uses a two-column grid layout (`42%` image / `58%` text for blocks 1 and 3; `58%` text / `42%` image for block 2). Each block uses the existing `ProjectImage` component with ids `feature_1`, `feature_2`, `feature_3` from `public/assets.json`. Each block contains an H3 heading, a descriptive paragraph, and a row of three capability chips. Add the corresponding block, grid, chip, and image CSS classes to `app/components/Capabilities.module.css`. |
| **FILES TO CREATE** | none |
| **FILES TO MODIFY** | `app/components/Capabilities.tsx`, `app/components/Capabilities.module.css` |
| **DO NOT TOUCH** | `app/components/ProjectImage.tsx`, `app/page.tsx`, `public/assets.json`, `app/globals.css` |
| **DEPENDENCIES** | KB-004a (must be complete — provides Capabilities.tsx shell and CSS module) |
| **INTERFACE CONTRACT** | Each block is wrapped in a `<div>` with `className={styles.block}`. Odd blocks (1 and 3) place the image in the left column and text in the right column. Even block (2) places the text in the left column and image in the right column. Each block contains: a `ProjectImage` with the correct `feature_N` id, an `<h3>` heading, a `<p>` description, and a `<div>` with `className={styles.chipRow}` containing three `<span>` elements with `className={styles.chip}`. The CSS module provides `.block`, `.blockImage`, `.blockContent`, `.chipRow`, and `.chip` rules. |
| **ACCEPTANCE CRITERIA** | 1. `grep -c "feature_1" app/components/Capabilities.tsx` returns `>= 1`.<br>2. `grep -c "feature_2" app/components/Capabilities.tsx` returns `>= 1`.<br>3. `grep -c "feature_3" app/components/Capabilities.tsx` returns `>= 1`.<br>4. `grep -c "ProjectImage" app/components/Capabilities.tsx` returns `>= 3`.<br>5. `grep -c "styles.block" app/components/Capabilities.tsx` returns `>= 3`.<br>6. `grep -c "styles.chipRow" app/components/Capabilities.tsx` returns `>= 3`.<br>7. `grep -c "styles.chip" app/components/Capabilities.tsx` returns `>= 9`.<br>8. `grep -c ".block" app/components/Capabilities.module.css` returns `>= 1`.<br>9. `grep -c "grid-template-columns: 42% 58%" app/components/Capabilities.module.css` returns `>= 1`.<br>10. `grep -c ".chipRow" app/components/Capabilities.module.css` returns `>= 1`.<br>11. `grep -c ".chip" app/components/Capabilities.module.css` returns `>= 1`.<br>12. `wc -l app/components/Capabilities.tsx` returns `>= 80` and `<= 140`. |
| **BRANCH NAME** | task/KB-004b |
| **ESTIMATED COMPLEXITY** | T2 |

---

## Subtask KB-004c — Detail overlays and hover transitions

| Field | Value |
|-------|-------|
| **TASK ID** | KB-004c |
| **ASSIGNED TO** | workerT2 |
| **TIER** | T2 |
| **TITLE** | Capabilities section — detail overlays and hover transitions |
| **DESCRIPTION** | Create a new `app/components/BlockDetail.tsx` component that renders an overlay panel containing an H4 heading, an unordered bullet list, and a paragraph. Add three `BlockDetail` instances inside each capability block in `app/components/Capabilities.tsx`, positioned within the image area. Add CSS hover effects to reveal the detail overlays smoothly using `opacity` and `transform` transitions. Use CSS transitions only — do NOT install GSAP or any additional animation library. Add the detail overlay CSS classes to `app/components/Capabilities.module.css`. |
| **FILES TO CREATE** | `app/components/BlockDetail.tsx` |
| **FILES TO MODIFY** | `app/components/Capabilities.tsx`, `app/components/Capabilities.module.css` |
| **DO NOT TOUCH** | `app/components/ProjectImage.tsx`, `app/page.tsx`, `public/assets.json`, `app/globals.css` |
| **DEPENDENCIES** | KB-004b (must be complete — provides three capability blocks) |
| **INTERFACE CONTRACT** | `BlockDetail.tsx` exports a default function `BlockDetail(props)` that returns a `<div>` with `className={styles.detailOverlay}` containing an `<h4>`, a `<ul>`, and a `<p>`. Capabilities.tsx imports `BlockDetail` and renders exactly three `<BlockDetail>` components inside each capability block's image wrapper, each with a unique `heading` prop. The CSS module provides `.detailOverlay`, `.detailVisible`, and `.chip:hover` rules with `transition` properties. |
| **ACCEPTANCE CRITERIA** | 1. File `app/components/BlockDetail.tsx` exists and `grep -c "export default function BlockDetail"` returns `>= 1`.<br>2. `grep -c "styles.detailOverlay" app/components/BlockDetail.tsx` returns `>= 1`.<br>3. `grep -c "BlockDetail" app/components/Capabilities.tsx` returns `>= 9`.<br>4. `grep -c "heading=" app/components/Capabilities.tsx` returns `>= 9`.<br>5. `grep -c ".detailOverlay" app/components/Capabilities.module.css` returns `>= 1`.<br>6. `grep -c "transition:" app/components/Capabilities.module.css` returns `>= 2`.<br>7. `grep -c "opacity:" app/components/Capabilities.module.css` returns `>= 2`.<br>8. `wc -l app/components/BlockDetail.tsx` returns `<= 40`.<br>9. `wc -l app/components/Capabilities.tsx` returns `>= 140` and `<= 220`. |
| **BRANCH NAME** | task/KB-004c |
| **ESTIMATED COMPLEXITY** | T2 |
