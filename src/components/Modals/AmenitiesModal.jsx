import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { modalSvgMap } from './modalAmenitySvgs';
import './AmenitiesModal.css';

const iconMap = {
  'Hairdryer': '/amenities_icons/hairdryer.png',
  'Cleaning products': '/amenities_icons/cleaning_products.png',
  'Shampoo': '/amenities_icons/shampoo.png',
  'Shower gel': '/amenities_icons/shower_gel.png',
  'Hot water': '/amenities_icons/hot_water.png',
  'Washing machine': '/amenities_icons/washing_machine.png',
  'Hangers': '/amenities_icons/hangers.png',
  'Bed linen': '/amenities_icons/bed_linen.png',
  'Room-darkening blinds': '/amenities_icons/room_darkening_blinds.png',
  'Iron': '/amenities_icons/iron.png',
  'Clothes storage': '/amenities_icons/clothes_storage.png',
  'Cot': '/amenities_icons/cot.png',
  'TV': '/amenities_icons/tv.png',
  'Air conditioning': '/amenities_icons/air_conditioning.png',
  'Ceiling fan': '/amenities_icons/ceiling_fan.png',
  'Exterior security cameras on property': '/amenities_icons/exterior_security_cameras.png',
  'Carbon monoxide alarm': '/amenities_icons/carbon_monoxide_alarm.png',
  'Smoke alarm': '/amenities_icons/smoke_alarm.png',
  'Wifi': '/amenities_icons/wifi.png',
  'Dedicated workspace': '/amenities_icons/dedicated_workspace.png',
  'Kitchen': '/amenities_icons/kitchen.png',
  'Fridge': '/amenities_icons/fridge.png',
  'Freezer': '/amenities_icons/freezer.png',
  'Microwave': '/amenities_icons/microwave.png',
  'Cooking basics': '/amenities_icons/cooking_basics.png',
  'Crockery and cutlery': '/amenities_icons/crockery_and_cutlery.png',
  'Kettle': '/amenities_icons/kettle.png',
  'Coffee': '/amenities_icons/coffee.png',
  'Wine glasses': '/amenities_icons/wine_glasses.png',
  'Toaster': '/amenities_icons/toaster.png',
  'Blender': '/amenities_icons/blender.png',
  'Cooker': '/amenities_icons/cooker.png',
  'Private entrance': '/amenities_icons/private_entrance.png',
  'Patio or balcony': '/amenities_icons/patio_or_balcony.png',
  'Outdoor dining area': '/amenities_icons/outdoor_dining_area.png',
  'Free parking on premises': '/amenities_icons/free_parking.png',
  'Pool': '/amenities_icons/pool.png',
  'Hot tub': '/amenities_icons/hot_tub.png',
  'Gym': '/amenities_icons/gym.png',
  'Pets allowed': '/amenities_icons/pets_allowed.png',
  'Cleaning available during stay': '/amenities_icons/cleaning_available.png',
  'Long-term stays allowed': '/amenities_icons/long_term_stays.png',
  'Self check-in': '/amenities_icons/self_check_in.png',
};

const getAmenityIcon = (name) => {
  const SvgIcon = modalSvgMap[name];
  if (SvgIcon) {
    return <SvgIcon />;
  }
  const src = iconMap[name];
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        style={{
          width: '24px',
          height: '24px',
          objectFit: 'contain',
          display: 'block'
        }}
      />
    );
  }
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="10"/>
      <path d="M12 16h8"/>
    </svg>
  );
};

const AMENITIES_DATA = [
  {
    category: 'Bathroom',
    items: ['Hairdryer', 'Cleaning products', 'Shampoo', 'Hot water', 'Shower gel']
  },
  {
    category: 'Bedroom and laundry',
    items: ['Washing machine', 'Hangers', 'Bed linen', 'Room-darkening blinds', 'Iron', 'Clothes storage', 'Cot']
  },
  {
    category: 'Entertainment',
    items: ['TV']
  },
  {
    category: 'Family',
    items: ['Cot']
  },
  {
    category: 'Heating and cooling',
    items: ['Air conditioning', 'Ceiling fan']
  },
  {
    category: 'Home safety',
    items: [
      'Exterior security cameras on property',
      { name: 'Carbon monoxide alarm', notIncluded: true },
      { name: 'Smoke alarm', notIncluded: true }
    ]
  },
  {
    category: 'Internet and office',
    items: ['Wifi', 'Dedicated workspace']
  },
  {
    category: 'Kitchen and dining',
    items: ['Kitchen', 'Fridge', 'Freezer', 'Microwave', 'Cooking basics', 'Crockery and cutlery', 'Kettle', 'Coffee', 'Wine glasses', 'Toaster', 'Blender', 'Cooker']
  },
  {
    category: 'Location features',
    items: ['Private entrance']
  },
  {
    category: 'Outdoor',
    items: ['Patio or balcony', 'Outdoor dining area']
  },
  {
    category: 'Parking and facilities',
    items: ['Free parking on premises', 'Pool', 'Hot tub', 'Gym']
  },
  {
    category: 'Services',
    items: ['Pets allowed', 'Cleaning available during stay', 'Long-term stays allowed', 'Self check-in']
  }
];

const AmenitiesModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="amenities-modal-overlay" 
      role="dialog" 
      aria-modal="true"
      aria-label="Amenities list"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      ref={modalRef}
    >
      <div className="amenities-modal-container" onClick={(e) => e.stopPropagation()}>
        <header className="amenities-modal-header">
          <button className="amenities-close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </header>

        <div className="amenities-modal-body">
          <h2 className="amenities-modal-title">What this place offers</h2>
          
          <div className="amenities-categories-list">
            {AMENITIES_DATA.map((cat, i) => (
              <div key={i} className="amenities-cat-group">
                <h3 className="amenities-cat-title">{cat.category}</h3>
                <div className="amenities-cat-items">
                  {cat.items.map((item, idx) => {
                    const isObj = typeof item === 'object';
                    const name = isObj ? item.name : item;
                    const notInc = isObj ? item.notIncluded : false;

                    return (
                      <div key={idx} className={`amenity-modal-row ${notInc ? 'not-included' : ''}`}>
                        <div className={`amenity-modal-icon-wrapper ${notInc ? 'text-muted' : ''}`}>
                          {getAmenityIcon(name)}
                        </div>
                        <span className="amenity-item-name">
                          {notInc ? <strike>{name}</strike> : name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesModal;
