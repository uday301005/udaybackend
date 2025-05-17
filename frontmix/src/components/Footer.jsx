import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Restaurant Info */}
          <div className="footer-section">
            <h3>Master Restaurant</h3>
            <p className="about-us">
              Experience the finest dining with our exceptional cuisine and warm hospitality.
            </p>
            <div className="contact-info">
              <p><FaPhone /> +1 234 567 8900</p>
              <p><MdEmail /> info@masterrestaurant.com</p>
              <p><FaMapMarkerAlt /> 123 Dining Street, Foodville, FC 12345</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><ScrollLink to="heroSection" smooth={true}>Home</ScrollLink></li>
              <li><ScrollLink to="menu" smooth={true}>Menu</ScrollLink></li>
              <li><ScrollLink to="about" smooth={true}>About Us</ScrollLink></li>
              <li><ScrollLink to="reservation" smooth={true}>Reservation</ScrollLink></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="footer-section">
            <h3>Opening Hours</h3>
            <ul className="opening-hours">
              <li>Monday - Friday</li>
              <li>11:00 AM - 11:00 PM</li>
              <li>Saturday - Sunday</li>
              <li>10:00 AM - 12:00 AM</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates and special offers.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="footer-bottom">
          <div className="social-icons">
            <FaFacebookF onClick={() => window.open('https://facebook.com')} />
            <FaInstagram onClick={() => window.open('https://instagram.com')} />
            <FaTwitter onClick={() => window.open('https://twitter.com')} />
            <FaYoutube onClick={() => window.open('https://youtube.com')} />
          </div>
          <div className="copyright">
            <p>&copy; 2024 Master Restaurant. All Rights Reserved.</p>
            <p>Designed with ❤️ by Master Restaurant Team</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
