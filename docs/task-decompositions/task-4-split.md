# Task-4 Split: Capabilities Section (Dark Flip)

## Rationale

The original KB-004 required a single component (`app/components/Capabilities.tsx`) containing:
- Section header and label
- 3 alternating-layout capability blocks (Underwriter Matching, One-Day Turnaround, Digital Bond Issuance)
- A trust strip with covered states and bond types
- 4 underwriter chips
- Framer Motion animations for the entire section
- Complex responsive grid layout (58/42 split on desktop, stacked on mobile)
- Strict typography and color token adherence

This proved too large for worker-coder to complete within the 240s execution ceiling. Stage-1 correctly classified it as "medium" complexity, but the single-file scope is the bottleneck.

## Split Strategy

The component is split along content boundaries:

- **KB-004a** creates the component shell and the first two capability blocks (half the visual work, all the structural boilerplate).
- **KB-004b** extends the same file with the third block, trust strip, and underwriter chips.

Both tasks touch exactly 1 file and remain within the T2 complexity tier.

## Merge Order

**KB-004a → KB-004b**

KB-004b depends on KB-004a because it modifies the same file (`Capabilities.tsx`) that KB-004a creates.

---

## KB-004a: Capabilities Shell + Blocks 1 & 2

| Field | Value |
|---|---|
| **TASK ID** | KB-004a |
| **ASSIGNED TO** | worker-coder |
| **TIER** | T2 |
| **TITLE** | Capabilities section — Underwriter Matching & One-Day Turnaround blocks |
| **DESCRIPTION** | Create the Capabilities component shell with the section header, Block 1 (Underwriter Matching), and Block 2 (One-Day Turnaround). Include Framer Motion animations for the section and each block. Set up the dark surface styling and responsive grid foundation so KB-004b can append the remaining content to the same file. |
| **FILES TO CREATE** | `app/components/Capabilities.tsx` |
| **FILES TO MODIFY** | none |
| **DO NOT TOUCH** | `app/components/ProjectImage.tsx` (assumed existing); `app/globals.css` tokens |
| **DEPENDENCIES** | Task 1 (globals.css design tokens must exist) |
| **INTERFACE CONTRACT** | Exports default function `Capabilities()`. Uses `ProjectImage` with ids `feature_1` and `feature_2`. Section wrapper has `id="capabilities"`. Desktop layout uses 58% / 42% split for text / image areas. Mobile collapses to single-column below 768px. |
| **BRANCH NAME** | task/kb-004a |
| **ESTIMATED COMPLEXITY** | T2 |

### ACCEPTANCE CRITERIA

1. File `app/components/Capabilities.tsx` starts with `"use client";` as the first line.
2. The outer section has `id="capabilities"` and its background color is set to `var(--color-dark-surface)`.
3. All body and heading text within the section uses `color: var(--color-canvas)` (never hardcoded `#FFFFFF`).
4. Block 1 renders the exact H2 **"Access A-rated surety markets."** followed by the exact body paragraph: *"Kestrel connects directly with top-tier underwriters like Liberty Mutual, Travelers, CNA, and Hartford. Get competitive quotes from A-rated carriers without the traditional brokerage overhead."* with the text area on the left (58%) and `<ProjectImage id="feature_1" />` on the right (42%).
5. Block 2 renders the exact H2 **"Quotes issued within 24 hours."** followed by the exact body paragraph: *"Our digital-first platform accelerates underwriting. Submit your application, receive a quote the same or next business day."* with `<ProjectImage id="feature_2" />` on the left (42%) and the text area on the right (58%).
6. Framer Motion `whileInView` animations are implemented for the section header, Block 1, and Block 2.
7. Below 768px viewport width, both blocks collapse to a single-column layout (text above image).
8. `next build` compiles the file without TypeScript or lint errors.

---

## KB-004b: Capabilities Block 3 + Trust Strip + Underwriter Chips

| Field | Value |
|---|---|
| **TASK ID** | KB-004b |
| **ASSIGNED TO** | worker-coder |
| **TIER** | T2 |
| **TITLE** | Capabilities section — Digital Bond Issuance block, Trust strip & Underwriter chips |
| **DESCRIPTION** | Extend the existing `Capabilities.tsx` (created by KB-004a) to add Block 3 (Digital Bond Issuance), the Trust strip displaying covered states and bond types, and the four underwriter chips. Must match the existing dark surface styling, typography system, and responsive grid already established in the file. |
| **FILES TO CREATE** | none |
| **FILES TO MODIFY** | `app/components/Capabilities.tsx` |
| **DO NOT TOUCH** | `Hero.tsx`, `Trust.tsx`, `QuoteForm.tsx` |
| **DEPENDENCIES** | KB-004a (Capabilities component shell must exist first) |
| **INTERFACE CONTRACT** | Extends existing `Capabilities` component. Adds `<ProjectImage id="feature_3" />` in Block 3. Trust strip uses exact text for covered states and bond types. Underwriter chips use exact text. No new exported symbols. |
| **BRANCH NAME** | task/kb-004b |
| **ESTIMATED COMPLEXITY** | T2 |

### ACCEPTANCE CRITERIA

1. Block 3 renders the exact H2 **"Legally equivalent digital bonds."** followed by the exact body paragraph: *"Our bonds are backed by admitted underwriters and recognized in all 50 states. Full regulatory compliance with modern delivery."* with the text area on the left (58%) and `<ProjectImage id="feature_3" />` on the right (42%).
2. The Trust strip appears below the three capability blocks with the exact label text **"COVERED STATES: NY, NJ, CT, PA, FL, TX, CA, IL, OH, GA."** and **"BOND TYPES: License & Permit, Performance, Payment, Bid, Maintenance."** styled in Berkeley Mono.
3. Four underwriter chips render in a horizontal row (wrapping on mobile): **"Liberty Mutual (A)", "Travelers (A++)", "CNA (A)", "Hartford (A+)"**.
4. Trust strip and chips maintain dark surface styling (`color: var(--color-canvas)` on `var(--color-dark-surface)`).
5. No hardcoded hex color values anywhere; all colors reference CSS custom properties from `globals.css`.
6. Below 768px viewport width, Block 3 collapses to single-column (text above image) and chips wrap gracefully.
7. Framer Motion `whileInView` animations are applied to Block 3, the Trust strip, and the underwriter chips.
8. `next build` compiles the modified file without TypeScript or lint errors.

---

## Verification Summary

| Check | Result |
|---|---|
| Sub-task count | 2 |
| Complexity per sub-task | T2 (both) |
| Files touched per sub-task | 1 |
| Acceptance criteria per sub-task | 8 |
| Merge order defined | Yes (004a → 004b) |
| Rationale documented | Yes (content boundary split) |
