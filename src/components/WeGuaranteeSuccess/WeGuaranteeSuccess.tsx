import React from "react";
import "./WeGuaranteeSuccess.scss";
export const WeGuaranteeSuccess = () => {
  return (
    <section className="we-guarantee-success-main">
      <div className="content">
        <h1>We Guarantee Your Success</h1>
        <p>
          We are the leading Real Estate education provider with several years of experience in the industry. Be one of the Real Estate
          professionals who launched successful careers through our expert mentor led and interactive courses.
        </p>
      </div>
      <div className="guarantee-success-video">
        <iframe
          width={window.innerWidth > 800 ? window.innerWidth * 0.4 : window.innerWidth * 0.9}
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
