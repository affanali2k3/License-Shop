import React from "react";
import "./CareerAssessment.scss";
export const CareerAssessment = () => {
  return (
    <section className="career-assessment-main">
      <h1>Take our 60 second career assessment and figure out which career is right for you!</h1>
      <div className="button-div">
        <div className="take-assessment-button">
          <p>Take The Assessment</p>
          <img src="/arrow.png" />
        </div>
      </div>
    </section>
  );
};
