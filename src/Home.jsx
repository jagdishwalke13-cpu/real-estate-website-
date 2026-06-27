import React, { useState } from 'react';

export default function Home({ onSearch }) {
  const [activeTab, setActiveTab] = useState('Buy');

  const cities = [
    { name: 'Mumbai', properties: '15,000+', image: '/assets/mumbai_city_1782574448420.png' },
    { name: 'Delhi', properties: '12,500+', image: '/assets/delhi_city_1782574459498.png' },
    { name: 'Bangalore', properties: '18,200+', image: '/assets/bangalore_city_1782574472468.png' },
    { name: 'Pune', properties: '9,800+', image: '/assets/pune_city_1782574484653.png' },
    { name: 'Nagpur', properties: '4,500+', image: '/assets/nagpur_city_1782574507954.png' },
    { name: 'Hyderabad', properties: '14,000+', image: '/assets/hyderabad_city_1782574497168.png' }
  ];

  const projects = [
    {
      id: 1,
      name: 'Lodha Parkside',
      location: 'Worli, Mumbai',
      price: '₹ 4.5 Cr',
      bhk: '3, 4 BHK',
      area: '1850 sq.ft',
      image: '/assets/prop_2_1782574531921.png',
      rera: true
    },
    {
      id: 2,
      name: 'Prestige Golfshire',
      location: 'Nandi Hills, Bangalore',
      price: '₹ 8.2 Cr',
      bhk: '4 BHK Villa',
      area: '5400 sq.ft',
      image: '/assets/prop_1_1782574519478.png',
      rera: true
    },
    {
      id: 3,
      name: 'DLF Camellias',
      location: 'Golf Course Rd, Gurgaon',
      price: '₹ 25.0 Cr',
      bhk: '4, 5 BHK',
      area: '7400 sq.ft',
      image: '/assets/prop_4_1782574555194.png',
      rera: true
    },
    {
      id: 4,
      name: 'Godrej Infinity',
      location: 'Keshav Nagar, Pune',
      price: '₹ 1.2 Cr',
      bhk: '2, 3 BHK',
      area: '1200 sq.ft',
      image: '/assets/prop_3_1782574542571.png',
      rera: true
    }
  ];

  return (
    <>
      {/* Hero Section & Search */}
      <section className="hero" style={{ backgroundImage: `url('/assets/hero_bg_1782574435266.png')` }}>
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Home in India</h1>
          
          <div className="search-console">
            <div className="search-tabs">
              {['Buy', 'Rent', 'PG/Co-living', 'Commercial'].map(tab => (
                <div 
                  key={tab} 
                  className={`search-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                  style={{ cursor: 'pointer' }}
                >
                  {tab}
                </div>
              ))}
            </div>
            
            <div className="search-inputs">
              <div className="search-field">
                <label>City, Locality, or Project</label>
                <input type="text" placeholder="e.g. Bandra West, Mumbai" />
              </div>
              <div className="search-field">
                <label>Property Type</label>
                <select>
                  <option value="">Select Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="plot">Plot</option>
                </select>
              </div>
              <div className="search-field">
                <label>BHK</label>
                <select>
                  <option value="">Select BHK</option>
                  <option value="1">1 BHK</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4+">4+ BHK</option>
                </select>
              </div>
              <div className="search-field">
                <label>Budget</label>
                <select>
                  <option value="">Budget Range</option>
                  <option value="0-50">Under 50 Lacs</option>
                  <option value="50-100">50 Lacs - 1 Cr</option>
                  <option value="100-300">1 Cr - 3 Cr</option>
                  <option value="300+">3 Cr+</option>
                </select>
              </div>
              <button className="search-btn-large" onClick={onSearch}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Cities */}
      <section className="section container">
        <h2 className="section-title">Explore Properties in Top Cities</h2>
        <div className="cities-grid">
          {cities.map(city => (
            <div key={city.name} className="city-card">
              <div className="city-image-wrapper">
                <img src={city.image} alt={`${city.name} Real Estate`} />
              </div>
              <div className="city-name">{city.name}</div>
              <div className="city-props">{city.properties} Properties</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section container" style={{ paddingTop: '20px' }}>
        <h2 className="section-title">Featured Real Estate Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.name} />
                {project.rera && (
                  <div className="badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    RERA Approved
                  </div>
                )}
              </div>
              <div className="project-content">
                <div className="project-price">{project.price}</div>
                <div className="project-name">{project.name}</div>
                <div className="project-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {project.location}
                </div>
                <div className="project-details">
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    {project.bhk}
                  </span>
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    </svg>
                    {project.area}
                  </span>
                </div>
                <button className="btn btn-outline" onClick={onSearch}>Contact Builder</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose TerraHomes */}
      <section className="section container" style={{ borderTop: '1px solid var(--border-color)', marginTop: '40px', paddingTop: '60px' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>Why Choose TerraHomes?</h2>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>100% Verified Listings</h3>
            <p>Every property is rigorously checked for RERA compliance and legal validity.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3>Premium Experience</h3>
            <p>Designed for High-Net-Worth Individuals seeking ultra-luxury real estate.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Direct Builder Connect</h3>
            <p>Skip the middlemen and negotiate directly with India's top real estate developers.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <h3>End-to-End Services</h3>
            <p>From property search to interior design and move-in, we handle it all.</p>
          </div>
        </div>
      </section>

      {/* Premium Services Banner */}
      <section className="section" style={{ padding: '0 20px', marginBottom: '80px' }}>
        <div className="container premium-banner">
          <div className="premium-banner-content">
            <h2>Transform Your Space with Bespoke Interiors</h2>
            <p>Moving into your new home? Let our award-winning design studio craft a luxurious living space tailored to your exact taste.</p>
            <button className="btn btn-primary" style={{ background: 'white', color: '#10B981', marginTop: '16px' }} onClick={() => window.scrollTo(0,0)}>
              Explore Interior Services
            </button>
          </div>
          <div className="premium-banner-img">
            <img src="/assets/interior_1_1782576220092.png" alt="Luxury Interiors" />
          </div>
        </div>
      </section>

    </>
  );
}
