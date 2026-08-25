import React from "react";
import { GraduationCap } from "lucide-react";
import "./MeetHostSection.css";

// Balloon SVG Component
const BalloonIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#222222"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="detail-icon"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M12 14l-1.5 2.5h3z" />
    <line x1="12" y1="16.5" x2="12" y2="21" />
  </svg>
);

// Isometric Graduation Cap SVG Component
const CustomGraduationCap = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#222222"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="detail-icon"
  >
    <path d="M12 4 L21 9 L12 14 L3 9 Z" />
    <path d="M5 10.5 V15 C5 17.5 19 17.5 19 15 V10.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shield-icon"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 2v20" />
  </svg>
);

// Verified Badge matching reference image
const VerifiedBadge = () => (
  <div className="verified-badge">
    <svg viewBox="0 0 44 44" width="38" height="38">
      <circle
        cx="22"
        cy="22"
        r="19"
        fill="#ff385c"
        stroke="#ffffff"
        strokeWidth="3"
      />
      <circle
        cx="22"
        cy="22"
        r="15.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.6"
        opacity="0.9"
      />
      <path
        d="M13.5 22 L19.5 28 L30.5 16"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const MeetHostSection = () => {
  // Co-hosts array matching exact order and extracted images from reference screenshot:
  // Row 1: Sharath, Aman Dev Pahwa, Maria Karen Priyanka
  // Row 2: Simran, Pallavi, Sanyukta
  // Row 3: Shruti (pink 'S' badge), Amisha (blue 'A' badge)
  const cohosts = [
    {
      name: "Sharath",
      img: "/images/co1.jpg",
      initial: null,
      color: null,
      textColor: null,
    },
    {
      name: "Aman Dev Pahwa",
      img: "/images/co2.jpg",
      initial: null,
      color: null,
      textColor: null,
    },
    {
      name: "Maria Karen Priyanka",
      img: "/images/co3.jpg",
      initial: null,
      color: null,
      textColor: null,
    },
    {
      name: "Simran",
      img: "/images/co4.jpg",
      initial: null,
      color: null,
      textColor: null,
    },
    {
      name: "Pallavi",
      img: "/images/co5.jpg",
      initial: null,
      color: null,
      textColor: null,
    },
    {
      name: "Sanyukta",
      img: "/images/co6.jpg",
      initial: null,
      color: null,
      textColor: null,
    },
    {
      name: "Shruti",
      img: null,
      initial: "S",
      color: "#fde8ef",
      textColor: "#e01e5a",
    },
    {
      name: "Amisha",
      img: null,
      initial: "A",
      color: "#e8f0fe",
      textColor: "#1a73e8",
    },
  ];

  return (
    <section className="meet-host-section">
      <h2 className="section-title">Meet your host</h2>

      <div className="host-content-split">
        {/* Left Column: Host Card + Personal details */}
        <div className="host-card-wrapper">
          <div className="host-card">
            {/* Left side inside card: Avatar + Name + Role Badge */}
            <div className="host-card-left">
              <div className="host-avatar-large">
                <img
                  src="/images/host_logo_transparent.png"
                  alt="Mirashya Homes"
                  className="host-avatar-img"
                />
              </div>
              <h3 className="host-name-large">
                Mirashya
                <br />
                Homes
              </h3>
              <span className="host-role-badge">Host</span>
            </div>

            {/* Right side inside card: Vertical Stats matching reference image */}
            <div className="host-card-right">
              <div className="stat-col">
                <span className="stat-num">1,463</span>
                <span className="stat-label">Reviews</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-col">
                <span className="stat-num">4.68★</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-col">
                <span className="stat-num">2</span>
                <span className="stat-label">Years hosting</span>
              </div>
            </div>
          </div>

          {/* Personal details below host card */}
          <ul className="host-personal-details">
            <li>
              <BalloonIcon />
              <span>Born in the 80s</span>
            </li>
            <li>
              <CustomGraduationCap />
              <span>Where I went to school: NICMAR GOA</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Co-Hosts + Host details */}
        <div className="host-more-info">
          <h3 className="info-title">Co-Hosts</h3>
          <div className="cohosts-grid">
            {cohosts.map((host, i) => (
              <div key={i} className="cohost-item">
                <div
                  className="cohost-avatar"
                  style={{
                    backgroundColor: host.img ? "transparent" : host.color,
                    color: host.textColor || "#222222",
                  }}
                >
                  {host.img ? (
                    <img src={host.img} alt={host.name} />
                  ) : (
                    host.initial
                  )}
                </div>
                <span className="cohost-name">{host.name}</span>
              </div>
            ))}
          </div>

          <h3 className="info-title host-details-heading">Host details</h3>
          <div className="host-details-list">
            <p>Response rate: 100%</p>
            <p>Responds within an hour</p>
          </div>

          <button className="message-host-btn">Message host</button>

          <div className="payment-protection">
            <ShieldIcon />
            <span>
              To help protect your payment, always use Airbnb to send money and
              communicate with hosts.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetHostSection;
