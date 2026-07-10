// ============================================================
// ASSET MANAGER — Flora Interiors
// Dynamically loads user-provided images from src/assets/images/
// Falls back to high-quality Unsplash images if assets are missing.
// ============================================================

// Vite import.meta.glob — eagerly loads all matching images
const heroImages = import.meta.glob(
  '/src/assets/images/hero/*.{png,jpg,jpeg,webp}',
  { eager: true, as: 'url' }
) as Record<string, string>;

const portfolioImages = import.meta.glob(
  '/src/assets/images/portfolio/**/*.{png,jpg,jpeg,webp}',
  { eager: true, as: 'url' }
) as Record<string, string>;

// Extract category from file path
// e.g. /src/assets/images/portfolio/bedroom/bedroom-1.png → bedroom
const getCategoryFromPath = (path: string): string => {
  const parts = path.split('/');
  // portfolio/{category}/{filename} → index -2 is category
  return parts.length >= 2 ? parts[parts.length - 2] : 'other';
};

// Format filename into human-readable title
// e.g. bedroom-2.png → Bedroom 2
const formatTitle = (filename: string): string =>
  filename
    .replace(/\.[^/.]+$/, '') // remove extension
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

// Map category slug to display label
const categoryLabel: Record<string, string> = {
  bedroom: 'Bedroom',
  'living-room': 'Living Room',
  kitchen: 'Kitchen',
  commercial: 'Commercial',
  office: 'Office',
  other: 'Others',
};

// ============================================================
// PUBLIC API
// ============================================================

export interface PortfolioImage {
  src: string;
  title: string;
  category: string;
  categoryLabel: string;
}

export const getHeroImage = (): string => {
  const keys = Object.keys(heroImages);
  if (keys.length > 0) return heroImages[keys[0]];
  // Fallback
  return 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80';
};

export const getPortfolioImages = (): PortfolioImage[] => {
  const keys = Object.keys(portfolioImages);

  if (keys.length > 0) {
    return keys.map((key) => {
      const filename = key.split('/').pop() ?? 'untitled';
      const category = getCategoryFromPath(key);
      return {
        src: portfolioImages[key],
        title: formatTitle(filename),
        category,
        categoryLabel: categoryLabel[category] ?? 'Other',
      };
    });
  }

  // Fallback images
  return [
    { src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80', title: 'Luxury Bedroom', category: 'bedroom', categoryLabel: 'Bedroom' },
    { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', title: 'Modern Living Room', category: 'living-room', categoryLabel: 'Living Room' },
    { src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80', title: 'Modular Kitchen', category: 'kitchen', categoryLabel: 'Kitchen' },
    { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80', title: 'Office Interior', category: 'office', categoryLabel: 'Office' },
    { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', title: 'Commercial Space', category: 'commercial', categoryLabel: 'Commercial' },
  ];
};

export const getAboutImages = (): string[] => {
  // Use specific portfolio images for about section
  const portfolioKeys = Object.keys(portfolioImages);
  if (portfolioKeys.length >= 2) {
    // Prefer bedroom and living-room images for about section
    const bedroomKey = portfolioKeys.find((k) => k.includes('bedroom'));
    const livingKey = portfolioKeys.find((k) => k.includes('living-room') || k.includes('living'));
    const fallback1 = portfolioKeys[0];
    const fallback2 = portfolioKeys[1];
    return [
      bedroomKey ? portfolioImages[bedroomKey] : portfolioImages[fallback1],
      livingKey ? portfolioImages[livingKey] : portfolioImages[fallback2],
    ];
  }
  return [
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
  ];
};
