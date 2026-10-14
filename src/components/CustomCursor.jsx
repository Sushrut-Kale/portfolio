import React, { useEffect, useState, useRef } from 'react';

/**
 * CustomCursor — Engineering-Themed Interactive Cursor (Modnia Editorial Palette)
 * 
 * Features:
 * - Terracotta core dot with direct tracking.
 * - Restrained 2-node motion trail with physics lerp.
 * - Smooth precision ring with technical targeting corner brackets (reticle).
 * - Contextual badge: VIEW, OPEN, EXPLORE, INSPECT.
 * - Element-aware states (default, nav, project, button, inspect).
 * - Subtle reticle rotation/scan on document/certificate inspection.
 * - Restrained magnetic attraction on action buttons.
 * - Idle CPU throttling: RAF automatically suspends when movement ceases.
 * - Fully accessible: pointer-events none, touch/reduced-motion safe, native cursor intact.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorMode, setCursorMode] = useState('default'); // 'default' | 'nav' | 'project' | 'button' | 'inspect'
  const [contextLabel, setContextLabel] = useState('');

  // DOM Refs for direct hardware-accelerated transforms (0 React renders during pointer move)
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const reticleRef = useRef(null);
  const trail1Ref = useRef(null);
  const trail2Ref = useRef(null);

  // Position trackers
  const mousePos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const trail1Pos = useRef({ x: -200, y: -200 });
  const trail2Pos = useRef({ x: -200, y: -200 });

  // Magnetic attraction target
  const magneticPos = useRef(null);

  // Motion & RAF Loop management
  const isMoving = useRef(false);
  const idleTimeout = useRef(null);
  const animFrameId = useRef(null);
  const activeModeRef = useRef('default');
  const activeLabelRef = useRef('');

  useEffect(() => {
    // Accessibility & touch check
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    // High performance RAF loop
    const updatePositions = () => {
      // Determine destination: standard mouse or subtle magnetic offset
      let targetX = mousePos.current.x;
      let targetY = mousePos.current.y;

      if (magneticPos.current) {
        // Restrained magnetic attraction (15% pull towards element center)
        targetX += (magneticPos.current.x - targetX) * 0.18;
        targetY += (magneticPos.current.y - targetY) * 0.18;
      }

      // Physics interpolation (Lerp)
      const dxRing = targetX - ringPos.current.x;
      const dyRing = targetY - ringPos.current.y;

      ringPos.current.x += dxRing * 0.22;
      ringPos.current.y += dyRing * 0.22;

      const dxTrail1 = targetX - trail1Pos.current.x;
      const dyTrail1 = targetY - trail1Pos.current.y;
      trail1Pos.current.x += dxTrail1 * 0.15;
      trail1Pos.current.y += dyTrail1 * 0.15;

      const dxTrail2 = targetX - trail2Pos.current.x;
      const dyTrail2 = targetY - trail2Pos.current.y;
      trail2Pos.current.x += dxTrail2 * 0.08;
      trail2Pos.current.y += dyTrail2 * 0.08;

      // Apply transforms
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      if (trail1Ref.current) {
        trail1Ref.current.style.transform = `translate3d(${trail1Pos.current.x}px, ${trail1Pos.current.y}px, 0)`;
      }

      if (trail2Ref.current) {
        trail2Ref.current.style.transform = `translate3d(${trail2Pos.current.x}px, ${trail2Pos.current.y}px, 0)`;
      }

      // Check if animation needs to continue (sub-pixel convergence)
      const totalDist =
        Math.abs(dxRing) +
        Math.abs(dyRing) +
        Math.abs(dxTrail1) +
        Math.abs(dyTrail1) +
        Math.abs(dxTrail2) +
        Math.abs(dyTrail2);

      if (isMoving.current || totalDist > 0.1) {
        animFrameId.current = requestAnimationFrame(updatePositions);
      } else {
        animFrameId.current = null;
      }
    };

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Core dot follows immediately with 0 lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Context detection: inspect hovered element hierarchy
      const target = e.target;
      const explicitLabel = target.closest('[data-cursor-label]');
      const navItem = target.closest('header a, nav a, .mobile-only-btn');
      const projectCard = target.closest('.project-panel-uniform, [data-project]');
      const certCard = target.closest('.certificate-panel-uniform, [data-cert], .event-panel-uniform');
      const actionBtn = target.closest('button, .btn-editorial, a[target="_blank"]');
      const genericLink = target.closest('a');

      let newMode = 'default';
      let newLabel = '';
      let magneticCenter = null;

      if (explicitLabel) {
        newLabel = explicitLabel.getAttribute('data-cursor-label') || 'VIEW';
        if (newLabel === 'INSPECT') newMode = 'inspect';
        else if (newLabel === 'VIEW') newMode = 'project';
        else newMode = 'button';
      } else if (certCard) {
        newMode = 'inspect';
        newLabel = 'INSPECT';
      } else if (projectCard) {
        newMode = 'project';
        newLabel = 'VIEW';
      } else if (navItem) {
        newMode = 'nav';
        newLabel = '';
      } else if (actionBtn) {
        newMode = 'button';
        newLabel = actionBtn.getAttribute('href')?.startsWith('mailto:') ? 'CONTACT' : 'EXPLORE';

        // Subtle magnetic pull towards button center
        const rect = actionBtn.getBoundingClientRect();
        magneticCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };
      } else if (genericLink) {
        newMode = 'button';
        newLabel = 'OPEN';
      }

      magneticPos.current = magneticCenter;

      // Only update state if mode or label changed (prevents re-renders)
      if (newMode !== activeModeRef.current || newLabel !== activeLabelRef.current) {
        activeModeRef.current = newMode;
        activeLabelRef.current = newLabel;
        setCursorMode(newMode);
        setContextLabel(newLabel);
      }

      // Mark moving & manage RAF
      isMoving.current = true;
      clearTimeout(idleTimeout.current);
      idleTimeout.current = setTimeout(() => {
        isMoving.current = false;
      }, 140);

      if (!animFrameId.current) {
        animFrameId.current = requestAnimationFrame(updatePositions);
      }
    };

    const handleMouseLeave = () => {
      mousePos.current = { x: -200, y: -200 };
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (trail1Ref.current) trail1Ref.current.style.opacity = '0';
      if (trail2Ref.current) trail2Ref.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
      if (trail1Ref.current) trail1Ref.current.style.opacity = '0.35';
      if (trail2Ref.current) trail2Ref.current.style.opacity = '0.15';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
    };
  }, []);

  if (!enabled) return null;

  // Determine dynamic ring sizing and styling based on mode
  const isLabelActive = Boolean(contextLabel);
  const isNav = cursorMode === 'nav';
  const isInspect = cursorMode === 'inspect';
  const isProject = cursorMode === 'project';
  const isButton = cursorMode === 'button';

  let ringWidth = 32;
  let ringHeight = 32;
  let ringBorderRadius = '50%';
  let ringBg = 'rgba(172, 64, 51, 0.04)';
  let ringBorder = '1px solid rgba(172, 64, 51, 0.5)';

  if (isLabelActive) {
    ringHeight = 32;
    ringBorderRadius = '16px';
    ringBg = 'var(--terracotta)';
    ringBorder = '1px solid var(--terracotta)';

    if (contextLabel === 'INSPECT') {
      ringWidth = 84;
    } else if (contextLabel === 'VIEW') {
      ringWidth = 72;
    } else if (contextLabel === 'EXPLORE' || contextLabel === 'CONTACT') {
      ringWidth = 88;
    } else {
      ringWidth = 70;
    }
  } else if (isNav) {
    ringWidth = 22;
    ringHeight = 22;
    ringBg = 'rgba(172, 64, 51, 0.12)';
    ringBorder = '1.5px solid var(--terracotta)';
  } else if (isButton) {
    ringWidth = 42;
    ringHeight = 42;
    ringBg = 'rgba(172, 64, 51, 0.08)';
    ringBorder = '1px solid var(--terracotta)';
  }

  const ringTopOffset = -(ringHeight / 2);
  const ringLeftOffset = -(ringWidth / 2);

  return (
    <>
      {/* 1. Restrained Motion Trail Node 2 (Deepest Lag) */}
      <div
        ref={trail2Ref}
        style={{
          position: 'fixed',
          top: -1.5,
          left: -1.5,
          width: '3px',
          height: '3px',
          borderRadius: '50%',
          backgroundColor: 'var(--terracotta)',
          opacity: 0.15,
          pointerEvents: 'none',
          zIndex: 9996,
          willChange: 'transform',
          transition: 'opacity 0.2s ease',
          transform: 'translate3d(-200px, -200px, 0)'
        }}
      />

      {/* 2. Restrained Motion Trail Node 1 (Mid Lag) */}
      <div
        ref={trail1Ref}
        style={{
          position: 'fixed',
          top: -2,
          left: -2,
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          backgroundColor: 'var(--terracotta)',
          opacity: 0.35,
          pointerEvents: 'none',
          zIndex: 9997,
          willChange: 'transform',
          transition: 'opacity 0.2s ease',
          transform: 'translate3d(-200px, -200px, 0)'
        }}
      />

      {/* 3. Terracotta Precision Center Dot (Follows Pointer Immediately) */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: -2.5,
          left: -2.5,
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: 'var(--terracotta)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          transition: 'transform 0.1s ease, opacity 0.2s ease, width 0.2s ease, height 0.2s ease',
          opacity: isLabelActive ? 0 : 0.95,
          transform: 'translate3d(-200px, -200px, 0)',
          boxShadow: '0 0 6px rgba(172, 64, 51, 0.4)'
        }}
      />

      {/* 4. Precision Ring with Targeting Reticle & Context Badge */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: ringTopOffset,
          left: ringLeftOffset,
          width: `${ringWidth}px`,
          height: `${ringHeight}px`,
          borderRadius: ringBorderRadius,
          border: ringBorder,
          backgroundColor: ringBg,
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform, width, height',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition:
            'width 0.22s cubic-bezier(0.16, 1, 0.3, 1), height 0.22s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border-color 0.2s ease, border-radius 0.22s ease, top 0.22s ease, left 0.22s ease',
          transform: 'translate3d(-200px, -200px, 0)',
          boxShadow: isLabelActive ? '0 4px 18px rgba(172, 64, 51, 0.35)' : 'none'
        }}
      >
        {/* Technical Targeting Corner Brackets (Reticle) */}
        {!isLabelActive && (
          <div
            ref={reticleRef}
            className={isInspect ? 'reticle-scanning' : ''}
            style={{
              position: 'absolute',
              inset: '-4px',
              pointerEvents: 'none',
              transition: 'inset 0.2s ease'
            }}
          >
            {/* Top-Left Bracket */}
            <span
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '5px',
                height: '5px',
                borderTop: '1.5px solid var(--terracotta)',
                borderLeft: '1.5px solid var(--terracotta)'
              }}
            />
            {/* Top-Right Bracket */}
            <span
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '5px',
                height: '5px',
                borderTop: '1.5px solid var(--terracotta)',
                borderRight: '1.5px solid var(--terracotta)'
              }}
            />
            {/* Bottom-Left Bracket */}
            <span
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '5px',
                height: '5px',
                borderBottom: '1.5px solid var(--terracotta)',
                borderLeft: '1.5px solid var(--terracotta)'
              }}
            />
            {/* Bottom-Right Bracket */}
            <span
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '5px',
                height: '5px',
                borderBottom: '1.5px solid var(--terracotta)',
                borderRight: '1.5px solid var(--terracotta)'
              }}
            />
          </div>
        )}

        {/* Dynamic Context Label */}
        {isLabelActive && (
          <span
            className="font-mono"
            style={{
              fontSize: '0.625rem',
              color: '#FFFFFF',
              letterSpacing: '0.14em',
              fontWeight: 700,
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            {contextLabel}
          </span>
        )}
      </div>

      {/* Embedded CSS for Reticle Subtle Scanning Animation & Performance */}
      <style>{`
        .reticle-scanning {
          animation: reticleScanRotate 6s linear infinite;
        }

        @keyframes reticleScanRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
