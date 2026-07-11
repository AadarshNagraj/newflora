// ============================================================
// SITE CONFIGURATION — Flora Interiors
// ============================================================

export const SITE_CONFIG = {
  business: {
    name: 'Flora Interiors',
    tagline: 'Inspired Spaces. Blessed Living.',
    subtagline: 'Warm, elegant, spiritually-tinged luxury',
    description:
      'Flora Interiors is a premium interior design studio based in Bhopal, crafting residential and commercial spaces that blend Indian aesthetics with a modern premium finish. We turn houses into inspired, blessed living spaces.',
    shortDescription:
      'Premium interior design studio turning spaces into stunning, personalized experiences.',
    address: 'Arera Colony, Bhopal, Madhya Pradesh',
    phone: '+91 75660 49924',
    email: 'florainteriors@gmail.com',
    whatsapp: '917566049924',
    googleRating: 5.0,
    reviewCount: 40,
    establishedYear: 2019,
    projectsCompleted: '150+',
    yearsExperience: 5,
    happyClients: '100+',
    designExperts: 8,
    serviceAreas: ['Bhopal', 'Arera Colony', 'MP Nagar', 'Kolar Road', 'Hoshangabad Road'],
    googleMapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.4851214041775!2d77.43391741541094!3d23.21852038485292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42f0269f8d19%3A0x464c8d5cbbbd2367!2sArera%20Colony%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin',
  },

  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    whatsapp: 'https://wa.me/917566049924',
  },

  services: [
    {
      id: 'home-interior',
      name: 'Home Interiors',
      icon: 'Home',
      shortDesc: 'Complete home transformations tailored to your lifestyle and personality.',
      desc: 'We design complete home interiors — from living rooms to bedrooms — with a deep focus on your lifestyle, preferences, and space optimization.',
    },
    {
      id: 'modular-kitchen',
      name: 'Modular Kitchen',
      icon: 'Utensils',
      shortDesc: 'Smart, stylish, and functional modular kitchen designs.',
      desc: 'Our modular kitchens are designed for efficiency and elegance — with premium fittings, organized storage, and a layout that suits how you cook.',
    },
    {
      id: 'false-ceiling',
      name: 'False Ceiling & Lighting',
      icon: 'Lightbulb',
      shortDesc: 'Stunning ceiling designs including cove lighting and ambient setups.',
      desc: 'Elevate your spaces with beautifully crafted false ceilings, complete with cove lighting and perfectly positioned fixtures for a warm glow.',
    },
    {
      id: 'wardrobes',
      name: 'Wardrobes & Storage',
      icon: 'Archive',
      shortDesc: 'Custom wardrobes designed for elegance and maximum utility.',
      desc: 'Seamless, premium wardrobes and storage solutions designed to fit perfectly into your space while keeping it clutter-free.',
    },
    {
      id: 'kids-room',
      name: "Kids' Room Design",
      icon: 'Smile',
      shortDesc: 'Playful, safe, and creative spaces for children.',
      desc: 'We design magical, thematic rooms for kids that inspire creativity while ensuring safety, comfort, and practical storage.',
    },
    {
      id: 'living-dining',
      name: 'Living/Dining Design',
      icon: 'Sofa',
      shortDesc: 'Makeovers and wall paneling for your gathering spaces.',
      desc: 'From statement accent walls to fluted panels and comfortable seating, we make your living and dining areas the heart of your home.',
    },
    {
      id: 'pooja-unit',
      name: 'Pooja Unit Design',
      icon: 'Sparkles',
      shortDesc: 'Spiritual, Om-themed units rooted in Indian aesthetics.',
      desc: 'Beautifully crafted, spiritually-tinged pooja units that bring blessings and peace to your home with a modern premium finish.',
    },
    {
      id: 'commercial',
      name: 'Commercial Spaces',
      icon: 'Briefcase',
      shortDesc: 'Restaurants, hospitals, and offices designed for impact.',
      desc: 'Turnkey interior solutions for commercial spaces, ensuring functional layouts, brand alignment, and a welcoming atmosphere for clients.',
    }
  ],

  whyChooseUs: [
    {
      icon: 'Sparkles',
      title: 'Personalized Design',
      desc: 'Every project is bespoke. We craft unique designs tailored specifically to your lifestyle, preferences, and space.',
    },
    {
      icon: 'Shield',
      title: 'Quality Materials',
      desc: 'We use only premium, durable materials sourced from trusted suppliers — ensuring lasting beauty and performance.',
    },
    {
      icon: 'Settings',
      title: 'Turnkey Execution',
      desc: 'From concept to handover, we manage the entire process seamlessly so you can enjoy a stress-free experience.',
    },
    {
      icon: 'Clock',
      title: 'On-Time Delivery',
      desc: 'We commit to clear timelines and maintain transparent communication throughout every stage of your project.',
    },
  ],

  testimonials: [
    {
      name: 'Client Name 1',
      location: 'Arera Colony, Bhopal',
      rating: 5,
      text: '[Placeholder] Flora Interiors completely transformed our 3BHK apartment. The team understood our vision perfectly and delivered beyond our expectations. The modular kitchen and master bedroom are absolutely stunning!',
    },
    {
      name: 'Client Name 2',
      location: 'MP Nagar, Bhopal',
      rating: 5,
      text: '[Placeholder] Exceptional work and professional team. They designed our office space beautifully — modern, functional, and impressive. Our clients always compliment the interiors. Highly recommended!',
    },
    {
      name: 'Client Name 3',
      location: 'Kolar Road, Bhopal',
      rating: 5,
      text: '[Placeholder] The attention to detail is remarkable. From the living room to the kids\' bedroom, every corner of our home feels curated and warm. Flora Interiors truly delivered inspired spaces!',
    },
  ],

  process: [
    { step: '01', title: 'Consultation', desc: 'Free initial consultation to understand your requirements, style preferences, and budget.' },
    { step: '02', title: '3D Design', desc: 'Our designers create detailed 3D renders so you can visualize the final space before execution.' },
    { step: '03', title: 'Material Selection', desc: 'We guide you through premium material and finish options that fit your aesthetic and budget.' },
    { step: '04', title: 'Execution', desc: 'Our skilled craftsmen bring the design to life with precision, quality, and timely delivery.' },
  ],
};

export type Service = typeof SITE_CONFIG.services[0];
export type Testimonial = typeof SITE_CONFIG.testimonials[0];
