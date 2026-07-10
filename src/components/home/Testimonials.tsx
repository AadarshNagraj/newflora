import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = SITE_CONFIG.testimonials;
  const total = testimonials.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const avatarColors = ['#2C2218', '#9A8C7A', '#B8892A'];

  return (
    <section id="testimonials" className="section-alt">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}
        >
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Client Stories</div>
          <h2 className="section-heading">What Our Clients Say</h2>
          <div className="divider divider-center" />
          <p className="section-subtext" style={{ margin: '0 auto' }}>
            Real experiences from satisfied clients who trusted Flora Interiors to transform their spaces.
          </p>
        </motion.div>

        {/* All Cards — visible on desktop */}
        <div className="hide-mobile" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '16px',
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                backgroundColor: 'var(--color-bg)',
                borderRadius: '24px',
                padding: '36px 32px',
                border: '1px solid var(--color-border)',
                position: 'relative',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.4s ease',
              }}
              whileHover={{ y: -6, boxShadow: 'var(--shadow-lg)' }}
            >
              {/* Quote icon */}
              <Quote
                size={32}
                color="var(--color-primary)"
                style={{ opacity: 0.2, position: 'absolute', top: '24px', right: '24px' }}
                fill="var(--color-primary)"
              />

              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={16} fill="#FBBC05" color="#FBBC05" />
                ))}
              </div>

              <p style={{
                fontSize: '15px',
                lineHeight: 1.85,
                color: 'var(--color-text-light)',
                marginBottom: '28px',
                fontStyle: 'italic',
              }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '48px', height: '48px',
                  borderRadius: '50%',
                  backgroundColor: avatarColors[i % avatarColors.length],
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '18px',
                  flexShrink: 0,
                }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--color-text)' }}>{t.name}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    <MapPin size={11} />
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="hide-desktop" style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              style={{
                backgroundColor: 'var(--color-bg)',
                borderRadius: '24px',
                padding: '32px 24px',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#FBBC05" color="#FBBC05" />
                ))}
              </div>
              <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--color-text-light)', fontStyle: 'italic', marginBottom: '24px' }}>
                "{testimonials[current].text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '44px', height: '44px',
                  borderRadius: '50%',
                  backgroundColor: avatarColors[current % avatarColors.length],
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 700, fontSize: '16px',
                }}>
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px' }}>{testimonials[current].name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{testimonials[current].location}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
            <button onClick={prev} style={{
              width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid var(--color-border)',
              background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--color-text)', cursor: 'pointer',
            }}>
              <ChevronLeft size={20} />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: '8px', height: '8px', borderRadius: '50%', border: 'none',
                  backgroundColor: i === current ? 'var(--color-primary)' : 'var(--color-border)',
                  cursor: 'pointer', transition: 'background-color 0.3s',
                  alignSelf: 'center',
                }}
              />
            ))}
            <button onClick={next} style={{
              width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid var(--color-border)',
              background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--color-text)', cursor: 'pointer',
            }}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
