import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Instagram, Mail, FileCode2, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--bg-ivory)',
        borderBottom: '1px solid var(--line-light)',
        position: 'relative'
      }}
    >
      {/* ─────────── HERO BLOCK ─────────── */}
      <div
        style={{
          paddingTop: '96px',
          paddingBottom: '2.5rem',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--line-light)'
        }}
      >
        <div className="site-container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Top Meta Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--line-light)',
              gap: '1rem',
              marginBottom: '2rem'
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
          <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
            <div
              className="editorial-label"
              style={{ color: 'var(--taupe)', letterSpacing: '0.28em', marginBottom: '0.5rem' }}
            >
              PORTFOLIO VOL. 26 — SELECTED ENGINEERING ARCHIVE
            </div>

            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(3.5rem, 11vw, 11.5rem)',
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
                marginTop: '0.75rem',
                gap: '1rem'
              }}
            >
              <h2
                className="font-heading"
                style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 2.2rem)',
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

          {/* Portrait + Bio Column Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 'clamp(1.5rem, 3.5vw, 3.5rem)',
              alignItems: 'start',
              marginBottom: '3rem'
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
                  padding: '10px',
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
                      padding: '0.75rem 1rem',
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
                      MITAOE '27
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
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
              <div style={{ marginBottom: '2rem' }}>
                <div
                  className="font-ui"
                  style={{
                    fontSize: 'clamp(1.15rem, 1.8vw, 1.6rem)',
                    color: 'var(--text-dark)',
                    lineHeight: 1.45,
                    fontWeight: 600,
                    marginBottom: '1.25rem',
                    letterSpacing: '-0.01em'
                  }}
                >
                  "I build <span style={{ color: 'var(--terracotta)' }}>intelligent software</span> that transforms complex problems into practical, interactive experiences."
                </div>

                <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  My interests span AI/ML, full-stack development, data visualization, and immersive 3D technologies. As a Computer Science Engineering student specializing in AI and Machine Learning at MIT Academy of Engineering, I focus on building software that combines algorithmic rigor with intuitive interaction.
                </p>
              </div>

              {/* Stats Bar (No repeated CGPA) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  borderTop: '1px solid var(--line-light)',
                  borderBottom: '1px solid var(--line-light)',
                  padding: '1.25rem 0',
                  gap: '1.25rem',
                  marginBottom: '2.5rem'
                }}
              >
                {PERSONAL_INFO.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div
                      className="font-display"
                      style={{
                        fontSize: 'clamp(2.2rem, 3.2vw, 3.2rem)',
                        color: idx === 0 ? 'var(--terracotta)' : 'var(--text-dark)',
                        lineHeight: 0.9,
                        marginBottom: '0.25rem'
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="editorial-label" style={{ color: 'var(--text-dark)', fontSize: '0.625rem' }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs & Social Channels (Strictly GitHub, LinkedIn, Instagram, Email - No LeetCode) */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem' }}>
                  <a href="#projects" className="btn-editorial btn-primary-dark">
                    VIEW SELECTED WORK <ArrowDown size={15} />
                  </a>
                  <a href="#contact" className="btn-editorial btn-outline-dark">
                    GET IN TOUCH <ArrowUpRight size={15} />
                  </a>
                  <button
                    onClick={onOpenResume}
                    className="btn-editorial btn-outline-dark"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <FileCode2 size={15} /> RÉSUMÉ
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
        </div>

        {/* Marquee Band */}
        <div
          style={{
            width: '100%',
            backgroundColor: 'var(--bg-dark)',
            color: 'var(--text-ivory)',
            padding: '0.875rem 0',
            overflow: 'hidden'
          }}
        >
          <div className="marquee-track font-display" style={{ fontSize: '1.4rem', letterSpacing: '0.08em' }}>
            <span>
              AI/ML ENGINEERING &nbsp;·&nbsp; FULL-STACK SYSTEMS &nbsp;·&nbsp; REAL-TIME 3D DIGITAL TWINS &nbsp;·&nbsp; THREE.JS &amp; R3F &nbsp;·&nbsp; GOOGLE OR-TOOLS CP-SAT &nbsp;·&nbsp; FASTAPI &amp; REACT &nbsp;·&nbsp; FUND ARCADE 1ST PLACE &nbsp;·&nbsp; HBTM FIRST RUNNER-UP &nbsp;·&nbsp; ISRO HACKATHON &nbsp;·&nbsp; SIH 2026 &nbsp;·&nbsp;{' '}
            </span>
            <span>
              AI/ML ENGINEERING &nbsp;·&nbsp; FULL-STACK SYSTEMS &nbsp;·&nbsp; REAL-TIME 3D DIGITAL TWINS &nbsp;·&nbsp; THREE.JS &amp; R3F &nbsp;·&nbsp; GOOGLE OR-TOOLS CP-SAT &nbsp;·&nbsp; FASTAPI &amp; REACT &nbsp;·&nbsp; FUND ARCADE 1ST PLACE &nbsp;·&nbsp; HBTM FIRST RUNNER-UP &nbsp;·&nbsp; ISRO HACKATHON &nbsp;·&nbsp; SIH 2026 &nbsp;·&nbsp;{' '}
            </span>
          </div>
        </div>
      </div>

      {/* ─────────── ABOUT / BACKGROUND BLOCK ─────────── */}
      <div style={{ padding: '6rem 0' }}>
        <div className="site-container">
          {/* Section Header */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--text-dark)',
              paddingBottom: '1.5rem',
              marginBottom: '3.5rem',
              gap: '1rem'
            }}
          >
            <div>
              <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.5rem' }}>
                SECTION 01 / BACKGROUND &amp; PROFILE
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                  color: 'var(--text-dark)',
                  letterSpacing: '-0.02em',
                  lineHeight: 0.9
                }}
              >
                ABOUT SUSHRUT
              </h2>
            </div>
            <div className="editorial-label" style={{ color: 'var(--taupe)' }}>
              ENGINEERING APPROACH &amp; ACADEMICS
            </div>
          </div>

          {/* Two Short Concise Paragraphs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              marginBottom: '4rem',
              color: 'var(--text-muted)'
            }}
          >
            {PERSONAL_INFO.bioParagraphs.map((para, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.75,
                  color: 'var(--text-dark)',
                  fontWeight: 400
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Academic Foundation: Single combined location for College and CGPA */}
          <div
            style={{
              backgroundColor: 'var(--bg-dark)',
              color: 'var(--text-ivory)',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              border: '1px solid var(--text-dark)',
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              <div style={{ gridColumn: 'span 8' }} className="edu-col-main">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'var(--terracotta)',
                    marginBottom: '1rem'
                  }}
                >
                  <GraduationCap size={22} />
                  <span className="editorial-label" style={{ color: 'var(--terracotta)' }}>
                    ACADEMIC FOUNDATION
                  </span>
                </div>

                <h3
                  className="font-heading"
                  style={{
                    fontSize: 'clamp(1.35rem, 2.5vw, 2.1rem)',
                    color: 'var(--text-ivory)',
                    marginBottom: '0.75rem'
                  }}
                >
                  {PERSONAL_INFO.education.degree}
                </h3>

                {/* Mention college and CGPA together in one appropriate location */}
                <div
                  className="font-ui"
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: 'var(--terracotta)',
                    marginBottom: '1rem'
                  }}
                >
                  {PERSONAL_INFO.education.combinedDisplay}
                </div>

                <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted-dark)', maxWidth: '650px', lineHeight: 1.6 }}>
                  Computer Science Engineering student specializing in AI and Machine Learning. Active coursework spanning machine learning, constraint satisfaction, deep learning, data structures, and computer graphics.
                </p>
              </div>

              <div
                style={{
                  gridColumn: 'span 4',
                  borderLeft: '1px solid rgba(244, 236, 228, 0.15)',
                  paddingLeft: '2rem'
                }}
                className="edu-col-stats"
              >
                <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.5rem' }}>
                  ACADEMIC STATUS
                </div>
                <div
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)',
                    color: 'var(--text-ivory)',
                    lineHeight: 1.1,
                    marginBottom: '0.5rem'
                  }}
                >
                  CLASS OF 2027
                </div>
                <div className="editorial-label" style={{ color: 'var(--terracotta)' }}>
                  ACTIVE UNDERGRADUATE
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)', marginTop: '0.5rem' }}>
                  Pune, Maharashtra, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-image-col {
            grid-column: span 12 !important;
            max-width: 380px;
            margin-bottom: 2rem;
          }
          .hero-content-col {
            grid-column: span 12 !important;
          }
        }
        @media (max-width: 768px) {
          .edu-col-main {
            grid-column: span 12 !important;
          }
          .edu-col-stats {
            grid-column: span 12 !important;
            border-left: none !important;
            border-top: 1px solid rgba(244, 236, 228, 0.15) !important;
            padding-left: 0 !important;
            padding-top: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
