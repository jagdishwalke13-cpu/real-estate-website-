import React, { useState } from 'react';
import './SearchResults.css';

export default function SearchResults({ onPropertyClick }) {
  const [bhkActive, setBhkActive] = useState('3');
  const [viewMode, setViewMode] = useState('list');

  const properties = [
    {
      id: 1,
      price: '₹ 1.25 Cr',
      emi: 'EMI starts at ₹45k/mo',
      title: '3 BHK Luxury Apartment in Andheri West',
      area: '1,250 sq.ft.',
      status: 'Ready to Move',
      floor: '12th out of 24',
      desc: 'Beautifully crafted 3 BHK luxury apartment with modern amenities, open kitchen, and a stunning view of the city skyline. Located in a premium gated community.',
      agentName: 'Rajesh Kumar',
      agentRole: 'Verified Agent',
      image: '/assets/interior_1_1782576220092.png',
      agentImg: '/assets/agent_1_1782576258985.png'
    },
    {
      id: 2,
      price: '₹ 2.80 Cr',
      emi: 'EMI starts at ₹1.1L/mo',
      title: '4 BHK Premium Duplex in Bandra',
      area: '2,400 sq.ft.',
      status: 'Ready to Move',
      floor: 'Ground + 1',
      desc: 'Spacious duplex with premium fittings, Italian marble flooring, and a private garden space. Perfect for large families seeking luxury.',
      agentName: 'Sneha Patel',
      agentRole: 'Builder Rep',
      image: '/assets/interior_2_1782576247054.png',
      agentImg: '/assets/agent_1_1782576258985.png'
    },
    {
      id: 3,
      price: '₹ 85 Lacs',
      emi: 'EMI starts at ₹32k/mo',
      title: '2 BHK Modern Flat in Goregaon East',
      area: '850 sq.ft.',
      status: 'Under Construction',
      floor: '8th out of 15',
      desc: 'Upcoming residential project with world-class clubhouse, swimming pool, and gym. Excellent connectivity to Western Express Highway.',
      agentName: 'Amit Shah',
      agentRole: 'Independent Broker',
      image: '/assets/prop_2_1782574531921.png',
      agentImg: '/assets/agent_1_1782576258985.png'
    },
    {
      id: 4,
      price: '₹ 4.50 Cr',
      emi: 'EMI starts at ₹1.6L/mo',
      title: '5 BHK Sea-Facing Penthouse in Worli',
      area: '4,100 sq.ft.',
      status: 'Ready to Move',
      floor: '35th out of 35',
      desc: 'Ultra-luxury penthouse offering 360-degree views of the Arabian Sea. Includes a private terrace, plunge pool, and servant quarters.',
      agentName: 'Vikram Singh',
      agentRole: 'Premium Agent',
      image: '/assets/prop_4_1782574555194.png',
      agentImg: '/assets/agent_1_1782576258985.png'
    }
  ];

  return (
    <div className="search-results-page">
      {/* Top Bar with Breadcrumbs & Active Filters */}
      <div className="top-bar">
        <div className="container">
          <div className="breadcrumb">
            Home <span>&gt;</span> Mumbai <span>&gt;</span> Flats in Andheri
          </div>
          <div className="active-filters-row">
            <div className="pills-container">
              <span className="filter-pill">
                2 BHK <button>×</button>
              </span>
              <span className="filter-pill">
                Under 1.5 Cr <button>×</button>
              </span>
              <span className="filter-pill">
                Ready to Move <button>×</button>
              </span>
            </div>
            <div className="sort-dropdown">
              Sort By:
              <select>
                <option>Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container search-layout">
        {/* Left Sidebar - Filters */}
        <div className="sidebar">
          <div className="filter-section">
            <div className="filter-title">Budget</div>
            <div className="budget-slider-container">
              <input type="range" min="50" max="500" defaultValue="150" className="range-slider" />
              <div className="budget-labels">
                <span>₹50 Lacs</span>
                <span>₹5+ Crores</span>
              </div>
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-title">BHK Type</div>
            <div className="bhk-pills">
              {['1', '2', '3', '4', '5+'].map(num => (
                <button 
                  key={num} 
                  className={`bhk-btn ${bhkActive === num ? 'active' : ''}`}
                  onClick={() => setBhkActive(num)}
                >
                  {num} BHK
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-title">Property Type</div>
            <div className="checkbox-list">
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked /> Apartment
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> Independent House/Villa
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> Plot/Land
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> Builder Floor
              </label>
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-title">Construction Status</div>
            <div className="checkbox-list">
              <label className="checkbox-label">
                <input type="radio" name="status" defaultChecked /> Ready to Move
              </label>
              <label className="checkbox-label">
                <input type="radio" name="status" /> Under Construction
              </label>
            </div>
          </div>

          <div className="filter-section" style={{ borderBottom: 'none' }}>
            <div className="filter-title">Indian Specific Filters</div>
            <div className="toggle-row">
              <span>RERA Registered Only</span>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
            <div className="toggle-row">
              <span>Vastu Compliant (East/North)</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="toggle-row">
              <span>Verified Properties Only</span>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="main-content">
          <div className="results-header">
            <div className="results-count">1,245 Properties found</div>
            <div className="view-toggles">
              <button className={`view-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}>List</button>
              <button className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')}>Grid</button>
              <button className={`view-btn ${viewMode === 'map' ? 'active' : ''}`} onClick={() => setViewMode('map')}>Map View</button>
            </div>
          </div>

          <div className="property-list">
            {properties.map(prop => (
              <div 
                key={prop.id} 
                className="list-card" 
                onClick={onPropertyClick} 
                style={{ cursor: 'pointer' }}
              >
                <div className="card-image-section">
                  <div className="verified-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Verified
                  </div>
                  <img src={prop.image} alt={prop.title} />
                  <div className="carousel-dots">
                    <div className="dot active"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
                
                <div className="card-content">
                  <div className="card-header">
                    <div className="price-container">
                      <span className="card-price">{prop.price}</span>
                      <span className="card-emi">{prop.emi}</span>
                    </div>
                    <button className="shortlist-btn">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                  
                  <div className="card-title">{prop.title}</div>
                  
                  <div className="card-details-row">
                    <div className="detail-item">
                      <span className="detail-label">Carpet Area</span>
                      <span className="detail-value">{prop.area}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Status</span>
                      <span className="detail-value">{prop.status}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Floor</span>
                      <span className="detail-value">{prop.floor}</span>
                    </div>
                  </div>
                  
                  <div className="card-desc">
                    {prop.desc}
                  </div>
                  
                  <div className="card-footer">
                    <div className="agent-info">
                      <img src={prop.agentImg} alt="Agent" />
                      <div>
                        <div className="agent-name">{prop.agentName}</div>
                        <div className="agent-role">{prop.agentRole}</div>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="btn btn-outline btn-whatsapp">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        Chat on WhatsApp
                      </button>
                      <button className="btn btn-primary">Contact Agent</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span style={{ color: 'var(--text-gray)' }}>...</span>
            <button className="page-btn">12</button>
            <button className="page-btn next">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
