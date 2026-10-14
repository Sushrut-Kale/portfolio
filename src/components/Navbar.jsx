import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ activeSection: controlledActiveSection, onSelectSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalActiveSection, setInternalActiveSection] = useState('about');
  const [istTime, setIstTime] = useState('');

  const activeSection = controlledActiveSection || internalActiveSection;

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setIstTime(new Intl.DateTimeFormat([], options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about', id: 'about', keyNum: '1' },
    { label: 'PROJECTS', href: '#projects', id: 'projects', keyNum: '2' },
    { label: 'SKILLS', href: '#skills', id: 'skills', keyNum: '3' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience', keyNum: '4' },
    { label: 'EVENTS', href: '#events', id: 'events', keyNum: '5' },
    { label: 'CERTIFICATIONS', href: '#certifications', id: 'certifications', keyNum: '6' },
    { label: 'CONTACT', href: '#contact', id: 'contact', keyNum: '7' }
  ];

  // Scroll detection for background opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for sections (1-7)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      
      const link = navLinks.find((l) => l.keyNum === e.key);
      if (link) {
        if (onSelectSection) {
          onSelectSection(link.id);
        } else {
          setInternalActiveSection(link.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navLinks, onSelectSection]);

  // Escape key and body scroll lock for mobile menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onSelectSection) {
      onSelectSection(sectionId);
    } else {
      setInternalActiveSection(sectionId);
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 900,
        backgroundColor: isScrolled ? 'rgba(244, 236, 228, 0.96)' : 'rgba(244, 236, 228, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--line-light)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div
        className="site-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '74px'
        }}
      >
        {/* Monogram / Brand */}
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, 'about')}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: 'var(--text-dark)'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              border: '1px solid var(--text-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isScrolled ? 'var(--text-dark)' : 'transparent',
              color: isScrolled ? 'var(--text-ivory)' : 'var(--text-dark)',
              transition: 'all 0.3s ease'
            }}
          >
            <span className="font-display" style={{ fontSize: '1.2rem', letterSpacing: '0.05em' }}>
              SK
            </span>
          </div>
          <div className="hide-on-mobile">
            <div className="font-ui" style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.04em' }}>
              {PERSONAL_INFO.name.toUpperCase()}
            </div>
            <div className="editorial-label" style={{ color: 'var(--taupe)', fontSize: '0.5625rem' }}>
              EDITION 2026 · MITAOE
            </div>
          </div>
        </a>

        {/* Desktop Editorial Navigation Links */}
        <nav
          className="desktop-only"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.5rem'
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className="editorial-link font-ui"
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: isActive ? 'var(--terracotta)' : 'var(--text-dark)',
                  textDecoration: 'none',
                  padding: '0.25rem 0',
                  position: 'relative',
                  transition: 'color 0.25s ease'
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'var(--terracotta)'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action & Clock */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          {/* Pune IST Live Clock */}
          <div
            className="desktop-only"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.65rem',
              border: '1px solid var(--line-light)',
              backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                display: 'inline-block'
              }}
            />
            <span
              className="font-mono"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.08em', color: 'var(--text-dark)' }}
            >
              PUNE {istTime || 'IST'}
            </span>
          </div>

          {/* Direct CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="btn-editorial btn-primary-dark hide-on-mobile"
            style={{ padding: '0.45rem 1rem', fontSize: '0.6875rem' }}
          >
            GET IN TOUCH <ArrowUpRight size={13} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-only-btn"
            style={{
              background: 'none',
              border: '1px solid var(--text-dark)',
              padding: '0.5rem',
              color: 'var(--text-dark)',
              cursor: 'pointer',
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Slide-in Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '74px',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 74px)',
            backgroundColor: 'var(--bg-dark)',
            color: 'var(--text-ivory)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 899,
            overflowY: 'auto'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.25rem' }}>
              SECTION INDEX (PRESS 1-7 ON KEYBOARD)
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="font-display"
                  style={{
                    fontSize: '1.75rem',
                    letterSpacing: '0.02em',
                    textDecoration: 'none',
                    color: isActive ? 'var(--terracotta)' : 'var(--text-ivory)',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.75rem'
                  }}
                >
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--taupe)' }}>
                    0{link.keyNum}
                  </span>
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(244, 236, 228, 0.15)' }}>
            <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.5rem' }}>
              DIRECT REACH
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.links.email}`}
              className="font-ui"
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-ivory)',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '1rem'
              }}
            >
              {PERSONAL_INFO.links.email}
            </a>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-label"
                style={{ color: 'var(--text-ivory)', textDecoration: 'none' }}
              >
                GITHUB ↗
              </a>
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-label"
                style={{ color: 'var(--text-ivory)', textDecoration: 'none' }}
              >
                LINKEDIN ↗
              </a>
              <a
                href={PERSONAL_INFO.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-label"
                style={{ color: 'var(--text-ivory)', textDecoration: 'none' }}
              >
                INSTAGRAM ↗
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-only {
            display: flex !important;
          }
          .mobile-only-btn {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
