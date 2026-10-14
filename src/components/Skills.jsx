import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, ArrowUpRight, Sparkles, Code2, Cpu, Globe, Database, Compass, Layers, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Flatten curated skills for the reference flashcard rotation
const CURATED_FLASHCARD_SKILLS = SKILL_CATEGORIES.flatMap((cat) =>
  cat.skills.map((skill) => ({
    ...skill,
    categoryName: cat.name,
    categoryDomain: cat.domain
  }))
);

export default function Skills({ onSelectProjectById }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedInventorySkill, setSelectedInventorySkill] = useState(null);
  const timerRef = useRef(null);

  const currentSkill = CURATED_FLASHCARD_SKILLS[currentIndex];

  const nextCard = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CURATED_FLASHCARD_SKILLS.length);
  }, []);

  const prevCard = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + CURATED_FLASHCARD_SKILLS.length) % CURATED_FLASHCARD_SKILLS.length);
  }, []);

  // Auto-advance rotation every 3.2 seconds
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(nextCard, 3200);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextCard]);

  // Keyboard navigation for flashcard
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft') prevCard();
    if (e.key === ' ') {
      e.preventDefault();
      setIsPaused((p) => !p);
    }
  };

  const getDomainIcon = (domain) => {
    switch (domain) {
      case 'Core Engineering': return <Code2 size={16} />;
      case 'Machine Learning': return <Cpu size={16} />;
      case 'Web & API Systems': return <Globe size={16} />;
      case 'Analytics & Graphics': return <Compass size={16} />;
      case 'Interactive Mechanics': return <Layers size={16} />;
      case 'Real-Time 3D': return <Sparkles size={16} />;
      default: return <Wrench size={16} />;
    }
  };

  return (
    <section
      id="skills"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{
        padding: '6rem 0',
        backgroundColor: '#070505',
        color: 'var(--text-ivory)',
        position: 'relative',
        borderBottom: '1px solid rgba(244, 236, 228, 0.12)',
        outline: 'none'
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(244, 236, 228, 0.15)',
            paddingBottom: '1.5rem',
            marginBottom: '3.5rem',
            gap: '1rem'
          }}
        >
          <div>
            <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.5rem' }}>
              SECTION 03 / TECHNICAL CAPABILITY
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                color: 'var(--text-ivory)',
                letterSpacing: '-0.02em',
                lineHeight: 0.9
              }}
            >
              SKILLS &amp; ARCHITECTURE
            </h2>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.25rem' }}>
              7 DOMAIN INVENTORIES + INTERACTIVE REFERENCE CARD
            </div>
            <div className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)' }}>
              ROTATING LIVE EVERY 3.2S · SELECT SKILL FOR MAPPED WORK
            </div>
          </div>
        </div>

        {/* ─────────── ANIMATED REFERENCE FLASHCARD FEATURE ─────────── */}
        <div style={{ marginBottom: '5rem' }}>
          <div
            className="editorial-label"
            style={{ color: 'var(--taupe)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Sparkles size={14} style={{ color: 'var(--terracotta)' }} />
            CONTINUOUS REFERENCE FLASHCARD (FEATURE CARD)
          </div>

          <div
            style={{
              backgroundColor: 'rgba(244, 236, 228, 0.03)',
              border: '1px solid rgba(244, 236, 228, 0.16)',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Top Bar inside card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid rgba(244, 236, 228, 0.1)',
                marginBottom: '2rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--terracotta)' }}>{getDomainIcon(currentSkill.categoryDomain)}</span>
                <span className="editorial-label" style={{ color: 'var(--terracotta)' }}>
                  {currentSkill.categoryName}
                </span>
                <span style={{ color: 'var(--taupe)' }}>/</span>
                <span className="editorial-label" style={{ color: 'var(--taupe)' }}>
                  {currentSkill.categoryDomain}
                </span>
              </div>

              {/* Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={prevCard}
                  className="btn-editorial"
                  style={{
                    padding: '0.4rem',
                    backgroundColor: 'rgba(244, 236, 228, 0.05)',
                    border: '1px solid rgba(244, 236, 228, 0.15)',
                    color: 'var(--text-ivory)',
                    cursor: 'pointer'
                  }}
                  aria-label="Previous skill"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  onClick={() => setIsPaused((p) => !p)}
                  className="btn-editorial"
                  style={{
                    padding: '0.4rem 0.75rem',
                    backgroundColor: isPaused ? 'var(--terracotta)' : 'rgba(244, 236, 228, 0.05)',
                    border: '1px solid',
                    borderColor: isPaused ? 'var(--terracotta)' : 'rgba(244, 236, 228, 0.15)',
                    color: '#fff',
                    fontSize: '0.6875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    cursor: 'pointer'
                  }}
                  aria-label={isPaused ? 'Resume auto-rotation' : 'Pause auto-rotation'}
                >
                  {isPaused ? <Play size={12} /> : <Pause size={12} />}
                  <span>{isPaused ? 'RESUME' : 'PAUSE'}</span>
                </button>

                <button
                  onClick={nextCard}
                  className="btn-editorial"
                  style={{
                    padding: '0.4rem',
                    backgroundColor: 'rgba(244, 236, 228, 0.05)',
                    border: '1px solid rgba(244, 236, 228, 0.15)',
                    color: 'var(--text-ivory)',
                    cursor: 'pointer'
                  }}
                  aria-label="Next skill"
                >
                  <ChevronRight size={16} />
                </button>

                <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--taupe)', marginLeft: '0.5rem' }}>
                  {currentIndex + 1} / {CURATED_FLASHCARD_SKILLS.length}
                </span>
              </div>
            </div>

            {/* Flashcard Hero Layout */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              <div style={{ gridColumn: 'span 8' }} className="flashcard-main-col">
                <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.5rem' }}>
                  PROFICIENCY LEVEL · {currentSkill.level}
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                    color: 'var(--text-ivory)',
                    lineHeight: 0.95,
                    marginBottom: '1rem',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {currentSkill.name}
                </h3>

                <p
                  className="font-ui"
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--text-muted-dark)',
                    lineHeight: 1.6,
                    maxWidth: '680px',
                    marginBottom: '1.5rem'
                  }}
                >
                  {currentSkill.desc}
                </p>

                {/* Related Projects Affordance */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.625rem' }}>
                  <span className="editorial-label" style={{ color: 'var(--taupe)', marginRight: '0.25rem' }}>
                    RELATED PRODUCTION CODE:
                  </span>
                  {currentSkill.projects.map((proj, pIdx) => (
                    <span
                      key={pIdx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.625rem',
                        backgroundColor: 'rgba(172, 64, 51, 0.15)',
                        border: '1px solid rgba(172, 64, 51, 0.35)',
                        color: 'var(--text-ivory)'
                      }}
                      className="font-mono"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>

              {/* Graphic Spec Panel */}
              <div
                style={{
                  gridColumn: 'span 4',
                  backgroundColor: 'rgba(7, 5, 5, 0.8)',
                  border: '1px solid rgba(244, 236, 228, 0.1)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '180px'
                }}
                className="flashcard-spec-col"
              >
                <div>
                  <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.5rem' }}>
                    TECHNICAL SIGNATURE
                  </div>
                  <div className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--text-ivory)', marginBottom: '0.5rem' }}>
                    DOMAIN: {currentSkill.categoryDomain.toUpperCase()}
                  </div>
                  <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)' }}>
                    ARCHIVE: S:\portfolio\src
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(244, 236, 228, 0.1)', paddingTop: '0.75rem', marginTop: '1rem' }}>
                  <div className="editorial-label" style={{ color: 'var(--terracotta)', fontSize: '0.625rem' }}>
                    KEYBOARD SHORTCUTS: ARROW KEYS ← / → / SPACE
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '3px',
                backgroundColor: 'rgba(244, 236, 228, 0.08)'
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${((currentIndex + 1) / CURATED_FLASHCARD_SKILLS.length) * 100}%`,
                  backgroundColor: 'var(--terracotta)',
                  transition: 'width 0.35s ease'
                }}
              />
            </div>
          </div>
        </div>

        {/* ─────────── DOMAIN-BASED CATEGORIZED SKILL INVENTORY ─────────── */}
        <div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              marginBottom: '1.75rem',
              gap: '1rem'
            }}
          >
            <div className="editorial-label" style={{ color: 'var(--terracotta)' }}>
              DOMAIN-BASED SKILL INVENTORY
            </div>
            <div className="editorial-label" style={{ color: 'var(--taupe)' }}>
              7 SPECIALIZED DIVISIONS
            </div>
          </div>

          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '2.5rem'
            }}
          >
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategoryIndex(idx);
                  setSelectedInventorySkill(null);
                }}
                className="btn-editorial"
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.75rem',
                  backgroundColor: activeCategoryIndex === idx ? 'var(--terracotta)' : 'rgba(244, 236, 228, 0.04)',
                  borderColor: activeCategoryIndex === idx ? 'var(--terracotta)' : 'rgba(244, 236, 228, 0.12)',
                  color: activeCategoryIndex === idx ? '#fff' : 'var(--text-ivory)',
                  cursor: 'pointer'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          {(() => {
            const cat = SKILL_CATEGORIES[activeCategoryIndex];
            return (
              <div
                style={{
                  backgroundColor: 'rgba(244, 236, 228, 0.02)',
                  border: '1px solid rgba(244, 236, 228, 0.12)',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)'
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
                    marginBottom: '1.75rem',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <span className="editorial-label" style={{ color: 'var(--taupe)' }}>
                      DIVISION {activeCategoryIndex + 1} OF 7 &nbsp;·&nbsp;
                    </span>
                    <span className="font-heading" style={{ fontSize: '1.25rem', color: 'var(--text-ivory)', marginLeft: '0.5rem' }}>
                      {cat.name}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted-dark)', margin: 0, maxWidth: '520px' }}>
                    {cat.description}
                  </p>
                </div>

                {/* Skills Grid for this Category */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.25rem'
                  }}
                >
                  {cat.skills.map((skill, sIdx) => {
                    const isSelected = selectedInventorySkill?.name === skill.name;
                    return (
                      <div
                        key={sIdx}
                        onClick={() => setSelectedInventorySkill(isSelected ? null : skill)}
                        style={{
                          backgroundColor: isSelected ? 'rgba(172, 64, 51, 0.15)' : 'rgba(244, 236, 228, 0.02)',
                          border: '1px solid',
                          borderColor: isSelected ? 'var(--terracotta)' : 'rgba(244, 236, 228, 0.08)',
                          padding: '1.25rem',
                          cursor: 'pointer',
                          transition: 'all 0.25s ease'
                        }}
                        className="skill-inventory-item"
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '0.5rem'
                          }}
                        >
                          <span className="font-ui" style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-ivory)' }}>
                            {skill.name}
                          </span>
                          <span className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.625rem' }}>
                            {skill.level}
                          </span>
                        </div>

                        <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)', lineHeight: 1.45, marginBottom: '0.75rem' }}>
                          {skill.desc}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                          {skill.projects.map((proj, pIdx) => (
                            <span
                              key={pIdx}
                              className="font-mono"
                              style={{
                                fontSize: '0.6875rem',
                                padding: '0.15rem 0.45rem',
                                backgroundColor: 'rgba(244, 236, 228, 0.04)',
                                color: 'var(--text-ivory)',
                                border: '1px solid rgba(244, 236, 228, 0.1)'
                              }}
                            >
                              {proj}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Selected skill evidence callout */}
                {selectedInventorySkill && (
                  <div
                    style={{
                      marginTop: '2rem',
                      padding: '1.25rem 1.5rem',
                      backgroundColor: 'rgba(172, 64, 51, 0.1)',
                      border: '1px solid var(--terracotta)',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem'
                    }}
                  >
                    <div>
                      <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.25rem' }}>
                        SELECTED SKILL EVIDENCE // {selectedInventorySkill.name}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-ivory)' }}>
                        Implemented across: {selectedInventorySkill.projects.join(', ')}
                      </div>
                    </div>
                    <a
                      href="#projects"
                      className="btn-editorial btn-terracotta"
                      style={{ fontSize: '0.6875rem', padding: '0.45rem 0.875rem' }}
                    >
                      EXPLORE REPOSITORIES IN ARCHIVE ↗
                    </a>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </div>

      <style>{`
        .skill-inventory-item:hover {
          border-color: rgba(244, 236, 228, 0.25) !important;
          background-color: rgba(244, 236, 228, 0.05) !important;
        }
        @media (max-width: 900px) {
          .flashcard-main-col {
            grid-column: span 12 !important;
          }
          .flashcard-spec-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
