import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Download, FileText, Image as ImageIcon } from 'lucide-react';

export default function MediaModal({ isOpen, onClose, fileUrl, title, subtitle, fileType = 'pdf' }) {
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    setLoadError(false);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, fileUrl]);

  if (!isOpen || !fileUrl) return null;

  const isPdf = fileType === 'pdf' || fileUrl.toLowerCase().endsWith('.pdf');

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="glass-panel-dark"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '95vw',
          maxWidth: '1200px',
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'clamp(0.75rem, 2.5vw, 1.25rem) clamp(0.75rem, 3vw, 1.75rem)',
            borderBottom: '1px solid rgba(244, 236, 228, 0.12)',
            backgroundColor: 'rgba(7, 5, 5, 0.95)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(244, 236, 228, 0.08)',
                color: isPdf ? 'var(--terracotta)' : 'var(--dusty-blue)'
              }}
            >
              {isPdf ? <FileText size={18} /> : <ImageIcon size={18} />}
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div
                id="modal-title"
                className="font-ui"
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-ivory)',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden'
                }}
              >
                {title || 'Document Viewer'}
              </div>
              {subtitle && (
                <div
                  className="editorial-label"
                  style={{ color: 'var(--taupe)', marginTop: '2px' }}
                >
                  {subtitle}
                </div>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Direct Open in New Tab */}
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial btn-outline-ivory"
              style={{ padding: '0.5rem 0.875rem', fontSize: '0.75rem' }}
              title="Open original file in new browser tab"
            >
              <ExternalLink size={14} />
              <span className="hide-on-mobile">OPEN ORIGINAL</span>
            </a>

            {/* Direct Download */}
            <a
              href={fileUrl}
              download
              className="btn-editorial btn-outline-ivory"
              style={{ padding: '0.5rem 0.875rem', fontSize: '0.75rem' }}
              title="Download file"
            >
              <Download size={14} />
              <span className="hide-on-mobile">DOWNLOAD</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="btn-editorial btn-primary-dark"
              style={{
                padding: '0.5rem',
                border: '1px solid rgba(244, 236, 228, 0.25)',
                color: 'var(--text-ivory)'
              }}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body / Viewer */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#050404',
            position: 'relative',
            overflow: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
        >
          {isPdf ? (
            <object
              data={fileUrl}
              type="application/pdf"
              width="100%"
              height="100%"
              onError={() => setLoadError(true)}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                backgroundColor: '#111'
              }}
            >
              <div style={{ textAlign: 'center', color: 'var(--text-ivory)', padding: '2rem' }}>
                <FileText size={48} style={{ color: 'var(--taupe)', marginBottom: '1rem' }} />
                <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
                  This browser does not support inline PDF viewing.
                </p>
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial btn-terracotta"
                >
                  <ExternalLink size={16} /> Open PDF Directly
                </a>
              </div>
            </object>
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'auto'
              }}
            >
              <img
                src={fileUrl}
                alt={title || 'Document preview'}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
                }}
                onError={() => setLoadError(true)}
              />
            </div>
          )}

          {loadError && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(7, 5, 5, 0.95)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-ivory)',
                padding: '2rem',
                textAlign: 'center'
              }}
            >
              <p style={{ marginBottom: '1rem', color: 'var(--terracotta)' }}>
                Unable to preview this file inline.
              </p>
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial btn-outline-ivory"
              >
                <ExternalLink size={16} /> Open Original in New Tab
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
