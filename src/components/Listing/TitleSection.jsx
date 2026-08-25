import React, { useState, useEffect } from "react";
import { Upload, Heart } from "lucide-react";
import "./TitleSection.css";

const TitleSection = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [toast, setToast] = useState(null); // null | 'saved' | 'removed'

  const handleSave = () => {
    const newState = !isSaved;
    setIsSaved(newState);
    setToast(newState ? "saved" : "removed");
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2800);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <section className="title-section">
      <h1 className="property-title">
        Romantic Jacuzzi 1BHK Candolim | Mirashya UG10
      </h1>
      <div className="title-actions">
        <button className="action-btn">
          <Upload size={18} strokeWidth={2} />
          <span className="action-text">Share</span>
        </button>
        <button
          className="action-btn"
          onClick={handleSave}
          aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
        >
          <Heart
            size={18}
            strokeWidth={2}
            fill={isSaved ? "#FF385C" : "none"}
            color={isSaved ? "#FF385C" : "currentColor"}
          />
          <span className="action-text">{isSaved ? "Saved" : "Save"}</span>
        </button>
      </div>

      {/* Toast notification */}
      {toast && (
        <div
          className={`wishlist-toast ${toast === "saved" ? "toast-saved" : "toast-removed"}`}
        >
          <div className="toast-content">
            <Heart
              size={16}
              fill={toast === "saved" ? "#FF385C" : "none"}
              color={toast === "saved" ? "#FF385C" : "#fff"}
            />
            <span>
              {toast === "saved"
                ? "Saved to wishlist"
                : "Removed from wishlist"}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default TitleSection;
