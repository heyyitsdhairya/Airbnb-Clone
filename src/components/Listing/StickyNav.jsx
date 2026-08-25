import React, { useState, useEffect } from 'react';
import './StickyNav.css';

const StickyNav = ({ onReserveClick }) => {
  const [active, setActive] = useState('Photos');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Show sticky nav after scrolling past gallery (~500px)
      if (scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate absolute top position of target section elements
      const getTop = (id) => {
        const el = document.getElementById(id);
        if (!el) return 0;
        return el.getBoundingClientRect().top + window.pageYOffset;
      };

      const scrollThreshold = scrollY + 150; // Offset for sticky header

      const amenitiesTop = getTop('amenities-section');
      const reviewsTop = getTop('reviews-section') || getTop('reviews');
      const locationTop = getTop('location');

      let current = 'Photos';

      // 1. Location section (Map)
      if (locationTop > 0 && scrollThreshold >= locationTop) {
        current = 'Location';
      }
      // 2. Reviews section (4.95 score hero)
      else if (reviewsTop > 0 && scrollThreshold >= reviewsTop) {
        current = 'Reviews';
      }
      // 3. Amenities section ('What this place offers')
      else if (amenitiesTop > 0 && scrollThreshold >= amenitiesTop) {
        current = 'Amenities';
      }
      // 4. Photos section (Everything above 'What this place offers')
      else {
        current = 'Photos';
      }

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (name) => {
    setActive(name);
    let targetId = 'photos';

    if (name === 'Amenities') {
      targetId = 'amenities-section';
    } else if (name === 'Reviews') {
      targetId = 'reviews-section';
    } else if (name === 'Location') {
      targetId = 'location';
    } else if (name === 'Photos') {
      targetId = 'photos';
    }

    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="sticky-nav-container">
      <div className="sticky-nav-inner">
        <nav className="sticky-nav-tabs">
          {['Photos', 'Amenities', 'Reviews', 'Location'].map((item) => (
            <button 
              key={item} 
              className={`sticky-nav-item ${active === item ? 'active' : ''}`}
              onClick={() => scrollToSection(item)}
              type="button"
            >
              <span className="sticky-nav-text">{item}</span>
            </button>
          ))}
        </nav>

        <div className="sticky-nav-right">
          <div className="sticky-nav-info">
            <div className="sticky-nav-price-row">
              <span className="sticky-nav-price">₹28,499</span>
              <span className="sticky-nav-nights"> for 5 nights</span>
            </div>
            <div className="sticky-nav-rating-row">
              <span className="star">★</span>
              <span className="rating font-semibold">4.95</span>
              <span className="dot"> · </span>
              <span className="reviews">19 reviews</span>
            </div>
          </div>
          <button 
            className="sticky-nav-reserve-btn"
            onClick={onReserveClick}
            type="button"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
