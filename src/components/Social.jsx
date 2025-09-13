import "./SocialOverView.css";
import webDev from "../assets/webDev.png";
import dataScience from "../assets/dataScience.png";
import dsa from "../assets/dsa.png";


export default function SocialOverView() {
  return (
    <div className="app">
      <section className="practice-section">
        <h2>Code Smarter with Real-World Practice</h2>
        <p>
          At BROCODUS, you don’t just learn code — you engage in practical
          exercises that reflect real-world scenarios. From beginner-friendly
          lessons to advanced courses trusted by professionals, we prepare you
          for real-world projects.
        </p>

        <div className="cards-container">
          <div className="card">
            <img src={webDev} alt="Web Dev" />
            <div className="card-content">
              <h3>Web Development</h3>
              <p>
                Learn HTML, CSS, JavaScript and modern frameworks to build
                responsive websites and web applications.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={dataScience} alt="AI" />
            <div className="card-content">
              <h3>Data Science & AI</h3>
              <p>
                Master Python, data analysis, machine learning and artificial
                intelligence with hands-on projects.
              </p>
            </div>
          </div>

          <div className="card">
            <img src={dsa} alt="DSA" />
            <div className="card-content">
              <h3>Data Structures & Algorithms</h3>
              <p>
                Learn DSA and crack interviews at top companies like Google and
                Microsoft.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <h2>Empowering Aspiring Developers to Build Their Future in Tech!</h2>
        <div className="stats-container">
          <div className="stat-box">
            <h3>6 months</h3>
            <p>on average</p>
          </div>
          <div className="stat-box">
            <h3>1000+</h3>
            <p>students trained</p>
          </div>
          <div className="stat-box">
            <h3>1 Million+</h3>
            <p>views and counting</p>
          </div>
        </div>
      </section>
    </div>
  );
}
