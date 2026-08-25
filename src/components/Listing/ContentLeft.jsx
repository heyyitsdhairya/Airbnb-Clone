import React, { useState } from 'react';
import { Waves, Wind, DoorClosed } from 'lucide-react';
import AmenitiesSection from './AmenitiesSection';
import CalendarSection from './CalendarSection';
import './ContentLeft.css';

const DESC_LINE_1 = `🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy`;
const DESC_LINE_2 = `1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind.`;
const DESC_LINE_3 = `Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors.`;
const DESC_LINE_4 = `Just minutes from Candolim Beach ⛱️, popular cafés, restaurants, and nightlife 🍹, it's`;
const DESC_LINE_5 = `ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. 💖🌴`;

const ContentLeft = ({ onOpenAmenities }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="content-left">
      {/* Subtitle & Meta */}
      <section className="meta-section">
        <h1 className="main-title">Entire serviced apartment in Candolim, India</h1>
        <ol className="meta-list">
          <li>3 guests</li>
          <li>1 bedroom</li>
          <li>1 bed</li>
          <li>1 bathroom</li>
        </ol>
      </section>

      {/* Guest Favourite Badge - inline style matching reference */}
      <section className="guest-badge-wrapper">
        <div className="guest-badge-inline">
          <div className="gf-left">
            <img src="/images/laurel_left_branch_clean.png" alt="" className="gf-laurel-branch" />
            <div className="gf-text">
              <span className="gf-title">Guest<br />favourite</span>
            </div>
            <img src="/images/laurel_right_branch_clean.png" alt="" className="gf-laurel-branch" />
          </div>
          <div className="gf-description">
            <div style={{ whiteSpace: 'nowrap' }}>One of the most loved homes on Airbnb,</div>
            <div style={{ whiteSpace: 'nowrap' }}>according to guests</div>
          </div>
          <div className="gf-right">
            <div className="gf-rating">
              <span className="gf-score">4.95</span>
              <span className="gf-stars" style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '9px', width: '9px', fill: 'currentColor'}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
                ))}
              </span>
            </div>
            <div className="gf-divider"></div>
            <div className="gf-reviews">
              <span className="gf-reviews-num">19</span>
              <span className="gf-reviews-label">Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Host Row */}
      <section className="host-section">
        <div className="host-avatar-sm">
          <img src="/images/mirashya_exact.png" alt="Host" style={{ mixBlendMode: 'multiply' }} />
        </div>
        <div className="host-info">
          <h3 className="host-name">Hosted by Mirashya Homes</h3>
          <p className="host-years">2 years hosting</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights-section">
        <div className="highlight-item">
          <div className="highlight-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px' }}>
            <img src="/images/icon_1.png" alt="Outdoor entertainment" style={{ height: '24px', width: '24px', objectFit: 'contain', mixBlendMode: 'multiply', imageRendering: '-webkit-optimize-contrast' }} />
          </div>
          <div className="highlight-text">
            <h4>Outdoor entertainment</h4>
            <p>The pool and alfresco dining are great for summer trips.</p>
          </div>
        </div>
        <div className="highlight-item">
          <div className="highlight-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px' }}>
            <img src="/images/icon_2.png" alt="Designed for staying cool" style={{ height: '24px', width: '24px', objectFit: 'contain', mixBlendMode: 'multiply', imageRendering: '-webkit-optimize-contrast' }} />
          </div>
          <div className="highlight-text">
            <h4>Designed for staying cool</h4>
            <p>Beat the heat with the A/C and ceiling fan.</p>
          </div>
        </div>
        <div className="highlight-item">
          <div className="highlight-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px' }}>
            <img src="/images/icon_3.png" alt="Self check-in" style={{ height: '24px', width: '24px', objectFit: 'contain', mixBlendMode: 'multiply', imageRendering: '-webkit-optimize-contrast' }} />
          </div>
          <div className="highlight-text">
            <h4>Self check-in</h4>
            <p>You can check in with the building staff.</p>
          </div>
        </div>
      </section>

      {/* Property Description with Show more/less */}
      <section className="description-section border-bottom">
        <div className="description-translate-box">
          Some info has been automatically translated. <a href="#" className="translate-link">Show original</a>
        </div>
        <div className="description-lines">
          <div>{DESC_LINE_1}</div>
          <div>{DESC_LINE_2}</div>
          <div>{DESC_LINE_3}</div>
          <div className={!isExpanded ? "line-faded" : ""}>{DESC_LINE_4}</div>
          {isExpanded && <div>{DESC_LINE_5}</div>}
        </div>
        <button
          className="description-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="toggle-label">{isExpanded ? 'Show less' : 'Show more'}</span>
          <span className="toggle-chevron">&gt;</span>
        </button>
      </section>

      {/* Where you'll sleep Section */}
      <section className="where-sleep-section border-bottom">
        <h2 className="subtitle" style={{marginBottom: 20}}>Where you'll sleep</h2>
        <div className="sleep-cards-container">
          <div className="sleep-card">
            <div className="sleep-img">
              <img src="/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg" alt="Bedroom" />
            </div>
            <div className="sleep-info">
              <h4 className="sleep-room-title">Bedroom</h4>
              <p className="sleep-bed-desc">1 double bed</p>
            </div>
          </div>
          <div className="sleep-card">
            <div className="sleep-img">
              <img src="/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg" alt="Living room" />
            </div>
            <div className="sleep-info">
              <h4 className="sleep-room-title">Living room</h4>
              <p className="sleep-bed-desc">1 sofa</p>
            </div>
          </div>
        </div>
      </section>

      <AmenitiesSection onOpenAmenities={onOpenAmenities} />
      <CalendarSection />
    </div>
  );
};

export default ContentLeft;
