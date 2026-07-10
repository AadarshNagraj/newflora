import { motion } from 'framer-motion';
import { Sparkles, Shield, Users, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';

const iconMap: Record<string, React.ElementType> = {
  Sparkles, Shield, Users, Clock,
};

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 'clamp(48px, 6vw, 72px)' }}
        >
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Advantage</div>
          <h2 className="section-heading">Why Choose Flora Interiors?</h2>
          <div className="divider divider-center" />
          <p className="section-subtext" style={{ margin: '0 auto' }}>
            We bring together exceptional design talent, quality craftsmanship, and a client-first approach to create spaces that truly stand apart.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {SITE_CONFIG.whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: '24px',
                  padding: '40px 32px',
                  border: '1px solid var(--color-border)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                }}
                whileHover={{ y: -8, boxShadow: '0 24px 56px rgba(110, 124, 89, 0.12)' }}
              >
                {/* Background decoration */}
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary-light)',
                  opacity: 0.5,
                }} />

                {/* Icon */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: 'var(--color-primary)',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '28px',
                  position: 'relative',
                }}>
                  <Icon size={28} color="#ffffff" />
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: 'var(--color-text)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--color-text-light)' }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            marginTop: '64px',
            background: 'linear-gradient(135deg, #1A1410 0%, #2C2218 50%, #3D3025 100%)',
            borderRadius: '24px',
            padding: 'clamp(32px, 5vw, 56px) clamp(24px, 5%, 64px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
            border: '1px solid rgba(201, 168, 108, 0.20)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div>
            <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
              Ready to Transform Your Space?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px', margin: 0 }}>
              Get a free consultation with our expert designers. No commitment required.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexShrink: 0, flexWrap: 'wrap' }}>
            <a
              href={`tel:${SITE_CONFIG.business.phone}`}
              className="btn"
              style={{
                background: 'linear-gradient(135deg, #D4A843, #B8892A)',
                color: '#ffffff',
                fontWeight: 700,
                padding: '14px 28px',
                boxShadow: '0 4px 16px rgba(184, 137, 42, 0.35)',
              }}
            >
              Call Now
            </a>
            <a
              href="#contact"
              className="btn"
              style={{
                backgroundColor: 'rgba(255,255,255,0.10)',
                color: '#F5EFE6',
                border: '1.5px solid rgba(201, 168, 108, 0.40)',
                padding: '14px 28px',
              }}
            >
              Book Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
