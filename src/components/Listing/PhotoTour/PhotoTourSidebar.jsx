import React from 'react';

const PhotoTourSidebar = ({ data, activeCategory, onCategoryClick }) => {
  return (
    <nav className="photo-tour-sidebar" aria-label="Photo categories">
      {data.map((category) => (
        <button
          key={category.id}
          className={`photo-tour-nav-btn ${activeCategory === category.id ? 'active' : ''}`}
          type="button"
          onClick={() => onCategoryClick(category.id)}
          aria-label={category.title}
        >
          <img src={category.coverImage} alt="" loading="lazy" className="photo-tour-nav-img" />
          <span className="photo-tour-nav-text">{category.title}</span>
        </button>
      ))}
    </nav>
  );
};

export default PhotoTourSidebar;
