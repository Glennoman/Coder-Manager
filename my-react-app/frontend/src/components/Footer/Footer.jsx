import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section>
      <footer className="footer">
        <div className="contact-us-container">
          <div className="contact-us">
            <h1>Contact Us</h1>
            <form id="contactform">
              <label htmlFor="name">Name</label>
              <br />
              <input
                className="contact-us-2"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
              <br />
              <div className="error-message" id="name-error"></div>

              <label htmlFor="email">Email</label>
              <br />
              <input
                className="contact-us-2"
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <br />
              <div className="error-message" id="email-error"></div>

              <label htmlFor="message">Message</label>
              <br />
              <textarea
                className="contact-us-2"
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
              <br />
              <div className="error-message" id="message-error"></div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <p>
          © {new Date().getFullYear()} Your Competitive Programming Platform.
          All Rights Reserved.
        </p>
      </footer>
    </section>
  );
};

export default Footer;
