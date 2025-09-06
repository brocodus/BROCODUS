import React from "react";
import "./Section.css";

function Contact() {
  return (
    <div style={{textAlign:"center"}}>
      <h2 style={{textAlign:"center", fontSize:40, color:"#007bff"}}>Contact Me</h2>
      <p>If you'd like to connect, discuss an opportunity, or just say hello — feel free to reach out!</p>
      <div className="contact-row">
        <p>📱 <a href="tel:+918368245138">Call Here {'\n'} +918368245138 </a></p>
                <p>💬 <a href="https://chat.whatsapp.com/GyW2SR1YVV3BfrPzeki8aL"> WhatsApp Chat</a></p>

        <p>📧 <a href="mailto:brocodus@gmail.com">brocodus@gmail.com</a></p>
        <p>💻 <a href="https://github.com/brocodus" target="_blank" rel="noreferrer">GitHub</a></p>
        <p>🔗 <a href="https://www.linkedin.com/in/ankitkumarm108" target="_blank" rel="noreferrer">LinkedIn</a></p>
      </div>
      <p>© 2025 BROCODUS. All rights reserved.</p>
    </div>
  );
}

export default Contact;
