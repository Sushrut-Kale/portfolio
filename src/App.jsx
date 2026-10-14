import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Events from './sections/Events';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import MediaModal from './components/MediaModal';
import ProjectCaseModal from './components/ProjectCaseModal';
import ResumeModal from './components/ResumeModal';
import ComingSoonToast from './components/ComingSoonToast';
import CustomCursor from './components/CustomCursor';
import { PROJECTS } from './data/portfolioData';
import { ArrowLeft, ArrowRight, CornerDownRight } from 'lucide-react';

const SECTIONS = [
  { id: 'about', label: 'ABOUT', num: '01' },
  { id: 'projects', label: 'PROJECTS', num: '02' },
  { id: 'skills', label: 'SKILLS', num: '03' },
  { id: 'experience', label: 'EXPERIENCE', num: '04' },
  { id: 'events', label: 'EVENTS', num: '05' },
  { id: 'certifications', label: 'CERTIFICATIONS', num: '06' },
  { id: 'contact', label: 'CONTACT', num: '07' }
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const [activeMedia, setActiveMedia] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastInfo, setToastInfo] = useState({ isOpen: false, featureName: '' });

  // Sync hash on mount and handle back/forward browser history
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const match = SECTIONS.find((s) => s.id === hash);
      if (match) {
        setActiveSection(match.id);
      }
    };

    syncFromHash();
    window.addEventListener('popstate', syncFromHash);
    window.addEventListener('hashchange', syncFromHash);

    return () => {
      window.removeEventListener('popstate', syncFromHash);
      window.removeEventListener('hashchange', syncFromHash);
    };
  }, []);

  const handleSelectSection = (sectionId) => {
    setActiveSection(sectionId);
    if (window.location.hash !== `#${sectionId}`) {
      window.history.pushState(null, '', `#${sectionId}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProjectById = (projectId) => {
    const proj = PROJECTS.find((p) => p.id === projectId);
    if (proj) setSelectedProject(proj);
  };

  const showComingSoonToast = (featureName = '') => {
    setToastInfo({ isOpen: true, featureName });
  };

  // Section Index Calculation for Next/Prev Controls
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const prevSection = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null;
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : null;

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Engineering-themed Custom Cursor */}
      <CustomCursor />

      {/* Editorial Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Section-Switching Editorial Navbar */}
      <Navbar
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
      />

      {/* Controlled Section Viewport Presentation */}
      <main style={{ minHeight: 'calc(100vh - 74px)', paddingTop: '0' }}>
        <div key={activeSection} className="section-enter-anim" style={{ width: '100%' }}>
          {activeSection === 'about' && (
            <About
              onOpenResume={() => setIsResumeOpen(true)}
              onNavigateToSection={handleSelectSection}
            />
          )}

          {activeSection === 'projects' && (
            <Projects
              onSelectProject={(proj) => setSelectedProject(proj)}
              onTriggerToast={showComingSoonToast}
            />
          )}

          {activeSection === 'skills' && (
            <Skills
              onSelectProjectById={handleSelectProjectById}
            />
          )}

          {activeSection === 'experience' && (
            <Experience
              onOpenMedia={(media) => setActiveMedia(media)}
            />
          )}

          {activeSection === 'events' && (
            <Events
              onOpenMedia={(media) => setActiveMedia(media)}
            />
          )}

          {activeSection === 'certifications' && (
            <Certifications
              onOpenMedia={(media) => setActiveMedia(media)}
            />
          )}

          {activeSection === 'contact' && (
            <Contact
              onOpenResume={() => setIsResumeOpen(true)}
              onTriggerToast={showComingSoonToast}
            />
          )}
        </div>

        {/* Editorial Section Switcher Footer */}
        <section
          style={{
            borderTop: '1px solid var(--line-light)',
            backgroundColor: 'var(--bg-ivory)',
            padding: '2.5rem 0',
            color: 'var(--text-dark)'
          }}
        >
          <div className="site-container">
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem'
              }}
            >
              {/* Previous Destination */}
              <div>
                {prevSection ? (
                  <button
                    onClick={() => handleSelectSection(prevSection.id)}
                    className="editorial-link"
                    style={{
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      cursor: 'pointer',
                      padding: 0,
                      color: 'var(--text-dark)'
                    }}
                  >
                    <ArrowLeft size={16} style={{ color: 'var(--terracotta)' }} />
                    <div style={{ textAlign: 'left' }}>
                      <div className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.5625rem' }}>
                        PREV [{prevSection.num}]
                      </div>
                      <div className="font-heading" style={{ fontSize: '1rem', fontWeight: 700 }}>
                        {prevSection.label}
                      </div>
                    </div>
                  </button>
                ) : (
                  <span className="editorial-label" style={{ color: 'var(--taupe)' }}>
                    START OF ARCHIVE
                  </span>
                )}
              </div>

              {/* Quick Jump Bar */}
              <div
                className="hide-on-mobile"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.75rem',
                  border: '1px solid var(--line-light)',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)'
                }}
              >
                {SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => handleSelectSection(sec.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '0.2rem 0.5rem',
                      cursor: 'pointer',
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-mono)',
                      color: activeSection === sec.id ? 'var(--terracotta)' : 'var(--text-muted)',
                      fontWeight: activeSection === sec.id ? 700 : 500,
                      borderBottom: activeSection === sec.id ? '2px solid var(--terracotta)' : '2px solid transparent'
                    }}
                  >
                    {sec.num}
                  </button>
                ))}
              </div>

              {/* Next Destination */}
              <div>
                {nextSection ? (
                  <button
                    onClick={() => handleSelectSection(nextSection.id)}
                    className="editorial-link"
                    style={{
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      cursor: 'pointer',
                      padding: 0,
                      color: 'var(--text-dark)'
                    }}
                  >
                    <div style={{ textAlign: 'right' }}>
                      <div className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.5625rem' }}>
                        NEXT [{nextSection.num}]
                      </div>
                      <div className="font-heading" style={{ fontSize: '1rem', fontWeight: 700 }}>
                        {nextSection.label}
                      </div>
                    </div>
                    <ArrowRight size={16} style={{ color: 'var(--terracotta)' }} />
                  </button>
                ) : (
                  <button
                    onClick={() => handleSelectSection('about')}
                    className="editorial-link"
                    style={{
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      padding: 0,
                      color: 'var(--terracotta)'
                    }}
                  >
                    <span className="font-heading" style={{ fontSize: '1rem', fontWeight: 700 }}>
                      RETURN TO COVER [01]
                    </span>
                    <CornerDownRight size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Media Viewer Modal (Certificates, proof images, PDFs) */}
      <MediaModal
        isOpen={Boolean(activeMedia)}
        onClose={() => setActiveMedia(null)}
        fileUrl={activeMedia?.fileUrl}
        title={activeMedia?.title}
        subtitle={activeMedia?.subtitle}
        fileType={activeMedia?.fileType}
      />

      {/* Project Case Study Modal */}
      <ProjectCaseModal
        isOpen={Boolean(selectedProject)}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Coming Soon Toast for genuine unavailable features */}
      <ComingSoonToast
        isOpen={toastInfo.isOpen}
        featureName={toastInfo.featureName}
        onClose={() => setToastInfo({ isOpen: false, featureName: '' })}
      />
    </div>
  );
}
