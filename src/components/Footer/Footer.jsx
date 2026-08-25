import React from 'react';
import { Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Columns Grid */}
        <div className="footer-columns">
          <div className="footer-col">
            <h4 className="footer-col-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">AirCover</a></li>
              <li><a href="#">Anti-discrimination</a></li>
              <li><a href="#">Disability support</a></li>
              <li><a href="#">Cancellation options</a></li>
              <li><a href="#">Report neighbourhood concern</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Hosting</h4>
            <ul className="footer-links">
              <li><a href="#">Airbnb your home</a></li>
              <li><a href="#">AirCover for Hosts</a></li>
              <li><a href="#">Hosting resources</a></li>
              <li><a href="#">Community forum</a></li>
              <li><a href="#">Hosting responsibly</a></li>
              <li><a href="#">Airbnb-friendly apartments</a></li>
              <li><a href="#">Join a free Hosting class</a></li>
              <li><a href="#">Find a co-host</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Airbnb</h4>
            <ul className="footer-links">
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">New features</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>© 2026 Airbnb, Inc.</span>
            <span className="dot">·</span>
            <a href="#">Privacy</a>
            <span className="dot">·</span>
            <a href="#">Terms</a>
            <span className="dot">·</span>
            <a href="#">Sitemap</a>
            <span className="dot">·</span>
            <a href="#">Company details</a>
          </div>

          <div className="footer-bottom-right">
            <div className="footer-lang-curr">
              <Globe size={16} />
              <span className="lang-text">English (IN)</span>
              <span className="curr-text">₹ INR</span>
            </div>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor"><path d="M30 16a14 14 0 1 0-16.2 13.8v-9.8h-3.5V16h3.5v-2.9c0-3.5 2.1-5.4 5.2-5.4 1.5 0 3.1.3 3.1.3v3.4h-1.7c-1.7 0-2.3 1.1-2.3 2.2V16h3.8l-.6 4h-3.2v9.8A14 14 0 0 0 30 16z"></path></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor"><path d="M28 8.55a10 10 0 0 1-2.83.78 4.93 4.93 0 0 0 2.16-2.72 9.86 9.86 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.48A13.96 13.96 0 0 1 5.68 7.15a4.93 4.93 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.61v.06a4.93 4.93 0 0 0 3.95 4.83 4.86 4.86 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 4 23.53a13.94 13.94 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14v-.64A10 10 0 0 0 28 8.55z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor"><path d="M16 3c3.5 0 3.9 0 5.3.1 3.5.2 5.1 1.8 5.3 5.3.1 1.4.1 1.8.1 5.3s0 3.9-.1 5.3c-.2 3.5-1.8 5.1-5.3 5.3-1.4.1-1.8.1-5.3.1s-3.9 0-5.3-.1c-3.5-.2-5.1-1.8-5.3-5.3C3.6 19.9 3.6 19.5 3.6 16s0-3.9.1-5.3c.2-3.5 1.8-5.1 5.3-5.3C10.4 3 10.8 3 14.3 3h3.4zm0 2.6c-3.4 0-3.8 0-5.2.1-2.5.1-3.6 1.2-3.7 3.7-.1 1.4-.1 1.8-.1 5.2s0 3.8.1 5.2c.1 2.5 1.2 3.6 3.7 3.7 1.4.1 1.8.1 5.2.1s3.8 0 5.2-.1c2.5-.1 3.6-1.2 3.7-3.7.1-1.4.1-1.8.1-5.2s0-3.8-.1-5.2c-.1-2.5-1.2-3.6-3.7-3.7-1.4-.1-1.8-.1-5.2-.1zM16 9.3a6.7 6.7 0 1 1 0 13.4 6.7 6.7 0 0 1 0-13.4zm0 2.6a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2zm6.4-4.2a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
