import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Instagram, Mail, FileCode2, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About({ onOpenResume, onNavigateToSection }) {
  return (
    <section
      id="about"
      className="editorial-section-view"
      style={{
        backgroundColor: 'var(--bg-ivory)',
        color: 'var(--text-dark)',
        position: 'relative',
        paddingTop: '86px',
        paddingBottom: '3rem'
      }}
    >
      <div className="site-container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* Top Meta Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--line-light)',
            gap: '1rem',
            marginBottom: '1.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="editorial-label" style={{ color: 'var(--terracotta)' }}>
              AVAILABLE FOR ROLES &amp; COLLABORATIONS
            </span>
            <span style={{ color: 'var(--taupe)' }}>/</span>
            <span className="editorial-label" style={{ color: 'var(--taupe)' }}>
              PUNE, INDIA
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span className="editorial-label" style={{ color: 'var(--text-dark)' }}>
              COMPUTER SCIENCE &amp; ENGINEERING (AI &amp; ML)
            </span>
            <span className="editorial-label" style={{ color: 'var(--taupe)' }}>
              EDITION 2026
            </span>
          </div>
        </div>

        {/* Massive Editorial Headline */}
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          <div
            className="editorial-label"
            style={{ color: 'var(--taupe)', letterSpacing: '0.28em', marginBottom: '0.35rem' }}
          >
            PORTFOLIO VOL. 26 — SELECTED ENGINEERING ARCHIVE
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(3.5rem, 10.5vw, 11rem)',
              color: 'var(--text-dark)',
              textTransform: 'uppercase',
              lineHeight: 0.85,
              letterSpacing: '-0.02em',
              wordBreak: 'break-word'
            }}
          >
            SUSHRUT KALE
          </h1>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              marginTop: '0.65rem',
              gap: '1rem'
            }}
          >
            <h2
              className="font-heading"
              style={{
                fontSize: 'clamp(1.1rem, 2.4vw, 2.1rem)',
                color: 'var(--text-dark)',
                fontWeight: 700,
                letterSpacing: '-0.02em'
              }}
            >
              AI/ML DEVELOPER <span style={{ color: 'var(--terracotta)' }}>·</span> FULL-STACK ENGINEER
            </h2>
            <div className="editorial-label" style={{ color: 'var(--dusty-blue)' }}>
              SYSTEMS · PROBABILISTIC AI · 3D TWINS
            </div>
          </div>
        </div>

        {/* Portrait + Narrative Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.5rem, 3.5vw, 3.5rem)',
            alignItems: 'start',
            marginBottom: '2.5rem'
          }}
        >
          {/* Portrait Column */}
          <div
            className="hero-image-col"
            style={{ gridColumn: 'span 5', position: 'relative' }}
          >
            <div
              style={{
                position: 'relative',
                border: '1px solid var(--text-dark)',
                padding: '8px',
                backgroundColor: '#fff',
                boxShadow: '10px 10px 0px var(--text-dark)'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 5',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-dark)'
                }}
              >
                <img
                  src={PERSONAL_INFO.photo}
                  alt={PERSONAL_INFO.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.05)' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '0.65rem 0.875rem',
                    backgroundColor: 'rgba(7, 5, 5, 0.88)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--text-ivory)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span className="editorial-label" style={{ color: 'var(--text-ivory)', fontSize: '0.625rem' }}>
                    SUSHRUT KALE · ENGINEER
                  </span>
                  <span className="font-mono" style={{ fontSize: '0.625rem', color: 'var(--terracotta)' }}>
                    MITAOE '29
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative + Academic Foundation Column */}
          <div
            className="hero-content-col"
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}
          >
            <div style={{ marginBottom: '1.75rem' }}>
              <div
                className="font-ui"
                style={{
                  fontSize: 'clamp(1.15rem, 1.8vw, 1.55rem)',
                  color: 'var(--text-dark)',
                  lineHeight: 1.45,
                  fontWeight: 600,
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em'
                }}
              >
                "I build <span style={{ color: 'var(--terracotta)' }}>intelligent software</span> that transforms complex problems into practical, interactive experiences."
              </div>

              {/* Concise Two Paragraphs */}
              {PERSONAL_INFO.bioParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                    marginBottom: idx === 0 ? '0.75rem' : '0'
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Academic Foundation: Single location for College, Period & CGPA */}
            <div
              style={{
                backgroundColor: 'var(--bg-dark)',
                color: 'var(--text-ivory)',
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--text-dark)',
                marginBottom: '1.75rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--terracotta)' }}>
                <GraduationCap size={18} />
                <span className="editorial-label" style={{ color: 'var(--terracotta)' }}>
                  ACADEMIC FOUNDATION
                </span>
              </div>

              <div
                className="font-ui"
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--text-ivory)',
                  marginBottom: '0.25rem'
                }}
              >
                {PERSONAL_INFO.education.combinedDisplay}
              </div>

              <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)' }}>
                {PERSONAL_INFO.education.degree} · Pune, Maharashtra, India
              </div>
            </div>

            {/* CTAs & Social Links */}
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '1.25rem' }}>
                <button
                  onClick={() => onNavigateToSection('projects')}
                  className="btn-editorial btn-primary-dark"
                  style={{ fontSize: '0.75rem', padding: '0.625rem 1.25rem' }}
                >
                  VIEW PROJECT ARCHIVE <ArrowDown size={14} />
                </button>
                <button
                  onClick={() => onNavigateToSection('contact')}
                  className="btn-editorial btn-outline-dark"
                  style={{ fontSize: '0.75rem', padding: '0.625rem 1.25rem' }}
                >
                  GET IN TOUCH <ArrowUpRight size={14} />
                </button>
                <button
                  onClick={onOpenResume}
                  className="btn-editorial btn-outline-dark"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', padding: '0.625rem 1.25rem' }}
                >
                  <FileCode2 size={14} /> RÉSUMÉ PREVIEW
                </button>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem' }}>
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link editorial-label"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-dark)' }}
                >
                  <Github size={14} /> GITHUB ↗
                </a>
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link editorial-label"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-dark)' }}
                >
                  <Linkedin size={14} /> LINKEDIN ↗
                </a>
                <a
                  href={PERSONAL_INFO.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link editorial-label"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-dark)' }}
                >
                  <Instagram size={14} /> INSTAGRAM ↗
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.links.email}`}
                  className="editorial-link editorial-label"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-dark)' }}
                >
                  <Mail size={14} /> EMAIL ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Band */}
        <div
          style={{
            width: '100%',
            backgroundColor: 'var(--bg-dark)',
            color: 'var(--text-ivory)',
            padding: '0.75rem 0',
            overflow: 'hidden'
          }}
        >
          <div className="marquee-track font-display" style={{ fontSize: '1.25rem', letterSpacing: '0.08em' }}>
            <span>
              AI/ML ENGINEERING &nbsp;·&nbsp; FULL-STACK SYSTEMS &nbsp;·&nbsp; REAL-TIME 3D DIGITAL TWINS &nbsp;·&nbsp; THREE.JS &amp; R3F &nbsp;·&nbsp; GOOGLE OR-TOOLS CP-SAT &nbsp;·&nbsp; FASTAPI &amp; REACT &nbsp;·&nbsp; FUND ARCADE 1ST PLACE &nbsp;·&nbsp; HBTM FIRST RUNNER-UP &nbsp;·&nbsp; ISRO HACKATHON &nbsp;·&nbsp; SIH 2026 &nbsp;·&nbsp;{' '}
            </span>
            <span>
              AI/ML ENGINEERING &nbsp;·&nbsp; FULL-STACK SYSTEMS &nbsp;·&nbsp; REAL-TIME 3D DIGITAL TWINS &nbsp;·&nbsp; THREE.JS &amp; R3F &nbsp;·&nbsp; GOOGLE OR-TOOLS CP-SAT &nbsp;·&nbsp; FASTAPI &amp; REACT &nbsp;·&nbsp; FUND ARCADE 1ST PLACE &nbsp;·&nbsp; HBTM FIRST RUNNER-UP &nbsp;·&nbsp; ISRO HACKATHON &nbsp;·&nbsp; SIH 2026 &nbsp;·&nbsp;{' '}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-image-col {
            grid-column: span 12 !important;
            max-width: 320px;
            margin-bottom: 1.5rem;
          }
          .hero-content-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
