import React from "react";
import "./HeroSectionLanding.scss";
import { FindPerfectProgram } from "../FindPerfectProgram/FindPerfectProgram";
export const HeroSectionLanding = () => {
  return (
    <section className="hero-sec-main">
      <div className="hero-sec-secondary">
        {/* {window.innerWidth > 800 ? <img src="hero-sec.jpg" /> : <img src="/hero-sec.png" />} */}
        <div className="text-button">
          <h1>
            We Guarantee You Will <span>Pass The Exam </span> And Make <span>Six Figures</span> In Your <span>First Year</span>
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
        <div className="hero-sec-video">
          <div className="video-hero-sec">
            <iframe
              width={window.innerWidth > 800 ? window.innerWidth * 0.4 : window.innerWidth * 0.9}
              height={window.innerWidth > 800 ? "515" : "215"}
              src={`https://www.youtube.com/embed/MLpWrANjFbI`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      </div>
      <FindPerfectProgram />
    </section>
  );
};
