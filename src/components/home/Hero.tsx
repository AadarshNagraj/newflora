import { motion } from 'framer-motion';
import { ArrowDown, Star } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';
import { getHeroImage } from '../../lib/assetManager';

const Hero = () => {
  const heroImg = getHeroImage();

  const stats = [
    { value: SITE_CONFIG.business.projectsCompleted, label: 'Projects Done' },
    { value: `${SITE_CONFIG.business.yearsExperience}+`, label: 'Years Experience' },
    { value: SITE_CONFIG.business.googleRating.toFixed(1), label: 'Google Rating' },
    { value: SITE_CONFIG.business.happyClients, label: 'Happy Clients' },
  ];

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${heroImg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          zIndex: 0,
          transform: 'scale(1.04)',
        }}
      />

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(110deg, rgba(15,10,5,0.82) 0%, rgba(15,10,5,0.50) 55%, rgba(15,10,5,0.22) 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 1,
        height: '35%',
        background: 'linear-gradient(to top, rgba(15,10,5,0.70) 0%, transparent 100%)',
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '120px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '820px' }}>
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(201, 168, 108, 0.15)',
              border: '1px solid rgba(201, 168, 108, 0.40)',
              borderRadius: '999px',
              padding: '7px 18px',
              marginBottom: '28px',
            }}
          >
            <Star size={13} fill="#D4A843" color="#D4A843" />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#F5DFA0', letterSpacing: '0.06em' }}>
              {SITE_CONFIG.business.googleRating} Star Rated Interior Studio
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              color: '#ffffff',
              fontSize: 'clamp(40px, 6.5vw, 76px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              marginBottom: '28px',
            }}
          >
            {SITE_CONFIG.business.tagline}
          </motion.h1>

          {/* Sub headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              color: 'rgba(246, 241, 235, 0.88)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: 1.75,
              marginBottom: '48px',
              maxWidth: '600px',
              fontFamily: 'var(--font-secondary)',
            }}
          >
            We are a premium interior design studio from Bhopal — crafting residential and commercial spaces that feel warm, refined, and uniquely yours.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <a href="#portfolio" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '16px' }}>
              View Portfolio
            </a>
            <a href="#contact" className="btn btn-outline-white" style={{ padding: '16px 36px', fontSize: '16px' }}>
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            marginTop: 'clamp(64px, 10vw, 100px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1px',
            backgroundColor: 'rgba(201, 168, 108, 0.15)',
            borderRadius: '20px',
            overflow: 'hidden',
            maxWidth: '700px',
            border: '1px solid rgba(201, 168, 108, 0.25)',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: 'center',
                padding: '24px 20px',
                backgroundColor: 'rgba(0,0,0,0.35)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRight: i < stats.length - 1 ? '1px solid rgba(201, 168, 108, 0.12)' : 'none',
              }}
            >
              <div style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 800, background: 'linear-gradient(135deg, #E8C56A, #C9A86C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginTop: '6px', fontWeight: 500, letterSpacing: '0.04em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '11px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 640px) {
          .hero-stats > div:last-child { border-right: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
