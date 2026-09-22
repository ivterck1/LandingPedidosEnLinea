# HANT Image Prompt Framework

## 1. Purpose

Mockups are not decoration. In HANT Design, mockups exist to support design decisions before final interface work begins.

An image prompt is a design artifact. It connects business objectives, user behavior, brand strategy and visual exploration into one controlled request. The resulting image is evidence that can be compared, criticized and improved.

This framework is model-agnostic. It can be adapted for GPT Image, Midjourney, Flux, Ideogram, Firefly, Stable Diffusion and future image-generation tools.

## 2. HANT Principle

> Every important visual decision must be supported by visual evidence.

This means the team should avoid choosing a direction only because it sounds good in writing. A concept must be visualized, compared and tested against the project goals.

## 3. Prompt Architecture

The official HANT prompt structure contains six parts.

### A. Creative Brief

Use this block to define why the mockup exists.

- Project.
- Business objective.
- User objective.
- Audience.
- Brand personality.
- Emotional objective.
- Experience expected.
- What the concept must communicate.
- What the concept must avoid.

### B. Art Direction

Use this block to define how the concept should feel and organize visual decisions.

- Visual concept.
- Composition.
- Layout.
- Section rhythm.
- Photography.
- Typography.
- Color.
- Texture.
- Components.
- Spacing.
- Hierarchy.
- Interaction cues.
- Desktop behavior.
- Mobile behavior.

### C. UX Requirements

Use this block to protect the product experience.

- Main user journey.
- Primary CTA.
- Cart visibility.
- Menu scanning.
- Conversion flow.
- Form behavior.
- WhatsApp continuity.
- Accessibility expectations.

### D. Mockup Requirements

Use this block to define the image output.

- Mockup type.
- Viewpoint.
- Aspect ratio.
- Required sections.
- Required content.
- Output quality.
- Rendering style.
- Text handling.
- Device rules.
- Background rules.

### E. Restrictions

Every prompt must include restrictions that prevent unusable assets:

- No code.
- No browser chrome.
- No floating laptops.
- No phones held by people.
- No perspective distortion.
- No 3D device mockups.
- No lorem ipsum.
- No fake unreadable text when avoidable.
- No random seafood unrelated to the menu.
- No missing sections.
- No decorative presentation board unless explicitly requested.
- No generic template appearance.
- No collage when a full landing is requested.

### F. Negative Prompt

Reusable negative prompt:

```text
No code, no browser chrome, no app window frame, no laptop mockup, no phone device frame, no hand holding a phone, no perspective distortion, no angled screen, no 3D device render, no floating UI cards outside the page, no lorem ipsum, no unreadable fake text when avoidable, no missing required sections, no collage, no presentation board, no generic restaurant template, no random seafood unrelated to ceviche, tostadas, cocteles, specialties or drinks, no childish nautical icons, no cartoon seafood mascot, no excessive decoration, no cluttered layout, no horizontal overflow, no cropped full landing.
```

### G. Output Adapter

#### GPT Image

- Specify the requested image as a front-facing full-page website mockup.
- Describe the aspect ratio in plain language and include the exact target ratio when possible.
- For long landings, request a complete vertical composition with all sections visible.
- State clearly: no browser chrome, no device frame, no perspective and no presentation board.
- To reduce text corruption, request short Spanish headings, plausible prices and readable labels.
- Ask for consistent visual hierarchy rather than perfect production accuracy.

#### Midjourney

- Use `--ar` for aspect ratio, such as `--ar 9:16` for mobile or long vertical desktop exploration.
- Use direct wording: front-facing flat website landing page mockup.
- Avoid device framing by adding: no laptop, no phone mockup, no browser UI, no perspective.
- Reduce text issues by requesting short Spanish UI labels and avoiding dense paragraphs.
- Keep hierarchy clear by naming the most important sections and CTA.

#### Flux

- Provide a structured prompt with short sections.
- Specify flat, front-facing UI mockup and the required aspect ratio.
- Emphasize layout rhythm, section continuity and realistic interface text.
- Include the negative prompt as a separate block if the tool supports it.
- Use concise labels to improve text reliability.

#### Generic Image Model

- Lead with the mockup type and concept name.
- State that the result is a complete landing page, not a presentation board.
- Include required sections in order.
- Specify no device, no perspective and no browser frame.
- Use short, realistic Spanish text.
- Add a negative prompt when the tool supports it.

## 4. Mockup Types

### Full Landing Desktop

Used to evaluate:

- Section coexistence.
- Rhythm.
- Hierarchy.
- Storytelling.
- Conversion visibility.

### Full Landing Mobile

Used to evaluate:

- Mobile hierarchy.
- Touch behavior.
- Order flow.
- Density.
- CTA visibility.

### Hero Detail

Used to evaluate:

- Initial impact.
- Brand expression.
- CTA clarity.

### Menu Detail

Used to evaluate:

- Scanability.
- Product cards.
- Pricing.
- Category navigation.

### Cart and Form Detail

Used to evaluate:

- Conversion.
- Total clarity.
- Error handling.
- WhatsApp continuity.

### Component Board

Used to evaluate:

- Buttons.
- Inputs.
- Cards.
- Badges.
- Stepper.
- States.

## 5. Prompt Generator Template

```text
Create a {{MOCKUP_TYPE}} for {{PROJECT_NAME}}.

Creative Brief:
- Project: {{PROJECT_NAME}}
- Concept: {{CONCEPT_NAME}}
- Business objective: help users order seafood directly through WhatsApp.
- User objective: browse the menu, choose products, review total and send an order without friction.
- Audience: families, couples, tourists, home-order users and frequent customers.
- Brand personality: {{BRAND_PERSONALITY}}
- Emotional objective: {{EMOTIONAL_OBJECTIVE}}
- Expected experience: fast, clear, appetizing, trustworthy and mobile first.
- Must communicate: fresh seafood, clear ordering, product quality and WhatsApp continuity.
- Must avoid: generic templates, childish seafood graphics, visual clutter and unclear CTAs.

Art Direction:
- Visual concept: {{CONCEPT_NAME}}
- Composition: {{COMPOSITION_DIRECTION}}
- Layout: {{LAYOUT_DIRECTION}}
- Section rhythm: {{SECTION_RHYTHM}}
- Photography: {{PHOTOGRAPHY_DIRECTION}}
- Typography: {{TYPOGRAPHY_DIRECTION}}
- Color: {{COLOR_DIRECTION}}
- Texture: {{TEXTURE_DIRECTION}}
- Components: {{COMPONENT_DIRECTION}}
- Spacing: {{SPACING_DIRECTION}}
- Hierarchy: product first, then price, then CTA, then supporting copy.
- Interaction cues: clear buttons, cart access, quantity controls and WhatsApp action.
- Desktop behavior: {{DESKTOP_BEHAVIOR}}
- Mobile behavior: {{MOBILE_BEHAVIOR}}

UX Requirements:
- Main user journey: hero, specialties, categories, menu preview, cart preview, order form preview, WhatsApp CTA, footer.
- Primary CTA: {{PRIMARY_CTA}}
- Cart visibility: cart preview must be easy to find.
- Menu scanning: categories and prices must be easy to compare.
- Conversion flow: see product, add, review cart, complete data, send WhatsApp.
- Form behavior: name, delivery type, address when delivery is selected and optional notes.
- WhatsApp continuity: the final CTA must feel like the natural continuation of the order.
- Accessibility expectations: strong hierarchy, readable labels, large touch targets for mobile, visible states.

Mockup Requirements:
- Mockup type: {{MOCKUP_TYPE}}
- Viewpoint: front-facing flat landing page.
- Aspect ratio: {{ASPECT_RATIO}}
- Required sections: {{REQUIRED_SECTIONS}}
- Required content: realistic Spanish seafood content, plausible MXN prices, no lorem ipsum.
- Output quality: high fidelity conceptual mockup, not final UI.
- Rendering style: polished digital product mockup.
- Text handling: short readable Spanish headings and labels.
- Device rules: no device frame, no browser chrome, no perspective.
- Background rules: show only the page, not a decorative board.

Restrictions:
{{NEGATIVE_PROMPT}}
```

## 6. Quality Checklist

- Entire requested composition is visible.
- No important section is missing.
- CTA is understandable.
- Food is protagonist.
- Brand personality is visible.
- Desktop and mobile are related.
- Layout is technically plausible.
- Text is sufficiently readable.
- No device frame appears.
- No presentation-board framing appears.
- No code or browser UI appears.
- No zero-byte image file is stored.
- Prompt is saved next to the mockup.

## 7. File Naming Standard

Use:

- `01-full-landing-desktop.webp`
- `02-full-landing-mobile.webp`
- `03-hero-desktop.webp`
- `04-menu-section.webp`
- `05-cart-and-form.webp`

## 8. Storage Rule

Every image must have a matching prompt file.

Example:

```text
prompts/01-full-landing-desktop.md
mockups/01-full-landing-desktop.webp
```

Do not store images without prompt documentation. Do not store prompt files that no longer represent the image.
