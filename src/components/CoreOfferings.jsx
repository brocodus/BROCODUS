import React from "react";
import "./CoreOfferings.css";

const offerings = [
  {
    icon: "⚡",
    title: "Beginner-Friendly",
    description:
      "Step-by-step courses designed for absolute beginners to kickstart their coding journey.",
  },
  {
    icon: "📚",
    title: "Advanced Concepts",
    description:
      "Deep dive into advanced topics and frameworks to level up your skills.",
  },
  {
    icon: "💻",
    title: "Real-World Projects",
    description:
      "Learn by building real-world projects and gain hands-on experience.",
  },
  {
    icon: "💲",
    title: "Affordable Pricing",
    description:
      "Access premium courses at prices tailored for students and professionals.",
  },
  {
    icon: "📑",
    title: "Comprehensive Resources",
    description:
      "Gain access to a variety of coding resources such as templates, documentation, and code snippets to enhance your learning experience.",
  },
  {
    icon: "🏛",
    title: "Industry Insights",
    description:
      "Stay updated with the latest trends and insights from the tech industry to keep your skills relevant.",
  },
];

export default function CoreOfferings() {
  return (
    <section className="core-offerings">
      <p className="section-subtitle">Courses</p>
      <h2 className="section-title">Master Coding with Our Core Offerings</h2>

      <div className="offerings-grid">
        {offerings.map((item, index) => (
          <div className="offering-card" key={index}>
            <div className="offering-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
