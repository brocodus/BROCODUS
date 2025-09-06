import React from "react";
import myPhoto from "../assets/brocodus.png";
import "./Home.css"; // 👈 import CSS for animation
import TypeAndDelete from "./TypeAndDelete";

function Home() {
  return (
    <div>
    <div className="home">

      <div className="home-left">
        <h1>
         Welcome to BROCODUS
        </h1>
        <h2 style={{fontSize:26,color:'#000'}}>
           <TypeAndDelete />
          {/* Technical Lead – Mobile Applications */}
          </h2>
        <p>
          BROCODUS is a forward-thinking software company dedicated to building innovative, scalable, and user-friendly digital solutions. We specialize in custom software development, web and mobile applications, and cutting-edge technology services designed to help businesses thrive in the digital age. With a team of skilled developers, creative designers, and problem-solvers, BROCODUS blends technology with innovation to deliver reliable products that drive growth and efficiency.
        </p>
        <a href="#contact" className="btn">Let’s Connect</a>
      </div>

      <div className="home-right">
        <img src={myPhoto} alt="Ankit Kumar" className="profile-img" />
      </div>
    </div>
    </div>
  );
}

export default Home;
