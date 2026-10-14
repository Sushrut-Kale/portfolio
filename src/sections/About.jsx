import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Instagram, Mail, FileCode2, FileText, GraduationCap, Sparkles, FolderGit2, Cpu, Trophy, Award } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EVENTS_DATA, CERTIFICATES } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';

const STATS_CONFIG = [
  {
    code: '01',
    label: 'PROJECT ARCHIVE',
    value: 15,
    suffix: '+',
    subtext: 'Engineered Systems',
    targetSection: 'projects',
    accent: 'var(--terracotta)',
    icon: FolderGit2
  },
  {
    code: '02',
    label: 'TECHNICAL SKILLS',
    value: 35,
    suffix: '+',
    subtext: '7 Core Domains',
    targetSection: 'skills',
    accent: 'var(--dusty-blue)',
    icon: Cpu
  },
  {
    code: '03',
    label: 'DOCUMENTED EVENTS',
    value: 10,
    suffix: '+',
    subtext: 'Hackathons & Forums',
    targetSection: 'events',
    accent: '#D47355',
    icon: Trophy
  },
  {
    code: '04',
    label: 'VERIFIED CREDENTIALS',
    value: 20,
    suffix: '+',
    subtext: 'Industry Certifications',
    targetSection: 'certifications',
    accent: 'var(--taupe)',
    icon: Award
  }
];

function StatCard({ stat, onNavigateToSection, delay = 0 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayValue(stat.value);
      setRevealed(true);
      return;
    }

    const timer = setTimeout(() => {
      setRevealed(true);
      const startTime = performance.now();
      const duration = 850;

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Cubic ease out curve
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * stat.value);
        setDisplayValue(current);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setDisplayValue(stat.value);
        }
      };

      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timer);
  }, [stat.value, delay, prefersReducedMotion]);

  const IconComponent = stat.icon;

  const handleClick = () => {
    if (onNavigateToSection && stat.targetSection) {
      onNavigateToSection(stat.targetSection);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="about-stat-card"
      data-cursor-label="EXPLORE"
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-ivory)',
        border: '1px solid rgba(244, 236, 228, 0.12)',
        padding: '0.875rem 1rem',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '128px',
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, background-color 0.25s ease',
        outline: 'none'
      }}
    >
      {/* Top Meta Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span className="font-mono" style={{ fontSize: '0.625rem', color: stat.accent, fontWeight: 700 }}>
            {stat.code}
          </span>
          <span style={{ color: 'rgba(244, 236, 228, 0.2)', fontSize: '0.625rem' }}>//</span>
          <span className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.5625rem' }}>
            METRIC
          </span>
        </div>
        <IconComponent size={14} style={{ color: stat.accent, opacity: 0.85 }} />
      </div>

      {/* Main Metric Value */}
      <div style={{ margin: '0.15rem 0 0.35rem 0' }}>
        <div
          className="font-display stat-number-display"
          style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
            color: 'var(--text-ivory)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            fontVariantNumeric: 'tabular-nums'
          }}
        >
          {displayValue < 10 && stat.value >= 10 ? `0${displayValue}` : displayValue}
          {stat.suffix}
        </div>
      </div>

      {/* Bottom Labels & Accent Line */}
      <div>
        <div
          className="editorial-label"
          style={{
            color: 'var(--text-ivory)',
            fontSize: '0.625rem',
            letterSpacing: '0.1em',
            marginBottom: '2px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {stat.label}
        </div>
        <div className="font-mono" style={{ fontSize: '0.5625rem', color: 'var(--text-muted-dark)' }}>
          {stat.subtext}
        </div>

        {/* Animated Terracotta Accent Bar */}
        <div
          className="stat-accent-bar"
          style={{
            marginTop: '0.5rem',
            height: '2px',
            width: revealed ? '100%' : '0%',
            backgroundColor: stat.accent,
            transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      </div>
    </div>
  );
}

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
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="editorial-label" style={{ color: 'var(--terracotta)' }}>
              AVAILABLE FOR ROLES &amp; COLLABORATIONS
            </span>
            <span style={{ color: 'var(--taupe)' }} className="hide-on-mobile">/</span>
            <span className="editorial-label hide-on-mobile" style={{ color: 'var(--taupe)' }}>
              PUNE, INDIA
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="editorial-label" style={{ color: 'var(--text-dark)' }}>
              COMPUTER SCIENCE &amp; ENGINEERING (AI &amp; ML)
            </span>
            <span className="editorial-label hide-on-mobile" style={{ color: 'var(--taupe)' }}>
              EDITION 2026
            </span>
          </div>
        </div>

        {/* Massive Editorial Headline */}
        <div style={{ position: 'relative', marginBottom: '1.75rem' }}>
          <div
            className="editorial-label"
            style={{ color: 'var(--taupe)', letterSpacing: '0.24em', marginBottom: '0.35rem' }}
          >
            PORTFOLIO VOL. 26 — SELECTED ENGINEERING ARCHIVE
          </div>

          <h1
            className="font-display about-hero-name"
            style={{
              fontSize: 'clamp(2.4rem, 8.5vw, 9.5rem)',
              color: 'var(--text-dark)',
              textTransform: 'uppercase',
              lineHeight: 0.88,
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
              gap: '0.75rem'
            }}
          >
            <h2
              className="font-heading"
              style={{
                fontSize: 'clamp(0.95rem, 2.2vw, 1.85rem)',
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
            gap: 'clamp(1.25rem, 3vw, 3rem)',
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
                padding: '6px',
                backgroundColor: '#fff',
                boxShadow: '8px 8px 0px var(--text-dark)'
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
                  loading="eager"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.05)' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '0.5rem 0.75rem',
                    backgroundColor: 'rgba(7, 5, 5, 0.9)',
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
                  <span className="font-mono" style={{ fontSize: '0.625rem', color: 'var(--terracotta)', fontWeight: 700 }}>
                    MITAOE '29
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative + Statistics + Academic Foundation Column */}
          <div
            className="hero-content-col"
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ marginBottom: '1.25rem' }}>
              <div
                className="font-ui"
                style={{
                  fontSize: 'clamp(1.05rem, 1.6vw, 1.45rem)',
                  color: 'var(--text-dark)',
                  lineHeight: 1.45,
                  fontWeight: 600,
                  marginBottom: '0.85rem',
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
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: idx === 0 ? '0.65rem' : '0'
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
                padding: '1.1rem 1.25rem',
                border: '1px solid var(--text-dark)',
                marginBottom: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', color: 'var(--terracotta)' }}>
                <GraduationCap size={16} />
                <span className="editorial-label" style={{ color: 'var(--terracotta)' }}>
                  ACADEMIC FOUNDATION
                </span>
              </div>

              <div
                className="font-ui"
                style={{
                  fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
                  fontWeight: 700,
                  color: 'var(--text-ivory)',
                  marginBottom: '0.2rem'
                }}
              >
                {PERSONAL_INFO.education.combinedDisplay}
              </div>

              <div className="font-mono" style={{ fontSize: '0.6875rem', color: 'var(--text-muted-dark)' }}>
                {PERSONAL_INFO.education.degree} · Pune, Maharashtra, India
              </div>
            </div>

            {/* ─────────── ANIMATED STATISTICS FLASHCARDS COMPOSITION ─────────── */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                  paddingBottom: '0.35rem',
                  borderBottom: '1px solid var(--line-light)'
                }}
              >
                <span className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.5625rem' }}>
                  DOCUMENTED ARCHIVE METRICS // CLICK TO JUMP
                </span>
                <span className="font-mono" style={{ fontSize: '0.5625rem', color: 'var(--terracotta)' }}>
                  VERIFIED DATA
                </span>
              </div>

              <div className="about-stats-grid">
                {STATS_CONFIG.map((stat, idx) => (
                  <StatCard
                    key={stat.code}
                    stat={stat}
                    onNavigateToSection={onNavigateToSection}
                    delay={idx * 80}
                  />
                ))}
              </div>
            </div>

            {/* CTAs & Social Links */}
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                <button
                  onClick={() => onNavigateToSection('projects')}
                  className="btn-editorial btn-primary-dark"
                  style={{ fontSize: '0.75rem', padding: '0.625rem 1.15rem' }}
                >
                  VIEW PROJECT ARCHIVE <ArrowDown size={14} />
                </button>
                <button
                  onClick={() => onNavigateToSection('contact')}
                  className="btn-editorial btn-outline-dark"
                  style={{ fontSize: '0.75rem', padding: '0.625rem 1.15rem' }}
                >
                  GET IN TOUCH <ArrowUpRight size={14} />
                </button>
                <button
                  onClick={onOpenResume}
                  className="btn-editorial btn-outline-dark"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', padding: '0.625rem 1.15rem' }}
                >
                  <FileText size={14} /> VIEW RESUME <ArrowUpRight size={13} />
                </button>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem' }}>
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
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--terracotta)' }}
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
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
        }

        .about-stat-card:hover {
          border-color: var(--terracotta) !important;
          background-color: #0E0C0C !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .about-stat-card:focus-visible {
          border-color: var(--terracotta) !important;
          box-shadow: 0 0 0 2px var(--terracotta);
        }

        @media (max-width: 1024px) {
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .hero-image-col {
            grid-column: span 12 !important;
            max-width: min(280px, 80vw);
            margin: 0 auto 1.5rem auto;
          }
          .hero-content-col {
            grid-column: span 12 !important;
          }
        }

        @media (max-width: 480px) {
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
          }
          .about-stat-card {
            padding: 0.75rem 0.65rem !important;
            min-height: 116px !important;
          }
        }
      `}</style>
    </section>
  );
}
