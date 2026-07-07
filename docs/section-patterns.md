# Section Patterns

Use this file when building any new section so the page stays consistent with the existing Home and Experience sections.

## Global Shell

- The whole page lives inside `SiteShell`.
- The visual canvas uses the global `.site-shell` background from `src/app/globals.css`.
- Do not add separate section backgrounds unless the section truly needs one.
- Keep the dark charcoal/black base and restrained orange glow.
- Do not add random blobs, loud gradients, or unrelated decorative shapes.

## Grid Lines

- The persistent vertical grid lines come from `.site-shell::before`.
- Desktop vertical grid line positions are:
  - left: `calc(50% - 520px)`
  - right: `calc(50% + 520px)`
- Mobile vertical lines come from the mobile media query in `globals.css`.
- New sections should align their visual markers to these same grid lines.

## Section Boundaries

For full-width section dividers, use:

```tsx
<div
  aria-hidden="true"
  className="pointer-events-none absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 bg-[var(--line)]"
/>
<div
  aria-hidden="true"
  className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-[var(--line)]"
/>
```

Add bottom corner squares on desktop with:

```tsx
<div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
  <div className="absolute bottom-0 left-[calc(50%-520px)] size-2 bg-white/55" />
  <div className="absolute bottom-0 right-[calc(50%-520px)] size-2 bg-white/55" />
</div>
```

TopBar corner squares use the same line positions, but at `top-0` and `bottom-0`.

## Section Wrapper

For regular sections after Hero, start from this wrapper:

```tsx
<section
  id="section-id"
  className="relative mx-auto w-full max-w-5xl px-[30px] py-9 sm:px-12 sm:py-14 lg:py-16"
>
  ...
</section>
```

This means:

- mobile top/bottom padding: `36px`
- tablet top/bottom padding: `56px`
- desktop top/bottom padding: `64px`
- horizontal padding: `30px` on mobile/base, `48px` from `sm`
- content width: `max-w-5xl`

If a section needs to line up with Experience rows and pills, keep content inside the same `max-w-5xl` wrapper.

## Home Section Notes

Hero is a special section because it has the portrait, signature, role line, socials, and CTA buttons.

- Portrait top spacing comes from Hero top padding.
- If the bottom spacing must exactly match the top spacing, avoid viewport-height stretching on the Hero section.
- `min-h-[calc(...)]` can create extra visible space below the CTA buttons because it distributes leftover viewport height after the content.
- The bottom marker squares should sit at the section bottom on the same grid-line positions.

## Typography

- Base UI and section text use Rajdhani through `var(--font-sans)`.
- Signature text uses `.signature-font`.
- Main section headline style should stay close to Experience:

```tsx
className="w-full max-w-none font-sans text-[clamp(1.85rem,3.25vw,3.25rem)] font-normal leading-[1.12] tracking-[-0.01em]"
```

- Do not use `text-balance` when the headline must extend to the same right edge as row pills/buttons.
- Keep large text controlled with `clamp(...)` so it does not overflow on mobile.

## Eyebrow Label

Experience uses a small bullet plus label.

```tsx
<div className="mb-6 flex items-start gap-3 pt-2 text-base font-medium text-white/88 sm:float-left sm:mb-3 sm:mr-16 sm:w-[220px] sm:text-lg">
  <span className="mt-2.5 size-2 rounded-full bg-white" />
  <span>Label</span>
</div>
```

Use this pattern when the section headline should wrap into the space below the label.

## Rows And Pills

Experience rows use:

- row vertical padding: `py-6 sm:py-7`
- divider: `h-px w-full bg-white/12`
- hover divider: `group-hover:bg-[var(--accent)]`
- role text: `text-[clamp(1.45rem,2.05vw,2rem)]`
- date/CTA pill: `h-11 w-40 sm:h-12 sm:w-44`

For flip pills:

- front side shows the date.
- back side shows the CTA.
- use `rotateY(180deg)` for the horizontal flip.
- orange hover background should use `var(--accent)`.

## Motion

- Use Framer Motion lightly.
- Respect `useReducedMotion`.
- Section reveal can use opacity plus a small y-offset.
- Scroll text reveal can split text into characters and map scroll progress to color.
- Avoid heavy parallax, constant looping motion, or canvas animation for normal sections.

## Content

- Keep section content data-driven.
- Prefer content in `src/content/site.ts` unless the section becomes large enough to deserve its own file.
- Do not hardcode editable names, dates, labels, links, project titles, or service text inside components.

## New Section Checklist

1. Add content data first.
2. Build the section component.
3. Use the regular section wrapper unless the section is intentionally special.
4. Add top/bottom boundary lines if it is a full section view.
5. Add bottom grid squares on desktop.
6. Keep typography close to the existing Hero/Experience scale.
7. Avoid `text-balance` if right-edge alignment matters.
8. Run `npm run build`.
