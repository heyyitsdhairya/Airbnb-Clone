import React from 'react';
import './AmenitiesSection.css';

// Import extracted SVGs
import {
  IconKitchen,
  IconWifi,
  IconDedicatedWorkspace,
  IconFreeParkingOnPremises,
  IconPool,
  IconHotTub,
  IconPetsAllowed,
  IconExteriorSecurityCamerasOnProperty,
  IconCarbonMonoxideAlarm,
  IconSmokeAlarm
} from './amenitiesIcons';

const AmenitiesSection = ({ onOpenAmenities }) => {
  const amenities = [
    { name: 'Kitchen', icon: IconKitchen },
    { name: 'Wifi', icon: IconWifi },
    { name: 'Dedicated workspace', icon: IconDedicatedWorkspace },
    { name: 'Free parking on premises', icon: IconFreeParkingOnPremises },
    { name: 'Pool', icon: IconPool },
    { name: 'Hot tub', icon: IconHotTub },
    { name: 'Pets allowed', icon: IconPetsAllowed },
    { name: 'Exterior security cameras on property', icon: IconExteriorSecurityCamerasOnProperty },
    { name: 'Carbon monoxide alarm', icon: IconCarbonMonoxideAlarm, strikethrough: true },
    { name: 'Smoke alarm', icon: IconSmokeAlarm, strikethrough: true }
  ];

  const renderAmenity = (item) => {
    const Icon = item.icon;
    return (
      <div className="amenity-item" key={item.name}>
        <div className={`amenity-icon-wrapper ${item.strikethrough ? 'text-muted' : ''}`}>
          <Icon />
        </div>
        <span className={item.strikethrough ? 'strikethrough-text text-muted' : ''}>
          {item.name}
        </span>
      </div>
    );
  };

  return (
    <section className="amenities-section border-bottom" id="amenities-section">
      <h2 className="section-title">What this place offers</h2>
      
      <div className="amenities-grid">
        {amenities.map(renderAmenity)}
      </div>

      <button className="show-all-amenities-btn" onClick={onOpenAmenities}>
        Show all 50 amenities
      </button>
    </section>
  );
};

export default AmenitiesSection;
