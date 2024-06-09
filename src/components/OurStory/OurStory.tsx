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
            As a customer oriented company, we’re committed to our students for life. Its a bold statement that most companies wouldn't make
            but we see our students as an extension of us and are our family. We want to see them succeed and fly beyond their goals and
            because we see intrisically that their success is our success. The more we can allow our students to grow, we as a company can
            grow. If our students are not growing, we are not growing as a company.
          </p>
          <div
            className="learn-more-button"
            onClick={() => {
              window.location.href = "about";
            }}
          >
            <p>JOIN OUR FAMILY AND ALLOW US TO GROW TOGETHER</p>
            <img src="/arrow.png" />
          </div>
        </div>
      </div>
    </section>
  );
};
