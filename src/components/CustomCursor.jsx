import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoverLabel, setHoverLabel] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isMoving = useRef(false);
  const idleTimer = useRef(null);
  const animFrameId = useRef(null);

  useEffect(() => {
    // Only run on non-touch devices with fine pointers, respecting reduced-motion
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const renderLoop = () => {
      // Calculate delta
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;

      ringPos.current.x += dx * 0.18;
      ringPos.current.y += dy * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      // If distance is significant or still moving, continue RAF
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1 || isMoving.current) {
        animFrameId.current = requestAnimationFrame(renderLoop);
      } else {
        animFrameId.current = null;
      }
    };

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Context label & hover detection
      const target = e.target.closest('[data-cursor-label]');
      if (target) {
        setHoverLabel(target.getAttribute('data-cursor-label') || 'VIEW');
        setIsHovering(true);
      } else if (e.target.closest('a, button, [role="button"], input, textarea')) {
        setHoverLabel('');
        setIsHovering(true);
      } else {
        setHoverLabel('');
        setIsHovering(false);
      }

      // Wake up animation loop if sleeping
      isMoving.current = true;
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        isMoving.current = false;
      }, 150);

      if (!animFrameId.current) {
        animFrameId.current = requestAnimationFrame(renderLoop);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Precision Terracotta Center Point */}
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
          opacity: isHovering && hoverLabel ? 0 : 0.95
        }}
      />

      {/* Trailing Targeting Ring with Corner Brackets & Context Badge */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: hoverLabel ? -18 : -18,
          left: hoverLabel ? -42 : -18,
          width: hoverLabel ? '84px' : '36px',
          height: hoverLabel ? '36px' : '36px',
          borderRadius: hoverLabel ? '18px' : '50%',
          border: '1px solid rgba(172, 64, 51, 0.65)',
          backgroundColor: hoverLabel ? 'var(--terracotta)' : 'rgba(172, 64, 51, 0.05)',
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
        {/* Subtle engineering corner brackets when not in label mode */}
        {!hoverLabel && (
          <div
            style={{
              position: 'absolute',
              inset: '-4px',
              pointerEvents: 'none'
            }}
          >
            {/* Top-Left Bracket */}
            <span style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '4px', borderTop: '1px solid var(--terracotta)', borderLeft: '1px solid var(--terracotta)' }} />
            {/* Top-Right Bracket */}
            <span style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '4px', borderTop: '1px solid var(--terracotta)', borderRight: '1px solid var(--terracotta)' }} />
            {/* Bottom-Left Bracket */}
            <span style={{ position: 'absolute', bottom: 0, left: 0, width: '4px', height: '4px', borderBottom: '1px solid var(--terracotta)', borderLeft: '1px solid var(--terracotta)' }} />
            {/* Bottom-Right Bracket */}
            <span style={{ position: 'absolute', bottom: 0, right: 0, width: '4px', height: '4px', borderBottom: '1px solid var(--terracotta)', borderRight: '1px solid var(--terracotta)' }} />
          </div>
        )}

        {/* Dynamic Context Label */}
        {hoverLabel && (
          <span
            className="font-mono"
            style={{
              fontSize: '0.625rem',
              color: '#fff',
              letterSpacing: '0.14em',
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
