import React from "react";
import "./OurStory.scss";
export const OurStory = () => {
  return (
    <section className="our-story-main">
      <div className="mission-div">
        <img src="/mission.png" />
        <div className="content">
          <h1>Our Mission</h1>

          <p className="story">
            As a customer oriented company, we’re committed to getting you the help you need anytime. If our FAQs did not answer your
            questions, you can enter your details and will get back to you as soon as possible. As a customer oriented company, we’re
            committed to getting you the help you need anytime. If our FAQs did not answer your questions, you can enter your details and
            will get back to you as soon as possible...
          </p>
          <div
            className="learn-more-button"
            onClick={() => {
              window.location.href = "about";
            }}
          >
            <p>Read More</p>
            <img src="/arrow.png" />
          </div>
        </div>
      </div>
    </section>
  );
};
