import React, { useState } from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip 
} from 'recharts';
import './LocalityInsights.css';

export default function LocalityInsights() {
  const [activeMapToggle, setActiveMapToggle] = useState('schools');
  const [priceType, setPriceType] = useState('buy');

  // Radar Chart Data
  const radarData = [
    { subject: 'Safety', A: 85, fullMark: 100 },
    { subject: 'Cleanliness', A: 90, fullMark: 100 },
    { subject: 'Connectivity', A: 95, fullMark: 100 },
    { subject: 'Greenery', A: 80, fullMark: 100 },
    { subject: 'Nightlife', A: 90, fullMark: 100 },
  ];

  // Price Trend Data (Buy vs Rent)
  const buyData = [
    { year: '2019', price: 10500 },
    { year: '2020', price: 11000 },
    { year: '2021', price: 11200 },
    { year: '2022', price: 12500 },
    { year: '2023', price: 13400 },
    { year: '2024', price: 14500 },
  ];

  const rentData = [
    { year: '2019', price: 35 },
    { year: '2020', price: 36 },
    { year: '2021', price: 35 },
    { year: '2022', price: 42 },
    { year: '2023', price: 48 },
    { year: '2024', price: 55 },
  ];

  const chartData = priceType === 'buy' ? buyData : rentData;

  const reviews = [
    { id: 1, text: "Great connectivity, but traffic peaks during evening hours. The dining scene is unparalleled in the city.", name: "Rahul Deshmukh" },
    { id: 2, text: "Very safe and green neighborhood. Lots of premium supermarkets and international schools nearby. Perfect for families.", name: "Priya Sharma" },
    { id: 3, text: "Property appreciation has been phenomenal over the last 3 years. Renting out is also extremely quick.", name: "Vikram Mehta" },
    { id: 4, text: "Excellent balance of quiet residential lanes and bustling commercial hubs just 5 minutes away.", name: "Aditi Rao" }
  ];

  return (
    <div className="insights-page">
      
      <div className="container">
        {/* Locality Header & Overall Score */}
        <section className="insights-header-section">
          <div className="insights-header-top">
            <h1 className="locality-title">Locality Insights: Koregaon Park, Pune</h1>
            <div className="livability-gauge">
              8.5<span>/10</span>
            </div>
          </div>
          <div className="highlight-tags">
            <div className="highlight-tag">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              Premium Lifestyle
            </div>
            <div className="highlight-tag">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              High Rental Yield
            </div>
            <div className="highlight-tag">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              Excellent Connectivity
            </div>
          </div>
        </section>
      </div>

      {/* Interactive Map & Neighborhood Radar */}
      <section className="map-radar-section">
        <div className="container map-radar-layout">
          
          <div className="map-container-custom">
            <iframe 
              title="Koregaon Park Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15131.621459045952!2d73.8821945!3d18.5329715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0f6b4e05517%3A0xc665dc6603a1fc36!2sKoregaon%20Park%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            
            <div className="map-toggles">
              <button 
                className={`map-toggle-btn ${activeMapToggle === 'schools' ? 'active' : ''}`}
                onClick={() => setActiveMapToggle('schools')}
              >Schools</button>
              <button 
                className={`map-toggle-btn ${activeMapToggle === 'hospitals' ? 'active' : ''}`}
                onClick={() => setActiveMapToggle('hospitals')}
              >Hospitals</button>
              <button 
                className={`map-toggle-btn ${activeMapToggle === 'metro' ? 'active' : ''}`}
                onClick={() => setActiveMapToggle('metro')}
              >Metro/Transit</button>
              <button 
                className={`map-toggle-btn ${activeMapToggle === 'malls' ? 'active' : ''}`}
                onClick={() => setActiveMapToggle('malls')}
              >Malls</button>
            </div>
          </div>

          <div className="radar-container">
            <h3 className="radar-title">Neighborhood Quality Index</h3>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#EBEBEB" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#717171', fontSize: 13, fontWeight: 500 }} />
                <Radar name="Koregaon Park" dataKey="A" stroke="#FF5A5F" fill="#FF5A5F" fillOpacity={0.4} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </section>

      {/* Price Trends & Historical Data Graph */}
      <section className="price-trends-section">
        <div className="container">
          
          <div className="price-header">
            <div className="price-title-group">
              <h2>Price Trends & Appreciation</h2>
              <div className="price-stat-row">
                <span className="current-price">
                  {priceType === 'buy' ? '₹ 14,500 / sq.ft.' : '₹ 55 / sq.ft. / mo'}
                </span>
                <span className="yoy-growth">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                  +8.4% YoY Growth
                </span>
              </div>
            </div>
            
            <div className="price-toggles">
              <button 
                className={`price-toggle-btn ${priceType === 'buy' ? 'active' : ''}`}
                onClick={() => setPriceType('buy')}
              >Buy</button>
              <button 
                className={`price-toggle-btn ${priceType === 'rent' ? 'active' : ''}`}
                onClick={() => setPriceType('rent')}
              >Rent</button>
            </div>
          </div>

          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" stroke="#A3A3A3" tickLine={false} axisLine={false} />
                <YAxis stroke="#A3A3A3" tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}`} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <Tooltip formatter={(value) => [`₹${value}`, 'Price']} />
                <Area type="monotone" dataKey="price" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorPrice)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

        </div>
      </section>

      {/* Resident Reviews & Sentiment */}
      <section className="reviews-section">
        <div className="container">
          <div className="reviews-header">
            <h2>What Residents Say</h2>
          </div>
          
          <div className="reviews-carousel">
            {reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="stars">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} width="20" height="20" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                
                <p className="review-text">"{review.text}"</p>
                
                <div className="reviewer-info">
                  <span className="reviewer-name">{review.name}</span>
                  <span className="verified-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Verified Resident
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
