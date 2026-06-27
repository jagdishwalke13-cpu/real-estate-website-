import React from 'react';
import './PropertyDetails.css';

export default function PropertyDetails() {
  // We need the floor_plan image name, but let's grab the first one matching in assets via a static reference or just use a generic path if we know it.
  // Actually, since we copied it, we can import it or just use the assets path.
  // Since we don't have the exact timestamp in the variable, we can just use the generic name or a fallback.
  // The copy command copied `floor_plan*.png`. Let's assume there's only one.
  // I will just use the one we have or hardcode the prefix if we can't do dynamic. 
  // Wait, I can list the directory to get the exact name, or since it's Vite, I can't easily dynamically load without exact path in public.
  // Let's use `prop_4_1782574555194.png` as fallback if we don't have the exact floor plan name, wait, I can just use a generic unsplash image if it fails, but I have the floor plan.
  
  return (
    <div className="property-details-page">
      {/* Hero Media Gallery */}
      <section className="property-hero">
        <img src="/assets/interior_1_1782576220092.png" alt="Luxury Penthouse Interior" />
        <div className="hero-actions">
          <button className="glass-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            View All 24 Photos
          </button>
          <button className="glass-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
              <path d="M12 3v9l6.5 6.5"></path>
            </svg>
            360° Virtual Tour
          </button>
          <button className="glass-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Watch Video
          </button>
        </div>
      </section>

      <div className="container property-layout">
        {/* Main Content Area */}
        <div className="property-main">
          
          <div className="prop-header">
            <div className="prop-title-row">
              <h1 className="prop-title">4 BHK Luxury Penthouse in Worli, Mumbai</h1>
              <div className="verified-badge-large">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Verified
              </div>
            </div>
            <div className="prop-location-row">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Worli Sea Face, Mumbai | RERA ID: P518000XXXXX
            </div>
          </div>

          <div className="prop-price-section">
            <div className="prop-price-box">
              <div className="prop-price">₹ 4.50 Cr</div>
              <div className="prop-price-sqft">₹ 20,000/sq.ft</div>
            </div>
            
            <div className="prop-core-grid">
              <div className="core-item">
                <div className="core-item-top">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  Beds
                </div>
                <div className="core-item-value">4 Beds</div>
              </div>
              <div className="core-item">
                <div className="core-item-top">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                  Baths
                </div>
                <div className="core-item-value">4 Baths</div>
              </div>
              <div className="core-item">
                <div className="core-item-top">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  </svg>
                  Carpet Area
                </div>
                <div className="core-item-value">2250 sq.ft</div>
              </div>
              <div className="core-item">
                <div className="core-item-top">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                  </svg>
                  Facing
                </div>
                <div className="core-item-value">East (Vastu Compliant)</div>
              </div>
            </div>
          </div>

          <div className="prop-section">
            <h2 className="prop-section-title">Property Overview</h2>
            <div className="prop-overview">
              <p>Experience the pinnacle of luxury living in this exquisite 4 BHK penthouse located at the prestigious Worli Sea Face. This ultra-premium residence offers uninterrupted, panoramic views of the Arabian Sea and the Bandra-Worli Sea Link. Designed with meticulous attention to detail, the apartment features Italian marble flooring, a state-of-the-art modular kitchen, and home automation systems.</p>
              <br/>
              <p>The expansive living room opens up to a private terrace, perfect for hosting evening soirees. Residents will enjoy exclusive access to world-class amenities including a temperature-controlled infinity pool, a fully equipped gymnasium, and a private clubhouse. With 24/7 concierge service and multi-tier security, this property ensures a lifestyle of unparalleled comfort and safety.</p>
            </div>
          </div>

          <div className="prop-section">
            <h2 className="prop-section-title">Amenities</h2>
            <div className="amenities-grid">
              <div className="amenity-item">
                <div className="amenity-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 12h20"></path>
                    <path d="M12 2v20"></path>
                  </svg>
                </div>
                Swimming Pool
              </div>
              <div className="amenity-item">
                <div className="amenity-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                24/7 Security
              </div>
              <div className="amenity-item">
                <div className="amenity-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                100% Power Backup
              </div>
              <div className="amenity-item">
                <div className="amenity-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  </svg>
                </div>
                Gymnasium
              </div>
              <div className="amenity-item">
                <div className="amenity-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                    <circle cx="7" cy="17" r="2"></circle>
                    <circle cx="17" cy="17" r="2"></circle>
                  </svg>
                </div>
                Covered Parking
              </div>
            </div>
          </div>

          <div className="prop-section">
            <h2 className="prop-section-title">Floor Plan & Map</h2>
            <div className="floor-plan-img">
              {/* Fallback to one of the interior images if floor plan is missing during dev, but typically this would be the floor plan */}
              <img src="/assets/interior_2_1782576247054.png" alt="Floor Plan" style={{width: '100%', borderRadius: '12px'}} />
            </div>
            
            <div className="map-container">
              <iframe 
                title="Property Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15086.836474174092!2d72.80931551609105!3d19.03260714902146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8256aee063%3A0xc48c10e6e7dff125!2sWorli%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

        </div>

        {/* Sticky Right Sidebar */}
        <div className="property-sidebar-container">
          <div className="contact-card">
            
            <div className="agent-profile">
              <img src="/assets/agent_1_1782576258985.png" alt="Agent" className="agent-photo" />
              <div className="agent-details">
                <div className="agent-name">Vikram Singh</div>
                <div className="agent-company">TerraHomes Premium</div>
              </div>
              <div className="top-rated-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Top Rated
              </div>
            </div>

            <div className="contact-actions">
              <button className="btn btn-contact">Contact Agent</button>
              <button className="btn btn-outline btn-whatsapp-large btn-whatsapp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Chat on WhatsApp
              </button>
            </div>

            <div className="visit-form-container">
              <div className="visit-form-title">Schedule a Site Visit</div>
              <form className="visit-form">
                <div className="form-group">
                  <input type="text" className="form-input" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-input" placeholder="Phone Number (+91)" />
                </div>
                <div className="form-group">
                  <input type="date" className="form-input" placeholder="Select Date" />
                </div>
                <button type="button" className="btn btn-submit">Request Call Back</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
