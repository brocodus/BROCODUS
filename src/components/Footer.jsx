// src/components/Footer.jsx
// import { FaGithub, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main */}
        <div className="footer-section">
          <h3>Main</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Work With Us</a></li>
            <li><a href="#">My Gear</a></li>
          </ul>
        </div>

        {/* Learn */}
        <div className="footer-section">
          <h3>Learn</h3>
          <ul>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Notes</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Refund</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Social</h3>
          <ul>
            <li><a href="https://github.com/brocodus">GitHub</a></li>
            <li> <a href="https://x.com/Brocodus">Twitter (X)</a></li>
            <li><a href="https://www.youtube.com/@BroCodus">YouTube</a></li>
            <li><a href="https://www.facebook.com/people/Brocodus/61580943743990/">
            <i className="fab fa-facebook" style={{ color: '#3b5998', fontSize: '24px' }}></i>Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/brocodus/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        Made with <span className="red">❤️</span> and <span className="coffee">☕</span> in India
      </div>
    </footer>
  );
}
