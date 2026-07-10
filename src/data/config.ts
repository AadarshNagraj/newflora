// ============================================================
// SITE CONFIGURATION — Flora Interiors
// ============================================================

export const SITE_CONFIG = {
  business: {
    name: 'Flora Interiors',
    tagline: 'Transforming Spaces Into Beautiful Experiences',
    subtagline: 'Inspired Spaces. Blessed Living.',
    description:
      'Flora Interiors is a premium interior design studio based in Bhopal, crafting residential and commercial spaces that blend modern aesthetics with timeless warmth. We transform your vision into a sanctuary you are proud to call home.',
    shortDescription:
      'Premium interior design studio turning spaces into stunning, personalised experiences.',
    address: 'Bhopal, Madhya Pradesh',
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
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2!2d77.4!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEyJzAwLjAiTiA3N8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
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
      name: 'Home Interior',
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
      id: 'bedroom-design',
      name: 'Bedroom Design',
      icon: 'BedDouble',
      shortDesc: 'Serene personal sanctuaries crafted for rest and comfort.',
      desc: 'We create tranquil bedroom environments — balancing aesthetics with functionality through thoughtful lighting, storage, and material choices.',
    },
    {
      id: 'living-room',
      name: 'Living Room Design',
      icon: 'Sofa',
      shortDesc: 'Welcoming, elegant spaces for relaxation and entertainment.',
      desc: 'Your living room is the heart of your home. We craft inviting, sophisticated spaces with harmonious colour palettes, statement furniture, and ambient lighting.',
    },
    {
      id: 'office-interior',
      name: 'Office Interior',
      icon: 'Briefcase',
      shortDesc: 'Inspiring commercial workspaces that boost productivity.',
      desc: 'We design professional office environments that reflect your brand identity, support team productivity, and impress your clients.',
    },
    {
      id: 'renovation',
      name: 'Renovation',
      icon: 'Wrench',
      shortDesc: 'Breathing new life into existing spaces with thoughtful redesign.',
      desc: 'Whether a complete overhaul or selective updates, our renovation services transform tired spaces into fresh, functional, and beautiful environments.',
    },
  ],

  whyChooseUs: [
    {
      icon: 'Sparkles',
      title: 'Custom Designs',
      desc: 'Every project is bespoke. We craft unique designs tailored specifically to your lifestyle, preferences, and space.',
    },
    {
      icon: 'Shield',
      title: 'Quality Materials',
      desc: 'We use only premium, durable materials sourced from trusted suppliers — ensuring lasting beauty and performance.',
    },
    {
      icon: 'Users',
      title: 'Experienced Team',
      desc: 'Our team of expert designers brings 5+ years of experience across residential, commercial, and hospitality projects.',
    },
    {
      icon: 'Clock',
      title: 'Timely Delivery',
      desc: 'We commit to clear timelines and maintain transparent communication throughout every stage of your project.',
    },
  ],

  testimonials: [
    {
      name: 'Priya Sharma',
      location: 'Arera Colony, Bhopal',
      rating: 5,
      text: 'Flora Interiors completely transformed our 3BHK apartment. The team understood our vision perfectly and delivered beyond our expectations. The modular kitchen and master bedroom are absolutely stunning!',
    },
    {
      name: 'Rajesh Gupta',
      location: 'MP Nagar, Bhopal',
      rating: 5,
      text: 'Exceptional work and professional team. They designed our office space beautifully — modern, functional, and impressive. Our clients always compliment the interiors. Highly recommended!',
    },
    {
      name: 'Ankita Verma',
      location: 'Kolar Road, Bhopal',
      rating: 5,
      text: 'The attention to detail is remarkable. From the living room to the kids\' bedroom, every corner of our home feels curated and warm. Flora Interiors truly delivered inspired spaces!',
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
