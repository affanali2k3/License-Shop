import React from "react";
import { Program } from "../Program/Program";
import "./ProgramsList.scss";

export const ProgramsList = () => {
  const programs = [
    {
      title: "Becoming Real Estate Agent Challenge",
      type: "real-estate",
      subtitle: "Prabhjit Singh",
      images: "real-estate-program-step-1.png",
      url: "program-01",
    },
    {
      title: "Real Estate Agent Course",
      type: "real-estate",
      subtitle: "Prabhjit Singh",
      images: "real-estate-program-step-2.png",
      url: "program-02",
    },
    {
      title: "Become Home Inspector Agent Challenge",
      type: "home-inspection",
      subtitle: "Prabhjit Singh",
      images: "home-inspection-program-step-1.png",
      url: "program-03",
    },
    {
      title: "Home Inspector Agent Course",
      type: "home-inspection",
      subtitle: "Prabhjit Singh",
      images: "home-inspection-program-step-2.png",
      url: "program-04",
    },
    {
      title: "Becoming Credit Repair Specialist Challenge",
      type: "credit-repair",
      subtitle: "Prabhjit Singh",
      images: "credit-repair-program-1.png",
      url: "program-05",
    },
    {
      title: "Credit Repair Specialist Course",
      type: "credit-repair",
      subtitle: "Prabhjit Singh",
      images: "credit-repair-program-2.png",
      url: "program-06",
    },
  ];

  const filteredRealEstatePrograms = programs.filter((program) => program.type === "real-estate");

  const filteredHomeInspectionPrograms = programs.filter((program) => program.type === "home-inspection");

  const filteredCreditRepairPrograms = programs.filter((program) => program.type === "credit-repair");

  return (
    <section className="programs-list-main">
      {filteredRealEstatePrograms.length == 0 ? null : (
        <div className="continuing-education-category category-splitter">
          <h1>Real Estate Program</h1>
        </div>
      )}
      <div className="real-estate-programs-list">
        {filteredRealEstatePrograms.map((program, index) => (
          <Program
            comingSoon={false}
            key={index}
            url={program.url}
            id={index}
            image={program.images}
            title={program.title}
            subtitle={program.subtitle}
          />
        ))}
      </div>
      {filteredHomeInspectionPrograms.length == 0 ? null : (
        <div className="pre-licensing-category category-splitter">
          <h1>Home Inspection Program</h1>
        </div>
      )}
      <div className="home-inspection-programs-list">
        {filteredHomeInspectionPrograms.map((program, index) => (
          <Program
            comingSoon={false}
            key={index}
            url={program.url}
            id={index}
            image={program.images}
            title={program.title}
            subtitle={program.subtitle}
          />
        ))}
      </div>

      <div className="pre-licensing-category category-splitter">
        <h1>Credit Repair Program</h1>
      </div>
      <div className="home-inspection-programs-list">
        {filteredCreditRepairPrograms.map((program, index) => (
          <Program
            comingSoon={true}
            key={index}
            url={program.url}
            id={index}
            image={program.images}
            title={program.title}
            subtitle={program.subtitle}
          />
        ))}
      </div>
    </section>
  );
};
