# 05 — HANT Learnings

## What Worked

- Exploring complete visual directions before code exposed meaningful differences quickly.
- A shared UX architecture made concepts comparable without forcing identical aesthetics.
- Component-focused prompts revealed details hidden in full-page generations.
- Antojo Inmediato connected the brand promise to a visible commercial action better than quieter concepts.
- Naming each output by function made the selected evidence easier to reuse.

## Model Limitations Observed

- Product names, prices and totals changed between views.
- Some mobile compositions behaved like narrow tablets rather than phones.
- Forms, navigation and operational information were inconsistent.
- Generated text and small controls cannot be trusted as final UI specifications.
- Full-page images can suggest rhythm, but not exact responsive behavior.

## Framework Improvements

- Describe desktop as a 1440 px interface shown in a long-page composition instead of requesting a generic vertical ratio.
- Require a content lock for product names, prices and labels across related prompts.
- Specify mobile viewport behavior and reflow rules explicitly.
- Separate visual evidence from functional truth: mockups inspire; wireframes define.
- Never create empty image placeholders. Use `.gitkeep` only when Git must preserve an empty folder.

## Reusable Selection Principle

The strongest direction is not necessarily the most elegant or experimental. It is the one that best expresses the brand while making the intended user action feel obvious and desirable.

## Phase Result

The exploration produced a clear, ownable direction and enough evidence to begin wireframes without prematurely committing to code.
