import React from 'react';
import './Showcase.css';

export default function Showcase() {
  const showcaseProjects = [
    {
      id: 1,
      name: 'The Riddhi Residences, Nagpur',
      image: '/assets/prop_1_1782574519478.png',
      price: 'Starts at ₹3.5 Cr',
      bhk: '4 & 5 BHK Ultra-Luxury Apartments',
      gridClass: 'grid-item-1' // Large span
    },
    {
      id: 2,
      name: 'Skyline Antilia, Mumbai',
      image: '/assets/prop_4_1782574555194.png',
      price: 'Starts at ₹12.0 Cr',
      bhk: '5 BHK Sea-Facing Penthouses',
      gridClass: 'grid-item-2' // Wide span
    },
    {
      id: 3,
      name: 'Prestige Golfshire, Bangalore',
      image: '/assets/interior_1_1782576220092.png',
      price: 'Starts at ₹8.5 Cr',
      bhk: '4 BHK Luxury Villas',
      gridClass: 'grid-item-3' // Small span
    },
    {
      id: 4,
      name: 'Lodha Altamount, Mumbai',
      image: '/assets/interior_2_1782576247054.png',
      price: 'Starts at ₹18.0 Cr',
      bhk: '3 & 4 BHK Luxury Residences',
      gridClass: 'grid-item-4' // Small span
    },
    {
      id: 5,
      name: 'Godrej Woods, Noida',
      image: '/assets/prop_2_1782574531921.png',
      price: 'Starts at ₹2.8 Cr',
      bhk: '3 BHK Premium Apartments',
      gridClass: 'grid-item-5' // Wide span
    }
  ];

  return (
    <div className="showcase-page">
      
      {/* Cinematic Hero Section */}
      <section className="showcase-hero">
        {/* We use the newly generated showcase_hero image */}
        <img src="/assets/showcase_hero_1782577133073.png" alt="Luxury Skyscraper" />
        <div className="showcase-hero-content">
          <h1 className="showcase-title">Exclusive Signature Collections</h1>
          <p className="showcase-subtitle">
            Discover India's most prestigious and sought-after real estate developments.
          </p>
          <button className="btn-glass-primary">Explore Collection</button>
        </div>
      </section>

      {/* The Showcase Grid */}
      <section className="showcase-grid-section container">
        <h2 className="grid-title">Featured Projects</h2>
        
        <div className="asymmetrical-grid">
          {showcaseProjects.map(project => (
            <div key={project.id} className={`showcase-card ${project.gridClass}`}>
              <img src={project.image} alt={project.name} />
              
              {/* Default State */}
              <div className="card-overlay-default"></div>
              <div className="card-title-default">
                <h3>{project.name}</h3>
              </div>
              <div className="rera-watermark">RERA Approved</div>
              
              {/* Hover State */}
              <div className="card-hover-content">
                <div className="hover-price">{project.price}</div>
                <div className="hover-bhk">{project.bhk}</div>
                <button className="btn-outline-white">View Gallery & Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Spotlight Section */}
      <section className="spotlight-section">
        <div className="container spotlight-layout">
          <div className="spotlight-image-col">
            <img src="/assets/spotlight_pool_1782577145902.png" alt="Clubhouse Infinity Pool" />
          </div>
          
          <div className="spotlight-content-col">
            <div className="spotlight-label">The Spotlight Project of the Month</div>
            <h2 className="spotlight-title">DLF Camellias<br/>Gurgaon</h2>
            <p className="spotlight-desc">
              Experience unparalleled luxury at India's most exclusive address. Set against the backdrop of the Aravalli hills, these ultra-luxury residences redefine bespoke living with private elevators, expansive layouts, and an award-winning clubhouse.
            </p>
            
            <div className="spotlight-amenities">
              <div className="spotlight-amenity">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                Private Elevator
              </div>
              <div className="spotlight-amenity">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                Helipad Access
              </div>
              <div className="spotlight-amenity">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 12h20M12 2v20"></path>
                </svg>
                Infinity Pool
              </div>
              <div className="spotlight-amenity">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <path d="M9 9h6v6H9z"></path>
                </svg>
                Smart Home Automation
              </div>
            </div>
            
            <div className="spotlight-actions">
              <button className="btn-dark">Download E-Brochure</button>
              <button className="btn-play-outline">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Experience 360° Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Concierge Form */}
      <section className="vip-section container">
        <h2 className="vip-title">Schedule a Private Site Visit</h2>
        <form className="vip-form">
          <input type="text" className="vip-input" placeholder="Name" />
          <input type="tel" className="vip-input" placeholder="Phone (+91)" />
          <select className="vip-input">
            <option value="">Preferred Project</option>
            <option value="camellias">DLF Camellias</option>
            <option value="altamount">Lodha Altamount</option>
            <option value="antilia">Skyline Antilia</option>
          </select>
          <button type="button" className="btn-vip">Request VIP Callback</button>
        </form>
      </section>
      
    </div>
  );
}
