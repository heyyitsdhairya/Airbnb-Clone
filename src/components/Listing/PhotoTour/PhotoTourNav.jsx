import React from 'react';

const PhotoTourNav = ({ data, activeCategory, onCategoryClick }) => {
  return (
    <div className="photo-tour-top-nav">
      <div className="photo-tour-nav-scroll">
        {data.map((category) => (
          <button
            key={category.id}
            className={`photo-tour-nav-card ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryClick(category.id)}
            type="button"
          >
            <div className="photo-tour-card-thumb">
              <img src={category.coverImage} alt={category.title} />
            </div>
            <span className="photo-tour-card-label">
              {category.title === 'Additional photos' ? (
                <>Additional<br />photos</>
              ) : (
                category.title
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhotoTourNav;
