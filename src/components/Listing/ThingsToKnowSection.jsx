import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { IconCancellationPolicy, IconHouseRules, IconSafetyProperty } from './thingsToKnowIcons';
import './ThingsToKnowSection.css';

const ThingsToKnowSection = () => {
  const nearbyStays = [
    {
      img: '/images/s1.jpeg',
      title: 'Beautiful studio with a view to die for.',
      price: '₹23,600',
      rating: '4.91'
    },
    {
      img: '/images/s2.jpeg',
      title: 'NAQAB - 1bhk with private pool, Calangute',
      price: '₹42,218',
      rating: '4.95'
    },
    {
      img: '/images/s3.jpeg',
      title: 'Greentique Luxury Flat with plunge pool, Calangute',
      price: '₹44,506',
      rating: '4.94'
    },
    {
      img: '/images/s4.jpeg',
      title: 'The Tropical Studio | 5 mins to Beach',
      price: '₹22,824',
      rating: '4.96'
    },
    {
      img: '/images/s5.jpeg',
      title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
      price: '₹39,942',
      rating: '4.95'
    },
    {
      img: '/images/s6.jpeg',
      title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool',
      price: '₹45,648',
      rating: '5.0'
    },
    {
      img: '/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg',
      title: 'Luxury Apt | Private Pool | 6 Mins from Beach',
      price: '₹48,786',
      rating: '4.93'
    },
    {
      img: '/images/s4.jpeg',
      title: 'Serendipity Cottage - Calm Stay in Calangute-Baga.',
      price: '₹22,824',
      rating: '4.92'
    }
  ];

  const CARDS_PER_PAGE = 5;
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, nearbyStays.length - CARDS_PER_PAGE);
  const totalPages = Math.ceil(nearbyStays.length / CARDS_PER_PAGE);
  const currentPage = currentIndex === 0 ? 1 : Math.ceil(currentIndex / CARDS_PER_PAGE) + 1;

  const handleNext = () => setCurrentIndex(Math.min(currentIndex + CARDS_PER_PAGE, maxIndex));
  const handlePrev = () => setCurrentIndex(Math.max(currentIndex - CARDS_PER_PAGE, 0));

  return (
    <div className="things-to-know-wrapper">
      {/* Things to know */}
      <section className="things-to-know-section border-bottom-ttk">
        <h2 className="ttk-section-title">Things to know</h2>

        <div className="rules-columns">
          {/* Cancellation */}
          <div className="rule-col">
            <div className="rule-icon"><IconCancellationPolicy /></div>
            <div className="rule-title">Cancellation policy</div>
            <div className="rule-list">
              <p>Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.</p>
              <p>Review this host's full policy for details.</p>
              <a href="#" className="rule-learn-more">Learn more</a>
            </div>
          </div>

          {/* House rules */}
          <div className="rule-col">
            <div className="rule-icon"><IconHouseRules /></div>
            <div className="rule-title">House rules</div>
            <div className="rule-list">
              <p>Check-in after 2:00 pm</p>
              <p>Checkout before 11:00 am</p>
              <p>3 guests maximum</p>
              <a href="#" className="rule-learn-more">Learn more</a>
            </div>
          </div>

          {/* Safety */}
          <div className="rule-col">
            <div className="rule-icon"><IconSafetyProperty /></div>
            <div className="rule-title">Safety &amp; property</div>
            <div className="rule-list">
              <p>Carbon monoxide alarm not reported</p>
              <p>Smoke alarm not reported</p>
              <p>Exterior security cameras on property</p>
              <a href="#" className="rule-learn-more">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      {/* More stays nearby */}
      <section className="more-stays-section">
        <div className="carousel-header">
          <h2 className="ttk-section-title" style={{marginBottom: 0}}>More stays nearby</h2>
          <div className="carousel-controls">
            <span className="page-num">{currentPage} / {totalPages}</span>
            <button
              className="carousel-btn"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className="carousel-btn"
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="carousel-viewport">
          <div 
            className="stays-grid"
            style={{ transform: `translateX(calc(-${currentIndex * 20}% - ${currentIndex * 3.2}px))` }}
          >
            {nearbyStays.map((stay, i) => (
              <div key={i} className="stay-card">
                <div className="stay-img">
                  <img src={stay.img} alt={stay.title} />
                </div>
                <div className="stay-info">
                  <h4 className="stay-title">{stay.title}</h4>
                  <div className="stay-price-rating">
                    <span className="stay-price">{stay.price}</span>
                    <span className="stay-rating">
                      <Star size={12} fill="black" strokeWidth={0} /> {stay.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThingsToKnowSection;
