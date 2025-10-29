import React from "react";
import "./css/contact.css"

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-tagline">
          We’d love to hear from you — whether it’s feedback, collaboration, or just a hello from the maze.
        </p>

        <div className="contact-details">
          <p><strong>Email:</strong> support@corporatemaze.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>HQ:</strong> Level 7, Tech District, Pune, India</p>
        </div>

        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-footer">
          <p>“Every maze has an exit — let’s find yours together.”</p>
          <p>© 2025 Corporate Maze. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;