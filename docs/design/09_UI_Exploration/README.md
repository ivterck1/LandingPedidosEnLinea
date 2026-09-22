# Phase 09 - UI Exploration

> **Status: Complete.** Antojo Inmediato was approved as the final direction on 21 July 2026. The project is ready for Phase 10 — Wireframes.

## 1. Purpose

UI Exploration exists to visualize several possible creative directions before choosing one final path.

This phase does not produce production code, final HTML, CSS, JavaScript or final interface components. It prepares a reusable exploration system based on documented prompts, external image generation and structured comparison.

The goal is to make visual decisions with evidence. Every mockup generated later must answer a design question: how should the brand feel, how should the page flow, how visible is the food, and how clearly does the experience move toward WhatsApp ordering?

## 2. Relationship With Previous Phases

Phase 09 depends on the strategic and UX documents already created:

- Design Brief: defines project goals, audience and experience principles.
- Brand Strategy: defines brand personality, tone and positioning.
- Competitive Intelligence: identifies patterns, risks and opportunities in the category.
- Design Opportunities: translates research into design problems to solve.
- Design System: provides the official visual foundation and decision rules.
- Concept Board: defines creative atmosphere and emotional direction.
- Moodboard: organizes reference categories for future visual exploration.
- UX Blueprint: defines behavior, navigation, conversion flow and user states.

UI Exploration must not contradict these documents. It can test different visual interpretations, but the business goal remains the same: help users order seafood through WhatsApp with clarity, appetite and confidence.

## 3. Phase Workflow

```text
Strategy

↓

UX Blueprint

↓

Image Prompt Framework

↓

Round 1 Mockups

↓

Select 3 Finalists

↓

Round 2 Refinement

↓

Hybrid Exploration

↓

Final Direction

↓

Wireframes
```

## 4. Round 1

Round 1 explores six distinct visual concepts.

For each concept, Round 1 produces only:

- Full landing desktop image.
- Full landing mobile image.

These images are generated externally and manually stored in each concept's `mockups/` folder. No fake image files or zero-byte placeholders are allowed.

Round 1 evaluates:

- Overall visual identity.
- Section rhythm.
- Product prominence.
- Hierarchy.
- Mobile reorganization.
- WhatsApp conversion clarity.
- Technical plausibility.

## 5. Round 2

The original plan allowed three concepts to advance to Round 2. During review, Antojo Inmediato showed a decisive advantage, so refinement focused on five complementary views of that single direction.

Round 2 may explore:

- Hero detail.
- Menu detail.
- Cart and form detail.
- Component exploration.
- Responsive refinement.
- HANT Score update.

Round 2 should reduce uncertainty. It should not expand the exploration into new unrelated directions.

## 6. Final Direction

The final result is:

- Antojo Inmediato as the primary and only approved concept.
- A controlled synthesis of its full-page, hero, menu and cart/form views.

The final direction must be justified through evidence from mockups, comparison notes, HANT Score and business alignment.

## 7. Folder Structure

```text
09_UI_Exploration/
  README.md
  01_HANT_Image_Prompt_Framework.md
  02_Round_1.md
  03_Round_2.md
  04_Final_Direction.md
  05_HANT_Learnings.md
  selection-round-1.md
  selection-round-2.md
  hybrid-directions.md
  final-direction.md
  concepts/
    01-costa-editorial/
      README.md
      prompts/
      mockups/
      references/
        README.md
      refinement/
    02-mercado-costero/
    03-caribe-moderno/
    04-marisqueria-artesanal/
    05-antojo-inmediato/
    06-brutalismo-costero/
  comparison/
    README.md
    hant-score.md
    visual-comparison.md
    mobile-comparison.md
    component-comparison.md
```

## 8. Rules

- No code in this phase.
- No HTML in this phase.
- No CSS in this phase.
- No JavaScript in this phase.
- No fake image files.
- No zero-byte placeholders.
- No generic restaurant templates.
- Images must be generated externally and manually stored.
- Every image must be connected to a documented prompt.
- Every concept must remain aligned with UX and business goals.
- Mockup folders remain empty until real generated images are available.
- Prompts must be specific to the concept, not duplicated with only the name changed.

## 9. Approved Assets

The real selected assets are stored in `concepts/05-antojo-inmediato/mockups/`:

- `01-full-landing-desktop.png`
- `02-full-landing-mobile.png`
- `03-hero-desktop.png`
- `04-menu-section.png`
- `05-cart-and-form.png`

No zero-byte image placeholders remain in this phase.
