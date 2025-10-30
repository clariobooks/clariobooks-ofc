import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src="/Logos/Clariobooks.png" alt="Clario Books" className="footer-logo-img" />
          <h3 className="footer-logo-text">CLARIO BOOKS</h3>
          <p>Your trusted partner in financial clarity and bookkeeping excellence.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/expertise">Our Expertise</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Phone: 92 321 2918754</p>
          <p>Business Email: info@clariobook.com</p>
          <p>Gmail: Clariobooks@gmail.com</p>
          <p>Address: 10 park parade, barra hall circus. Ub32nu</p>
          <p>Hayes, London</p>
        </div>
        
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Clario Books. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

