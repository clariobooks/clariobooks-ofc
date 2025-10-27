import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/Logos/Clariobooks.png" alt="Clario Books" className="nav-logo-img" />
          <span className="nav-logo-text">CLARIO BOOKS</span>
        </Link>
        
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isMenuOpen ? 'hamburger-line active' : 'hamburger-line'}></span>
          <span className={isMenuOpen ? 'hamburger-line active' : 'hamburger-line'}></span>
          <span className={isMenuOpen ? 'hamburger-line active' : 'hamburger-line'}></span>
        </button>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={isActive('/services') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

