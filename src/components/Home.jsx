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
