import React, { useState } from 'react';
import { FileText, Download, ExternalLink, GraduationCap, Briefcase, Code2, Trophy, Eye, CheckCircle2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Resume({ onOpenMedia }) {
  const [embedFailed, setEmbedFailed] = useState(false);
  const resumeUrl = PERSONAL_INFO.resumePdf || './resume/Sushrut_Kale_Resume.pdf';
  const resumeFilename = PERSONAL_INFO.resumeFilename || 'Sushrut_Kale_Resume.pdf';

  return (
    <section
      id="resume"
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
              SECTION 07 / CURRICULUM VITAE
            </div>
            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 6.5vw, 6rem)',
                color: 'var(--text-ivory)',
                letterSpacing: '-0.02em',
                lineHeight: 0.9,
                margin: 0
              }}
            >
              RESUME
            </h1>
          </div>

          <div className="editorial-label" style={{ color: 'var(--taupe)' }}>
            OFFICIAL VERIFIED RECORD · MITAOE PUNE
          </div>
        </div>

        {/* Subtitle & Action Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            backgroundColor: 'rgba(244, 236, 228, 0.02)',
            border: '1px solid rgba(244, 236, 228, 0.12)',
            padding: 'clamp(1.25rem, 3vw, 1.75rem)',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <h2
              className="font-ui"
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
                fontWeight: 600,
                color: 'var(--text-ivory)',
                lineHeight: 1.45,
                marginBottom: '0.35rem'
              }}
            >
              View my experience, technical skills, projects, education, and achievements.
            </h2>
            <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)' }}>
              Sushrut_Kale_Resume.pdf · Standard A4 Document Format · Direct PDF Download
            </div>
          </div>

          {/* Primary & Secondary Actions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', alignItems: 'center' }}>
            {/* Primary Action: View Resume */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial btn-terracotta"
              data-cursor-label="VIEW"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Eye size={16} /> VIEW RESUME <ExternalLink size={13} />
            </a>

            {/* Secondary Action: Download PDF */}
            <a
              href={resumeUrl}
              download={resumeFilename}
              className="btn-editorial btn-outline-ivory"
              data-cursor-label="DOWNLOAD"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Download size={16} /> DOWNLOAD PDF
            </a>
          </div>
        </div>

        {/* Two-Column Grid: Document Summary & Embedded PDF Viewer */}
        <div
          className="resume-grid-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Structured Resume Overview (Always readable on mobile) */}
          <div style={{ gridColumn: 'span 5' }} className="resume-summary-col">
            <div
              style={{
                backgroundColor: 'rgba(244, 236, 228, 0.02)',
                border: '1px solid rgba(244, 236, 228, 0.12)',
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem'
              }}
            >
              {/* Header Info */}
              <div style={{ borderBottom: '1px solid rgba(244, 236, 228, 0.1)', paddingBottom: '1.25rem' }}>
                <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.35rem' }}>
                  CURRICULUM VITAE SUMMARY
                </div>
                <h3 className="font-display" style={{ fontSize: '1.85rem', color: 'var(--text-ivory)', lineHeight: 1, margin: 0 }}>
                  SUSHRUT KALE
                </h3>
                <div className="font-ui" style={{ fontSize: '0.875rem', color: 'var(--taupe)', marginTop: '0.25rem' }}>
                  Computer Science &amp; Engineering (AI/ML) · Class of 2029
                </div>
              </div>

              {/* Education Block */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--terracotta)', marginBottom: '0.5rem' }}>
                  <GraduationCap size={16} />
                  <span className="editorial-label" style={{ color: 'var(--terracotta)' }}>EDUCATION</span>
                </div>
                <div className="font-heading" style={{ fontSize: '1rem', color: 'var(--text-ivory)' }}>
                  MIT Academy of Engineering (MITAOE)
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)', marginTop: '0.2rem' }}>
                  B.Tech. CSE (AI &amp; Machine Learning) · 2025–2029
                </div>
                <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--terracotta)', fontWeight: 700, marginTop: '0.25rem' }}>
                  CGPA: 8.9 / 10 · Pune, Maharashtra
                </div>
              </div>

              {/* Experience Highlights */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--terracotta)', marginBottom: '0.5rem' }}>
                  <Briefcase size={16} />
                  <span className="editorial-label" style={{ color: 'var(--terracotta)' }}>EXPERIENCE &amp; INITIATIVES</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div>
                    <div className="font-ui" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-ivory)' }}>
                      MITAOE Summer Internship
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)' }}>
                      AI Timetable Generation · 3D Campus Model · AISEP Platform
                    </div>
                  </div>
                  <div>
                    <div className="font-ui" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-ivory)' }}>
                      Vertex &amp; ASTRA Technical Teams
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)' }}>
                      Game Development &amp; AIML Department Association
                    </div>
                  </div>
                  <div>
                    <div className="font-ui" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-ivory)' }}>
                      E-Cell MITAOE
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)' }}>
                      Marketing &amp; PR Core Member
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Technical Domains */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--terracotta)', marginBottom: '0.5rem' }}>
                  <Code2 size={16} />
                  <span className="editorial-label" style={{ color: 'var(--terracotta)' }}>TECHNICAL STACK</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {['Python', 'C++', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'PyTorch', 'TensorFlow', 'FastAPI', 'React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'OpenCV'].map((t) => (
                    <span
                      key={t}
                      className="font-mono"
                      style={{
                        fontSize: '0.6875rem',
                        padding: '0.2rem 0.5rem',
                        backgroundColor: 'rgba(244, 236, 228, 0.05)',
                        border: '1px solid rgba(244, 236, 228, 0.1)',
                        color: 'var(--text-ivory)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--terracotta)', marginBottom: '0.5rem' }}>
                  <Trophy size={16} />
                  <span className="editorial-label" style={{ color: 'var(--terracotta)' }}>KEY ACHIEVEMENTS</span>
                </div>
                <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.8125rem', color: 'var(--text-muted-dark)', lineHeight: 1.55 }}>
                  <li>First Runner-Up, HBTM at IIIT Pune (24-Hour National Hackathon)</li>
                  <li>1st Place Winner, Fund Arcade (Pune Start-Up Fest '26, COEP)</li>
                  <li>Smart India Hackathon 2026 Internal Round Qualifier (Team Agastya 01)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded PDF Viewer Frame with Fallback */}
          <div style={{ gridColumn: 'span 7' }} className="resume-viewer-col">
            <div
              style={{
                backgroundColor: 'rgba(244, 236, 228, 0.02)',
                border: '1px solid rgba(244, 236, 228, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                minHeight: '680px'
              }}
            >
              {/* Viewer Control Bar */}
              <div
                style={{
                  padding: '0.75rem 1.25rem',
                  backgroundColor: 'rgba(7, 5, 5, 0.95)',
                  borderBottom: '1px solid rgba(244, 236, 228, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={16} style={{ color: 'var(--terracotta)' }} />
                  <span className="editorial-label" style={{ color: 'var(--text-ivory)', fontSize: '0.6875rem' }}>
                    EMBEDDED PDF VIEWER
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link editorial-label"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--text-ivory)',
                      fontSize: '0.625rem'
                    }}
                  >
                    FULLSCREEN <ExternalLink size={12} />
                  </a>
                  <a
                    href={resumeUrl}
                    download={resumeFilename}
                    className="editorial-link editorial-label"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--terracotta)',
                      fontSize: '0.625rem'
                    }}
                  >
                    SAVE <Download size={12} />
                  </a>
                </div>
              </div>

              {/* Embedded Document Frame with Fallback */}
              <div style={{ flex: 1, position: 'relative', minHeight: '620px', backgroundColor: '#1A1818' }}>
                {!embedFailed ? (
                  <object
                    data={resumeUrl}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                    onError={() => setEmbedFailed(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: '620px',
                      border: 'none',
                      display: 'block'
                    }}
                    aria-label="Sushrut Kale Resume PDF Document"
                  >
                    {/* Fallback container if browser object fails */}
                    <div
                      style={{
                        padding: '3rem 2rem',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '400px'
                      }}
                    >
                      <AlertCircle size={36} style={{ color: 'var(--terracotta)', marginBottom: '1rem' }} />
                      <h4 className="font-ui" style={{ fontSize: '1.1rem', color: 'var(--text-ivory)', marginBottom: '0.5rem' }}>
                        PDF Direct View Ready
                      </h4>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-muted-dark)', maxWidth: '420px', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                        Your browser doesn't natively render embedded PDFs. You can open the official unredacted document in a new tab or download it directly.
                      </p>
                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-editorial btn-terracotta">
                          OPEN IN NEW TAB <ExternalLink size={14} />
                        </a>
                        <a href={resumeUrl} download={resumeFilename} className="btn-editorial btn-outline-ivory">
                          DOWNLOAD PDF <Download size={14} />
                        </a>
                      </div>
                    </div>
                  </object>
                ) : (
                  <div
                    style={{
                      padding: '3rem 2rem',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '400px'
                    }}
                  >
                    <FileText size={36} style={{ color: 'var(--terracotta)', marginBottom: '1rem' }} />
                    <h4 className="font-ui" style={{ fontSize: '1.1rem', color: 'var(--text-ivory)', marginBottom: '0.5rem' }}>
                      Official Resume Document
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted-dark)', maxWidth: '420px', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                      Click below to view the verified PDF or download it to your system.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-editorial btn-terracotta">
                        VIEW RESUME <ExternalLink size={14} />
                      </a>
                      <a href={resumeUrl} download={resumeFilename} className="btn-editorial btn-outline-ivory">
                        DOWNLOAD PDF <Download size={14} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .resume-summary-col,
          .resume-viewer-col {
            grid-column: span 12 !important;
          }
          .resume-viewer-col {
            min-height: 480px;
          }
          .resume-viewer-col object {
            min-height: 480px !important;
          }
        }
      `}</style>
    </section>
  );
}
