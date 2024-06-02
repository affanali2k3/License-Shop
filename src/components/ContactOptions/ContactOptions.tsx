import React from "react";
import "./ContactOptions.scss";
export const ContactOptions = () => {
  return (
    <section className="contact-options-main">
      <div className="live-chat">
        <h1>Contact Us through Live Chat</h1>
        <p className="para">
          pellentesque felis cursus. Proin lacus magna, lobortis vel quam ac, dignissim dapibus odio. Pellentesque vulputate
        </p>
        <div className="chat-button-div">
          <button className="chat-button">
            <img src="/chat.png" />
            <p>CLICK FOR LIVE CHAT</p>
          </button>
        </div>
      </div>
      <div className="contact-info">
        <h1>Contact Info</h1>
        <div className="email">
          <img src="/email.png" />
          <div className="text">
            <h2>Email Support</h2>
            <p>support@licenseshop.com</p>
          </div>
        </div>
        <div className="email">
          <img src="/phone.png" />
          <div className="text">
            <h2>Phone No:</h2>
            <p>+1 301-637-7663</p>
          </div>
        </div>
        <h2>Follow Us</h2>
        <div className="socials">
          <img src="/twitter.png" />
          <img src="/linkedn.png" />
          <img src="/instagram.png" />
        </div>
      </div>
    </section>
  );
};
