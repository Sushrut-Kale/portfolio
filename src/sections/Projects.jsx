import React, { useState } from 'react';
import { ArrowRight, Filter, Search, Terminal, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'ALL',
    'AI/ML',
    'Full-Stack',
    '3D & Creative Tech',
    'Optimization',
    'Data Analytics',
    'Hardware & IoT'
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCat =
      activeCategory === 'ALL' ||
      project.category.toLowerCase().includes(activeCategory.toLowerCase());
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      !searchQuery ||
      project.title.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.shortDesc.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  return (
    <section
      id="projects"
      className="editorial-section-view"
      style={{
        backgroundColor: '#070505',
        color: 'var(--text-ivory)',
        position: 'relative',
        paddingTop: '86px',
        paddingBottom: '4rem'
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
              SECTION 02 / SELECTED ARCHIVE
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 6.5vw, 6rem)',
                color: 'var(--text-ivory)',
                letterSpacing: '-0.02em',
                lineHeight: 0.88
              }}
            >
              PROJECT ARCHIVE
            </h2>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.2rem' }}>
              EXACT 18 REPOSITORIES · UNIFORM ARCHITECTURAL PANELS
            </div>
            <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)' }}>
              01 SANCHAY AI → 18 INTELLIFORGE
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="btn-editorial"
                style={{
                  padding: '0.4rem 0.8rem',
                  fontSize: '0.6875rem',
                  backgroundColor: activeCategory === cat ? 'var(--terracotta)' : 'rgba(244, 236, 228, 0.04)',
                  color: activeCategory === cat ? '#fff' : 'var(--text-ivory)',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--terracotta)' : 'rgba(244, 236, 228, 0.12)',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Filter */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.75rem',
              backgroundColor: 'rgba(244, 236, 228, 0.04)',
              border: '1px solid rgba(244, 236, 228, 0.12)',
              minWidth: 'min(220px, 100%)',
              maxWidth: '100%'
            }}
          >
            <Search size={14} style={{ color: 'var(--taupe)' }} />
            <input
              type="text"
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-ivory)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-ui)',
                width: '100%'
              }}
            />
          </div>
        </div>

        {/* ─────────── STANDARDIZED TWO-COLUMN DESKTOP GRID ─────────── */}
        <div
          className="projects-standard-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.75rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="project-panel-uniform"
              data-cursor-label="VIEW"
              style={{
                backgroundColor: 'rgba(244, 236, 228, 0.02)',
                border: '1px solid rgba(244, 236, 228, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.3s var(--ease-editorial)',
                overflow: 'hidden',
                minHeight: '260px'
              }}
            >
              {/* Standard Architectural Header / Geometric Visual Identifier */}
              <div
                style={{
                  height: '90px',
                  backgroundColor: 'rgba(244, 236, 228, 0.03)',
                  borderBottom: '1px solid rgba(244, 236, 228, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem 1.5rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Visual identifier: Technical spec line */}
                <div style={{ zIndex: 1 }}>
                  <div className="editorial-label" style={{ color: project.accent || 'var(--terracotta)', marginBottom: '0.2rem' }}>
                    SPEC // {project.number} · {project.category.toUpperCase()}
                  </div>
                  <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)' }}>
                    {project.techStack.slice(0, 3).join(' · ')}
                  </div>
                </div>

                {/* Number Watermark */}
                <div
                  className="font-display"
                  style={{
                    fontSize: '4.5rem',
                    color: 'rgba(244, 236, 228, 0.05)',
                    lineHeight: 1,
                    userSelect: 'none',
                    letterSpacing: '-0.04em'
                  }}
                >
                  {project.number}
                </div>

                {/* Subtle corner tick mark */}
                <span style={{ position: 'absolute', top: 0, right: 0, width: '12px', height: '12px', borderTop: '2px solid var(--terracotta)', borderRight: '2px solid var(--terracotta)' }} />
              </div>

              {/* Standardized Card Body */}
              <div
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flex: 1
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--terracotta)', fontWeight: 700 }}>
                      REF {project.number}
                    </span>
                    <span className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.625rem' }}>
                      {project.status.toUpperCase()}
                    </span>
                  </div>

                  <h3
                    className="font-heading"
                    style={{
                      fontSize: '1.35rem',
                      color: 'var(--text-ivory)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.25,
                      marginBottom: '0.5rem'
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted-dark)',
                      lineHeight: 1.5,
                      margin: 0
                    }}
                  >
                    {project.shortDesc}
                  </p>
                </div>

                {/* View Details CTA Affordance */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(244, 236, 228, 0.08)',
                    marginTop: '1.25rem'
                  }}
                >
                  <span
                    className="editorial-label panel-view-cta"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--text-ivory)',
                      fontSize: '0.6875rem',
                      transition: 'color 0.25s ease'
                    }}
                  >
                    VIEW DETAILS <ArrowRight size={13} className="panel-cta-arrow" />
                  </span>

                  <span className="font-mono" style={{ fontSize: '0.6875rem', color: 'var(--taupe)' }}>
                    {project.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-panel-uniform:hover {
          border-color: var(--terracotta) !important;
          background-color: rgba(244, 236, 228, 0.04) !important;
          transform: translateY(-2px);
        }
        .project-panel-uniform:hover .panel-view-cta {
          color: var(--terracotta) !important;
        }
        .project-panel-uniform:hover .panel-cta-arrow {
          transform: translateX(3px);
          transition: transform 0.2s ease;
        }

        @media (max-width: 900px) {
          .projects-standard-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
