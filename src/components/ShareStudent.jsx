import React from "react";
import "./ShareStudent.css";

const companies = [
  "amazon",
  "google",
  "microsoft",
  "goldman sachs",
  "paypal",
  "samsung",
  "ey",
  "hitachi",
  "jpmorgan",
  "ibm",
  "dell",
  "deloitte",
];

export default function ShareStudent() {
  return (
    <section className="share-student">
      <h2>Helped students achieve their dream job at</h2>
      <div className="company-grid">
        {companies.map((name, index) => (
          <div className="company-card" key={index}>
            <span>{name}</span>
          </div>
        ))}
      </div>
      <p className="more">+ many more companies</p>
    </section>
  );
}
