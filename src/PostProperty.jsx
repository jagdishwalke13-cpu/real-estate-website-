import React, { useState } from 'react';
import './PostProperty.css';

export default function PostProperty({ onExit }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [propType, setPropType] = useState('apartment');
  const [bhk, setBhk] = useState('3');
  const [uploadedImages, setUploadedImages] = useState([
    '/assets/interior_1_1782576220092.png',
    '/assets/interior_2_1782576247054.png'
  ]); // Dummy state to show thumbnails

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const removeImage = (index) => {
    const newImages = [...uploadedImages];
    newImages.splice(index, 1);
    setUploadedImages(newImages);
  };

  return (
    <div className="post-property-page">
      
      {/* Distraction-Free Header */}
      <header className="minimal-header">
        <div className="minimal-logo" onClick={onExit}>
          TerraHomes<span style={{ color: '#10B981' }}>.</span>
        </div>
        <button className="btn-muted" onClick={onExit}>Save & Exit</button>
      </header>

      {/* Progress Tracker */}
      <div className="progress-container">
        <div className="progress-steps">
          {[1, 2, 3, 4].map(step => (
            <div 
              key={step} 
              className={`progress-step ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
            >
              <div className="step-indicator">
                {currentStep > step ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : step}
              </div>
              <div className="step-label">
                {step === 1 && 'Basic Details'}
                {step === 2 && 'Location'}
                {step === 3 && 'Photos & Media'}
                {step === 4 && 'Pricing'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Form Area */}
      <div className="form-container">
        <div className="form-card">
          
          {currentStep === 1 && (
            <div className="step-content">
              <h2 className="form-section-title">Tell us about your property</h2>
              
              <label className="selector-label">Property Type</label>
              <div className="bento-grid">
                <div 
                  className={`bento-btn ${propType === 'apartment' ? 'active' : ''}`}
                  onClick={() => setPropType('apartment')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2"></path>
                  </svg>
                  <span>Apartment</span>
                </div>
                <div 
                  className={`bento-btn ${propType === 'villa' ? 'active' : ''}`}
                  onClick={() => setPropType('villa')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 21h18M9 21V9l-6 5v7M15 21V9l6 5v7M12 3l9 7v11H3V10l9-7z"></path>
                  </svg>
                  <span>Villa</span>
                </div>
                <div 
                  className={`bento-btn ${propType === 'plot' ? 'active' : ''}`}
                  onClick={() => setPropType('plot')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <path d="M3 9h18M9 21V9"></path>
                  </svg>
                  <span>Plot</span>
                </div>
              </div>

              <label className="selector-label">BHK Configuration</label>
              <div className="bento-grid">
                {['1', '2', '3', '4', '5+'].map(val => (
                  <div 
                    key={val}
                    className={`bento-btn ${bhk === val ? 'active' : ''}`}
                    onClick={() => setBhk(val)}
                  >
                    <span>{val} BHK</span>
                  </div>
                ))}
              </div>

              <div className="floating-group">
                <input type="text" className="floating-input" placeholder=" " />
                <label className="floating-label">Built-up Area (sq.ft)</label>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="step-content">
              <h2 className="form-section-title">Where is it located?</h2>
              <div className="floating-group">
                <input type="text" className="floating-input" placeholder=" " />
                <label className="floating-label">City</label>
              </div>
              <div className="floating-group">
                <input type="text" className="floating-input" placeholder=" " />
                <label className="floating-label">Locality / Project Name</label>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="step-content">
              <h2 className="form-section-title">Upload High-Quality Media</h2>
              
              <div className="upload-zone">
                <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"></path>
                </svg>
                <h3 className="upload-title">Drag & Drop photos here</h3>
                <p className="upload-subtitle">Upload High-Resolution Photos or 9:16 Vertical Videos (Max 50MB)</p>
              </div>

              {uploadedImages.length > 0 && (
                <div className="thumbnails-grid">
                  {uploadedImages.map((src, idx) => (
                    <div key={idx} className="thumbnail-box">
                      <img src={src} alt="Uploaded preview" />
                      <button className="btn-remove" onClick={() => removeImage(idx)}>✕</button>
                    </div>
                  ))}
                </div>
              )}

              <div className="premium-toggle-row">
                <div className="toggle-text">
                  <h4>Request Professional Photography</h4>
                  <p>Our vetted professionals will stage and shoot your property (+₹2,500)</p>
                </div>
                <label className="custom-switch">
                  <input type="checkbox" />
                  <span className="custom-slider"></span>
                </label>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="step-content">
              <h2 className="form-section-title">Set your pricing</h2>
              <div className="floating-group">
                <input type="text" className="floating-input" placeholder=" " />
                <label className="floating-label">Expected Price (₹)</label>
              </div>
              <div className="floating-group">
                <input type="text" className="floating-input" placeholder=" " />
                <label className="floating-label">Maintenance Charges (Optional)</label>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Sticky Footer */}
      <footer className="sticky-footer">
        <div className="footer-content-centered">
          <button 
            className="btn-muted" 
            style={{ visibility: currentStep > 1 ? 'visible' : 'hidden' }}
            onClick={handleBack}
          >
            Back
          </button>
          
          <button className="btn-primary-massive" onClick={currentStep === 4 ? onExit : handleNext}>
            {currentStep === 4 ? 'Post Property' : 'Save & Continue'}
          </button>
        </div>
      </footer>
      
    </div>
  );
}
