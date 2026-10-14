import React from 'react';
import { ArrowUpRight, FileText, Briefcase, Users, Code2, Gamepad2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience({ onOpenMedia }) {
  const getExperienceIcon = (id) => {
    if (id.includes('internship')) return <Briefcase size={18} />;
    if (id.includes('ecell')) return <Users size={18} />;
    if (id.includes('astra')) return <Code2 size={18} />;
    return <Gamepad2 size={18} />;
  };

  return (
    <section
      id="experience"
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
              SECTION 04 / CAREER &amp; LEADERSHIP
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
              EXPERIENCE &amp; ROLES
            </h2>
          </div>

          <div className="editorial-label" style={{ color: 'var(--taupe)' }}>
            EVIDENCE-BASED COLLEGIATE ENGAGEMENTS
          </div>
        </div>

        {/* Editorial Timeline Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              style={{
                border: '1px solid rgba(244, 236, 228, 0.12)',
                backgroundColor: 'rgba(244, 236, 228, 0.02)',
                padding: 'clamp(1.25rem, 3vw, 2.25rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '1.75rem',
                alignItems: 'start'
              }}
            >
              {/* Left Column: Organization, Role, Period */}
              <div style={{ gridColumn: 'span 5' }} className="exp-left-col">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    color: 'var(--terracotta)',
                    marginBottom: '0.75rem'
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
                    fontSize: 'clamp(1.2rem, 2vw, 1.65rem)',
                    color: 'var(--text-ivory)',
                    marginBottom: '0.35rem',
                    lineHeight: 1.2
                  }}
                >
                  {exp.organization}
                </h3>

                <div
                  className="font-ui"
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--dusty-blue)',
                    fontWeight: 600,
                    marginBottom: '0.35rem'
                  }}
                >
                  {exp.role}
                </div>

                <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--taupe)' }}>
                  {exp.period} · {exp.location}
                </div>

                {/* Verified Document Action if available */}
                {exp.verifiedDocument && (
                  <div style={{ marginTop: '1.25rem' }}>
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
                      style={{ fontSize: '0.6875rem', padding: '0.45rem 0.875rem' }}
                    >
                      <FileText size={13} /> VIEW INTERNSHIP CERTIFICATE ↗
                    </button>
                  </div>
                )}
              </div>

              {/* Right Column: Key Deliverables & Outcomes */}
              <div
                style={{
                  gridColumn: 'span 7',
                  borderLeft: '1px solid rgba(244, 236, 228, 0.1)',
                  paddingLeft: '1.75rem'
                }}
                className="exp-right-col"
              >
                <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.75rem' }}>
                  KEY RESPONSIBILITIES &amp; OUTCOMES
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {exp.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-muted-dark)',
                        lineHeight: 1.55,
                        position: 'relative',
                        paddingLeft: '1.1rem'
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '0.55em',
                          width: '4px',
                          height: '4px',
                          backgroundColor: 'var(--terracotta)'
                        }}
                      />
                      {item}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.25rem' }}>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.625rem',
                      letterSpacing: '0.1em',
                      padding: '0.2rem 0.5rem',
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
            padding-top: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
