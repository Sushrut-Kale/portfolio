import React, { useState } from 'react';
import { Award, ArrowUpRight, Search, FileText, Image as ImageIcon } from 'lucide-react';
import { EVENTS_DATA } from '../data/portfolioData';

export default function Events({ onOpenMedia }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'ALL',
    'National Hackathon',
    'Competitive Tech Sprint',
    'Hackathon Sprint',
    'National Game Jam',
    'Technical Forum'
  ];

  const filteredEvents = EVENTS_DATA.filter((item) => {
    const matchesCat =
      activeCategory === 'ALL' ||
      item.category.toLowerCase().includes(activeCategory.toLowerCase());
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      !searchQuery ||
      item.title.toLowerCase().includes(query) ||
      item.organizer.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  return (
    <section
      id="events"
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
              SECTION 05 / COMPETITIVE &amp; EVENT RECORD
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
              EVENTS &amp; HACKATHONS
            </h2>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.2rem' }}>
              EVENTS/ ASSETS ONLY · UNIFORM CARDS
            </div>
            <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)' }}>
              01 HBTM (FIRST RUNNER-UP) → 02 FUND ARCADE (WINNER)
            </div>
          </div>
        </div>

        {/* Filters and Search */}
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
          {/* Categories */}
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
                  borderColor: activeCategory === cat ? 'var(--terracotta)' : 'rgba(244, 236, 228, 0.12)',
                  color: activeCategory === cat ? '#fff' : 'var(--text-ivory)',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.75rem',
              backgroundColor: 'rgba(244, 236, 228, 0.04)',
              border: '1px solid rgba(244, 236, 228, 0.12)',
              minWidth: '220px'
            }}
          >
            <Search size={14} style={{ color: 'var(--taupe)' }} />
            <input
              type="text"
              placeholder="Search event or organizer..."
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

        {/* ─────────── UNIFORM EDITORIAL EVENT CARDS GRID ─────────── */}
        <div
          className="events-standard-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredEvents.map((item) => (
            <div
              key={item.id}
              className="event-panel-uniform"
              data-cursor-label="INSPECT"
              style={{
                backgroundColor: 'rgba(244, 236, 228, 0.02)',
                border: '1px solid rgba(244, 236, 228, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.5rem',
                position: 'relative',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                {/* Meta Top: Number + Badge + Year */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--terracotta)', fontWeight: 700 }}>
                      {item.number}
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.6875rem',
                        padding: '0.2rem 0.5rem',
                        backgroundColor: item.statusBadge.includes('Winner') || item.statusBadge.includes('Runner-up')
                          ? 'rgba(172, 64, 51, 0.2)'
                          : 'rgba(244, 236, 228, 0.06)',
                        color: item.statusBadge.includes('Winner') || item.statusBadge.includes('Runner-up')
                          ? 'var(--terracotta)'
                          : 'var(--text-ivory)',
                        border: '1px solid',
                        borderColor: item.statusBadge.includes('Winner') || item.statusBadge.includes('Runner-up')
                          ? 'var(--terracotta)'
                          : 'rgba(244, 236, 228, 0.12)',
                        fontWeight: 600
                      }}
                    >
                      {item.statusBadge}
                    </span>
                  </div>

                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--taupe)' }}>
                    {item.year || item.date}
                  </span>
                </div>

                {/* Event Name */}
                <h3
                  className="font-heading"
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-ivory)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.25,
                    marginBottom: '0.35rem'
                  }}
                >
                  {item.title}
                </h3>

                {/* Organizer */}
                <div className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.625rem', marginBottom: '0.75rem' }}>
                  {item.organizer}
                </div>

                {/* Concise Summary */}
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {item.summary}
                </p>
              </div>

              {/* Action Button: Opens verified document */}
              <div
                style={{
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(244, 236, 228, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
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

                {item.secondaryFile && (
                  <button
                    onClick={() =>
                      onOpenMedia({
                        fileUrl: item.secondaryFile,
                        title: `${item.title} — Event Slide`,
                        subtitle: `${item.organizer} · Academic Defense`,
                        fileType: 'image'
                      })
                    }
                    className="editorial-label"
                    style={{
                      color: 'var(--taupe)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.625rem'
                    }}
                    title="View secondary event slide"
                  >
                    SLIDE ↗
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .event-panel-uniform:hover {
          border-color: var(--terracotta) !important;
          background-color: rgba(244, 236, 228, 0.04) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
