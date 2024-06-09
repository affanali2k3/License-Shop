import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { OurMission } from "../components/OurMission/OurMission";
import { WhyChooseUs } from "../components/WhyChooseUs/WhyChooseUs";
import { WhyApproachWorks } from "../components/WhyApproachWorks/WhyApproachWorks";
import { CompanyStats } from "../components/CompanyStats/CompanyStats";
import { BecomeInstructor } from "../components/BecomeInstructor/BecomeInstructor";

export const AboutUs = () => {
  return (
    <>
      <PageHeader heading="About Us" subHeading="About" />
      <OurMission />
      <WhyChooseUs />
      {/* <CompanyStats /> */}
      <WhyApproachWorks />
      <BecomeInstructor />
    </>
  );
};
