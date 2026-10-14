import React, { useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Award, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="glass-panel-dark"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '95vw',
          maxWidth: '850px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0A0808',
          border: '1px solid rgba(244, 236, 228, 0.15)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.85)',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 2rem',
            borderBottom: '1px solid rgba(244, 236, 228, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#070505'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FileText size={20} style={{ color: 'var(--terracotta)' }} />
            <div>
              <h2
                id="resume-title"
                className="font-ui"
                style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-ivory)' }}
              >
                Curriculum Vitae Preview
              </h2>
              <div className="editorial-label" style={{ color: 'var(--taupe)' }}>
                OFFICIAL VERIFIED PROFILE SUMMARY
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="btn-editorial btn-primary-dark"
            style={{
              padding: '0.5rem',
              border: '1px solid rgba(244, 236, 228, 0.25)',
              color: 'var(--text-ivory)'
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable CV Body */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '2.5rem',
            backgroundColor: '#0E0C0C',
            color: 'var(--text-ivory)'
          }}
        >
          {/* Document Header */}
          <div style={{ borderBottom: '2px solid rgba(244, 236, 228, 0.2)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
            <h1
              className="font-display"
              style={{
                fontSize: '2.8rem',
                color: 'var(--text-ivory)',
                letterSpacing: '0.02em',
                lineHeight: 0.9,
                marginBottom: '0.5rem'
              }}
            >
              {PERSONAL_INFO.name.toUpperCase()}
            </h1>
            <div className="font-ui" style={{ fontSize: '1rem', color: 'var(--terracotta)', fontWeight: 600, marginBottom: '0.75rem' }}>
              {PERSONAL_INFO.headline}
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                fontSize: '0.8125rem',
                color: 'var(--text-muted-dark)'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={14} /> {PERSONAL_INFO.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Mail size={14} /> {PERSONAL_INFO.links.email}
              </span>
              <span>GitHub: {PERSONAL_INFO.links.github.replace('https://', '')}</span>
              <span>LinkedIn: {PERSONAL_INFO.links.linkedin.replace('https://www.', '')}</span>
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '2rem' }}>
            <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.75rem' }}>
              EDUCATION
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
              <div className="font-heading" style={{ fontSize: '1.15rem', color: 'var(--text-ivory)' }}>
                {PERSONAL_INFO.education.institution}
              </div>
              <span className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--terracotta)', fontWeight: 700 }}>
                CGPA: {PERSONAL_INFO.education.cgpa}
              </span>
            </div>
            <div style={{ fontSize: '0.9375rem', color: 'var(--text-muted-dark)' }}>
              {PERSONAL_INFO.education.degree} (2023 – 2027)
            </div>
          </div>

          {/* Core Technical Highlights */}
          <div style={{ marginBottom: '2rem' }}>
            <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.75rem' }}>
              CORE TECHNICAL DOMAINS
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '0.875rem', backgroundColor: 'rgba(244, 236, 228, 0.03)', border: '1px solid rgba(244, 236, 228, 0.08)' }}>
                <div className="font-ui" style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-ivory)', marginBottom: '4px' }}>
                  Optimization & Machine Learning
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)' }}>
                  Google OR-Tools (CP-SAT), Bayesian Knowledge Tracing (BKT), PyTorch, Scikit-learn, Ollama, Gemini API.
                </div>
              </div>

              <div style={{ padding: '0.875rem', backgroundColor: 'rgba(244, 236, 228, 0.03)', border: '1px solid rgba(244, 236, 228, 0.08)' }}>
                <div className="font-ui" style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-ivory)', marginBottom: '4px' }}>
                  Real-Time 3D & WebGL
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)' }}>
                  Three.js, React Three Fiber, CatmullRom Curve rendering, A* pathfinding, Zustand, Blender asset pipeline.
                </div>
              </div>

              <div style={{ padding: '0.875rem', backgroundColor: 'rgba(244, 236, 228, 0.03)', border: '1px solid rgba(244, 236, 228, 0.08)' }}>
                <div className="font-ui" style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-ivory)', marginBottom: '4px' }}>
                  Languages & Systems
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)' }}>
                  Python, JavaScript (ES2022+), TypeScript, SQL, C++, FastAPI, Node.js, Express, MongoDB.
                </div>
              </div>

              <div style={{ padding: '0.875rem', backgroundColor: 'rgba(244, 236, 228, 0.03)', border: '1px solid rgba(244, 236, 228, 0.08)' }}>
                <div className="font-ui" style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-ivory)', marginBottom: '4px' }}>
                  Awards & Key Credentials
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)' }}>
                  1st Place Winner Fund Arcade, ISRO Hackathon Participant, 22 Cisco/Anthropic/AWS Credentials.
                </div>
              </div>
            </div>
          </div>

          {/* Notice & PDF Integration Note */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(172, 64, 51, 0.08)',
              border: '1px solid rgba(172, 64, 51, 0.25)',
              marginBottom: '2rem'
            }}
          >
            <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.25rem' }}>
              DOCUMENT DISPATCH
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted-dark)' }}>
              To download or request the full unredacted official PDF résumé with complete contact details and academic transcripts, click below or drop a direct line to <strong>{PERSONAL_INFO.links.email}</strong>.
            </p>
          </div>

          {/* Modal Actions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <a
              href={`mailto:${PERSONAL_INFO.links.email}?subject=Resume%20Request%20-%20Sushrut%20Kale`}
              className="btn-editorial btn-terracotta"
            >
              <Mail size={16} /> REQUEST FULL RESUME PDF
            </a>

            <button onClick={onClose} className="btn-editorial btn-outline-ivory">
              CLOSE PREVIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
