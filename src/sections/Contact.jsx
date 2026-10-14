import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, ArrowUp, Send, CheckCircle2, Copy, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
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
      className="editorial-section-view"
      style={{
        backgroundColor: '#070505',
        color: 'var(--text-ivory)',
        position: 'relative',
        paddingTop: '86px',
        paddingBottom: '3rem'
      }}
    >
      <div className="site-container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          {/* Section Header */}
          <div style={{ marginBottom: '3rem', borderBottom: '1px solid rgba(244, 236, 228, 0.15)', paddingBottom: '2rem' }}>
            <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.5rem' }}>
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

          {/* 2-Column Architectural Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'start',
              marginBottom: '3.5rem'
            }}
          >
            {/* Left Column: Direct Reach */}
            <div style={{ gridColumn: 'span 5' }} className="contact-info-col">
              <h3
                className="font-heading"
                style={{
                  fontSize: 'clamp(1.35rem, 2.2vw, 1.85rem)',
                  color: 'var(--text-ivory)',
                  marginBottom: '0.75rem'
                }}
              >
                Direct Communication
              </h3>

              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-muted-dark)',
                  lineHeight: 1.6,
                  marginBottom: '1.75rem'
                }}
              >
                Whether you have questions about my AI/ML constraint optimization models, real-time 3D WebGL engine builds, or want to discuss full-time software engineering roles and hackathon collaborations, my inbox is always open.
              </p>

              {/* Email Box */}
              <div
                style={{
                  backgroundColor: 'rgba(244, 236, 228, 0.03)',
                  border: '1px solid rgba(244, 236, 228, 0.12)',
                  padding: '1.25rem 1.5rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.35rem' }}>
                  PRIMARY EMAIL
                </div>
                <div
                  className="font-ui"
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--text-ivory)',
                    marginBottom: '0.85rem',
                    wordBreak: 'break-all'
                  }}
                >
                  {PERSONAL_INFO.links.email}
                </div>

                <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                  <a
                    href={`mailto:${PERSONAL_INFO.links.email}`}
                    className="btn-editorial btn-terracotta"
                    style={{ fontSize: '0.6875rem', padding: '0.45rem 0.85rem' }}
                  >
                    <Mail size={13} /> OPEN IN CLIENT
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="btn-editorial btn-outline-ivory"
                    style={{ fontSize: '0.6875rem', padding: '0.45rem 0.85rem' }}
                  >
                    <Copy size={13} /> {copiedEmail ? 'COPIED!' : 'COPY EMAIL'}
                  </button>
                </div>
              </div>

              {/* Résumé Action */}
              <div
                style={{
                  backgroundColor: 'rgba(244, 236, 228, 0.03)',
                  border: '1px solid rgba(244, 236, 228, 0.12)',
                  padding: '1.25rem 1.5rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.35rem' }}>
                  CURRICULUM VITAE
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)', marginBottom: '0.85rem', lineHeight: 1.5 }}>
                  View academic foundations, coursework, competitive honors, and verified technical stack summary.
                </p>
                <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={onOpenResume}
                    className="btn-editorial btn-terracotta"
                    style={{ fontSize: '0.6875rem', padding: '0.45rem 0.85rem' }}
                  >
                    <FileText size={13} /> VIEW RESUME SECTION
                  </button>
                  <a
                    href={PERSONAL_INFO.resumePdf || './resume/Sushrut_Kale_Resume.pdf'}
                    download={PERSONAL_INFO.resumeFilename || 'Sushrut_Kale_Resume.pdf'}
                    className="btn-editorial btn-outline-ivory"
                    style={{ fontSize: '0.6875rem', padding: '0.45rem 0.85rem' }}
                  >
                    <Download size={13} /> DOWNLOAD PDF
                  </a>
                </div>
              </div>

              {/* Verified Social Networks: GitHub, LinkedIn, Instagram only */}
              <div>
                <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.65rem' }}>
                  NETWORKS &amp; CODE CHANNELS
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
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
                      padding: '0.5rem 0.65rem',
                      backgroundColor: 'rgba(244, 236, 228, 0.02)',
                      border: '1px solid rgba(244, 236, 228, 0.08)'
                    }}
                  >
                    <Github size={14} /> GitHub ↗
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
                      padding: '0.5rem 0.65rem',
                      backgroundColor: 'rgba(244, 236, 228, 0.02)',
                      border: '1px solid rgba(244, 236, 228, 0.08)'
                    }}
                  >
                    <Linkedin size={14} /> LinkedIn ↗
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
                      padding: '0.5rem 0.65rem',
                      backgroundColor: 'rgba(244, 236, 228, 0.02)',
                      border: '1px solid rgba(244, 236, 228, 0.08)'
                    }}
                  >
                    <Instagram size={14} /> Instagram ↗
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
                      padding: '0.5rem 0.65rem',
                      backgroundColor: 'rgba(244, 236, 228, 0.02)',
                      border: '1px solid rgba(244, 236, 228, 0.08)'
                    }}
                  >
                    <Mail size={14} /> Email Direct ↗
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
                padding: 'clamp(1.5rem, 3.5vw, 2.5rem)'
              }}
              className="contact-form-col"
            >
              <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.35rem' }}>
                TRANSMIT A MESSAGE
              </div>
              <h3
                className="font-heading"
                style={{
                  fontSize: 'clamp(1.3rem, 2vw, 1.75rem)',
                  color: 'var(--text-ivory)',
                  marginBottom: '1.25rem'
                }}
              >
                Start a Conversation
              </h3>

              {status === 'success' ? (
                <div
                  style={{
                    padding: '2rem',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    textAlign: 'center'
                  }}
                >
                  <CheckCircle2 size={36} style={{ color: '#22c55e', margin: '0 auto 0.75rem' }} />
                  <h4 className="font-heading" style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.35rem' }}>
                    Dispatch Prepared
                  </h4>
                  <p style={{ color: 'var(--text-muted-dark)', fontSize: '0.8125rem', marginBottom: '1.25rem' }}>
                    Your email client has been prepared with your inquiry. I will respond promptly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-editorial btn-outline-ivory"
                    style={{ fontSize: '0.6875rem', padding: '0.45rem 0.85rem' }}
                  >
                    TRANSMIT ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2col">
                    <div>
                      <label className="editorial-label" style={{ color: 'var(--taupe)', display: 'block', marginBottom: '0.35rem' }}>
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
                          padding: '0.65rem 0.85rem',
                          fontSize: '0.8125rem',
                          fontFamily: 'var(--font-ui)',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label className="editorial-label" style={{ color: 'var(--taupe)', display: 'block', marginBottom: '0.35rem' }}>
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
                          padding: '0.65rem 0.85rem',
                          fontSize: '0.8125rem',
                          fontFamily: 'var(--font-ui)',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="editorial-label" style={{ color: 'var(--taupe)', display: 'block', marginBottom: '0.35rem' }}>
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
                        padding: '0.65rem 0.85rem',
                        fontSize: '0.8125rem',
                        fontFamily: 'var(--font-ui)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label className="editorial-label" style={{ color: 'var(--taupe)', display: 'block', marginBottom: '0.35rem' }}>
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your inquiry, project scope, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(244, 236, 228, 0.04)',
                        border: '1px solid rgba(244, 236, 228, 0.15)',
                        color: 'var(--text-ivory)',
                        padding: '0.65rem 0.85rem',
                        fontSize: '0.8125rem',
                        fontFamily: 'var(--font-ui)',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.25rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <span className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.5625rem' }}>
                      DIRECT TRANSMISSION VIA MAIL CLIENT
                    </span>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-editorial btn-terracotta"
                      style={{ fontSize: '0.6875rem', padding: '0.65rem 1.5rem' }}
                    >
                      {status === 'submitting' ? 'DISPATCHING...' : 'DISPATCH MESSAGE'} <Send size={13} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ─────────── FOOTER ─────────── */}
        <div
          style={{
            borderTop: '1px solid rgba(244, 236, 228, 0.15)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem'
          }}
        >
          <div>
            <div className="font-display" style={{ fontSize: '1.35rem', color: 'var(--text-ivory)' }}>
              SUSHRUT KALE
            </div>
            <div className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.5625rem', marginTop: '0.2rem' }}>
              EDITORIAL DEVELOPER PORTFOLIO · VOL. 26 · MITAOE PUNE
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span className="font-mono" style={{ fontSize: '0.6875rem', color: 'var(--taupe)' }}>
              © {new Date().getFullYear()} ALL RIGHTS RESERVED
            </span>

            <button
              onClick={scrollToTop}
              className="btn-editorial btn-outline-ivory"
              style={{ fontSize: '0.625rem', padding: '0.35rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              BACK TO TOP <ArrowUp size={12} />
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
