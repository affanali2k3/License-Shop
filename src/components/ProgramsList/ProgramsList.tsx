import React from "react";
import { Program } from "../Program/Program";
import "./ProgramsList.scss";

interface props {
  searchTerm: string;
}
export const ProgramsList: React.FC<props> = (props) => {
  const programs = [
    { title: "Program 01", type: "real-estate", subtitle: "Prabhjit Singh", images: "real-estate-program-step-1.png", url: "program-01" },
    { title: "Program 02", type: "real-estate", subtitle: "Prabhjit Singh", images: "real-estate-program-step-2.png", url: "program-02" },
    {
      title: "Program 03",
      type: "home-inspection",
      subtitle: "Prabhjit Singh",
      images: "home-inspection-program-step-1.png",
      url: "program-03",
    },
    {
      title: "Program 04",
      type: "home-inspection",
      subtitle: "Prabhjit Singh",
      images: "home-inspection-program-step-2.png",
      url: "program-04",
    },
  ];

  const filteredRealEstatePrograms = programs.filter(
    (program) => program.type === "real-estate" && program.title.toLowerCase().includes(props.searchTerm.toLowerCase())
  );

  const filteredHomeInspectionPrograms = programs.filter(
    (program) => program.type === "home-inspection" && program.title.toLowerCase().includes(props.searchTerm.toLowerCase())
  );
  return (
    <section className="programs-list-main">
      {filteredRealEstatePrograms.length == 0 ? null : (
        <div className="continuing-education-category category-splitter">
          <h1>Real Estate Program</h1>
        </div>
      )}
      <div className="real-estate-programs-list">
        {filteredRealEstatePrograms.map((program, index) => (
          <Program key={index} url={program.url} id={index} image={program.images} title={program.title} subtitle={program.subtitle} />
        ))}
      </div>
      {filteredHomeInspectionPrograms.length == 0 ? null : (
        <div className="pre-licensing-category category-splitter">
          <h1>Home Inspection Program</h1>
        </div>
      )}
      <div className="home-inspection-programs-list">
        {filteredHomeInspectionPrograms.map((program, index) => (
          <Program key={index} url={program.url} id={index} image={program.images} title={program.title} subtitle={program.subtitle} />
        ))}
      </div>
    </section>
  );
};
