import React from 'react';
import { ChevronRight, Plus, Minus, Search } from 'lucide-react';
import './LocationSection.css';

const LocationSection = () => {
  return (
    <section className="location-section" id="location">
      <h2 className="section-title">Where you'll be</h2>
      <p className="location-subtitle">
        Candolim, Goa, India
      </p>
      
      <div className="map-container">
        {/* Exact Replica of the map */}
        <div className="map-replica">
          {/* Blue water section */}
          <div className="map-water"></div>
          {/* Green land section */}
          <div className="map-land">
            {/* Grid pattern */}
            <div className="map-grid"></div>
            {/* Decorative circles */}
            <div className="map-circle circle-left"></div>
            <div className="map-circle circle-right"></div>
          </div>
          
          {/* Map Controls */}
          <button className="map-control-btn top-left" aria-label="Search map">
            <Search size={16} strokeWidth={2.5} />
          </button>
          <div className="map-zoom-controls top-right">
            <button className="map-control-btn" aria-label="Zoom in"><Plus size={16} strokeWidth={2.5} /></button>
            <div className="map-control-divider"></div>
            <button className="map-control-btn" aria-label="Zoom out"><Minus size={16} strokeWidth={2.5} /></button>
          </div>
          
          {/* Center Pin */}
          <div className="map-pin">
            <img src="/images/home_logo_exact.png" alt="Property Location" className="pin-exact-img" />
          </div>
        </div>
      </div>
      
      <p className="exact-location-text">Exact location will be provided after booking.</p>

      <div className="neighbourhood-highlights">
        <h3 className="highlights-title">Neighbourhood highlights</h3>
        <p className="highlights-desc">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <button className="highlights-show-more-btn">
          <span className="underline-text">Show more</span>
          <ChevronRight size={18} className="chevron-icon" />
        </button>
      </div>
    </section>
  );
};

export default LocationSection;
