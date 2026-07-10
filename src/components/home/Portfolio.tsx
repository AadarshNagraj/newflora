import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { getPortfolioImages } from '../../lib/assetManager';

const CATEGORY_LABELS: Record<string, string> = {
  all: 'All Work',
  bedroom: 'Bedroom',
  'living-room': 'Living Room',
  kitchen: 'Kitchen',
  commercial: 'Commercial',
  office: 'Office',
  other: 'Others',
};

const Portfolio = () => {
  const images = useMemo(() => getPortfolioImages(), []);
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(images.map((img) => img.category));
    return ['all', ...Array.from(cats)];
  }, [images]);

  const filtered = useMemo(
    () => (activeCategory === 'all' ? images : images.filter((img) => img.category === activeCategory)),
    [images, activeCategory]
  );

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const nextImage = () => setLightboxIdx((prev) => prev !== null ? (prev + 1) % filtered.length : 0);
  const prevImage = () => setLightboxIdx((prev) => prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '48px' }}
        >
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Work</div>
          <h2 className="section-heading">Portfolio</h2>
          <div className="divider divider-center" />
          <p className="section-subtext" style={{ margin: '0 auto' }}>
            A curated showcase of our finest interior transformations — from cosy bedrooms to grand commercial spaces.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '9px 22px',
                borderRadius: '999px',
                border: '1.5px solid',
                borderColor: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-border)',
                backgroundColor: activeCategory === cat ? 'var(--color-primary)' : 'transparent',
                color: activeCategory === cat ? '#ffffff' : 'var(--color-text)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-primary)',
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                  e.currentTarget.style.color = 'var(--color-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.color = 'var(--color-text)';
                }
              }}
            >
              {CATEGORY_LABELS[cat] ?? cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          style={{
            columns: 'auto 300px',
            columnGap: '20px',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, idx) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                style={{
                  marginBottom: '20px',
                  breakInside: 'avoid',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  boxShadow: 'var(--shadow-sm)',
                }}
                whileHover="hover"
              >
                <motion.img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                  variants={{ hover: { scale: 1.05 } }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                />
                {/* Overlay */}
                <motion.div
                  variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  initial="initial"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(14,14,14,0.85) 0%, rgba(14,14,14,0.3) 50%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      <span style={{
                        display: 'inline-block',
                        backgroundColor: 'var(--color-primary)',
                        color: '#fff',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        padding: '3px 10px',
                        borderRadius: '4px',
                        marginBottom: '6px',
                        textTransform: 'uppercase',
                      }}>
                        {img.categoryLabel}
                      </span>
                      <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 600 }}>{img.title}</h4>
                    </div>
                    <div style={{
                      width: '40px', height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <ZoomIn size={18} color="#fff" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.96)',
              zIndex: 3000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            {/* Close */}
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              style={{
                position: 'absolute', top: '20px', right: '20px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <X size={22} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              style={{
                position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%', width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', cursor: 'pointer', transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              style={{
                position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%', width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', cursor: 'pointer', transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <ChevronRight size={24} />
            </button>

            <motion.img
              key={lightboxIdx}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35 }}
              src={filtered[lightboxIdx]?.src}
              alt={filtered[lightboxIdx]?.title}
              style={{
                maxWidth: '90vw',
                maxHeight: '86vh',
                borderRadius: '12px',
                objectFit: 'contain',
                boxShadow: '0 0 60px rgba(0,0,0,0.5)',
              }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div style={{
              position: 'absolute',
              bottom: '20px', left: '50%', transform: 'translateX(-50%)',
              textAlign: 'center',
            }}>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                {lightboxIdx + 1} / {filtered.length} — {filtered[lightboxIdx]?.title}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
