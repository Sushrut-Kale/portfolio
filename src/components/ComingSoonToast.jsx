import React, { useEffect } from 'react';
import { Clock, X } from 'lucide-react';

export default function ComingSoonToast({ isOpen, onClose, featureName }) {
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1100,
        backgroundColor: '#070505',
        border: '1px solid var(--terracotta)',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.75)',
        padding: '1.25rem 1.5rem',
        maxWidth: '360px',
        animation: 'sectionEnter 0.25s var(--ease-editorial) forwards'
      }}
      role="status"
      aria-live="polite"
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.35rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Clock size={16} style={{ color: 'var(--terracotta)' }} />
          <span
            className="font-mono"
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--terracotta)',
              letterSpacing: '0.12em'
            }}
          >
            COMING SOON
          </span>
        </div>

        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-muted-dark)',
            cursor: 'pointer',
            padding: 0
          }}
          aria-label="Dismiss toast"
        >
          <X size={14} />
        </button>
      </div>

      {featureName && (
        <div className="font-ui" style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-ivory)', marginBottom: '0.25rem' }}>
          {featureName}
        </div>
      )}

      <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted-dark)', lineHeight: 1.45, margin: 0 }}>
        This feature is currently being prepared. Please check back soon.
      </p>
    </div>
  );
}
