import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface DownloadButtonProps {
  onDownload?: () => void;
  label?: string;
  className?: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  onDownload,
  label = 'Download Resume',
  className = '',
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDownloadClick = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (isDownloading) return;

    setIsDownloading(true);
    setIsSuccess(false);

    if (onDownload) {
      onDownload();
    } else {
      const link = document.createElement('a');
      link.href = '/GuruPrasath_Resume.pdf';
      link.download = 'GuruPrasath_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    setTimeout(() => {
      setIsDownloading(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2500);
    }, 3200);
  };

  return (
    <div className={`download-btn-wrapper ${className}`}>
      <motion.button
        type="button"
        onClick={handleDownloadClick}
        className={`download-btn ${isDownloading ? 'is-downloading' : ''} ${isSuccess ? 'is-success' : ''}`}
        animate={{
          width: isDownloading ? 54 : 208,
          borderRadius: '9999px',
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ minWidth: isDownloading ? '54px' : '208px', height: '54px' }}
      >
        <AnimatePresence>
          {isDownloading && (
            <motion.div
              className="download-spinner-dot"
              initial={{ opacity: 1 }}
              animate={{
                rotate: 360,
                x: [0, 22, 0, -22, 0],
                y: [0, -22, 0, 22, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2.8,
                ease: 'easeInOut',
                repeat: Infinity,
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
            />
          )}
        </AnimatePresence>

        <motion.div
          className="download-icon-circle"
          animate={
            isDownloading
              ? {
                  rotate: 180,
                  scale: [0.95, 1, 0.95],
                }
              : {}
          }
          transition={{
            duration: isDownloading ? 1 : 0.4,
            times: isDownloading ? [0, 0.7, 1] : undefined,
          }}
        >
          <motion.div
            className="download-progress-fill"
            initial={{ height: '0%' }}
            animate={isDownloading ? { height: '100%' } : { height: '0%' }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          />

          <motion.svg
            className="download-svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ opacity: 1 }}
            animate={{ opacity: isDownloading ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19V5m0 14-4-4m4 4 4-4"
            />
          </motion.svg>

          <motion.div
            className="download-loading-core"
            initial={{ opacity: 0 }}
            animate={{ opacity: isDownloading ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {!isDownloading && (
            <motion.span
              key={isSuccess ? 'done' : 'idle'}
              className="download-label"
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.25 }}
            >
              {isSuccess ? 'Downloaded!' : label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default DownloadButton;
