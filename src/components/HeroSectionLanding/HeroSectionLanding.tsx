import React from "react";
import "./HeroSectionLanding.scss";
export const HeroSectionLanding = () => {
  return (
    <section className="hero-sec-main">
      {window.innerWidth > 800 ? <img src="/hero-sec-desktop.png" /> : <img src="/hero-sec.png" />}
      <div className="text-button">
        <h1>
          Guaranteed <span>Passing the Exam</span> and Six Figure in Your First Year!
        </h1>
        <div
          className="learn-more"
          onClick={() => {
            window.location.href = "about";
          }}
        >
          Learn More
        </div>
      </div>
    </section>
  );
};
