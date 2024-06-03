import React from "react";
import "./ProgramsList.scss";
import { Program } from "../Program/Program";

interface props {
  searchTerm: string;
}
export const ProgramsList: React.FC<props> = (props) => {
  const programs = [
    { title: "Program 01", type: "real-estate", subtitle: "Prabhjit Singh", images: "real-estate-program.jpg", url: "program-01" },
    { title: "Program 02", type: "real-estate", subtitle: "Prabhjit Singh", images: "real-estate-program.jpg", url: "program-02" },
    { title: "Program 03", type: "home-inspection", subtitle: "Prabhjit Singh", images: "home-inspection-program.jpg", url: "program-03" },
    { title: "Program 04", type: "home-inspection", subtitle: "Prabhjit Singh", images: "home-inspection-program.jpg", url: "program-04" },
  ];

  const filteredRealEstatePrograms = programs.filter(
    (program) => program.type === "real-estate" && program.title.toLowerCase().includes(props.searchTerm.toLowerCase())
  );

  const filteredHomeInspectionPrograms = programs.filter(
    (program) => program.type === "home-inspection" && program.title.toLowerCase().includes(props.searchTerm.toLowerCase())
  );
  return (
    <section className="courses-list-main">
      <div className="continuing-education-category category-splitter">
        <h1>Real Estate Programs</h1>
      </div>
      {filteredRealEstatePrograms.map((program, index) => (
        <Program key={index} url={program.url} id={index} image={program.images} title={program.title} subtitle={program.subtitle} />
      ))}
      <div className="pre-licensing-category category-splitter">
        <h1>Home Inspection Programs</h1>
      </div>
      {filteredHomeInspectionPrograms.map((program, index) => (
        <Program key={index} url={program.url} id={index} image={program.images} title={program.title} subtitle={program.subtitle} />
      ))}
    </section>
  );
};
