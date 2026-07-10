import { motion } from 'framer-motion';
import { Home, Utensils, BedDouble, Sofa, Briefcase, Wrench } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';

const iconMap: Record<string, React.ElementType> = {
  Home, Utensils, BedDouble, Sofa, Briefcase, Wrench,
};

const Services = () => {
  return (
    <section id="services" className="section-alt">
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
          <div className="eyebrow" style={{ justifyContent: 'center' }}>What We Offer</div>
          <h2 className="section-heading">Our Services</h2>
          <div className="divider divider-center" />
          <p className="section-subtext" style={{ margin: '0 auto', maxWidth: '600px' }}>
            From concept to completion, we offer a comprehensive range of interior design services tailored to every lifestyle and budget.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {SITE_CONFIG.services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Home;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{
                  backgroundColor: 'var(--color-bg)',
                  borderRadius: '20px',
                  padding: '36px 28px',
                  border: '1px solid var(--color-border)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 48px rgba(110, 124, 89, 0.12)',
                  borderColor: 'rgba(110, 124, 89, 0.3)',
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: 'var(--color-primary-light)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  transition: 'background-color 0.3s',
                }}>
                  <Icon size={26} color="var(--color-primary)" />
                </div>

                {/* Number */}
                <span style={{
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  fontSize: '48px',
                  fontWeight: 900,
                  color: 'var(--color-border)',
                  lineHeight: 1,
                  fontFamily: 'var(--font-primary)',
                  letterSpacing: '-0.05em',
                  userSelect: 'none',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3 style={{ fontSize: '19px', fontWeight: 700, marginBottom: '12px', color: 'var(--color-text)' }}>
                  {service.name}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'var(--color-text-light)' }}>
                  {service.shortDesc}
                </p>

                {/* Bottom accent */}
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, var(--color-primary), var(--color-gold))',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s ease',
                }} className="service-bar" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        div:hover > .service-bar { transform: scaleX(1) !important; }
      `}</style>
    </section>
  );
};

export default Services;
