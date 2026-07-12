export type BrandItem = {
  id: string;
  name: string;
  mark: "shield" | "pill" | "split" | "diamond" | "rings";
};

export const brandCarouselContent = {
  label: "Work with 60+ brands worldwide",
  items: [
    {
      id: "ipsum",
      name: "Ipsum",
      mark: "pill",
    },
    {
      id: "logoipsum",
      name: "Logoipsum",
      mark: "shield",
    },
    {
      id: "looq",
      name: "LOOQ",
      mark: "rings",
    },
    {
      id: "orbis",
      name: "Orbis",
      mark: "split",
    },
    {
      id: "nexa",
      name: "Nexa",
      mark: "diamond",
    },
  ] satisfies BrandItem[],
};
