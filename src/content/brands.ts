export type BrandItem = {
  id: string;
  name: string;
  logo: string;
  logoClassName?: string;
  wrapperClassName?: string;
};

export const brandCarouselContent = {
  label: "Work with 60+ brands worldwide",
  items: [
    {
      id: "ar-rehman-motors",
      name: "AR Rehman Motors and Traders",
      logo: "/brands/ar-rehman-motors-and-traders.png",
      wrapperClassName: "min-w-[190px] sm:min-w-[230px]",
      logoClassName: "max-h-36 max-w-[290px] sm:max-h-44 sm:max-w-[380px]",
    },
    {
      id: "daamin",
      name: "Daamin",
      logo: "/brands/daamin.png",
      wrapperClassName: "min-w-[190px] sm:min-w-[230px]",
      logoClassName: "max-h-36 max-w-[280px] sm:max-h-44 sm:max-w-[360px]",
    },
    {
      id: "element-fitness",
      name: "Element Fitness",
      logo: "/brands/element-fitness.png",
      wrapperClassName: "min-w-[220px] sm:min-w-[270px]",
      logoClassName: "max-h-28 max-w-[230px] opacity-100 [filter:grayscale(1)_brightness(1.85)_contrast(1.08)] sm:max-h-32 sm:max-w-[280px]",
    },
    {
      id: "excellent-eye-wear",
      name: "Excellent Eye Wear",
      logo: "/brands/excellent-eye-wear.png",
    },
    {
      id: "kohi-coffee",
      name: "Kohi Coffee",
      logo: "/brands/kohi-coffee.png",
    },
    {
      id: "andaz-and-co",
      name: "Andaz and Co",
      logo: "/brands/andaz-and-co.png",
    },
    {
      id: "easypaisa",
      name: "Easypaisa",
      logo: "/brands/easypaisa.png",
    },
    {
      id: "lumiere-health",
      name: "Lumiere Health and Medical Solutions",
      logo: "/brands/lumiere-health-and-medical-solutions.png",
      wrapperClassName: "min-w-[200px] sm:min-w-[240px]",
      logoClassName: "max-h-36 max-w-[300px] sm:max-h-44 sm:max-w-[400px]",
    },
    {
      id: "omama-schooling-system",
      name: "Omama Schooling System",
      logo: "/brands/omama-schooling-system.png",
      wrapperClassName: "min-w-[190px] sm:min-w-[230px]",
      logoClassName: "max-h-40 max-w-[280px] opacity-100 sm:max-h-48 sm:max-w-[360px]",
    },
    {
      id: "the-crockrenza",
      name: "The Crockrenza",
      logo: "/brands/the-crockrenza.png",
      wrapperClassName: "min-w-[190px] sm:min-w-[230px]",
      logoClassName: "max-h-36 max-w-[280px] sm:max-h-44 sm:max-w-[360px]",
    },
    {
      id: "university-of-karachi",
      name: "University of Karachi",
      logo: "/brands/university-of-karachi.png",
      wrapperClassName: "min-w-[200px] sm:min-w-[240px]",
      logoClassName: "max-h-40 max-w-[310px] sm:max-h-48 sm:max-w-[410px]",
    },
    {
      id: "zareyah-clothing",
      name: "Zareyah Clothing",
      logo: "/brands/zareyah-clothing.png",
      wrapperClassName: "min-w-[190px] sm:min-w-[230px]",
      logoClassName: "max-h-36 max-w-[280px] sm:max-h-44 sm:max-w-[360px]",
    },
  ] satisfies BrandItem[],
};
