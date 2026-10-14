import React, { useState } from 'react';
import { Trophy, Award, Calendar, FileText, Image as ImageIcon, ArrowUpRight, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { EVENTS_DATA } from '../data/portfolioData';

export default function Events({ onOpenMedia }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'Award & Hackathon', 'National Hackathon', 'Hackathon', 'Game Jam', 'Technical Forum'];

  const filteredEvents = EVENTS_DATA.filter((ev) => {
    if (activeCategory === 'ALL') return true;
    return ev.category === activeCategory;
  });

  return (
    <section
      id="events"
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
            alignItems: 'baseline',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(244, 236, 228, 0.15)',
            paddingBottom: '1.5rem',
            marginBottom: '3rem',
            gap: '1rem'
          }}
        >
          <div>
            <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.5rem' }}>
              SECTION 05 / COMPETITIVE &amp; EVENT RECORD
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
              EVENTS &amp; HACKATHONS
            </h2>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.25rem' }}>
              EVENTS/ ASSETS ONLY
            </div>
            <div className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)' }}>
              VERIFIED AWARDS &amp; NATIONAL PARTICIPATION
            </div>
          </div>
        </div>

        {/* ─────────── ITEM 01: HBTM DOCUMENTED ACHIEVEMENT FIRST ─────────── */}
        {(() => {
          const hbtm = EVENTS_DATA[0]; // HBTM is strictly the first item
          return (
            <div
              style={{
                backgroundColor: 'rgba(244, 236, 228, 0.03)',
                border: '1px solid var(--terracotta)',
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                marginBottom: '4rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: '2.5rem',
                  alignItems: 'center'
                }}
              >
                {/* Visual Preview */}
                <div style={{ gridColumn: 'span 5' }} className="hbtm-img-col">
                  <div
                    style={{
                      border: '1px solid rgba(244, 236, 228, 0.2)',
                      padding: '8px',
                      backgroundColor: '#000',
                      cursor: 'pointer'
                    }}
                    onClick={() =>
                      onOpenMedia({
                        fileUrl: hbtm.file,
                        title: hbtm.title,
                        subtitle: `${hbtm.organizer} · ${hbtm.statusBadge}`,
                        fileType: hbtm.fileType
                      })
                    }
                  >
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                      <img
                        src={hbtm.file}
                        alt="HBTM Certificate of Excellence"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundColor: 'rgba(7, 5, 5, 0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.25s ease'
                        }}
                        className="hbtm-overlay"
                      >
                        <span className="btn-editorial btn-primary-dark" style={{ fontSize: '0.6875rem' }}>
                          CLICK TO EXPAND PROOF ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div style={{ gridColumn: 'span 7' }} className="hbtm-text-col">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <span
                      style={{
                        backgroundColor: 'var(--terracotta)',
                        color: '#fff',
                        padding: '0.25rem 0.625rem',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em'
                      }}
                      className="font-mono"
                    >
                      TOP HONORS // 01
                    </span>
                    <span className="editorial-label" style={{ color: 'var(--taupe)' }}>
                      IIIT PUNE &amp; IEEE MAHARASHTRA SECTION
                    </span>
                  </div>

                  <h3
                    className="font-display"
                    style={{
                      fontSize: 'clamp(1.85rem, 4vw, 3.2rem)',
                      color: 'var(--text-ivory)',
                      letterSpacing: '-0.01em',
                      lineHeight: 1,
                      marginBottom: '0.75rem'
                    }}
                  >
                    HACK BETTER THAN ME (HBTM)
                  </h3>

                  <div
                    className="font-ui"
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'var(--terracotta)',
                      marginBottom: '1rem'
                    }}
                  >
                    First Runner-up (2nd Place) · 24-Hour National Hackathon
                  </div>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted-dark)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Theme: <em>"Agentic AI for Human Potential"</em>. Certificate of Excellence awarded to Sushrut Kale and team Hackverse by Dr. Nagendra Kushwaha (Registrar, IIIT Pune) and Shannon J Teamer (CEO, IABTM). Recognized for outstanding technical excellence in AI-driven human-centered solutions.
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                    <button
                      onClick={() =>
                        onOpenMedia({
                          fileUrl: hbtm.file,
                          title: hbtm.title,
                          subtitle: `${hbtm.organizer} · ${hbtm.statusBadge}`,
                          fileType: hbtm.fileType
                        })
                      }
                      className="btn-editorial btn-terracotta"
                      style={{ fontSize: '0.75rem', padding: '0.625rem 1.25rem' }}
                    >
                      <FileText size={15} /> VIEW VERIFIED CERTIFICATE (IIITP/HBTM/W2/004) ↗
                    </button>

                    <button
                      onClick={() =>
                        onOpenMedia({
                          fileUrl: hbtm.secondaryFile,
                          title: 'HBTM Presentation & Architecture',
                          subtitle: 'Academic defense and system presentation',
                          fileType: 'image'
                        })
                      }
                      className="btn-editorial btn-outline-ivory"
                      style={{ fontSize: '0.75rem', padding: '0.625rem 1.25rem' }}
                    >
                      <ImageIcon size={15} /> VIEW EVENT PRESENTATION SLIDE ↗
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ─────────── CATEGORY FILTER PILLS ─────────── */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="btn-editorial"
              style={{
                padding: '0.45rem 0.875rem',
                fontSize: '0.6875rem',
                backgroundColor: activeCategory === cat ? 'var(--terracotta)' : 'rgba(244, 236, 228, 0.04)',
                borderColor: activeCategory === cat ? 'var(--terracotta)' : 'rgba(244, 236, 228, 0.12)',
                color: activeCategory === cat ? '#fff' : 'var(--text-ivory)',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ─────────── COMPACT EVENT GRID ─────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredEvents.map((item, index) => (
            <div
              key={item.id}
              style={{
                backgroundColor: 'rgba(244, 236, 228, 0.02)',
                border: '1px solid rgba(244, 236, 228, 0.12)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.25s ease, background-color 0.25s ease'
              }}
              className="event-card-item"
            >
              <div>
                {/* Meta Top: Status + Year */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem'
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.6875rem',
                      padding: '0.2rem 0.5rem',
                      backgroundColor: item.isTopAward ? 'rgba(172, 64, 51, 0.2)' : 'rgba(244, 236, 228, 0.06)',
                      color: item.isTopAward ? 'var(--terracotta)' : 'var(--text-ivory)',
                      border: '1px solid',
                      borderColor: item.isTopAward ? 'var(--terracotta)' : 'rgba(244, 236, 228, 0.15)',
                      fontWeight: 700
                    }}
                  >
                    {item.statusBadge}
                  </span>

                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--taupe)' }}>
                    {item.year}
                  </span>
                </div>

                {/* Event Name */}
                <h3
                  className="font-heading"
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-ivory)',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.35rem',
                    lineHeight: 1.2
                  }}
                >
                  {item.title}
                </h3>

                <div className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.625rem', marginBottom: '0.75rem' }}>
                  {item.organizer}
                </div>

                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {item.summary}
                </p>
              </div>

              {/* Action */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(244, 236, 228, 0.08)'
                }}
              >
                <button
                  onClick={() =>
                    onOpenMedia({
                      fileUrl: item.file,
                      title: item.title,
                      subtitle: `${item.organizer} · ${item.statusBadge}`,
                      fileType: item.fileType
                    })
                  }
                  className="editorial-link editorial-label"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: 'var(--text-ivory)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.6875rem'
                  }}
                >
                  VIEW EVENT DETAILS &amp; PROOF <ArrowUpRight size={13} />
                </button>

                <span className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.625rem' }}>
                  {item.fileType.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hbtm-img-col:hover .hbtm-overlay {
          opacity: 1 !important;
        }
        .event-card-item:hover {
          border-color: var(--terracotta) !important;
          background-color: rgba(244, 236, 228, 0.04) !important;
        }
        @media (max-width: 900px) {
          .hbtm-img-col, .hbtm-text-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
