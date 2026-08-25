import React, { useState, useEffect, useRef, useMemo } from 'react';
import PhotoTourNav from './PhotoTourNav';
import PhotoTourContent from './PhotoTourContent';
import { photoTourData } from '../../../data/photoTourData';
import './PhotoTourModal.css';

const PhotoTourModal = ({ isOpen, onClose, initialCategory }) => {
  const [activeCategory, setActiveCategory] = useState(photoTourData[0].id);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const contentRef = useRef(null);
  const modalRef = useRef(null);

  // Flatten all photos for single viewer mode
  const allPhotos = useMemo(() => {
    const photos = [];
    photoTourData.forEach((category) => {
      category.rows.forEach((row) => {
        row.images.forEach((url) => {
          photos.push({
            url,
            categoryTitle: category.title,
            categoryId: category.id,
            index: photos.length,
          });
        });
      });
    });
    return photos;
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      setSelectedPhotoIndex(null);

      if (initialCategory) {
        setActiveCategory(initialCategory);
        setTimeout(() => {
          const el = document.getElementById(initialCategory);
          if (el && contentRef.current) {
            contentRef.current.scrollTop = el.offsetTop - 20;
          }
        }, 10);
      } else {
        setActiveCategory(photoTourData[0].id);
        if (contentRef.current) {
          contentRef.current.scrollTop = 0;
        }
      }

      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, initialCategory]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      if (selectedPhotoIndex !== null) {
        setSelectedPhotoIndex(null);
      } else {
        onClose();
      }
    } else if (selectedPhotoIndex !== null) {
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev < allPhotos.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev > 0 ? prev - 1 : allPhotos.length - 1));
      }
    }
  };

  useEffect(() => {
    if (!isOpen || selectedPhotoIndex !== null || !contentRef.current) return;

    const observerCallback = (entries) => {
      let maxRatio = 0;
      let mostVisibleId = activeCategory;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisibleId = entry.target.id;
        }
      });

      if (maxRatio > 0) {
        setActiveCategory(mostVisibleId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: contentRef.current,
      rootMargin: '-50px 0px -50% 0px',
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    });

    const sections = contentRef.current.querySelectorAll('.tour-room-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isOpen, selectedPhotoIndex]);

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element && contentRef.current) {
      contentRef.current.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  };

  if (!isOpen) return null;

  const currentPhoto = selectedPhotoIndex !== null ? allPhotos[selectedPhotoIndex] : null;

  return (
    <div 
      className="photo-tour-overlay" 
      role="dialog" 
      aria-modal="true" 
      aria-label="Photo tour"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      ref={modalRef}
    >
      <div className="photo-tour-container" onClick={(e) => e.stopPropagation()}>
        
        {selectedPhotoIndex !== null && currentPhoto ? (
          /* Fullscreen Single Photo View matching reference */
          <div className="photo-tour-single-view">
            <header className="photo-tour-single-header">
              <button 
                className="photo-tour-btn-icon" 
                onClick={() => setSelectedPhotoIndex(null)}
                aria-label="Grid view"
                title="Back to photo tour"
              >
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentColor' }}>
                  <circle cx="3" cy="3" r="1.4" />
                  <circle cx="8" cy="3" r="1.4" />
                  <circle cx="13" cy="3" r="1.4" />
                  <circle cx="3" cy="8" r="1.4" />
                  <circle cx="8" cy="8" r="1.4" />
                  <circle cx="13" cy="8" r="1.4" />
                  <circle cx="3" cy="13" r="1.4" />
                  <circle cx="8" cy="13" r="1.4" />
                  <circle cx="13" cy="13" r="1.4" />
                </svg>
              </button>

              <h2 className="photo-tour-single-title">
                {currentPhoto.categoryTitle}
              </h2>

              <div className="photo-tour-single-actions">
                <span className="photo-tour-single-counter">
                  {selectedPhotoIndex + 1} of {allPhotos.length}
                </span>
                <button className="photo-tour-btn-icon" onClick={onClose} aria-label="Close">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 3, overflow: 'visible' }}>
                    <path d="m6 6 20 20M26 6 6 26"></path>
                  </svg>
                </button>
              </div>
            </header>

            <div className="photo-tour-single-body">
              <button 
                className="photo-tour-nav-arrow prev" 
                onClick={() => setSelectedPhotoIndex((prev) => (prev > 0 ? prev - 1 : allPhotos.length - 1))}
                aria-label="Previous image"
              >
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 3, overflow: 'visible' }}>
                  <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
                </svg>
              </button>

              <div className="photo-tour-single-img-wrap">
                <img 
                  src={currentPhoto.url} 
                  alt={currentPhoto.categoryTitle} 
                  className="photo-tour-single-img"
                />
              </div>

              <button 
                className="photo-tour-nav-arrow next" 
                onClick={() => setSelectedPhotoIndex((prev) => (prev < allPhotos.length - 1 ? prev + 1 : 0))}
                aria-label="Next image"
              >
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 3, overflow: 'visible' }}>
                  <path d="M12 4 23.3 15.3a1 1 0 0 1 0 1.4L12 28"></path>
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Header Bar */}
            <header className="photo-tour-header">
              <button className="photo-tour-btn-icon" onClick={onClose} aria-label="Back">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 3, overflow: 'visible' }}>
                  <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
                </svg>
              </button>
              
              <h2 className="photo-tour-header-title">Photo tour</h2>

              <div className="photo-tour-header-actions">
                <button className="photo-tour-btn-icon" aria-label="Share">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 2, overflow: 'visible' }}>
                    <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289"></path>
                  </svg>
                </button>
                <button className="photo-tour-btn-icon" aria-label="Save">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 2, overflow: 'visible' }}>
                    <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z"></path>
                  </svg>
                </button>
              </div>
            </header>

            {/* Scrollable Container */}
            <div className="photo-tour-content-scroll" ref={contentRef}>
              {/* Top Category Navigation */}
              <PhotoTourNav 
                data={photoTourData} 
                activeCategory={activeCategory} 
                onCategoryClick={handleCategoryClick} 
              />

              {/* Scrollable Room Content */}
              <PhotoTourContent 
                data={photoTourData} 
                onPhotoClick={(index) => setSelectedPhotoIndex(index)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PhotoTourModal;
