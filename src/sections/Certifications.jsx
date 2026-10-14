import React, { useState } from 'react';
import { Search, FileText, Image as ImageIcon, ArrowUpRight } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';

export default function Certifications({ onOpenMedia }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'ALL',
    'AI & Machine Learning',
    'Programming',
    'Data & Cloud',
    'Professional & Security'
  ];

  const filteredCertificates = CERTIFICATES.filter((cer) => {
    const matchesCat = activeCategory === 'ALL' || cer.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      !searchQuery ||
      cer.title.toLowerCase().includes(query) ||
      cer.issuer.toLowerCase().includes(query) ||
      cer.description.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  return (
    <section
      id="certifications"
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
              SECTION 06 / CERTIFIED PROFICIENCY
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
              CERTIFICATIONS ARCHIVE
            </h2>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.2rem' }}>
              CER/ DIRECTORY ONLY
            </div>
            <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)' }}>
              22 VERIFIED INDUSTRY CREDENTIALS
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
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
          {/* Category Pills */}
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

          {/* Search Input */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(244, 236, 228, 0.04)',
              border: '1px solid rgba(244, 236, 228, 0.12)',
              padding: '0.4rem 0.75rem',
              width: '100%',
              maxWidth: '280px'
            }}
          >
            <Search size={14} style={{ color: 'var(--taupe)' }} />
            <input
              type="text"
              placeholder="Search topic or issuer..."
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

        {/* Certificates Grid */}
        <div
          className="certificates-standard-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredCertificates.map((cer) => (
            <div
              key={cer.id}
              className="certificate-panel-uniform"
              data-cursor-label="INSPECT"
              style={{
                backgroundColor: 'rgba(244, 236, 228, 0.02)',
                border: '1px solid rgba(244, 236, 228, 0.1)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.25s ease, background-color 0.25s ease'
              }}
            >
              <div>
                {/* Meta Top: Format and Issuer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {cer.type === 'pdf' ? (
                      <span
                        className="editorial-label"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: 'var(--terracotta)',
                          fontSize: '0.625rem'
                        }}
                      >
                        <FileText size={12} /> PDF
                      </span>
                    ) : (
                      <span
                        className="editorial-label"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: 'var(--dusty-blue)',
                          fontSize: '0.625rem'
                        }}
                      >
                        <ImageIcon size={12} /> IMAGE
                      </span>
                    )}
                    <span style={{ color: 'var(--taupe)' }}>·</span>
                    <span className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.625rem' }}>
                      {cer.date}
                    </span>
                  </div>

                  <span
                    className="editorial-label"
                    style={{
                      fontSize: '0.625rem',
                      color: 'var(--taupe)'
                    }}
                  >
                    {cer.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-heading"
                  style={{
                    fontSize: '1.15rem',
                    color: 'var(--text-ivory)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.25,
                    marginBottom: '0.35rem'
                  }}
                >
                  {cer.title}
                </h3>

                {/* Issuer */}
                <div
                  className="font-ui"
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--terracotta)',
                    fontWeight: 600,
                    marginBottom: '0.75rem'
                  }}
                >
                  {cer.issuer}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted-dark)',
                    lineHeight: 1.5,
                    marginBottom: '1.25rem'
                  }}
                >
                  {cer.description}
                </p>
              </div>

              {/* Action Button: Opens modal */}
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
                      fileUrl: cer.file,
                      title: cer.title,
                      subtitle: `${cer.issuer} · Verified Document (${cer.date})`,
                      fileType: cer.type
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
                  VIEW CERTIFICATE <ArrowUpRight size={13} />
                </button>

                <a
                  href={cer.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-label"
                  style={{
                    color: 'var(--taupe)',
                    textDecoration: 'none',
                    fontSize: '0.625rem'
                  }}
                  title="Open raw file in new tab"
                >
                  NEW TAB ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .certificate-panel-uniform:hover {
          border-color: var(--terracotta) !important;
          background-color: rgba(244, 236, 228, 0.04) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
