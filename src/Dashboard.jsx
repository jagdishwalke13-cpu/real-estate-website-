import React, { useState, useEffect } from 'react';
import './Dashboard.css';

export default function Dashboard({ onLogout }) {
  const [buildProgress, setBuildProgress] = useState(0);

  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setBuildProgress(68); // Animates to 68%
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const leads = [
    { id: 1, name: 'Amit Sharma', phone: '+91 98765 43210', property: 'The Riddhi Horizon, 3BHK', budget: '₹ 1.5 Cr', status: 'New', statusClass: 'status-new' },
    { id: 2, name: 'Priya Desai', phone: '+91 87654 32109', property: 'Lodha Altamount, 4BHK', budget: '₹ 4.5 Cr', status: 'Contacted', statusClass: 'status-contacted' },
    { id: 3, name: 'Rohan Mehta', phone: '+91 76543 21098', property: 'Godrej Zenith, Plot', budget: '₹ 80 L', status: 'Site Visit Done', statusClass: 'status-visit' },
    { id: 4, name: 'Sneha Patil', phone: '+91 65432 10987', property: 'Prestige Ocean, 5BHK', budget: '₹ 12 Cr', status: 'Closed', statusClass: 'status-closed' },
    { id: 5, name: 'Vikram Singh', phone: '+91 54321 09876', property: 'The Riddhi Horizon, 2BHK', budget: '₹ 95 L', status: 'New', statusClass: 'status-new' },
  ];

  return (
    <div className="dashboard-page">
      
      {/* Left Navigation Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-logo" onClick={onLogout}>
          TerraHomes<span style={{ color: '#10B981' }}>.</span>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-item active">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            Overview
          </div>
          <div className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
            My Properties
          </div>
          <div className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Lead CRM
          </div>
          <div className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Site Visits
          </div>
          <div className="nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            Performance Analytics
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-content">
        
        <div className="dashboard-header">
          <h1>Welcome back, Developer!</h1>
        </div>

        {/* Top KPI Header */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-title">Total Active Listings</div>
            <div className="kpi-value-row">
              <div className="kpi-value">12</div>
              <div className="kpi-growth">+2</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-title">New Leads This Week</div>
            <div className="kpi-value-row">
              <div className="kpi-value">45</div>
              <div className="kpi-growth">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                +14%
              </div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-title">Upcoming Site Visits</div>
            <div className="kpi-value-row">
              <div className="kpi-value">8</div>
              <div className="kpi-growth" style={{ color: '#F59E0B' }}>This week</div>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-title">Profile Views</div>
            <div className="kpi-value-row">
              <div className="kpi-value">1,200</div>
              <div className="kpi-growth">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                +32%
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-main-grid">
          
          {/* Lead Management CRM */}
          <div className="crm-section">
            <h2 className="section-title">Lead Management CRM</h2>
            <table className="crm-table">
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Phone Number</th>
                  <th>Property Inquired</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead.id}>
                    <td>{lead.name}</td>
                    <td>{lead.phone}</td>
                    <td>{lead.property}</td>
                    <td>{lead.budget}</td>
                    <td>
                      <span className={`status-tag ${lead.statusClass}`}>{lead.status}</span>
                    </td>
                    <td>
                      <div className="action-icons">
                        <button className="btn-action btn-whatsapp" title="WhatsApp">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                          </svg>
                        </button>
                        <button className="btn-action btn-phone" title="Call">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Visual Project Tracking Widget */}
          <div className="widget-section">
            <h2 className="section-title">Construction Progress</h2>
            <div className="construction-container">
              <div className="building-silhouette"></div>
              
              {/* Dynamic progressive build animation */}
              <div 
                className="building-render" 
                style={{ height: `${buildProgress}%` }}
              >
                <div className="progress-overlay-text">{buildProgress}%</div>
              </div>
            </div>
            <div className="milestone-text">Current Phase: Tower B Structural Framework</div>
          </div>

        </div>
      </main>
    </div>
  );
}
