import React from 'react';
import { Grid } from 'lucide-react';
import './Gallery.css';

const Gallery = ({ images, onOpenPhotoTour, onOpenLightbox }) => {
  const displayImages = images.slice(0, 5);

  return (
    <section className="gallery-section">
      <div className="gallery-grid">
        {/* Main Image - Left Half */}
        <div 
          className="gallery-main" 
          onClick={() => onOpenPhotoTour('tour-room-1')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onOpenPhotoTour('tour-room-1')}
        >
          <img src={displayImages[0].url} alt={displayImages[0].alt} loading="eager" fetchPriority="high" decoding="async" />
          <div className="gallery-overlay"></div>
        </div>

        {/* 4 Small Images - Right Half Grid */}
        <div className="gallery-sub-grid">
          {displayImages.slice(1).map((img, index) => {
            // Map index to photo tour category
            // 0: Living area side angle -> tour-room-1
            // 1: Jacuzzi tub -> tour-room-1 
            // 2: Bedroom -> tour-room-3
            // 3: Patio seating / Exterior -> tour-room-6
            const categoryMap = ['tour-room-1', 'tour-room-1', 'tour-room-3', 'tour-room-6'];
            const catId = categoryMap[index];
            
            return (
              <div 
                key={index} 
                className={`gallery-sub-item ${index === 1 ? 'top-right' : ''} ${index === 3 ? 'bottom-right' : ''}`}
                onClick={() => onOpenPhotoTour(catId)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onOpenPhotoTour(catId)}
              >
                <img src={img.url} alt={img.alt} loading="lazy" decoding="async" />
                <div className="gallery-overlay"></div>
              </div>
            );
          })}

          {/* Show all photos button (absolute positioned inside the last image) */}
          <button className="show-all-photos-btn" onClick={() => onOpenPhotoTour(null)}>
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', height: '16px', width: '16px', fill: 'currentColor', flexShrink: 0}}>
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
            <span className="font-medium">Show all photos</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
