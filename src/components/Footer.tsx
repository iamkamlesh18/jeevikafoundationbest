import { Link } from "react-router-dom"
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi"
import { routes } from "../routes"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* About Section */}
            <div className="footer-section">
              <h4>About Jeevika</h4>
              <p>Building dignity, opportunity, and resilience alongside communities through patient, community-led programs.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><FiFacebook size={18} /></a>
                <a href="#" aria-label="Twitter"><FiTwitter size={18} /></a>
                <a href="#" aria-label="LinkedIn"><FiLinkedin size={18} /></a>
                <a href="#" aria-label="Instagram"><FiInstagram size={18} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to={routes.about}>About Us</Link></li>
                <li><Link to={routes.programs}>Programs</Link></li>
                <li><Link to={routes.impact}>Impact</Link></li>
                <li><Link to={routes.team}>Team</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><Link to={routes.blog}>Blog</Link></li>
                <li><Link to={routes.getInvolved}>Get Involved</Link></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4>Contact Us</h4>
              <ul className="contact-info">
                <li>
                  <FiMail size={16} />
                  <a href="mailto:hello@jeevika.org">hello@jeevika.org</a>
                </li>
                <li>
                  <FiPhone size={16} />
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </li>
                <li>
                  <FiMapPin size={16} />
                  <span>India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Jeevika Foundation. All rights reserved. | Crafted with purpose.</p>
        </div>
      </div>
    </footer>
  )
}
