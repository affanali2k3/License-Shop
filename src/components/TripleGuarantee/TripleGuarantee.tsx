import React from "react";
import "./TripleGuarantee.scss";
export const TripleGuarantee = () => {
  return (
    <section id="triple-guarantee" className="triple-guarantee-main">
      <div className="guarantee-content">
        <h1>Triple Guarantee</h1>
        <p className="para">
          We make sure that this is the best financial decision you have ever made to join our family and create a long-term relationship
          with us, and the way we do that is that we guarantee these three things.
        </p>
        <div className="guarantee-items">
          <div className="guarantee-item">
            <img src="/guarantee-1.png" />
            <p className="text">You are going to Pass the Exam</p>
          </div>
          <div className="guarantee-item">
            <img src="/guarantee-2.png" />
            <p className="text">You are going to get Six Figures in your First Year</p>
          </div>
          <div className="guarantee-item">
            <img src="/guarantee-3.png" />
            <p className="text">You continue to keep increasing your business every year based on your goals</p>
          </div>
          <div
            className="button-div"
            onClick={() => {
              window.location.href = "about";
            }}
          >
            <div
              className="learn-more-button"
              onClick={() => {
                window.location.href = "about";
              }}
            >
              <p>Learn More</p>
              <img src="/arrow.png" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="video-guarantee">
        <iframe
          width={window.innerWidth > 800 ? window.innerWidth * 0.2 : window.innerWidth}
          height="315"
          src={`https://www.youtube.com/embed/MLpWrANjFbI`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div> */}
    </section>
  );
};
