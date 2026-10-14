import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Smooth progress counter with natural acceleration
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.max(1, Math.floor((100 - prev) / 6));
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percent === 100) {
      const timer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 700);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [percent, onComplete]);

  // Safety fallback: Never keep user stuck for more than 3 seconds
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
    }, 2800);
    return () => clearTimeout(safetyTimer);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-ivory)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isFading ? 0 : 1,
        transform: isFading ? 'translateY(-100%)' : 'translateY(0%)',
        pointerEvents: isFading ? 'none' : 'auto'
      }}
    >
      {/* Editorial Grid lines background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(244, 236, 228, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(244, 236, 228, 0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '2rem' }}>
        {/* SK Monogram */}
        <div
          style={{
            width: '84px',
            height: '84px',
            margin: '0 auto 2.5rem',
            border: '1px solid rgba(244, 236, 228, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-4px',
              left: '-4px',
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--terracotta)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-4px',
              right: '-4px',
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--text-ivory)'
            }}
          />
          <span
            className="font-display"
            style={{
              fontSize: '2.5rem',
              letterSpacing: '0.05em',
              color: 'var(--text-ivory)'
            }}
          >
            SK
          </span>
        </div>

        {/* Wordmark and Headline */}
        <div className="editorial-label" style={{ color: 'var(--taupe)', marginBottom: '0.75rem' }}>
          SUSHRUT KALE · PORTFOLIO ARCHIVE
        </div>
        
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: 'var(--text-ivory)',
            marginBottom: '2rem',
            letterSpacing: '0.02em'
          }}
        >
          AI/ML · FULL-STACK · 3D
        </h2>

        {/* Minimal Progress Bar */}
        <div
          style={{
            width: '260px',
            maxWidth: '80vw',
            height: '2px',
            backgroundColor: 'rgba(244, 236, 228, 0.15)',
            margin: '0 auto 1.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              height: '100%',
              backgroundColor: 'var(--terracotta)',
              width: `${percent}%`,
              transition: 'width 0.1s linear'
            }}
          />
        </div>

        {/* Progress percent display */}
        <div
          className="font-mono"
          style={{
            fontSize: '0.875rem',
            letterSpacing: '0.2em',
            color: 'var(--taupe)'
          }}
        >
          {String(percent).padStart(3, '0')}% / LOADED
        </div>
      </div>
    </div>
  );
}
