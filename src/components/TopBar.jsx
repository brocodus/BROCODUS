import "./TopBar.css";
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="topbar">
      {/* Left Side */}
      <div className="topbar-left">
        <span className="tagline">
          <strong>#India</strong> ka education planner
        </span>
        <a href="#" className="apply-btn">
          Apply For Learnify Scholarship Aid
        </a>
      </div>

      {/* Right Side */}
      <div className="topbar-right">
        <div className="contact">
          <FaEnvelope className="icon" color="#0a4374" />
          <span>brocodus@gmail.com</span>
        </div>
        <div className="contact">
          <FaPhoneAlt className="icon" color="#0a4374" />
          <span>+91 8368245138</span>
        </div>
        <div className="social-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>
    </div>
  );
}
