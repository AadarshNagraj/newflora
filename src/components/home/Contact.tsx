import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '', phone: '', city: '', service: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1600);
  };

  const contactItems = [
    {
      icon: MapPin,
      label: 'Our Location',
      value: SITE_CONFIG.business.address,
      href: 'https://maps.google.com',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: SITE_CONFIG.business.phone,
      href: `tel:${SITE_CONFIG.business.phone}`,
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: SITE_CONFIG.business.email,
      href: `mailto:${SITE_CONFIG.business.email}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat with us on WhatsApp',
      href: SITE_CONFIG.socials.whatsapp,
    },
  ];

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
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
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Get In Touch</div>
          <h2 className="section-heading">Contact Us</h2>
          <div className="divider divider-center" />
          <p className="section-subtext" style={{ margin: '0 auto' }}>
            Ready to start your dream project? Get in touch for a free consultation and let's create something beautiful together.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'start',
        }}>
          {/* Left: Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '32px', color: 'var(--color-text)' }}>
              Let's Connect
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                    padding: '16px',
                    borderRadius: '14px',
                    border: '1px solid var(--color-border)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.backgroundColor = 'var(--color-primary-light)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <div style={{
                    width: '44px', height: '44px',
                    backgroundColor: 'var(--color-primary-light)',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {label}
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--color-text)' }}>
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map Embed */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--color-border)', height: '260px' }}>
              <iframe
                src={SITE_CONFIG.business.googleMapsEmbed}
                width="100%"
                height="260"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Flora Interiors Location"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: '24px',
              padding: 'clamp(28px, 4vw, 48px)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text)' }}>
              Book Free Consultation
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginBottom: '28px' }}>
              Fill in the form and we'll get back to you within 24 hours.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: 'center',
                  padding: '40px 24px',
                  backgroundColor: 'rgba(110, 124, 89, 0.08)',
                  borderRadius: '16px',
                  border: '1px solid rgba(110, 124, 89, 0.2)',
                }}
              >
                <CheckCircle2 size={56} color="var(--color-primary)" style={{ marginBottom: '16px' }} />
                <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text)' }}>
                  Thank you!
                </h4>
                <p style={{ color: 'var(--color-text-light)', fontSize: '15px' }}>
                  We've received your request. Our team will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="contact-form-row">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    required
                    className="form-control"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <select
                  name="service"
                  required
                  className="form-control"
                  value={formData.service}
                  onChange={handleChange}
                  style={{ cursor: 'pointer' }}
                >
                  <option value="" disabled>Select Service</option>
                  {SITE_CONFIG.services.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your project — space size, style preferences, budget..."
                  rows={4}
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ resize: 'vertical', minHeight: '100px' }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ width: '100%', padding: '16px', fontSize: '16px', gap: '8px' }}
                >
                  {status === 'sending' ? (
                    <>Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                  Your information is secure. We never share your data.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
