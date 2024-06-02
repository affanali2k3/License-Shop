import React from "react";
import "./TripleGuarantee.scss";
export const TripleGuarantee = () => {
  return (
    <section id="triple-guarantee" className="triple-guarantee-main">
      <div className="guarantee-content">
        <h1>Triple Guarantee</h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur. Netus feugiat tristique dignissim nisl ut ut maecenas rhoncus. Vitae integer cursus lectus
          purus at et. Amet ipsum consequat pellentesque enim elementum.{" "}
        </p>
        <div className="guarantee-items">
          <div className="guarantee-item">
            <img src="/guarantee-1.png" />
            <p className="text">Pass the Exam</p>
          </div>
          <div className="guarantee-item">
            <img src="/guarantee-2.png" />
            <p className="text">Six Figure in the First Year</p>
          </div>
          <div className="guarantee-item">
            <img src="/guarantee-3.png" />
            <p className="text">24/7 Customer Support</p>
          </div>
          <div className="button-div">
            <div className="learn-more-button">
              <p>Learn More</p>
              <img src="/arrow.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="video-guarantee">
        <iframe
          width={window.innerWidth > 800 ? window.innerWidth * 0.2 : window.innerWidth}
          height="315"
          src={`https://www.youtube.com/embed/MLpWrANjFbI`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </section>
  );
};
