import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, ChevronLeft, ChevronRight, Layers, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function ProjectCaseModal({ project, isOpen, onClose, onSelectProject }) {
  const currentIndex = project ? PROJECTS.findIndex((p) => p.id === project.id) : -1;
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && prevProject) onSelectProject(prevProject);
      if (e.key === 'ArrowRight' && nextProject) onSelectProject(nextProject);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onSelectProject, prevProject, nextProject]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="glass-panel-dark"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '95vw',
          maxWidth: '1020px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 30px 90px rgba(0, 0, 0, 0.9)',
          overflow: 'hidden',
          backgroundColor: '#090707',
          border: '1px solid rgba(244, 236, 228, 0.16)'
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: 'clamp(0.75rem, 2.5vw, 1.25rem) clamp(1rem, 3vw, 2rem)',
            borderBottom: '1px solid rgba(244, 236, 228, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#070505',
            gap: '0.75rem',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span
              className="font-display"
              style={{
                fontSize: '1.75rem',
                color: 'var(--terracotta)',
                borderRight: '1px solid rgba(244, 236, 228, 0.2)',
                paddingRight: '1rem'
              }}
            >
              {project.number || `0${currentIndex + 1}`}
            </span>
            <div>
              <div className="editorial-label" style={{ color: project.accent || 'var(--terracotta)', marginBottom: '0.15rem' }}>
                {project.category} · {project.period}
              </div>
              <h2
                id="case-study-title"
                className="font-display"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.3rem)',
                  color: 'var(--text-ivory)',
                  letterSpacing: '0.02em',
                  lineHeight: 1
                }}
              >
                {project.title}
              </h2>
            </div>
          </div>

          {/* Controls: Prev, Next, Close */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={() => onSelectProject(prevProject)}
              className="btn-editorial"
              style={{
                padding: '0.5rem',
                backgroundColor: 'rgba(244, 236, 228, 0.05)',
                border: '1px solid rgba(244, 236, 228, 0.15)',
                color: 'var(--text-ivory)',
                cursor: 'pointer'
              }}
              title="Previous project (ArrowLeft)"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>

            <span className="editorial-label" style={{ color: 'var(--taupe)', padding: '0 0.5rem' }}>
              {currentIndex + 1} / {PROJECTS.length}
            </span>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="btn-editorial"
              style={{
                padding: '0.5rem',
                backgroundColor: 'rgba(244, 236, 228, 0.05)',
                border: '1px solid rgba(244, 236, 228, 0.15)',
                color: 'var(--text-ivory)',
                cursor: 'pointer'
              }}
              title="Next project (ArrowRight)"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>

            <button
              onClick={onClose}
              className="btn-editorial"
              style={{
                padding: '0.5rem',
                backgroundColor: 'var(--terracotta)',
                border: '1px solid var(--terracotta)',
                color: '#fff',
                marginLeft: '0.5rem',
                cursor: 'pointer'
              }}
              title="Close modal (Esc)"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: 'clamp(1rem, 3.5vw, 2rem)',
            color: 'var(--text-ivory)'
          }}
        >
          {/* Subtitle / summary */}
          <p
            className="font-ui"
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-ivory)',
              lineHeight: 1.5,
              marginBottom: '1.5rem',
              fontWeight: 500
            }}
          >
            {project.subtitle || project.summary}
          </p>

          {/* Links Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(244, 236, 228, 0.1)',
              marginBottom: '2rem'
            }}
          >
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial btn-primary-dark"
                style={{ fontSize: '0.75rem', padding: '0.625rem 1.25rem' }}
              >
                <Github size={15} /> VIEW REPOSITORY ↗
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial btn-terracotta"
                style={{ fontSize: '0.75rem', padding: '0.625rem 1.25rem' }}
              >
                <ExternalLink size={15} /> LAUNCH LIVE DEPLOYMENT ↗
              </a>
            )}

            {project.previewImage && (
              <span className="editorial-label" style={{ alignSelf: 'center', color: 'var(--taupe)' }}>
                VERIFIED ASSET ATTACHED
              </span>
            )}
          </div>

          {/* Image preview if exists */}
          {project.previewImage && (
            <div
              style={{
                marginBottom: '2rem',
                border: '1px solid rgba(244, 236, 228, 0.15)',
                overflow: 'hidden',
                backgroundColor: '#000',
                maxHeight: '360px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={project.previewImage}
                alt={project.title}
                style={{ maxWidth: '100%', maxHeight: '360px', objectFit: 'contain' }}
              />
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem',
              marginBottom: '2rem'
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(244, 236, 228, 0.02)',
                border: '1px solid rgba(244, 236, 228, 0.08)',
                padding: '1.5rem'
              }}
            >
              <div className="editorial-label" style={{ color: 'var(--terracotta)', marginBottom: '0.75rem' }}>
                THE CHALLENGE &amp; CONTEXT
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted-dark)', lineHeight: 1.65 }}>
                {project.problemStatement}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(244, 236, 228, 0.02)',
                border: '1px solid rgba(244, 236, 228, 0.08)',
                padding: '1.5rem'
              }}
            >
              <div className="editorial-label" style={{ color: 'var(--dusty-blue)', marginBottom: '0.75rem' }}>
                ARCHITECTURAL SOLUTION
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted-dark)', lineHeight: 1.65 }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '1rem' }}>
                Key Implemented Highlights &amp; Engineering Contributions
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'rgba(244, 236, 228, 0.02)',
                      borderLeft: '2px solid var(--terracotta)'
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      style={{ color: 'var(--terracotta)', marginTop: '3px', flexShrink: 0 }}
                    />
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-ivory)', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack */}
          <div>
            <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.75rem' }}>
              Verified Technology Stack
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.35rem 0.75rem',
                    backgroundColor: 'rgba(244, 236, 228, 0.06)',
                    color: 'var(--text-ivory)',
                    border: '1px solid rgba(244, 236, 228, 0.12)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div
          style={{
            padding: '1rem 2rem',
            borderTop: '1px solid rgba(244, 236, 228, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#070505'
          }}
        >
          <button
            onClick={() => onSelectProject(prevProject)}
            className="editorial-link editorial-label"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-ivory)',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            ← PREV: {prevProject.title}
          </button>

          <span className="editorial-label" style={{ color: 'var(--taupe)' }}>
            USE ARROW KEYS ← / → TO BROWSE
          </span>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="editorial-link editorial-label"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-ivory)',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            NEXT: {nextProject.title} →
          </button>
        </div>
      </div>
    </div>
  );
}
