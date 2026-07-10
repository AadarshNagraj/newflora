import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '../../data/config';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 0' : '24px 0',
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              borderRadius: '12px',
              transition: 'all 0.4s ease',
              overflow: 'hidden',
              boxShadow: scrolled ? 'var(--shadow-xs)' : 'none',
              border: '1px solid rgba(184, 137, 42, 0.15)',
            }}>
              <img
                src="/logo.png"
                alt="Flora Interiors"
                style={{ height: scrolled ? '52px' : '64px', transition: 'height 0.3s ease', objectFit: 'contain', display: 'block' }}
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                  color: scrolled ? 'var(--color-text)' : 'rgba(255,255,255,0.9)',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                }}
            onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? 'var(--color-text)' : 'rgba(255,255,255,0.92)';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Phone - desktop */}
            <a
              href={`tel:${SITE_CONFIG.business.phone}`}
              className="hide-mobile btn btn-primary"
              style={{ padding: '10px 20px', fontSize: '14px', gap: '8px' }}
            >
              <Phone size={15} />
              {SITE_CONFIG.business.phone}
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              style={{
                background: 'none',
                border: '1.5px solid',
                borderColor: scrolled ? 'var(--color-border)' : 'rgba(255,255,255,0.3)',
                color: scrolled ? 'var(--color-text)' : '#ffffff',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition-fast)',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Hamburger */}
            <button
              className="hide-desktop"
              onClick={() => setMobileOpen(true)}
              style={{
                background: 'none', border: 'none',
                color: scrolled ? 'var(--color-text)' : '#ffffff',
                display: 'flex', alignItems: 'center',
              }}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed', inset: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 1099,
              }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'fixed',
                top: 0, right: 0, bottom: 0,
                width: 'min(360px, 90vw)',
                backgroundColor: 'var(--color-bg)',
                zIndex: 1100,
                display: 'flex',
                flexDirection: 'column',
                padding: '28px',
                boxShadow: '-8px 0 40px rgba(0,0,0,0.15)',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
                <img src="/logo.png" alt={SITE_CONFIG.business.name} style={{ height: '44px', borderRadius: '8px' }} />
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{ background: 'none', border: 'none', color: 'var(--color-text)', display: 'flex' }}
                >
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      padding: '16px 0',
                      borderBottom: '1px solid var(--color-border)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text)'}
                  >
                    {link.label}
                    <span style={{ opacity: 0.3, fontSize: '16px' }}>→</span>
                  </motion.a>
                ))}
              </nav>

              {/* CTA */}
              <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
                <a
                  href={`tel:${SITE_CONFIG.business.phone}`}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', gap: '8px' }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone size={16} />
                  {SITE_CONFIG.business.phone}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
