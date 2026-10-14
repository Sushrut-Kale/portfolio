import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Filter, Search, Terminal, Cpu, Globe, Box, Sparkles } from 'lucide-react';
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

  // Visual thumbnail generator for projects without external images
  const renderThumbnail = (project) => {
    if (project.previewImage) {
      return (
        <div
          style={{
            width: '100%',
            height: '180px',
            backgroundColor: '#070505',
            overflow: 'hidden',
            position: 'relative',
            borderBottom: '1px solid rgba(244, 236, 228, 0.1)'
          }}
        >
          <img
            src={project.previewImage}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s var(--ease-editorial)'
            }}
            className="project-panel-img"
          />
        </div>
      );
    }

    // High-end minimalist architectural graphic
    return (
      <div
        style={{
          width: '100%',
          height: '140px',
          backgroundColor: 'rgba(244, 236, 228, 0.02)',
          borderBottom: '1px solid rgba(244, 236, 228, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.5rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ zIndex: 1 }}>
          <div className="editorial-label" style={{ color: project.accent || 'var(--terracotta)', marginBottom: '0.25rem' }}>
            ARCHITECTURAL SPEC // {project.number}
          </div>
          <div className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)' }}>
            STACK: {project.techStack.slice(0, 3).join(' · ')}
          </div>
        </div>

        <div
          className="font-display"
          style={{
            fontSize: '5rem',
            color: 'rgba(244, 236, 228, 0.04)',
            lineHeight: 1,
            userSelect: 'none',
            letterSpacing: '-0.05em'
          }}
        >
          {project.number}
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      style={{
        padding: '6rem 0',
        backgroundColor: '#070505',
        color: 'var(--text-ivory)',
        position: 'relative',
        borderBottom: '1px solid rgba(244, 236, 228, 0.12)'
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(244, 236, 228, 0.15)',
            paddingBottom: '1.5rem',
            marginBottom: '3rem',
            gap: '1.5rem'
          }}
        >
          <div>
            <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.5rem' }}>
              SECTION 02 / SELECTED ARCHIVE
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.75rem, 7vw, 6.5rem)',
                color: 'var(--text-ivory)',
                letterSpacing: '-0.02em',
                lineHeight: 0.88
              }}
            >
              PROJECT ARCHIVE
            </h2>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.25rem' }}>
              EXACT 18 PRODUCTION REPOSITORIES
            </div>
            <div className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)' }}>
              SANCHAY AI → INTELLIFORGE (VERIFIED SEQUENCE)
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
            gap: '1.25rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Categories */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="btn-editorial"
                style={{
                  padding: '0.45rem 0.875rem',
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

          {/* Quick search */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 0.875rem',
              backgroundColor: 'rgba(244, 236, 228, 0.04)',
              border: '1px solid rgba(244, 236, 228, 0.12)',
              minWidth: '220px'
            }}
          >
            <Search size={14} style={{ color: 'var(--taupe)' }} />
            <input
              type="text"
              placeholder="Filter by title..."
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

        {/* Two-Column Desktop Grid Presentation (1-column on mobile) */}
        <div
          className="projects-two-column-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="project-editorial-card"
              data-cursor-label="VIEW"
              style={{
                backgroundColor: 'rgba(244, 236, 228, 0.02)',
                border: '1px solid rgba(244, 236, 228, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.35s var(--ease-editorial)',
                overflow: 'hidden'
              }}
            >
              {/* Visual Preview / Thumbnail */}
              {renderThumbnail(project)}

              {/* Minimalist Card Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  {/* Top Meta: Number + Category */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--terracotta)',
                        fontWeight: 700,
                        letterSpacing: '0.1em'
                      }}
                    >
                      {project.number}
                    </span>
                    <span
                      className="editorial-label"
                      style={{
                        color: 'var(--taupe)',
                        fontSize: '0.625rem'
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: 'clamp(1.25rem, 1.8vw, 1.6rem)',
                      color: 'var(--text-ivory)',
                      letterSpacing: '-0.02em',
                      marginBottom: '0.5rem',
                      lineHeight: 1.2
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Concise One-Line Description */}
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted-dark)',
                      lineHeight: 1.5,
                      marginBottom: '0'
                    }}
                  >
                    {project.shortDesc}
                  </p>
                </div>

                {/* Small View Details Affordance */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(244, 236, 228, 0.08)',
                    marginTop: '0.75rem'
                  }}
                >
                  <span
                    className="editorial-label view-details-cta"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--text-ivory)',
                      fontSize: '0.6875rem',
                      transition: 'color 0.25s ease'
                    }}
                  >
                    VIEW DETAILS <ArrowRight size={13} className="cta-arrow" />
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
        .project-editorial-card:hover {
          border-color: var(--terracotta) !important;
          background-color: rgba(244, 236, 228, 0.04) !important;
          transform: translateY(-3px);
        }
        .project-editorial-card:hover .project-panel-img {
          transform: scale(1.05);
        }
        .project-editorial-card:hover .view-details-cta {
          color: var(--terracotta) !important;
        }
        .project-editorial-card:hover .cta-arrow {
          transform: translateX(4px);
          transition: transform 0.25s ease;
        }

        @media (max-width: 900px) {
          .projects-two-column-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
