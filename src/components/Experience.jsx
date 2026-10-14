import React from 'react';
import { ArrowUpRight, FileText, Briefcase, Users, Code2, Gamepad2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience({ onOpenMedia }) {
  const getExperienceIcon = (id) => {
    if (id.includes('internship')) return <Briefcase size={20} />;
    if (id.includes('ecell')) return <Users size={20} />;
    if (id.includes('astra')) return <Code2 size={20} />;
    return <Gamepad2 size={20} />;
  };

  return (
    <section
      id="experience"
      style={{
        padding: '7rem 0',
        backgroundColor: '#070505',
        color: 'var(--text-ivory)',
        borderBottom: '1px solid rgba(244, 236, 228, 0.12)',
        position: 'relative'
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
            marginBottom: '4rem',
            gap: '1rem'
          }}
        >
          <div>
            <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.5rem' }}>
              SECTION 04 / CAREER & LEADERSHIP
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
              EXPERIENCE & ROLES
            </h2>
          </div>

          <div className="editorial-label" style={{ color: 'var(--taupe)' }}>
            CHRONOLOGICAL ENGAGEMENTS
          </div>
        </div>

        {/* Editorial Timeline Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              style={{
                border: '1px solid rgba(244, 236, 228, 0.12)',
                backgroundColor: 'rgba(244, 236, 228, 0.02)',
                padding: 'clamp(1.5rem, 3.5vw, 3rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '2rem',
                alignItems: 'start'
              }}
            >
              {/* Left Column: Organization, Role, Period */}
              <div style={{ gridColumn: 'span 5' }} className="exp-left-col">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'var(--terracotta)',
                    marginBottom: '1rem'
                  }}
                >
                  {getExperienceIcon(exp.id)}
                  <span className="editorial-label" style={{ color: 'var(--terracotta)' }}>
                    {exp.type}
                  </span>
                </div>

                <h3
                  className="font-heading"
                  style={{
                    fontSize: 'clamp(1.3rem, 2.2vw, 1.85rem)',
                    color: 'var(--text-ivory)',
                    marginBottom: '0.5rem'
                  }}
                >
                  {exp.organization}
                </h3>

                <div
                  className="font-ui"
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--dusty-blue)',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}
                >
                  {exp.role}
                </div>

                <div className="font-mono" style={{ fontSize: '0.8125rem', color: 'var(--taupe)' }}>
                  {exp.period} · {exp.location}
                </div>

                {/* Verified Document Button if available */}
                {exp.verifiedDocument && (
                  <div style={{ marginTop: '1.75rem' }}>
                    <button
                      onClick={() =>
                        onOpenMedia({
                          fileUrl: exp.verifiedDocument,
                          title: `${exp.organization} — ${exp.role}`,
                          subtitle: 'Verified Internship Completion Certificate',
                          fileType: 'pdf'
                        })
                      }
                      className="btn-editorial btn-terracotta"
                      style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}
                    >
                      <FileText size={14} /> VIEW INTERNSHIP CERTIFICATE
                    </button>
                  </div>
                )}
              </div>

              {/* Right Column: Key Deliverables & Outcomes */}
              <div
                style={{
                  gridColumn: 'span 7',
                  borderLeft: '1px solid rgba(244, 236, 228, 0.1)',
                  paddingLeft: '2rem'
                }}
                className="exp-right-col"
              >
                <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '1rem' }}>
                  KEY RESPONSIBILITIES & OUTCOMES
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {exp.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      style={{
                        fontSize: '0.9375rem',
                        color: 'var(--text-muted-dark)',
                        lineHeight: 1.6,
                        position: 'relative',
                        paddingLeft: '1.25rem'
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '0.6em',
                          width: '5px',
                          height: '5px',
                          backgroundColor: 'var(--terracotta)'
                        }}
                      />
                      {item}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.1em',
                      padding: '0.25rem 0.625rem',
                      backgroundColor: 'rgba(244, 236, 228, 0.05)',
                      color: 'var(--text-ivory)',
                      border: '1px solid rgba(244, 236, 228, 0.1)'
                    }}
                  >
                    {exp.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .exp-left-col {
            grid-column: span 12 !important;
          }
          .exp-right-col {
            grid-column: span 12 !important;
            border-left: none !important;
            border-top: 1px solid rgba(244, 236, 228, 0.1) !important;
            padding-left: 0 !important;
            padding-top: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
