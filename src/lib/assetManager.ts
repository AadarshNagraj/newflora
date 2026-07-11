// ============================================================
// ASSET MANAGER — Flora Interiors
// ============================================================

export interface PortfolioImage {
  src: string;
  title: string;
  category: string;
  categoryLabel: string;
}

const portfolioData: PortfolioImage[] = [
  {
    src: '/images/Screenshot 2026-07-10 175240.png',
    title: 'Dusty Pink Fluted-Panel TV Unit',
    category: 'living-room',
    categoryLabel: 'Living Room',
  },
  {
    src: '/images/Screenshot 2026-07-10 175257.png',
    title: 'Navy & White Geometric Panel Lounge',
    category: 'living-room',
    categoryLabel: 'Living Room',
  },
  {
    src: '/images/Screenshot 2026-07-10 175312.png',
    title: 'Gold-Accent Seating Area',
    category: 'living-room',
    categoryLabel: 'Living Room',
  },
  {
    src: '/images/Screenshot 2026-07-10 175334.png',
    title: 'Om-Themed Pooja Unit',
    category: 'pooja',
    categoryLabel: 'Pooja Unit',
  },
  {
    src: '/images/Screenshot 2026-07-10 175349.png',
    title: "Kids' Room - Mickey Mouse (Render)",
    category: 'kids',
    categoryLabel: 'Kids Room',
  },
  {
    src: '/images/Screenshot 2026-07-10 175444.png',
    title: "Kids' Room - Installed",
    category: 'kids',
    categoryLabel: 'Kids Room',
  },
  {
    src: '/images/Screenshot 2026-07-10 175504.png',
    title: 'Restaurant Interior with Balloon Decor',
    category: 'commercial',
    categoryLabel: 'Commercial',
  },
  {
    src: '/images/Screenshot 2026-07-10 175518.png',
    title: 'Hospital Exterior / Event',
    category: 'commercial',
    categoryLabel: 'Commercial',
  },
  {
    src: '/images/Screenshot 2026-07-10 175536.png',
    title: 'Modern Modular Kitchen',
    category: 'kitchen',
    categoryLabel: 'Kitchen',
  },
  {
    src: '/images/Screenshot 2026-07-10 175550 - Copy.png',
    title: 'Bedroom Interior',
    category: 'bedroom',
    categoryLabel: 'Bedroom',
  },
  {
    src: '/images/Screenshot 2026-07-10 175611 - Copy.png',
    title: 'False Ceiling & Lighting',
    category: 'ceiling',
    categoryLabel: 'False Ceiling',
  },
];

export const getHeroImage = (): string => {
  return '/images/hero.png'; 
};

export const getPortfolioImages = (): PortfolioImage[] => {
  return portfolioData;
};

export const getAboutImages = (): string[] => {
  return [
    '/images/Screenshot 2026-07-10 175257.png', // Navy lounge
    '/images/Screenshot 2026-07-10 175550 - Copy.png', // Bedroom
  ];
};
