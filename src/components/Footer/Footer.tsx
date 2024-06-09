import React from "react";
import "./Footer.scss";
export const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-secondary">
        <div className="col-1">
          <img src="/logo-footer.png" />
          <div
            className="contact-us-button"
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            <p>CONTACT US</p>
          </div>
        </div>

        <div className="content">
          <ul>
            <li>
              <a href="courses">Courses</a>
            </li>
            <li>
              <a href="programs">Programs</a>
            </li>
            <li>
              <a href="programs">Challenges</a>
            </li>
            <li>
              <a href="about">About Us</a>
            </li>
          </ul>

          <ul>
            <li>Contact</li>

            <li className="support-contact">support@licenseshop.com</li>
            <li className="support-contact">+1 (240) 387 9785 </li>
            <li>Send Us A Message</li>
            <li className="socials-list">
              <img src="/facebook.png" />
              <img src="/linkedn-2.png" />
              <img src="/twitter-2.png" />
              <img src="/instagram-2.png" />
            </li>
          </ul>
        </div>
      </div>
      <div className="privacy-policy">
        <p>Support</p>
        <p>Privacy Policy</p>
        <p>Terms & Agreements</p>
      </div>
      <div className="copyright">
        <p>@2024. License Shop All Rights Reserved</p>
      </div>
    </footer>
  );
};
