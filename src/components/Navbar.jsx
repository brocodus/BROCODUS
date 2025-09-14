import React, { useState } from "react";
import "./Navbar.css";
import myPhoto from "../assets/brocodus.png";
import TopBar from "./TopBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={myPhoto} alt="BROCODUS" className="profile-img-nav" />
           <ul className={`nav-links ${isOpen ? "open" : ""}`}>
              <li><a href="#Home">Home</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Tutorials</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Notes</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Live Learning <span className="new-badge">New</span></a></li>
        <li><a href="#">For Business</a></li>
      </ul>
      </div>

      {/* Center/Right side links */}
   

      {/* Right side buttons */}
      <div className="nav-actions">
        <button className="search">🔍</button>
        <a href="#" className="login">Log In</a>
        <button className="signup">Sign Up</button>

        {/* Hamburger */}
        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
