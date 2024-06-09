import React from "react";
import "./ContactOptions.scss";
export const ContactOptions = () => {
  return (
    <section className="contact-options-main">
      <div className="live-chat">
        <h1>Contact Us through Live Chat</h1>

        <div className="chat-button-div">
          <button className="chat-button">
            <img src="/chat.png" />
            <p>CLICK FOR LIVE CHAT</p>
          </button>
        </div>
      </div>
      <div className="contact-info">
        <div className="email">
          <img src="/email.png" />
          <div className="text">
            <p>support@licenseshop.com</p>
          </div>
        </div>
        <div className="email">
          <img src="/phone.png" />
          <div className="text">
            <p>+1 240-387-9785</p>
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
