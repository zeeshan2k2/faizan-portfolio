export type WorkCategory = {
  id: "videography" | "editing" | "short-films";
  label: string;
  title: string;
  description: string;
  cta: string;
  image: {
    src: string;
    alt: string;
  };
  media?: WorkMediaItem[];
  groups: WorkGroup[];
};

export type WorkMediaItem = {
  id: string;
  title: string;
  orientation: "portrait" | "landscape";
  previewSrc: string;
  fullSrc: string;
};

export type WorkGroup = {
  id: string;
  title: string;
  description: string;
  layout: "portrait-cluster" | "mixed-feature" | "cinematic-stack" | "wide-stack";
};

export const workVideoOrder: Record<WorkCategory["id"], Record<string, number>> = {
  videography: {
    "Green Final Export 2026": 1,
    "Fast Edit Complete": 2,
    "Fashion Reel ZFS Sample": 3,
    "Final Video Smart Benefits": 4,
    "Crockrenza": 5,
    "GYM Reel 1": 6,
    "350z": 7,
    "Matcha": 8,
    "Pert Massager Product": 9,
    "Crockery 7": 10,
    "Final Reel 1": 11,
    "Black Dress Sindh": 12,
    "Kohiii Video 2": 13,
    "Real Estate Reel 4": 14,
  },
  editing: {
    "Jaadu": 1,
    "Easy Paisa Commercial": 2,
    "Real Estate Edit": 3,
    "Clay Pot Final Render": 4,
    "Lumier Sample": 5,
    "Air BNB Video Practice": 6,
  },
  "short-films": {
    "Baat Unkahi Short Film": 1,
  },
};

function orderWorkMedia(
  categoryId: WorkCategory["id"],
  media: WorkMediaItem[],
) {
  const categoryOrder = workVideoOrder[categoryId];

  return [...media].sort((a, b) => {
    const orderA = categoryOrder[a.title] ?? Number.MAX_SAFE_INTEGER;
    const orderB = categoryOrder[b.title] ?? Number.MAX_SAFE_INTEGER;

    return orderA - orderB;
  });
}

export const workCategories = [
  {
    id: "videography",
    label: "Creative Service",
    title: "Videography",
    description: "Reels, brand shoots, event coverage, and cinematic social content.",
    cta: "View Work",
    image: {
      src: "/images/work-card.png",
      alt: "Preview image for videography work",
    },
    media: orderWorkMedia("videography", [
      {
        id: "green-final-export-2026",
        title: "Green Final Export 2026",
        orientation: "portrait",
        previewSrc: "/videos/videography/previews/green-final-export-2026-preview.mp4",
        fullSrc: "/videos/videography/full/green-final-export-2026.mp4",
      },
      {
        id: "fast-edit-complete",
        title: "Fast Edit Complete",
        orientation: "portrait",
        previewSrc: "/videos/videography/previews/fast-edit-complete-preview.mp4",
        fullSrc: "/videos/videography/full/fast-edit-complete.mp4",
      },
      {
        id: "fashion-reel-zfs-sample",
        title: "Fashion Reel ZFS Sample",
        orientation: "portrait",
        previewSrc:
          "/videos/videography/previews/fashion-reel-zfs-sample-preview.mp4",
        fullSrc: "/videos/videography/full/fashion-reel-zfs-sample.mp4",
      },
      {
        id: "final-video-smart-benefits",
        title: "Final Video Smart Benefits",
        orientation: "portrait",
        previewSrc:
          "/videos/videography/previews/final-video-smart-benefits-preview.mp4",
        fullSrc: "/videos/videography/full/final-video-smart-benefits.mp4",
      },
      {
        id: "crockrenza",
        title: "Crockrenza",
        orientation: "portrait",
        previewSrc: "/videos/videography/previews/crockrenza-preview.mp4",
        fullSrc: "/videos/videography/full/crockrenza.mp4",
      },
      {
        id: "gym-reel-1",
        title: "GYM Reel 1",
        orientation: "portrait",
        previewSrc: "/videos/videography/previews/gym-reel-1-preview.mp4",
        fullSrc: "/videos/videography/full/gym-reel-1.mp4",
      },
      {
        id: "350z",
        title: "350z",
        orientation: "portrait",
        previewSrc: "/videos/videography/previews/350z-preview.mp4",
        fullSrc: "/videos/videography/full/350z.mp4",
      },
      {
        id: "matcha",
        title: "Matcha",
        orientation: "portrait",
        previewSrc: "/videos/videography/previews/matcha-preview.mp4",
        fullSrc: "/videos/videography/full/matcha.mp4",
      },
      {
        id: "pert-massager-product",
        title: "Pert Massager Product",
        orientation: "landscape",
        previewSrc:
          "/videos/videography/previews/pert-massager-product-preview.mp4",
        fullSrc: "/videos/videography/full/pert-massager-product.mp4",
      },
      {
        id: "crockery-7",
        title: "Crockery 7",
        orientation: "portrait",
        previewSrc: "/videos/videography/previews/crockery-7-preview.mp4",
        fullSrc: "/videos/videography/full/crockery-7.mp4",
      },
      {
        id: "final-reel-1",
        title: "Final Reel 1",
        orientation: "portrait",
        previewSrc: "/videos/videography/previews/final-reel-1-preview.mp4",
        fullSrc: "/videos/videography/full/final-reel-1.mp4",
      },
      {
        id: "black-dress-sindh",
        title: "Black Dress Sindh",
        orientation: "portrait",
        previewSrc: "/videos/videography/previews/black-dress-sindh-preview.mp4",
        fullSrc: "/videos/videography/full/black-dress-sindh.mp4",
      },
      {
        id: "kohiii-video-2",
        title: "Kohiii Video 2",
        orientation: "portrait",
        previewSrc: "/videos/videography/previews/kohiii-video-2-preview.mp4",
        fullSrc: "/videos/videography/full/kohiii-video-2.mp4",
      },
      {
        id: "real-estate-reel-4",
        title: "Real Estate Reel 4",
        orientation: "portrait",
        previewSrc: "/videos/videography/previews/real-estate-reel-4-preview.mp4",
        fullSrc: "/videos/videography/full/real-estate-reel-4.mp4",
      },
    ]),
    groups: [],
  },
  {
    id: "editing",
    label: "Creative Service",
    title: "Editing",
    description: "Short-form edits, pacing, color, sound, and polished final delivery.",
    cta: "View Work",
    image: {
      src: "/images/work-card.png",
      alt: "Preview image for editing work",
    },
    media: orderWorkMedia("editing", [
      {
        id: "jaadu",
        title: "Jaadu",
        orientation: "landscape",
        previewSrc: "/videos/editing/previews/jaadu-preview.mp4",
        fullSrc: "/videos/editing/full/jaadu.mp4",
      },
      {
        id: "easy-paisa-commercial",
        title: "Easy Paisa Commercial",
        orientation: "landscape",
        previewSrc: "/videos/editing/previews/easy-paisa-commercial-preview.mp4",
        fullSrc: "/videos/editing/full/easy-paisa-commercial.mp4",
      },
      {
        id: "real-estate-edit-final-render",
        title: "Real Estate Edit",
        orientation: "landscape",
        previewSrc:
          "/videos/editing/previews/real-estate-edit-final-render-preview.mp4",
        fullSrc: "/videos/editing/full/real-estate-edit-final-render.mp4",
      },
      {
        id: "clay-pot-final-render",
        title: "Clay Pot Final Render",
        orientation: "portrait",
        previewSrc: "/videos/editing/previews/clay-pot-final-render-preview.mp4",
        fullSrc: "/videos/editing/full/clay-pot-final-render.mp4",
      },
      {
        id: "lumier-sample",
        title: "Lumier Sample",
        orientation: "portrait",
        previewSrc: "/videos/editing/previews/lumier-sample-preview.mp4",
        fullSrc: "/videos/editing/full/lumier-sample.mp4",
      },
      {
        id: "air-bnb-video-practice",
        title: "Air BNB Video Practice",
        orientation: "portrait",
        previewSrc: "/videos/editing/previews/air-bnb-video-practice-preview.mp4",
        fullSrc: "/videos/editing/full/air-bnb-video-practice.mp4",
      },
    ]),
    groups: [],
  },
  {
    id: "short-films",
    label: "Creative Service",
    title: "Short Films",
    description: "Narrative edits, compact story cuts, and polished film sequences.",
    cta: "View Work",
    image: {
      src: "/images/work-card.png",
      alt: "Preview image for short films work",
    },
    media: orderWorkMedia("short-films", [
      {
        id: "baat-unkahi-short-film",
        title: "Baat Unkahi Short Film",
        orientation: "landscape",
        previewSrc:
          "/videos/short-films/previews/baat-unkahi-short-film-preview.mp4",
        fullSrc: "/videos/short-films/full/baat-unkahi-short-film.mp4",
      },
    ]),
    groups: [],
  },
] satisfies WorkCategory[];
