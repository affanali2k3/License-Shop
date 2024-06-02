import React from "react";

import "./ProgramsList.scss";
import { Program } from "../Program/Program";
export const ProgramsList = () => {
  return (
    <section className="courses-list-main">
      <div className="continuing-education-category category-splitter">
        <h1>Real Estate Programs</h1>
      </div>
      <Program url="program-01" id={1} image={"real-estate-program.jpg"} title="Program 01" subtitle="Prabhjit Singh" />
      <Program url="program-02" id={2} image={"real-estate-program.jpg"} title="Program 02" subtitle="Prabhjit Singh" />
      <div className="pre-licensing-category category-splitter">
        <h1>Home Inspection Programs</h1>
      </div>
      <Program url="program-03" id={3} image={"home-inspection-program.jpg"} title="Program 03" subtitle="Prabhjit Singh" />
      <Program url="program-04" id={4} image={"home-inspection-program.jpg"} title="Program 04" subtitle="Prabhjit Singh" />
    </section>
  );
};
