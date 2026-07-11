import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG } from '../../data/config';

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  // Charcoal footer matching logo background
  const footerBg = '#0F0C09';
  const textMuted = '#9A8674';
  const textLight = '#E5DED6';

  const socialLinks = [
    { icon: FaFacebook, href: SITE_CONFIG.socials.facebook, label: 'Facebook', hoverColor: '#1877F2' },
    { icon: FaInstagram, href: SITE_CONFIG.socials.instagram, label: 'Instagram', hoverColor: '#E1306C' },
    { icon: FaYoutube, href: SITE_CONFIG.socials.youtube, label: 'YouTube', hoverColor: '#FF0000' },
    { icon: FaWhatsapp, href: SITE_CONFIG.socials.whatsapp, label: 'WhatsApp', hoverColor: '#25D366' },
  ];

  return (
    <footer style={{ backgroundColor: footerBg, color: textLight }}>
      {/* Top Gold Accent Line */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #D4A843, #B8892A, #C9A86C, #B8892A, #D4A843)' }} />
      {/* Main Footer */}
      <div className="container" style={{ padding: '80px clamp(20px, 5%, 80px) 56px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
        }}>
          {/* Brand Column */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{
              display: 'inline-block',
              borderRadius: '14px',
              marginBottom: '20px',
              border: '1px solid rgba(201, 168, 108, 0.20)',
              overflow: 'hidden',
            }}>
              <img
                src="logo.png"
                alt={SITE_CONFIG.business.name}
                style={{ height: '76px', display: 'block', objectFit: 'contain' }}
              />
            </div>
            <p style={{ color: '#9A948C', fontSize: '15px', lineHeight: 1.8, marginBottom: '28px' }}>
              {SITE_CONFIG.business.shortDescription}
            </p>
            <p style={{
              color: '#D4A843',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              Follow Us
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: textMuted,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = hoverColor;
                    e.currentTarget.style.borderColor = hoverColor;
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.color = '#9A948C';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '24px', color: '#E8E4DE', letterSpacing: '0.05em' }}>
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{ color: textMuted, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#9A948C'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    <span style={{ color: 'var(--color-primary)', fontSize: '12px' }}>›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '24px', color: '#E8E4DE', letterSpacing: '0.05em' }}>
              Our Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {SITE_CONFIG.services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    style={{ color: textMuted, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#9A948C'; }}
                  >
                    <span style={{ color: 'var(--color-primary)', fontSize: '12px' }}>›</span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '24px', color: '#E8E4DE', letterSpacing: '0.05em' }}>
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--color-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#9A948C', fontSize: '14px', lineHeight: 1.6 }}>
                  {SITE_CONFIG.business.address}
                </span>
              </div>
              <a
                href={`tel:${SITE_CONFIG.business.phone}`}
                style={{ display: 'flex', gap: '14px', alignItems: 'center', color: '#9A948C', fontSize: '14px', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9A948C'}
              >
                <Phone size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                {SITE_CONFIG.business.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.business.email}`}
                style={{ display: 'flex', gap: '14px', alignItems: 'center', color: '#9A948C', fontSize: '14px', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9A948C'}
              >
                <Mail size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                {SITE_CONFIG.business.email}
              </a>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ marginTop: '28px', fontSize: '14px', padding: '12px 24px', display: 'inline-flex' }}
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div
          className="container"
          style={{
            padding: '20px clamp(20px, 5%, 80px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ color: '#605A54', fontSize: '13px', margin: 0 }}>
            © {year} {SITE_CONFIG.business.name}. All rights reserved.
          </p>
          <p style={{ color: '#605A54', fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
            Made with <Heart size={12} fill="var(--color-primary)" color="var(--color-primary)" /> in Bhopal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
