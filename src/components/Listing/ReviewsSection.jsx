import React from 'react';
import { IconCleanliness, IconAccuracy, IconCheckIn, IconCommunication, IconLocation, IconValue, IconComfort, IconCondition, IconHospitality, IconAmenities } from './reviewIcons';
import './ReviewsSection.css';

const ReviewsSection = () => {
  const pillsRef = React.useRef(null);
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const handleMouseDown = (e) => {
    if (!pillsRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - pillsRef.current.offsetLeft);
    setScrollLeft(pillsRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown || !pillsRef.current) return;
    e.preventDefault();
    const x = e.pageX - pillsRef.current.offsetLeft;
    const walk = (x - startX) * 1.8;
    pillsRef.current.scrollLeft = scrollLeft - walk;
  };

  const reviews = [
    {
      name: 'Amit',
      initial: 'A',
      image: null, // Shown as peach initial in reference
      avatarColor: '#f0ceb6',
      years: '2 months on Airbnb',
      date: '1 week ago',
      text: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.'
    },
    {
      name: 'Aheesh',
      initial: 'A',
      image: '/images/rev1.jpeg', // male profile photo
      years: '3 years on Airbnb',
      date: '2 weeks ago',
      text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
      showMore: true
    },
    {
      name: 'Samiksha',
      initial: 'S',
      image: '/images/rev2.jpeg', // female photo
      years: '8 months on Airbnb',
      date: 'May 2026',
      text: 'the host nitish was really great help'
    },
    {
      name: 'Vedant',
      initial: 'V',
      image: null, // Purple/lilac initial in reference
      avatarColor: '#e8d8f0',
      years: '4 years on Airbnb',
      date: 'May 2026',
      text: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....',
      showMore: true
    },
    {
      name: 'Vaibhav S',
      initial: 'V',
      image: '/images/rev3.jpeg', // female with red top
      years: '3 years on Airbnb',
      date: 'May 2026',
      text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too."
    },
    {
      name: 'Mohd',
      initial: 'M',
      image: '/images/rev4.jpeg', // female profile
      years: '5 years on Airbnb',
      date: 'May 2026',
      text: 'Great place. Exactly as described in the listing.'
    }
  ];

  return (
    <section className="reviews-section" id="reviews-section">
      {/* Guest Favourite Hero Header (Image 2) */}
      <div className="reviews-hero-header">
        <div className="gf-rating-wreath">
          <img src="/images/laurel-left.png" alt="Laurel left" className="laurel-wreath-img" />
          <span className="gf-hero-score">4.95</span>
          <img src="/images/laurel-right.png" alt="Laurel right" className="laurel-wreath-img" />
        </div>
        <h2 className="gf-hero-title">Guest favourite</h2>
        <p className="gf-hero-subtitle">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <a href="#" className="how-reviews-work-link">How reviews work</a>
      </div>

      {/* Ratings breakdown */}
      <div className="ratings-breakdown">
        <div className="rating-category overall">
          <span className="category-label">Overall rating</span>
          <div className="overall-bars">
            <div className="bar-row"><span className="num">5</span><div className="bar"><div className="fill" style={{width: '95%'}}></div></div></div>
            <div className="bar-row"><span className="num">4</span><div className="bar"><div className="fill" style={{width: '4%'}}></div></div></div>
            <div className="bar-row"><span className="num">3</span><div className="bar"><div className="fill" style={{width: '1%'}}></div></div></div>
            <div className="bar-row"><span className="num">2</span><div className="bar"><div className="fill" style={{width: '0%'}}></div></div></div>
            <div className="bar-row"><span className="num">1</span><div className="bar"><div className="fill" style={{width: '0%'}}></div></div></div>
          </div>
        </div>
        <div className="rating-divider"></div>
        <div className="rating-category">
          <span className="category-label">Cleanliness</span>
          <span className="category-score">5.0</span>
          <div className="category-icon-svg"><IconCleanliness /></div>
        </div>
        <div className="rating-divider"></div>
        <div className="rating-category">
          <span className="category-label">Accuracy</span>
          <span className="category-score">5.0</span>
          <div className="category-icon-svg"><IconAccuracy /></div>
        </div>
        <div className="rating-divider"></div>
        <div className="rating-category">
          <span className="category-label">Check-in</span>
          <span className="category-score">5.0</span>
          <div className="category-icon-svg"><IconCheckIn /></div>
        </div>
        <div className="rating-divider"></div>
        <div className="rating-category">
          <span className="category-label">Communication</span>
          <span className="category-score">5.0</span>
          <div className="category-icon-svg"><IconCommunication /></div>
        </div>
        <div className="rating-divider"></div>
        <div className="rating-category">
          <span className="category-label">Location</span>
          <span className="category-score">4.8</span>
          <div className="category-icon-svg"><IconLocation /></div>
        </div>
        <div className="rating-divider"></div>
        <div className="rating-category">
          <span className="category-label">Value</span>
          <span className="category-score">4.8</span>
          <div className="category-icon-svg"><IconValue /></div>
        </div>
      </div>

      {/* Category Tag Pills (Image 3) */}
      <div 
        className={`review-pills-scroll-container ${isMouseDown ? 'grabbing' : ''}`}
        ref={pillsRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="review-pills-row">
          <div className="review-category-pill">
            <img src="/images/comfort.png" alt="Comfort" className="pill-3d-icon" />
            <span className="pill-text-label">Comfort</span>
            <span className="pill-text-score">6</span>
          </div>
          <div className="review-category-pill">
            <img src="/images/accuracy.png" alt="Accuracy" className="pill-3d-icon" />
            <span className="pill-text-label">Accuracy</span>
            <span className="pill-text-score">5</span>
          </div>
          <div className="review-category-pill">
            <img src="/images/hot-tub.png" alt="Hot tub" className="pill-3d-icon" />
            <span className="pill-text-label">Hot tub</span>
            <span className="pill-text-score">5</span>
          </div>
          <div className="review-category-pill">
            <img src="/images/condition.png" alt="Condition" className="pill-3d-icon" />
            <span className="pill-text-label">Condition</span>
            <span className="pill-text-score">4</span>
          </div>
          <div className="review-category-pill">
            <img src="/images/hospitality.png" alt="Hospitality" className="pill-3d-icon" />
            <span className="pill-text-label">Hospitality</span>
            <span className="pill-text-score">8</span>
          </div>
          <div className="review-category-pill">
            <img src="/images/cleanliness.png" alt="Cleanliness" className="pill-3d-icon" />
            <span className="pill-text-label">Cleanliness</span>
            <span className="pill-text-score">4</span>
          </div>
          <div className="review-category-pill">
            <img src="/images/amenities.png" alt="Amenities" className="pill-3d-icon" />
            <span className="pill-text-label">Amenities</span>
            <span className="pill-text-score">2</span>
          </div>
          <div className="review-category-pill">
            <img src="/images/decor.png" alt="Decor" className="pill-3d-icon" />
            <span className="pill-text-label">Decor</span>
            <span className="pill-text-score">2</span>
          </div>
          <div className="review-category-pill">
            <img src="/images/indoor-spaces.png" alt="Indoor spaces" className="pill-3d-icon" />
            <span className="pill-text-label">Indoor spaces</span>
            <span className="pill-text-score">2</span>
          </div>
          <div className="review-category-pill">
            <img src="/images/location.png" alt="Location" className="pill-3d-icon" />
            <span className="pill-text-label">Location</span>
            <span className="pill-text-score">2</span>
          </div>
        </div>
      </div>

      {/* Reviews 2-column grid */}
      <div className="reviews-grid">
        {reviews.map((review, i) => (
          <div key={i} className="review-card">
            <div className="reviewer-info">
              <div
                className="reviewer-avatar"
                style={{ backgroundColor: review.image ? 'transparent' : (review.avatarColor || '#f0ceb6') }}
              >
                {review.image
                  ? <img src={review.image} alt={review.name} style={{width:'100%', height:'100%', borderRadius:'50%', objectFit:'cover'}} />
                  : review.initial
                }
              </div>
              <div>
                <div className="reviewer-name">{review.name}</div>
                <div className="reviewer-years">{review.years}</div>
              </div>
            </div>
            <div className="review-meta">
              <span className="review-stars">★★★★★</span>
              <span className="meta-dot">·</span>
              <span className="review-date">{review.date}</span>
            </div>
            <p className="review-text">{review.text}</p>
            {review.showMore && (
              <button className="show-more-review">Show more</button>
            )}
          </div>
        ))}
      </div>

      {/* Show all reviews button */}
      <button className="show-all-reviews-btn">
        Show all 19 reviews
      </button>
    </section>
  );
};

export default ReviewsSection;
