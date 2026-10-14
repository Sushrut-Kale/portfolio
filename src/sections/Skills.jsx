import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, Code2, Cpu, Globe, Compass, Layers, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Flatten curated skills for the reference flashcard rotation
const CURATED_FLASHCARD_SKILLS = SKILL_CATEGORIES.flatMap((cat) =>
  cat.skills.map((skill) => ({
    ...skill,
    categoryName: cat.name,
    categoryDomain: cat.domain
  }))
);

export default function Skills({ onNavigateToSection }) {
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
      className="editorial-section-view"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{
        backgroundColor: '#070505',
        color: 'var(--text-ivory)',
        position: 'relative',
        paddingTop: '86px',
        paddingBottom: '4rem',
        outline: 'none'
      }}
    >
      <div className="site-container" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(244, 236, 228, 0.15)',
            paddingBottom: '1.25rem',
            marginBottom: '2.5rem',
            gap: '1rem'
          }}
        >
          <div>
            <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.35rem' }}>
              SECTION 03 / TECHNICAL CAPABILITY
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 6.5vw, 6rem)',
                color: 'var(--text-ivory)',
                letterSpacing: '-0.02em',
                lineHeight: 0.9
              }}
            >
              SKILLS &amp; ARCHITECTURE
            </h2>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.2rem' }}>
              7 DOMAIN INVENTORIES + REFERENCE FLASHCARD
            </div>
            <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)' }}>
              ROTATING LIVE EVERY 3.2S · SELECT SKILL FOR EVIDENCE
            </div>
          </div>
        </div>

        {/* ─────────── ANIMATED REFERENCE FLASHCARD FEATURE ─────────── */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div
            className="editorial-label"
            style={{ color: 'var(--taupe)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Sparkles size={14} style={{ color: 'var(--terracotta)' }} />
            CONTINUOUS REFERENCE FLASHCARD (FEATURE CARD)
          </div>

          <div
            style={{
              backgroundColor: 'rgba(244, 236, 228, 0.03)',
              border: '1px solid rgba(244, 236, 228, 0.16)',
              padding: 'clamp(1.25rem, 3.5vw, 2.5rem)',
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
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(244, 236, 228, 0.1)',
                marginBottom: '1.5rem'
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <button
                  onClick={prevCard}
                  className="btn-editorial"
                  style={{
                    padding: '0.35rem',
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
                    padding: '0.35rem 0.65rem',
                    backgroundColor: isPaused ? 'var(--terracotta)' : 'rgba(244, 236, 228, 0.05)',
                    border: '1px solid',
                    borderColor: isPaused ? 'var(--terracotta)' : 'rgba(244, 236, 228, 0.15)',
                    color: '#fff',
                    fontSize: '0.6875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
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
                    padding: '0.35rem',
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

            {/* Flashcard Layout */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '1.75rem',
                alignItems: 'center'
              }}
            >
              <div style={{ gridColumn: 'span 8' }} className="flashcard-main-col">
                <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.35rem' }}>
                  DOMAIN CLASSIFICATION · {currentSkill.level}
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.85rem, 4.5vw, 4rem)',
                    color: 'var(--text-ivory)',
                    lineHeight: 0.95,
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {currentSkill.name}
                </h3>

                <p
                  className="font-ui"
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-muted-dark)',
                    lineHeight: 1.55,
                    maxWidth: '680px',
                    marginBottom: '1.25rem'
                  }}
                >
                  {currentSkill.desc}
                </p>

                {/* Related Projects Affordance */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="editorial-label" style={{ color: 'var(--taupe)', marginRight: '0.25rem' }}>
                    RELATED PRODUCTION CODE:
                  </span>
                  {currentSkill.projects.map((proj, pIdx) => (
                    <span
                      key={pIdx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.55rem',
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
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '160px'
                }}
                className="flashcard-spec-col"
              >
                <div>
                  <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.35rem' }}>
                    TECHNICAL ARCHITECTURE
                  </div>
                  <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-ivory)', marginBottom: '0.35rem' }}>
                    CATEGORY: {currentSkill.categoryName.toUpperCase()}
                  </div>
                  <div className="font-mono" style={{ fontSize: '0.6875rem', color: 'var(--text-muted-dark)' }}>
                    ARCHIVE: //src/modules/skills
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(244, 236, 228, 0.1)', paddingTop: '0.5rem', marginTop: '0.75rem' }}>
                  <div className="editorial-label" style={{ color: 'var(--terracotta)', fontSize: '0.5625rem' }}>
                    SHORTCUTS: ARROW KEYS ← / → / SPACE
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
              marginBottom: '1.25rem',
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
              gap: '0.4rem',
              marginBottom: '2rem'
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
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.6875rem',
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
                  padding: 'clamp(1.25rem, 2.5vw, 2rem)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid rgba(244, 236, 228, 0.08)',
                    marginBottom: '1.5rem',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <span className="editorial-label" style={{ color: 'var(--taupe)' }}>
                      DIVISION {activeCategoryIndex + 1} OF 7 &nbsp;·&nbsp;
                    </span>
                    <span className="font-heading" style={{ fontSize: '1.15rem', color: 'var(--text-ivory)', marginLeft: '0.5rem' }}>
                      {cat.name}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)', margin: 0, maxWidth: '520px' }}>
                    {cat.description}
                  </p>
                </div>

                {/* Skills Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                    gap: '1rem'
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
                          padding: '1.1rem',
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
                            marginBottom: '0.35rem'
                          }}
                        >
                          <span className="font-ui" style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-ivory)' }}>
                            {skill.name}
                          </span>
                          <span className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.5625rem' }}>
                            {skill.level}
                          </span>
                        </div>

                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)', lineHeight: 1.45, marginBottom: '0.65rem' }}>
                          {skill.desc}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                          {skill.projects.map((proj, pIdx) => (
                            <span
                              key={pIdx}
                              className="font-mono"
                              style={{
                                fontSize: '0.625rem',
                                padding: '0.12rem 0.4rem',
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

                {/* Evidence Callout */}
                {selectedInventorySkill && (
                  <div
                    style={{
                      marginTop: '1.5rem',
                      padding: '1rem 1.25rem',
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
                      <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.2rem' }}>
                        SELECTED SKILL EVIDENCE // {selectedInventorySkill.name}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-ivory)' }}>
                        Verified implementations: {selectedInventorySkill.projects.join(', ')}
                      </div>
                    </div>
                    <button
                      onClick={() => onNavigateToSection('projects')}
                      className="btn-editorial btn-terracotta"
                      style={{ fontSize: '0.6875rem', padding: '0.4rem 0.8rem' }}
                    >
                      EXPLORE IN PROJECT ARCHIVE ↗
                    </button>
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
          .flashcard-main-col, .flashcard-spec-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
