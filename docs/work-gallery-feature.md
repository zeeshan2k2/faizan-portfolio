# Work Gallery Feature

This document defines the planned Selected Work expansion.

The goal is to keep the homepage clean while giving the work/content categories their own detailed gallery experience.

## Concept

The homepage `Selected Work` section should become a category entry point, not the full gallery.

Each card on the homepage represents one work category:

- Fashion Reels
- Real Estate
- Cinematic Reels
- Short Films
- Automotive
- Behind the Scenes
- Islamic Content

When a visitor clicks a category card, they should go to a dedicated work gallery page and land directly on that category.

Recommended link pattern:

```txt
/work#fashion-reels
/work#real-estate
/work#cinematic-reels
/work#short-films
/work#automotive
/work#behind-scenes
/work#islamic-content
```

## Route Structure

Use one dedicated work page:

```txt
src/app/work/page.tsx
```

Do not create separate routes for every category unless there is a future SEO reason to do so.

Reason:

- One page makes the right-side category nav easier.
- Hash links can jump directly to a category.
- The gallery feels like one curated work archive.
- Content stays easier to manage.

## Page Behavior

The `/work` page should use the same premium dark editorial visual language as the homepage:

- black/dark charcoal background
- subtle orange glow
- centered max-width column
- thin grid/divider lines
- small footer squares aligned to the global vertical grid lines
- large Rajdhani typography
- restrained motion

The `/work` page should have its own floating right-side category nav.

This nav should:

- use icon-only or compact category buttons
- stay fixed on desktop
- highlight the active category while scrolling
- update active state based on the visible section
- support direct hash navigation from homepage category cards
- be hidden or simplified on mobile

## Homepage Selected Work

The homepage `Selected Work` section should show category cards only.

Each card should include:

- category title
- short category description
- small preview image/video or placeholder
- arrow CTA
- hover behavior matching the existing selected work card style

Homepage cards should link to `/work#category-id`.

The homepage should not render the full long grid/gallery.

## Work Gallery Page Sections

The `/work` page should render one section per category.

Each category section should include:

- category title
- short description
- media grid matching that category's layout
- image/video cards

The layout can vary per category.

Example category section ids:

```txt
fashion-reels
real-estate
cinematic-reels
short-films
automotive
behind-scenes
islamic-content
```

## Content Architecture

Add a dedicated content file:

```txt
src/content/work.ts
```

Suggested data model:

```ts
export type WorkMediaItem = {
  id: string;
  type: "image" | "video";
  src?: string;
  poster?: string;
  alt: string;
};

export type WorkCategory = {
  id: string;
  title: string;
  description: string;
  layout: "masonry-small" | "mixed-feature" | "cinematic-stack" | "wide-stack";
  href: `/work#${string}`;
  items: WorkMediaItem[];
};

export const workCategories: WorkCategory[] = [
  {
    id: "fashion-reels",
    title: "Fashion Reels",
    description: "Short-form editorial fashion visuals and social-first reels.",
    layout: "masonry-small",
    href: "/work#fashion-reels",
    items: [],
  },
];
```

Keep all category names, descriptions, links, media paths, and layout types in this content file.

## Suggested Components

```txt
src/components/work/
  WorkShell.tsx
  WorkCategoryNav.tsx
  WorkCategorySection.tsx
  WorkMediaCard.tsx
```

Possible responsibilities:

`WorkShell.tsx`

- wraps the `/work` page
- keeps layout consistent with `SiteShell`
- can reuse the same global shell if cleaner

`WorkCategoryNav.tsx`

- right-side floating nav for work categories
- reads from `workCategories`
- highlights active category on scroll
- handles hash navigation

`WorkCategorySection.tsx`

- renders title, description, and layout grid for one category
- accepts a `WorkCategory`
- chooses layout based on `category.layout`

`WorkMediaCard.tsx`

- reusable image/video card
- supports placeholders while assets are missing
- supports future video lazy-loading

## Layout Types

Start with placeholder cards and get the spacing right before adding real media.

Suggested layouts:

`masonry-small`

- several portrait cards in a compact staggered grid
- good for Fashion Reels and Behind the Scenes

`mixed-feature`

- three portrait cards, one wide card, then smaller cards
- good for Real Estate and Cinematic Reels

`cinematic-stack`

- repeated wide cards mixed with portrait cards
- good for Cinematic Reels

`wide-stack`

- two or more wide horizontal cards
- good for Short Films and Islamic Content

## Video Rules

When videos are added:

- use compressed mp4/webm
- keep each video under 5-10MB if possible
- show poster images
- lazy-load videos only when near viewport
- do not autoplay every video at once
- prefer hover/tap preview or muted autoplay only for visible items

## Motion

Use motion lightly:

- section heading fade/slide on scroll
- subtle card reveal
- hover lift/glow on desktop
- active nav highlight

Avoid:

- heavy parallax
- constant effects on every media item
- complex page transitions

## Mobile Behavior

On mobile:

- category cards should stack cleanly
- media grids should become one or two columns depending on content
- floating category nav can become a horizontal sticky pill row or be hidden
- no text or cards should overflow

## Implementation Phases

### Phase 1: Structure

- Create `src/content/work.ts`
- Create `/work` route
- Add placeholder category sections
- Add homepage category cards linking to `/work#category-id`

### Phase 2: Gallery Layouts

- Build `WorkCategorySection`
- Build layout variants
- Use white/gray placeholder media cards like the reference screenshot
- Match spacing and proportions first

### Phase 3: Work Nav

- Build `WorkCategoryNav`
- Add scroll-based active state
- Support hash links from homepage
- Match the main floating nav behavior

### Phase 4: Real Assets

- Add real images/videos
- Add posters for videos
- Add lazy video loading
- Optimize media for Vercel

### Phase 5: Polish

- Add hover states
- Add subtle section reveals
- Check desktop/tablet/mobile
- Run `npm run build`

## Important Notes

- Keep the homepage lightweight.
- Do not dump the full gallery into the landing page.
- Keep category data editable.
- Do not add backend, CMS, Redux, Zustand, or unnecessary routing complexity.
- Build the gallery with placeholders first, then replace with actual assets.
