// import "./Home.css";
// import TypeAndDelete from "./TypeAndDelete";

// function Home() {
//   return (
//     <div>
//     <div className="home">

//       <div className="home-left">
//         <h1>
//          Welcome to BROCODUS
//         </h1>
//         <h2 style={{fontSize:26,color:'#000'}}>
//            <TypeAndDelete />
//           {/* Technical Lead – Mobile Applications */}
//           </h2>
//         <p>
//           BROCODUS is a forward-thinking software company dedicated to building innovative, scalable, and user-friendly digital solutions. We specialize in custom software development, web and mobile applications, and cutting-edge technology services designed to help businesses thrive in the digital age. With a team of skilled developers, creative designers, and problem-solvers, BROCODUS blends technology with innovation to deliver reliable products that drive growth and efficiency.
//         </p>
//         <a href="#contact" className="btn">Let’s Connect</a>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Home;

// HeroSection.js
import React from "react";
import "./Home.css";
import TypeAndDelete from "./TypeAndDelete";

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="content">
        <span className="badge">Learn coding the right way</span>
        <h1>
          Welcome to <span className="highlight">BROCODUS</span>
        </h1>
        <h2><TypeAndDelete /></h2>
        <p>
          Unsure which course to start with? We’ve got you covered! Explore our free courses and find the one that fits your goals.{" "}
          <span className="highlight"><b>BROCODUS</b></span>{" "}is my initiative to simplify coding—sharing the fundamentals and powerful techniques that took me years to master, in a way that’s easy to understand and apply."
        </p>

        <div className="buttons">
          <button className="btn btn-light">Explore Courses</button>
          <button className="btn btn-dark">Contact us</button>
        </div>

        <div className="stats">
          <div>
            <h3>50+</h3>
            <p>Courses</p>
          </div>
          <div>
            <h3>1K+</h3>
            <p>Students</p>
          </div>
          <div>
            <h3>5.0</h3>
            <p>Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}
