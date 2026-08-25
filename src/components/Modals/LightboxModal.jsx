import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './LightboxModal.css';

const LightboxModal = ({ isOpen, onClose, images, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const lightboxRef = useRef(null);

  // Sync state if initialIndex changes when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      document.body.classList.add('modal-open');
      // Focus the modal for keyboard accessibility
      if (lightboxRef.current) {
        lightboxRef.current.focus();
      }
    } else {
      document.body.classList.remove('modal-open');
    }
    
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, initialIndex]);

  const goToNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'ArrowLeft') {
      goToPrev();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="lightbox-overlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      ref={lightboxRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <div className="lightbox-header">
        <button 
          className="lightbox-close-btn" 
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <X size={20} color="white" />
          <span className="close-text">Close</span>
        </button>
        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>
        <div className="spacer"></div>
      </div>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="lightbox-nav-btn prev" 
          onClick={goToPrev}
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="lightbox-image-container">
          <img 
            src={images[currentIndex].url} 
            alt={images[currentIndex].alt || `Image ${currentIndex + 1}`} 
            className="lightbox-image"
          />
        </div>

        <button 
          className="lightbox-nav-btn next" 
          onClick={goToNext}
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default LightboxModal;
