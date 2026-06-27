import React from 'react';
import './Footer.css';

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer-premium">
      <div className="container">
        <div className="footer-top">
          
          {/* Brand Col */}
          <div className="footer-brand">
            <h2>TerraHomes<span>.</span></h2>
            <p>India's most trusted premium real estate destination. Discover ultra-luxury residences, verified plots, and seamless move-in experiences tailored to your lifestyle.</p>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a onClick={() => onNavigate('search')}>Buy Properties</a></li>
              <li><a onClick={() => onNavigate('search')}>Rent Properties</a></li>
              <li><a onClick={() => onNavigate('builders')}>Top Builders</a></li>
              <li><a onClick={() => onNavigate('showcase')}>Luxury Showcase</a></li>
              <li><a onClick={() => onNavigate('insights')}>Locality Insights</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a onClick={() => onNavigate('post')}>Post Property</a></li>
              <li><a onClick={() => onNavigate('interiors')}>Home Interiors</a></li>
              <li><a onClick={() => onNavigate('interiors')}>Vastu Consultation</a></li>
              <li><a onClick={() => onNavigate('interiors')}>Packers & Movers</a></li>
              <li><a onClick={() => onNavigate('contact')}>Contact Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h3>Stay Updated</h3>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" className="newsletter-input" required />
              <button type="submit" className="btn-subscribe">Subscribe to Newsletter</button>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; 2026 TerraHomes Real Estate. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
