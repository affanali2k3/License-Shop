import React from "react";
import "./BecomeInstructor.scss";
export const BecomeInstructor = () => {
  return (
    <section className="become-instructor-main">
      <div className="become-instructor-secondary">
        <div className="image-div image-first">
          <img src="/instructor-1.png" />
        </div>
        <div className="content">
          <h1>Become an Instructor join with Us</h1>
          <p>If you have experience and interest please apply below</p>
        </div>
        <div className="image-div image-second">
          <img src="/instructor-1.png" />
        </div>
        <div className="image-div image-third">
          <img src="/instructor-2.png" />
        </div>
      </div>
      <div className="button-div">
        <a href="mailto:careers@licenseshop.com" className="join-button">
          <p>JOIN WITH US</p>
          <img src="/arrow-white.png" />
        </a>
      </div>
    </section>
  );
};
