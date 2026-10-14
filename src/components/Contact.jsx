import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, ArrowUp, Send, CheckCircle2, Copy, FileText, ArrowUpRight, Clock, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO, COMING_SOON_DATA } from '../data/portfolioData';

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setStatus('submitting');

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setStatus('error');
        }
      } catch (err) {
        setStatus('error');
      }
    } else {
      // Direct mailto dispatch fallback
      setTimeout(() => {
        const subjectEncoded = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
        const bodyEncoded = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:${PERSONAL_INFO.links.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 600);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: '6rem',
        paddingBottom: '3rem',
        backgroundColor: '#070505',
        color: 'var(--text-ivory)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div style={{ marginBottom: '4rem', borderBottom: '1px solid rgba(244, 236, 228, 0.15)', paddingBottom: '2.5rem' }}>
          <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.75rem' }}>
            SECTION 07 / REACH OUT &amp; COLLABORATE
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.75rem, 8.5vw, 8.5rem)',
              color: 'var(--text-ivory)',
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase'
            }}
          >
            LET'S BUILD SOMETHING EXTRAORDINARY
          </h2>
        </div>

        {/* 2-Column Layout: Direct Details + Dispatch Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'start',
            marginBottom: '5rem'
          }}
        >
          {/* Left Column */}
          <div style={{ gridColumn: 'span 5' }} className="contact-info-col">
            <h3
              className="font-heading"
              style={{
                fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
                color: 'var(--text-ivory)',
                marginBottom: '1rem'
              }}
            >
              Direct Communication
            </h3>

            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-muted-dark)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              Whether you have questions about my AI/ML constraint optimization models, real-time 3D WebGL engine builds, or want to discuss full-time software engineering roles and hackathon collaborations, my inbox is always open.
            </p>

            {/* Email Box */}
            <div
              style={{
                backgroundColor: 'rgba(244, 236, 228, 0.03)',
                border: '1px solid rgba(244, 236, 228, 0.12)',
                padding: '1.5rem',
                marginBottom: '1.75rem'
              }}
            >
              <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.5rem' }}>
                PRIMARY EMAIL
              </div>
              <div
                className="font-ui"
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--text-ivory)',
                  marginBottom: '1rem',
                  wordBreak: 'break-all'
                }}
              >
                {PERSONAL_INFO.links.email}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={`mailto:${PERSONAL_INFO.links.email}`}
                  className="btn-editorial btn-terracotta"
                  style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}
                >
                  <Mail size={14} /> OPEN IN CLIENT
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="btn-editorial btn-outline-ivory"
                  style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}
                >
                  <Copy size={14} /> {copiedEmail ? 'COPIED!' : 'COPY EMAIL'}
                </button>
              </div>
            </div>

            {/* Résumé Prompt */}
            <div
              style={{
                backgroundColor: 'rgba(244, 236, 228, 0.03)',
                border: '1px solid rgba(244, 236, 228, 0.12)',
                padding: '1.5rem',
                marginBottom: '1.75rem'
              }}
            >
              <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.5rem' }}>
                CURRICULUM VITAE
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted-dark)', marginBottom: '1rem', lineHeight: 1.5 }}>
                View academic foundations, coursework, competitive honors, and technical stack summary.
              </p>
              <button
                onClick={onOpenResume}
                className="btn-editorial btn-outline-ivory"
                style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}
              >
                <FileText size={14} /> PREVIEW / DOWNLOAD RÉSUMÉ
              </button>
            </div>

            {/* Social Networks: GitHub, LinkedIn, Instagram only */}
            <div>
              <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.75rem' }}>
                NETWORKS &amp; CODE CHANNELS
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link font-ui"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-ivory)',
                    fontSize: '0.8125rem',
                    padding: '0.625rem 0.75rem',
                    backgroundColor: 'rgba(244, 236, 228, 0.02)',
                    border: '1px solid rgba(244, 236, 228, 0.08)'
                  }}
                >
                  <Github size={15} /> GitHub ↗
                </a>

                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link font-ui"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-ivory)',
                    fontSize: '0.8125rem',
                    padding: '0.625rem 0.75rem',
                    backgroundColor: 'rgba(244, 236, 228, 0.02)',
                    border: '1px solid rgba(244, 236, 228, 0.08)'
                  }}
                >
                  <Linkedin size={15} /> LinkedIn ↗
                </a>

                <a
                  href={PERSONAL_INFO.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link font-ui"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-ivory)',
                    fontSize: '0.8125rem',
                    padding: '0.625rem 0.75rem',
                    backgroundColor: 'rgba(244, 236, 228, 0.02)',
                    border: '1px solid rgba(244, 236, 228, 0.08)'
                  }}
                >
                  <Instagram size={15} /> Instagram ↗
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.links.email}`}
                  className="editorial-link font-ui"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-ivory)',
                    fontSize: '0.8125rem',
                    padding: '0.625rem 0.75rem',
                    backgroundColor: 'rgba(244, 236, 228, 0.02)',
                    border: '1px solid rgba(244, 236, 228, 0.08)'
                  }}
                >
                  <Mail size={15} /> Email Direct ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            style={{
              gridColumn: 'span 7',
              backgroundColor: 'rgba(244, 236, 228, 0.02)',
              border: '1px solid rgba(244, 236, 228, 0.12)',
              padding: 'clamp(1.5rem, 4vw, 3rem)'
            }}
            className="contact-form-col"
          >
            <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.5rem' }}>
              TRANSMIT A MESSAGE
            </div>
            <h3
              className="font-heading"
              style={{
                fontSize: 'clamp(1.35rem, 2.2vw, 1.85rem)',
                color: 'var(--text-ivory)',
                marginBottom: '1.5rem'
              }}
            >
              Start a Conversation
            </h3>

            {status === 'success' ? (
              <div
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  textAlign: 'center'
                }}
              >
                <CheckCircle2 size={40} style={{ color: '#22c55e', margin: '0 auto 1rem' }} />
                <h4 className="font-heading" style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem' }}>
                  Dispatch Prepared
                </h4>
                <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                  Your email client has been prepared with your inquiry details. I will respond promptly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-editorial btn-outline-ivory"
                  style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}
                >
                  TRANSMIT ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row-2col">
                  <div>
                    <label className="editorial-label" style={{ color: 'var(--taupe)', display: 'block', marginBottom: '0.5rem' }}>
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(244, 236, 228, 0.04)',
                        border: '1px solid rgba(244, 236, 228, 0.15)',
                        color: 'var(--text-ivory)',
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem',
                        fontFamily: 'var(--font-ui)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label className="editorial-label" style={{ color: 'var(--taupe)', display: 'block', marginBottom: '0.5rem' }}>
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(244, 236, 228, 0.04)',
                        border: '1px solid rgba(244, 236, 228, 0.15)',
                        color: 'var(--text-ivory)',
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem',
                        fontFamily: 'var(--font-ui)',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="editorial-label" style={{ color: 'var(--taupe)', display: 'block', marginBottom: '0.5rem' }}>
                    SUBJECT OR DOMAIN
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. Full-Time Role, SIH Collaboration, 3D WebGL Build"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(244, 236, 228, 0.04)',
                      border: '1px solid rgba(244, 236, 228, 0.15)',
                      color: 'var(--text-ivory)',
                      padding: '0.75rem 1rem',
                      fontSize: '0.875rem',
                      fontFamily: 'var(--font-ui)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label className="editorial-label" style={{ color: 'var(--taupe)', display: 'block', marginBottom: '0.5rem' }}>
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(244, 236, 228, 0.04)',
                      border: '1px solid rgba(244, 236, 228, 0.15)',
                      color: 'var(--text-ivory)',
                      padding: '0.75rem 1rem',
                      fontSize: '0.875rem',
                      fontFamily: 'var(--font-ui)',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <span className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.625rem' }}>
                    DIRECT TRANSMISSION VIA MAIL CLIENT
                  </span>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-editorial btn-terracotta"
                    style={{ fontSize: '0.75rem', padding: '0.75rem 1.75rem' }}
                  >
                    {status === 'submitting' ? 'DISPATCHING...' : 'DISPATCH MESSAGE'} <Send size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ─────────── COMING SOON COMPARTMENT (REQUIREMENT 12) ─────────── */}
        <div
          style={{
            backgroundColor: 'rgba(244, 236, 228, 0.02)',
            border: '1px solid rgba(244, 236, 228, 0.12)',
            padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            marginBottom: '4rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(244, 236, 228, 0.08)',
              marginBottom: '1.5rem',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} style={{ color: 'var(--terracotta)' }} />
              <span className="editorial-label" style={{ color: 'var(--terracotta)' }}>
                STAGING &amp; COMING SOON COMPARTMENT
              </span>
            </div>
            <span className="editorial-label" style={{ color: 'var(--taupe)' }}>
              TRANSPARENT STATUS ON GENUINELY PENDING MATERIAL
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {COMING_SOON_DATA.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'rgba(7, 5, 5, 0.6)',
                  border: '1px solid rgba(244, 236, 228, 0.08)',
                  padding: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.625rem',
                      color: 'var(--terracotta)',
                      padding: '0.15rem 0.4rem',
                      border: '1px solid var(--terracotta)'
                    }}
                  >
                    {item.status.toUpperCase()}
                  </span>
                  <span className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.625rem' }}>
                    {item.expected}
                  </span>
                </div>

                <h4 className="font-heading" style={{ fontSize: '1rem', color: 'var(--text-ivory)', marginBottom: '0.35rem' }}>
                  {item.title}
                </h4>

                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)', lineHeight: 1.45, marginBottom: '0.5rem' }}>
                  {item.reason}
                </p>

                <div className="font-mono" style={{ fontSize: '0.6875rem', color: 'var(--taupe)' }}>
                  {item.actionPrompt}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─────────── FOOTER ─────────── */}
        <div
          style={{
            borderTop: '1px solid rgba(244, 236, 228, 0.15)',
            paddingTop: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}
        >
          <div>
            <div className="font-display" style={{ fontSize: '1.5rem', color: 'var(--text-ivory)' }}>
              SUSHRUT KALE
            </div>
            <div className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.625rem', marginTop: '0.25rem' }}>
              EDITORIAL DEVELOPER PORTFOLIO · VOL. 26 · MITAOE PUNE
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--taupe)' }}>
              © {new Date().getFullYear()} ALL RIGHTS RESERVED
            </span>

            <button
              onClick={scrollToTop}
              className="btn-editorial btn-outline-ivory"
              style={{ fontSize: '0.6875rem', padding: '0.4rem 0.875rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              BACK TO TOP <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-info-col, .contact-form-col {
            grid-column: span 12 !important;
          }
        }
        @media (max-width: 600px) {
          .form-row-2col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
