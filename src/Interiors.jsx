import React, { useState, useRef, useEffect } from 'react';
import './Interiors.css';

export default function Interiors() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const decorItems = [
    { id: 1, title: 'Luxury Living Setups', image: '/assets/interior_1_1782576220092.png', class: 'bento-1' },
    { id: 2, title: 'Modular Kitchens', image: '/assets/interior_2_1782576247054.png', class: 'bento-2' },
    { id: 3, title: 'Smart Lighting', image: '/assets/interior_1_1782576220092.png', class: 'bento-3' },
    { id: 4, title: 'Premium Flooring', image: '/assets/interior_2_1782576247054.png', class: 'bento-4' },
  ];

  const reels = [
    { id: 1, text: 'Bare shell to Premium Villa in 45 Days', image: '/assets/prop_1_1782574519478.png' },
    { id: 2, text: 'Luxury Apartment Interior Walkthrough', image: '/assets/interior_2_1782576247054.png' },
    { id: 3, text: 'Smart Home Automation Setup', image: '/assets/interior_1_1782576220092.png' },
    { id: 4, text: 'Bespoke Furniture Highlights', image: '/assets/prop_4_1782574555194.png' }
  ];

  const services = [
    {
      id: 1,
      title: 'Expert Vastu Consultation',
      desc: 'Ensure your home radiates positive energy with our certified Vastu experts.',
      icon: <path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z"></path>
    },
    {
      id: 2,
      title: 'Trusted Packers & Movers',
      desc: 'Seamless, insured relocation services with real-time tracking.',
      icon: <path d="M5 8h14v14H5zM2 4h20v4H2zM12 12v4"></path>
    },
    {
      id: 3,
      title: 'Deep Cleaning Services',
      desc: 'Professional post-construction and move-in deep cleaning.',
      icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    },
    {
      id: 4,
      title: 'Legal Property Verification',
      desc: 'Comprehensive title search and legal document vetting.',
      icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8"></path>
    }
  ];

  return (
    <div className="interiors-page">
      
      {/* Interactive Hero Section */}
      <section className="interiors-hero">
        <h1 className="interiors-title">Bring Your Dream Home to Life.</h1>
        <p className="interiors-subtitle">End-to-end interior and move-in services.</p>
        
        <div className="before-after-container" ref={containerRef}>
          {/* Before Image (using filter to mock raw look) */}
          <img src="/assets/interior_1_1782576220092.png" alt="Before" className="image-before" />
          <div className="ba-label label-before">Before</div>
          
          {/* After Image */}
          <div className="image-after-wrapper" style={{ width: `${sliderPosition}%` }}>
            <img src="/assets/interior_1_1782576220092.png" alt="After" className="image-after" />
            <div className="ba-label label-after">After</div>
          </div>
          
          {/* Slider Handle */}
          <div 
            className="slider-handle" 
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            <div className="slider-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Design & Decor Showcase */}
      <section className="decor-section">
        <div className="container">
          <div className="section-header-center">
            <h2>Bespoke Interiors</h2>
          </div>
          
          <div className="decor-bento-grid">
            {decorItems.map(item => (
              <div key={item.id} className={`bento-item ${item.class}`}>
                <img src={item.image} alt={item.title} />
                <div className="bento-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* 1-Minute Makeovers (Vertical Video Reels) */}
          <div className="reels-section">
            <div className="reels-header">
              <h2>1-Minute Makeovers</h2>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </div>
            
            <div className="reels-carousel">
              {reels.map(reel => (
                <div key={reel.id} className="reel-card">
                  <img src={reel.image} alt={reel.text} />
                  <div className="play-overlay">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </div>
                  <div className="reel-info">
                    <p>{reel.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Allied Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="section-header-center">
            <h2>Value-Added Services</h2>
          </div>
          
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {service.icon}
                  </svg>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <button className="btn-service">Book Consultation</button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
