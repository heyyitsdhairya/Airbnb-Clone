import React from 'react';

const PhotoTourContent = ({ data, onPhotoClick }) => {
  let globalIndexCounter = 0;

  return (
    <div className="tour-rooms-container">
      {data.map((category) => (
        <section className="tour-room-section" id={category.id} key={category.id}>
          {/* Left Column: Room Info */}
          <div className="tour-room-info">
            <h2 className="tour-room-title">{category.title}</h2>
            {category.amenities && (
              <div className="tour-room-amenities">{category.amenities}</div>
            )}
          </div>

          {/* Right Column: Photo Grid */}
          <div className="tour-room-grid-col">
            {category.rows.map((row, rowIndex) => (
              <div 
                key={rowIndex} 
                className={`tour-grid-row ${row.type === 'full' ? 'tour-grid-full' : 'tour-grid-half'}`}
              >
                {row.images.map((imgSrc, imgIndex) => {
                  const currentIndex = globalIndexCounter++;
                  return (
                    <div 
                      className="tour-image-wrapper" 
                      key={imgIndex}
                      onClick={() => onPhotoClick && onPhotoClick(currentIndex)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src={imgSrc} alt={category.title} loading="lazy" />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default PhotoTourContent;
