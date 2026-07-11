import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { SITE_CONFIG } from './data/config';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Services from './components/home/Services';
import Portfolio from './components/home/Portfolio';
import WhyChooseUs from './components/home/WhyChooseUs';
import Testimonials from './components/home/Testimonials';
import Contact from './components/home/Contact';

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0E0E0E',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
      }}
    >
      <motion.img
        src="logo.png"
        alt="Flora Interiors"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ height: '80px', borderRadius: '12px' }}
      />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '200px' }}
        transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, #D4A843, #B8892A, #C9A86C)',
          borderRadius: '2px',
        }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: '12px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-secondary)',
        }}
      >
        Inspired Spaces. Blessed Living.
      </motion.p>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorHover, setCursorHover] = useState(false);

  // Loading timeout
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  // Theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Custom cursor (desktop only)
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isInteractive = el.closest('a, button, [role="button"], input, textarea, select');
      setCursorHover(!!isInteractive);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <HelmetProvider>
      <Helmet>
        <title>{SITE_CONFIG.business.name} | {SITE_CONFIG.business.tagline}</title>
        <meta name="description" content={SITE_CONFIG.business.description} />
        <meta property="og:title" content={`${SITE_CONFIG.business.name} | ${SITE_CONFIG.business.subtagline}`} />
        <meta property="og:description" content={SITE_CONFIG.business.shortDescription} />
      </Helmet>

      {/* Custom cursor — hidden on mobile via CSS */}
      <div
        className={`custom-cursor ${cursorHover ? 'cursor-hover' : ''}`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          pointerEvents: 'none',
        }}
      />

      {/* Loading Screen */}
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="app-container"
        >
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <main>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <WhyChooseUs />
            <Testimonials />
            <Contact />
          </main>

          <Footer />
          <FloatingButtons />
        </motion.div>
      )}
    </HelmetProvider>
  );
}

export default App;
