import React, { useState } from 'react';
import './index.css';
import Home from './Home';
import SearchResults from './SearchResults';
import PropertyDetails from './PropertyDetails';
import Showcase from './Showcase';
import BuilderDirectory from './BuilderDirectory';
import LocalityInsights from './LocalityInsights';
import PostProperty from './PostProperty';
import Interiors from './Interiors';
import Dashboard from './Dashboard';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (pageId, e) => {
    if(e) e.preventDefault();
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false); // Close menu on navigation
    window.scrollTo(0, 0);
  };

  const isDistractionFree = currentPage === 'post' || currentPage === 'dashboard';

  return (
    <div className="app">
      {/* Global Header */}
      {!isDistractionFree && (
        <header className="header">
          <div className="container header-container">
            <div className="logo" onClick={(e) => handleNavigate('home', e)} style={{ cursor: 'pointer' }}>
              TerraHomes<span style={{ color: 'var(--text-dark)' }}>.</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="nav-links desktop-only">
              <a href="#" className="nav-link" onClick={(e) => handleNavigate('search', e)}>Buy</a>
              <a href="#" className="nav-link" onClick={(e) => handleNavigate('search', e)}>Rent</a>
              <a href="#" className="nav-link" onClick={(e) => handleNavigate('interiors', e)}>Interiors</a>
              <a href="#" className="nav-link" onClick={(e) => handleNavigate('showcase', e)}>New Projects</a>
              <a href="#" className="nav-link" onClick={(e) => handleNavigate('builders', e)}>Top Builders</a>
              <a href="#" className="nav-link" onClick={(e) => handleNavigate('insights', e)}>Insights</a>
              <a href="#" className="nav-link" onClick={(e) => handleNavigate('contact', e)}>Contact</a>
            </nav>
            
            <div className="header-right desktop-only">
              <a href="#" className="login-link" onClick={(e) => handleNavigate('dashboard', e)}>Agent Dashboard</a>
              <button className="btn btn-primary" onClick={(e) => handleNavigate('post', e)}>Post Property - Free</button>
            </div>

            {/* Hamburger Button (Mobile Only) */}
            <button 
              className={`hamburger-btn mobile-only ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Mobile Overlay Menu */}
          <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
            <nav className="mobile-nav-links">
              <a href="#" className="mobile-nav-link" onClick={(e) => handleNavigate('search', e)}>Buy</a>
              <a href="#" className="mobile-nav-link" onClick={(e) => handleNavigate('search', e)}>Rent</a>
              <a href="#" className="mobile-nav-link" onClick={(e) => handleNavigate('interiors', e)}>Interiors</a>
              <a href="#" className="mobile-nav-link" onClick={(e) => handleNavigate('showcase', e)}>New Projects</a>
              <a href="#" className="mobile-nav-link" onClick={(e) => handleNavigate('builders', e)}>Top Builders</a>
              <a href="#" className="mobile-nav-link" onClick={(e) => handleNavigate('insights', e)}>Insights</a>
              <a href="#" className="mobile-nav-link" onClick={(e) => handleNavigate('contact', e)}>Contact</a>
            </nav>
            <div className="mobile-nav-actions">
              <a href="#" className="mobile-login-link" onClick={(e) => handleNavigate('dashboard', e)}>Agent Dashboard</a>
              <button className="btn btn-primary mobile-post-btn" onClick={(e) => handleNavigate('post', e)}>Post Property - Free</button>
            </div>
          </div>
        </header>
      )}

      {/* Conditionally Render Pages */}
      {currentPage === 'home' && <Home onSearch={(e) => handleNavigate('search', e)} />}
      {currentPage === 'search' && <SearchResults onPropertyClick={goToDetails} />}
      {currentPage === 'details' && <PropertyDetails />}
      {currentPage === 'showcase' && <Showcase />}
      {currentPage === 'builders' && <BuilderDirectory />}
      {currentPage === 'insights' && <LocalityInsights />}
      {currentPage === 'post' && <PostProperty onExit={goToHome} />}
      {currentPage === 'interiors' && <Interiors />}
      {currentPage === 'dashboard' && <Dashboard onLogout={goToHome} />}
      {currentPage === 'contact' && <Contact />}

      {/* Footer */}
      {!isDistractionFree && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
