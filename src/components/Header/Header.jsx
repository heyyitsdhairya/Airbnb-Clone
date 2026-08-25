import React from "react";
import { Search, Globe, Menu, User } from "lucide-react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo-container" aria-label="Airbnb homepage">
          <img
            src="/images/airbnb_logo.svg"
            alt="Airbnb"
            style={{ height: 32, width: "auto", objectFit: "contain" }}
          />
        </a>

        {/* Search Pill */}
        <div className="search-pill">
          <div className="search-pill-segment segment-anywhere">
            <img
              src="/images/searchbar_house_clean.png"
              alt="House"
              className="searchbar-house-logo"
            />
            <span className="pill-text-bold">Anywhere</span>
          </div>
          <span className="search-divider"></span>
          <div className="search-pill-segment">
            <span className="pill-text-bold">Anytime</span>
          </div>
          <span className="search-divider"></span>
          <div className="search-pill-segment">
            <span className="pill-text-muted">Add guests</span>
          </div>
          <button className="search-icon-btn" aria-label="Search">
            <Search size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Right Menu */}
        <div className="right-menu">
          <a href="#" className="become-host-link font-medium">
            Become a host
          </a>
          <button
            className="right-menu-btn"
            aria-label="Choose a language and region"
          >
            <Globe size={18} strokeWidth={2} />
          </button>

          <button className="right-menu-btn" aria-label="Main navigation menu">
            <Menu size={18} strokeWidth={2} className="menu-icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
