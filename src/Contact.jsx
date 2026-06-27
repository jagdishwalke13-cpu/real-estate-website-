import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      
      {/* Cinematic App Download Hero */}
      <section className="app-hero">
        <div className="container app-hero-layout">
          
          <div className="app-hero-content">
            <h1 className="app-title">Your Dream Home,<br/>Now in Your Pocket.</h1>
            <p className="app-desc">
              Experience the future of real estate. Get instant price drop alerts, immersive 3D virtual tours, and direct encrypted chat with verified agents.
            </p>
            <div className="app-buttons">
              <button className="btn-store">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.09 2.31-.86 3.65-.74 1.63.14 2.89.8 3.63 1.95-3.13 1.83-2.6 5.98.37 7.23-.74 1.8-1.58 3.56-2.73 4.73zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.38-2.02 4.31-3.74 4.25z"/>
                </svg>
                App Store
              </button>
              <button className="btn-store btn-store-google">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5zM12 14.5l-4-4 4-4 4 4-4 4z"/>
                </svg>
                Google Play
              </button>
            </div>
          </div>

          <div className="app-hero-visual">
            <div className="phone-mockup">
              <div className="notch"></div>
              <div className="mockup-ui">
                <div className="mockup-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                  <span style={{fontWeight: 700}}>TerraHomes</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                
                <div className="mockup-card">
                  <div className="mockup-card-img"></div>
                  <div className="mockup-card-body">
                    <div className="mockup-price">₹ 4.5 Cr</div>
                    <div className="mockup-loc">Worli Sea Face, Mumbai</div>
                  </div>
                </div>
                
                <div className="mockup-card" style={{ background: '#1E293B', backgroundImage: 'url(/assets/spotlight_pool_1782577145902.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="mockup-card-body" style={{ position: 'absolute', bottom: 0, width: '100%', background: 'rgba(15,23,42,0.9)' }}>
                    <div className="mockup-price">₹ 12 Cr</div>
                    <div className="mockup-loc">DLF Camellias, Gurgaon</div>
                  </div>
                </div>
                
                <div className="mockup-btn">Explore 3D Tour</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Support & Contact Hub */}
      <section className="support-section">
        <div className="container">
          <div className="support-grid">
            
            <div className="support-card">
              <div className="support-icon icon-whatsapp">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3>Chat with Us</h3>
              <p className="support-desc">Instant replies for all your property inquiries and technical support needs.</p>
              <button className="support-action action-whatsapp">Start Chat</button>
            </div>

            <div className="support-card">
              <div className="support-icon icon-phone">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3>Call our Experts</h3>
              <p className="support-desc">Speak directly with our elite real estate advisors available 24/7.</p>
              <a href="tel:+9118001234567" className="support-action action-phone">+91-1800-123-4567</a>
            </div>

            <div className="support-card">
              <div className="support-icon icon-mail">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>Email Support</h3>
              <p className="support-desc">Drop us a line for enterprise inquiries, partnerships, or detailed requests.</p>
              <a href="mailto:support@terrahomes.in" className="support-action action-mail">support@terrahomes.in</a>
            </div>

          </div>
        </div>
      </section>

      {/* Premium Contact Form & Office Locations */}
      <section className="form-map-section">
        
        <div className="contact-form-container">
          <h2 className="contact-form-title">Send a Message</h2>
          <form className="contact-form">
            <div className="floating-group" style={{ marginBottom: 0 }}>
              <input type="text" className="floating-input-contact" placeholder=" " />
              <label className="floating-label">Name</label>
            </div>
            
            <div className="floating-group" style={{ marginBottom: 0 }}>
              <input type="tel" className="floating-input-contact" placeholder=" " />
              <label className="floating-label">Phone Number (+91)</label>
            </div>
            
            <select className="contact-select">
              <option value="" disabled selected>How can we help?</option>
              <option value="buy">I want to buy a property</option>
              <option value="sell">I want to sell my property</option>
              <option value="rent">I am looking to rent</option>
              <option value="support">Technical Support</option>
              <option value="other">Other</option>
            </select>
            
            <button type="button" className="btn-submit">Submit Request</button>
          </form>
        </div>

        {/* Edge-to-edge Custom Map */}
        <div className="map-full-width">
          <div className="map-pin-overlay pin-mumbai">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Headquarters: BKC, Mumbai
          </div>
          <div className="map-pin-overlay pin-nagpur">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Regional Office: Nagpur
          </div>
          <iframe 
            title="Office Locations"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.44293815334!2d72.86317761490076!3d19.04426508710609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8cbf127ab2d%3A0xc07ceecb38b1e4f4!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </section>

    </div>
  );
}
