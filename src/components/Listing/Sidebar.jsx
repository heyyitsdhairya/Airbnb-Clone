import React from 'react';
import { Star, Flag, ChevronDown } from 'lucide-react';
import './Sidebar.css';



const Sidebar = ({ onReserveClick }) => {
  return (
    <div className="sidebar-container">
      {/* Promo Card */}
      <div className="sidebar-promo">
        <div className="promo-left">
          <img src="/images/coupon_tag_exact.png" alt="Discount Tag" className="promo-tag-exact-img" />
          <div className="promo-text">
            <h4 className="promo-title">Get 10% off your next stay.</h4>
            <a href="#" className="promo-terms">Terms apply</a>
          </div>
        </div>
        <button className="promo-claim-btn">Claim</button>
      </div>

      {/* Reservation Widget */}
      <div className="reservation-widget">
        <div className="price-header">
          <span className="price-amount">₹28,499</span>
          <span className="price-label"> for 5 nights</span>
        </div>

        <div className="booking-inputs">
          <div className="dates-row">
            <div className="date-input check-in">
              <label>CHECK-IN</label>
              <div className="date-value">10/18/2026</div>
            </div>
            <div className="date-input check-out">
              <label>CHECKOUT</label>
              <div className="date-value">10/23/2026</div>
            </div>
          </div>
          <div className="guests-row">
            <div className="guests-input">
              <label>GUESTS</label>
              <div className="guests-value">2 guests</div>
            </div>
            <ChevronDown size={20} className="chevron-icon" />
          </div>
        </div>

        <div className="cancellation-info">
          Free cancellation before <strong>17 October</strong>
        </div>

        <button className="reserve-btn" onClick={onReserveClick} type="button">
          Reserve
        </button>

        <div className="charge-notice">
          You won't be charged yet
        </div>
      </div>

      <div className="report-listing">
        <button className="report-btn">
          <Flag size={14} />
          <span className="underline">Report this listing</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
