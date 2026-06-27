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

  const goToSearch = (e) => {
    if(e) e.preventDefault();
    setCurrentPage('search');
    window.scrollTo(0, 0);
  };

  const goToHome = (e) => {
    if(e) e.preventDefault();
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const goToDetails = (e) => {
    if(e) e.preventDefault();
    setCurrentPage('details');
    window.scrollTo(0, 0);
  };

  const goToShowcase = (e) => {
    if(e) e.preventDefault();
    setCurrentPage('showcase');
    window.scrollTo(0, 0);
  };

  const goToBuilders = (e) => {
    if(e) e.preventDefault();
    setCurrentPage('builders');
    window.scrollTo(0, 0);
  };

  const goToInsights = (e) => {
    if(e) e.preventDefault();
    setCurrentPage('insights');
    window.scrollTo(0, 0);
  };

  const goToPost = (e) => {
    if(e) e.preventDefault();
    setCurrentPage('post');
    window.scrollTo(0, 0);
  };

  const goToInteriors = (e) => {
    if(e) e.preventDefault();
    setCurrentPage('interiors');
    window.scrollTo(0, 0);
  };

  const goToDashboard = (e) => {
    if(e) e.preventDefault();
    setCurrentPage('dashboard');
    window.scrollTo(0, 0);
  };

  const goToContact = (e) => {
    if(e) e.preventDefault();
    setCurrentPage('contact');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  };

  const isDistractionFree = currentPage === 'post' || currentPage === 'dashboard';

  return (
    <div className="app">
      {/* Global Header */}
      {!isDistractionFree && (
        <header className="header">
          <div className="container header-container">
            <div className="logo" onClick={goToHome} style={{ cursor: 'pointer' }}>
              TerraHomes<span style={{ color: 'var(--text-dark)' }}>.</span>
            </div>
            
            <nav className="nav-links">
              <a href="#" className="nav-link" onClick={goToSearch}>Buy</a>
              <a href="#" className="nav-link" onClick={goToSearch}>Rent</a>
              <a href="#" className="nav-link" onClick={goToInteriors}>Interiors</a>
              <a href="#" className="nav-link" onClick={goToShowcase}>New Projects</a>
              <a href="#" className="nav-link" onClick={goToBuilders}>Top Builders</a>
              <a href="#" className="nav-link" onClick={goToInsights}>Insights</a>
              <a href="#" className="nav-link" onClick={goToContact}>Contact</a>
            </nav>
            
            <div className="header-right">
              <a href="#" className="login-link" onClick={goToDashboard}>Agent Dashboard</a>
              <button className="btn btn-primary" onClick={goToPost}>Post Property - Free</button>
            </div>
          </div>
        </header>
      )}

      {/* Conditionally Render Pages */}
      {currentPage === 'home' && <Home onSearch={goToSearch} />}
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
