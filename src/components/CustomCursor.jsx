import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoverLabel, setHoverLabel] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    // Check if device supports fine hover and user prefers motion
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check for cursor label target
      const target = e.target.closest('[data-cursor-label]');
      if (target) {
        setHoverLabel(target.getAttribute('data-cursor-label') || 'VIEW');
        setIsHovering(true);
      } else if (e.target.closest('a, button, [role="button"]')) {
        setHoverLabel('');
        setIsHovering(true);
      } else {
        setHoverLabel('');
        setIsHovering(false);
      }
    };

    // Smooth lerp loop for the trailing ring
    const renderLoop = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animFrameId.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Terracotta Central Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: -3,
          left: -3,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--terracotta)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          transition: 'opacity 0.2s ease',
          opacity: isHovering ? 0 : 0.85
        }}
      />

      {/* Trailing Editorial Ring / Badge */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: hoverLabel ? -18 : -14,
          left: hoverLabel ? -36 : -14,
          width: hoverLabel ? '72px' : '28px',
          height: hoverLabel ? '36px' : '28px',
          borderRadius: hoverLabel ? '18px' : '50%',
          border: '1px solid rgba(172, 64, 51, 0.7)',
          backgroundColor: hoverLabel ? 'var(--terracotta)' : 'rgba(172, 64, 51, 0.08)',
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'width 0.25s var(--ease-editorial), height 0.25s var(--ease-editorial), background-color 0.25s ease, border-radius 0.25s ease, top 0.25s ease, left 0.25s ease',
          transform: 'translate3d(-100px, -100px, 0)'
        }}
      >
        {hoverLabel && (
          <span
            className="font-mono"
            style={{
              fontSize: '0.625rem',
              color: '#fff',
              letterSpacing: '0.12em',
              fontWeight: 700
            }}
          >
            {hoverLabel}
          </span>
        )}
      </div>
    </>
  );
}
