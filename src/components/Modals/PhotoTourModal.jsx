import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import './PhotoTourModal.css';

// Photo tour room categories with their images, amenities, and display names
const PHOTO_SECTIONS = [
  {
    id: 'living-room-1',
    label: 'Living room 1',
    amenities: 'Sofa · Air conditioning · Ceiling fan · TV',
    images: [
      '/images/30ad93b2-293f-494d-b645-626303c6cb93.jpeg',
      '/images/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg',
      '/images/3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg',
    ]
  },
  {
    id: 'living-room-2',
    label: 'Living room 2',
    amenities: 'Jacuzzi · Seating area · Wall lights',
    images: [
      '/images/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg',
      '/images/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg',
      '/images/48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg',
    ]
  },
  {
    id: 'full-kitchen',
    label: 'Full kitchen',
    amenities: 'Refrigerator · Microwave · Stove · Dishes and silverware',
    images: [
      '/images/9be71047-fc52-438a-9270-75cb470f6752.jpeg',
      '/images/862d936c-0f34-4e50-af87-b519e2781d19.jpeg',
      '/images/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg',
    ]
  },
  {
    id: 'bedroom',
    label: 'Bedroom',
    amenities: 'Queen bed · Air conditioning · Wardrobe',
    images: [
      '/images/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg',
      '/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg',
      '/images/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg',
    ]
  },
  {
    id: 'full-bathroom',
    label: 'Full bathroom',
    amenities: 'Shower · Bathtub · Hair dryer',
    images: [
      '/images/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg',
      '/images/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg',
      '/images/f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg',
    ]
  },
  {
    id: 'gym',
    label: 'Gym',
    amenities: 'Treadmill · Weights · Exercise equipment',
    images: [
      '/images/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg',
      '/images/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg',
    ]
  },
  {
    id: 'exterior',
    label: 'Exterior',
    amenities: 'Building entrance · Parking · Garden',
    images: [
      '/images/5b856fde-a393-41bf-b373-c9d02e64221f.jpeg',
      '/images/608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg',
      '/images/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg',
    ]
  },
  {
    id: 'pool',
    label: 'Pool',
    amenities: 'Shared pool · Pool access',
    images: [
      '/images/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg',
      '/images/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg',
      '/images/79addceb-8c2d-419b-80ff-e29af426a94c.jpeg',
    ]
  },
  {
    id: 'additional',
    label: 'Additional photos',
    amenities: '',
    images: [
      '/images/4fede77d-7a71-446f-89e3-263af937f3fa.jpeg',
      '/images/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg',
      '/images/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg',
      '/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg',
      '/images/246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg',
    ]
  },
];

const PhotoTourModal = ({ isOpen, onClose }) => {
  const sectionRefs = useRef({});

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  // ESC key to close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
    }
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollToSection = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="photo-tour-overlay" role="dialog" aria-modal="true" aria-label="Photo tour">
      {/* Sticky header */}
      <div className="photo-tour-header">
        <button className="pt-close-btn" onClick={onClose} aria-label="Close photo tour">
          <X size={20} />
        </button>
        <h2 className="pt-title">Photo tour</h2>
      </div>

      {/* Thumbnail navigation row */}
      <div className="pt-nav-row">
        <div className="pt-nav-scroll">
          {PHOTO_SECTIONS.map((section) => (
            <button
              key={section.id}
              className="pt-nav-item"
              onClick={() => scrollToSection(section.id)}
            >
              <div className="pt-nav-thumb">
                <img src={section.images[0]} alt={section.label} />
              </div>
              <span className="pt-nav-label">{section.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable photo content */}
      <div className="pt-body">
        {PHOTO_SECTIONS.map((section) => (
          <div
            key={section.id}
            id={`section-${section.id}`}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            className="pt-section"
          >
            <div className="pt-section-meta">
              <h3 className="pt-section-title">{section.label}</h3>
              {section.amenities && (
                <p className="pt-section-amenities">{section.amenities}</p>
              )}
            </div>
            <div className="pt-section-photos">
              {section.images.map((img, i) => (
                <div key={i} className="pt-photo-item">
                  <img src={img} alt={`${section.label} ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoTourModal;
