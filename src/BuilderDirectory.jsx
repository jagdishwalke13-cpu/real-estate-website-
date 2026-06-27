import React from 'react';
import './BuilderDirectory.css';

export default function BuilderDirectory() {
  const builders = [
    { id: 1, name: 'LODHA', active: '14 Active Projects' },
    { id: 2, name: 'DLF', active: '8 Active Projects' },
    { id: 3, name: 'GODREJ', active: '22 Active Projects' },
    { id: 4, name: 'PRESTIGE', active: '18 Active Projects' },
    { id: 5, name: 'OBEROI', active: '6 Active Projects' },
    { id: 6, name: 'BRIGADE', active: '11 Active Projects' },
  ];

  const upcomingProjects = [
    {
      id: 1,
      title: 'The Riddhi Horizon, Nagpur',
      image: '/assets/prop_1_1782574519478.png',
      badge: 'New Launch',
      location: 'Wardha Road, Nagpur',
      config: '2, 3 & 4 BHK Apartments',
      possession: 'Possession Dec 2028',
      rera: 'RERA Registered'
    },
    {
      id: 2,
      title: 'Prestige Ocean Towers, Marine Drive',
      image: '/assets/prop_4_1782574555194.png',
      badge: 'Pre-Launch',
      location: 'Marine Drive, Mumbai',
      config: '4 & 5 BHK Sea-Facing Residences',
      possession: 'Possession Q2 2029',
      rera: 'RERA Awaited'
    },
    {
      id: 3,
      title: 'Godrej Zenith, Sector 89',
      image: '/assets/prop_2_1782574531921.png',
      badge: 'New Launch',
      location: 'Sector 89, Gurgaon',
      config: '3 & 4 BHK Premium Apartments',
      possession: 'Possession Jun 2027',
      rera: 'RERA Registered'
    }
  ];

  return (
    <div className="builder-directory-page">
      
      {/* Premium Builder Grid */}
      <section className="builder-section container">
        <div className="section-header">
          <h2>Partnered Premium Developers</h2>
        </div>
        <div className="builder-grid">
          {builders.map(builder => (
            <div key={builder.id} className="builder-card">
              {/* Using stylized text to simulate clean logos */}
              <div className="builder-logo-placeholder">
                {builder.name}
              </div>
              <div className="active-projects-badge">
                {builder.active}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Launches & Pre-Launch Offers */}
      <section className="upcoming-section container">
        <div className="section-header">
          <h2>Exclusive Upcoming & Pre-Launch Projects</h2>
        </div>
        
        <div className="upcoming-layout">
          
          <div className="upcoming-grid">
            {upcomingProjects.map(project => (
              <div key={project.id} className="upcoming-card">
                <div className="upcoming-image-wrapper">
                  <div className="badge-new-launch">{project.badge}</div>
                  <div className="badge-rera">{project.rera}</div>
                  <img src={project.image} alt={project.title} />
                </div>
                
                <div className="upcoming-content">
                  <h3 className="upcoming-title">{project.title}</h3>
                  
                  <div className="upcoming-data-row">
                    <div className="data-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {project.location}
                    </div>
                    <div className="data-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      {project.config}
                    </div>
                    <div className="data-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {project.possession}
                    </div>
                  </div>
                  
                  <div className="price-request">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    Price on Request
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Express Interest / VIP Form */}
          <div className="vip-sidebar">
            <h3 className="vip-banner-title">Get Early Bird Pricing & Priority Allotment</h3>
            <p className="vip-banner-subtitle">Register now to unlock exclusive pre-launch offers and inventory selection.</p>
            
            <form className="vip-form-vertical">
              <input type="text" className="vip-input-field" placeholder="Full Name" />
              <input type="tel" className="vip-input-field" placeholder="Mobile (+91)" />
              <select className="vip-input-field">
                <option value="">Select Budget Cap</option>
                <option value="1cr">Under 1 Cr</option>
                <option value="3cr">1 Cr - 3 Cr</option>
                <option value="5cr">3 Cr - 5 Cr</option>
                <option value="5cr+">5 Cr+</option>
              </select>
              <button type="button" className="btn-primary-high-contrast">Unlock Pre-Launch Offers</button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
