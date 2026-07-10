import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG } from '../../data/config';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const btnBase: React.CSSProperties = {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '28px',
      right: '24px',
      zIndex: 900,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      alignItems: 'center',
    }}>
      {/* WhatsApp */}
      <motion.a
        href={SITE_CONFIG.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ ...btnBase, backgroundColor: '#25D366', color: '#ffffff', textDecoration: 'none' }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp size={22} />
      </motion.a>

      {/* Phone */}
      <motion.a
        href={`tel:${SITE_CONFIG.business.phone}`}
        aria-label="Call us"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1 }}
        style={{ ...btnBase, backgroundColor: 'var(--color-primary)', color: '#ffffff', textDecoration: 'none' }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone size={20} />
      </motion.a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{ ...btnBase, backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtons;
