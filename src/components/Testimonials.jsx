import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "I don't have words to thank this man, I'm really grateful to have this channel and website in my daily routine. If you're a mere beginner, then you can trust this guy and can put your time into his content. I can assure you that it'll be worth it.",
    name: "Ankit Kumar",
    role: "React Native Developer",
  },
  {
    quote:
      "For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel, and one can learn according to their skill levels. And the icing on the cake is, most of the content is available for free.",
    name: "Aditya Mishra",
    role: "Web Developer",
  },
];

export default function Testimonials() {
  return (
    <>
      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-icon">❝</div>
              <p className="quote">{t.quote}</p>
              <h4 className="name">{t.name}</h4>
              <p className="role">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="cta">
        <div className="cta-overlay">
          <h2 className="cta-title">Start Your Coding Journey</h2>
          <p className="cta-subtitle">
            Learn coding step-by-step with India's most loved programming mentor.
          </p>
          <button className="cta-button">Start Now</button>
        </div>
      </section>
    </>
  );
}
