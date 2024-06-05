import React from "react";
import "./SuccessStudents.scss";
export const SuccessStudents = () => {
  return (
    <section className="success-students-main">
      <div className="you-will-be-next">
        <h1>Success Stories Of Our Students</h1>
        <p className="para">
          Pellentesque non aliquet sem. Aliquam facilisis nec velit vitae commodo. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.{" "}
        </p>
        <h2>You will be the next</h2>
        <div
          className="view-more-button"
          onClick={() => {
            window.location.href = "about";
          }}
        >
          <p>VIEW MORE</p>
          <img src="/arrow.png" />
        </div>
      </div>
      <div className="testimonial-videos">
        <div className="video-testimonial">
          <iframe
            width={window.innerWidth > 800 ? window.innerHeight * 0.8 : window.innerWidth * 0.9}
            height={window.innerWidth > 800 ? "515" : "315"}
            src={`https://www.youtube.com/embed/MLpWrANjFbI`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </section>
  );
};
