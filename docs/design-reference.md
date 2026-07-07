# Portfolio Design Reference

This file captures the intended direction for the portfolio/landing website. Use it as the build reference alongside the screenshot and screen recording shared in chat.

## Goal

Build a polished, dark, Framer-style editorial portfolio website for a personal/business brand. The site should feel premium, spacious, cinematic, and intentional without becoming a complex web app.

The implementation should stay simple: content-driven sections, small reusable UI components, light motion, and static deployment to Vercel.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel deployment

Avoid Redux, Zustand, unnecessary backends, CMS setup, or heavy animation systems unless there is a clear future requirement.

## Architecture Decision

Use a `src/` based content-driven section architecture.

```txt
src/
  app/
    layout.tsx
    page.tsx
    sitemap.ts
    robots.ts

  components/
    layout/
      SiteShell.tsx
      FloatingNav.tsx
      TopBar.tsx

    sections/
      Hero.tsx
      Stats.tsx
      Experience.tsx
      SelectedWork.tsx
      Services.tsx
      AboutStory.tsx
      TechStack.tsx
      Process.tsx
      Contact.tsx

    ui/
      Button.tsx
      Card.tsx
      Pill.tsx
      SectionHeader.tsx
      VideoCard.tsx

    motion/
      SectionReveal.tsx
      ScrollProgress.tsx

  content/
    site.ts
    projects.ts
    services.ts
    tech.ts

  lib/
    metadata.ts
    utils.ts
```

Main composition:

```tsx
<SiteShell>
  <Hero />
  <Stats />
  <Experience />
  <SelectedWork />
  <Services />
  <AboutStory />
  <TechStack />
  <Process />
  <Contact />
</SiteShell>
```

`app/page.tsx` should mostly compose sections. Section data should live in `/content` files wherever practical.

## Visual Direction

- Black/dark charcoal editorial canvas.
- Centered max-width page column.
- Faint vertical and horizontal grid lines.
- Subtle orange/red glow accents in the background.
- Large negative space.
- Thin dividers and borders.
- Rounded glassy cards with restrained shadows.
- White text and icons with muted gray secondary text.
- Orange should be an accent, not the whole palette.
- Avoid generic AI-looking gradients, random blobs, clutter, and overdecorated cards.

## Screenshot Reference Notes

The hero screenshot establishes the key first impression:

- Top bar split into three areas:
  - Left: logo mark plus name.
  - Center: availability pill with green status dot.
  - Right: location text.
- Centered hero portrait/media card with rounded corners.
- Oversized handwritten/signature name overlapping the bottom of the image.
- Minimal role text below the signature.
- Fixed right-side vertical icon navigation rail.
- Background has dark grid lines and orange glow trails.
- Overall feeling is premium, editorial, and template-like in polish.

## Motion Reference Notes

The screen recording shows the interaction behavior:

- Page scrolls vertically through spacious sections.
- Floating nav rail remains fixed on desktop.
- Active nav item becomes a white circular highlight behind the icon.
- Section transitions are subtle:
  - opacity fade
  - small vertical movement
  - no dramatic page transitions
- Cards may use gentle hover lift/glow on desktop.
- Orange background glow remains atmospheric while content scrolls.
- Selected work cards use large media previews with a dark overlay label and arrow CTA.
- Contact ends with a large rounded CTA treatment.

Use Framer Motion lightly. Prefer `whileInView`, small `y` offsets, opacity changes, and reduced-motion support.

## Sections

### Hero

- Top bar with logo/name, availability pill, and location.
- Large centered portrait/image/video.
- Signature-style title overlapping the media.
- Short role line.
- Social buttons.
- Primary and secondary CTA.

### Stats

- Two or three compact stat cards.
- Customer/project/rating style row.
- Premium dark card styling.

### Experience

- Short editorial headline.
- Timeline or list of roles/services.
- Date pills aligned right on desktop.

### Selected Work

- Large section title.
- Stacked project cards.
- Each card supports image or video preview.
- Card includes category, title, tag, and arrow action.
- Desktop hover states should feel smooth and restrained.

### Services

- Large service list card.
- Active service highlighted with orange icon or pill.
- Inactive services dimmed.
- Bullets under active service.

### About Story

- Editorial text block.
- Optional small visual card strip/carousel if content supports it.

### Tech Stack

- Cards for tools/technologies.
- Use logo/icon support where useful.
- Include short description per tool.

### Testimonials / Awards

- Optional.
- Only render if content exists.

### Process

- Clean stacked cards.
- Step label, title, and short description.

### Contact

- Premium contact card.
- Start with a mailto CTA.
- If a form is added later, keep it simple and document setup requirements.

## Floating Navigation

Use icon-only navigation inspired by the reference.

Preferred implementation:

- Use `lucide-react` icons instead of image assets.
- Fixed vertical rail on desktop.
- Active item gets a white circular background.
- On mobile, convert to bottom pill nav or hide if it hurts the layout.

Possible icon mapping:

- Hero: `Home`
- Experience: `ListChecks` or `List`
- Work: `Layers`, `PanelsTopLeft`, or similar
- About: `UserRound`
- Tech/Process: `FileText`, `PanelTop`, or similar
- Services: `Tags`
- Contact: `MessageSquare`
- Email: `Mail`

## Asset Plan

Assets the user should provide when available:

- Real hero portrait/image/video.
- Project screenshots or short videos.
- Custom logo mark if one exists.
- Exact client/tool logos if required.
- OpenGraph image if a specific branded preview is desired.

Assets that can be recreated in code:

- Floating nav icons via `lucide-react`.
- Orange glow/background atmosphere via CSS layers.
- Grid lines via CSS background or pseudo-elements.
- Card shadows, glass surfaces, pills, and dividers via Tailwind/CSS.

## Video Rules

Create a reusable `VideoCard` component.

Requirements:

- Supports poster image.
- Supports muted autoplay, loop, and `playsInline`.
- Lazy-loads or only starts video when visible/near viewport.
- Avoid playing every video at once.
- Keep files compressed for Vercel Hobby bandwidth.
- Prefer mp4/webm files under 5-10MB each.

## SEO Requirements

- Metadata in `app/layout.tsx`.
- OpenGraph support.
- Canonical URL.
- Clean title and description.
- `sitemap.ts`.
- `robots.ts`.
- Favicon and apple icon support.

## Responsive Requirements

- Desktop should preserve the polished centered editorial layout.
- Tablet should keep cards readable with strong spacing.
- Mobile should be intentionally redesigned into a clean single-column flow.
- Text must not overflow on mobile.
- Buttons and cards must keep stable sizing.
- Floating nav can become bottom pills or be hidden on mobile.

## Quality Bar

- Keep the site tasteful and restrained.
- No generic gradient hero.
- No random decorative blobs.
- No cluttered card piles.
- No nested cards unless there is a clear UI reason.
- Cards should have consistent radius, spacing, border, and padding.
- Use animation to support hierarchy, not distract.
- Keep code maintainable and easy to edit.

## Build Order

1. Confirm project setup and dependencies.
2. Add content files first.
3. Build shared UI primitives.
4. Build layout shell: background, grid, top bar, floating nav.
5. Build sections one by one.
6. Add responsive styling.
7. Add light Framer Motion.
8. Add SEO files and metadata.
9. Run `npm run build`.
10. Start dev server and verify visually when implementation begins.
