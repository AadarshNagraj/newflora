import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Home } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';
import { getAboutImages } from '../../lib/assetManager';

const About = () => {
  const [img1, img2] = getAboutImages();

  const highlights = [
    'Residential & Commercial Interiors',
    'Modular Kitchens & Wardrobes',
    'False Ceilings & Cove Lighting',
    'Kids Room & Pooja Unit Design',
    'Living Room Makeovers',
    'Turnkey Project Execution',
  ];

  const badges = [
    { icon: Award, value: SITE_CONFIG.business.projectsCompleted, label: 'Projects' },
    { icon: Users, value: SITE_CONFIG.business.happyClients, label: 'Happy Clients' },
    { icon: Home, value: `${SITE_CONFIG.business.yearsExperience}+`, label: 'Years Exp.' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            {/* Main image */}
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
              <img
                src={img1}
                alt="Flora Interiors — Premium Design"
                style={{
                  width: '100%',
                  height: 'clamp(300px, 45vw, 500px)',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, transparent 50%, rgba(28,28,28,0.3) 100%)',
              }} />
            </div>

            {/* Floating second image */}
            <div style={{
              position: 'absolute',
              bottom: '-32px',
              right: '-24px',
              width: '55%',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              border: '4px solid var(--color-bg)',
            }}>
              <img
                src={img2}
                alt="Flora Interiors — Elegant Living"
                style={{
                  width: '100%',
                  height: 'clamp(160px, 22vw, 240px)',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Badge */}
            <div style={{
              position: 'absolute',
              top: '24px',
              left: '-20px',
              background: 'linear-gradient(135deg, #D4A843 0%, #B8892A 100%)',
              color: '#fff',
              borderRadius: '16px',
              padding: '16px 20px',
              textAlign: 'center',
              boxShadow: '0 8px 24px rgba(184, 137, 42, 0.35)',
              border: '2px solid rgba(228, 196, 108, 0.30)',
            }}>
              <div style={{ fontSize: '26px', fontWeight: 800, lineHeight: 1 }}>{SITE_CONFIG.business.yearsExperience}+</div>
              <div style={{ fontSize: '11px', fontWeight: 600, marginTop: '4px', opacity: 0.9, letterSpacing: '0.05em' }}>
                Years of<br />Excellence
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            style={{ paddingTop: '32px' }}
          >
            <div className="eyebrow">About Us</div>
            <h2 className="section-heading">
              Crafting Spaces That<br />Tell Your Story
            </h2>
            <div className="divider" />

            <p style={{ fontSize: '16px', lineHeight: 1.9, marginBottom: '24px', color: 'var(--color-text-light)' }}>
              {SITE_CONFIG.business.description}
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, marginBottom: '36px', color: 'var(--color-text-light)' }}>
              Our team of passionate designers works closely with you at every step — from concept to completion — ensuring your space reflects your personality and exceeds your expectations.
            </p>

            {/* Highlights */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px 24px',
              marginBottom: '40px',
            }}>
              {highlights.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              padding: '24px',
              backgroundColor: 'var(--color-surface)',
              borderRadius: '16px',
              marginBottom: '32px',
            }}>
              {badges.map(({ icon: Icon, value, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px', height: '40px',
                    backgroundColor: 'var(--color-primary-light)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1 }}>{value}</div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '2px' }}>{label}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary" style={{ padding: '16px 36px' }}>
              Book Free Consultation
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .floating-img { display: none; }
        }
      `}</style>
    </section>
  );
};

export default About;
