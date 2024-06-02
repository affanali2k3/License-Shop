import React from "react";
import "./WeHaveBestPrograms.scss";
export const WeHaveBestPrograms = () => {
  return (
    <section className="we-have-best-programs-main">
      <h1>We Have Best Programs For You</h1>
      <div className="pre-licensing-programs">
        <div className="program-pre-licensing">
          <img src="/pre-licensing-program.png" />
          <div className="content">
            <h2>Pre Licensing</h2>
            <p>
              Pellentesque non aliquet sem. Aliquam facilisis nec velit vitae commodo. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.{" "}
            </p>
          </div>
        </div>
        <div className="program-pre-licensing">
          <img src="/ce.png" />
          <div className="content">
            <h2>Continuing Education</h2>
            <p>
              Pellentesque non aliquet sem. Aliquam facilisis nec velit vitae commodo. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
