import React from "react";
import { HeroSectionLanding } from "../components/HeroSectionLanding/HeroSectionLanding";
import { FindPerfectProgram } from "../components/FindPerfectProgram/FindPerfectProgram";
import { WhatSetsUsApart } from "../components/WhatSetsUsApart/WhatSetsUsApart";
import { TripleGuarantee } from "../components/TripleGuarantee/TripleGuarantee";
import { WhyApproachWorks } from "../components/WhyApproachWorks/WhyApproachWorks";
import { WeHaveBestPrograms } from "../components/WeHaveBestPrograms/WeHaveBestPrograms";
import { OurStory } from "../components/OurStory/OurStory";
import { SuccessStudents } from "../components/SuccessStudents/SuccessStudents";
import { Sponsors } from "../components/Sponsors/Sponsors";
import { WhyWeDoChallenges } from "../components/WhyWeDoChallenges/WhyWeDoChallenges";
import { CareerAssessment } from "../components/CareerAssessment/CareerAssessment";
import { ReadListenWatch } from "../components/ReadListenWatch/ReadListenWatch";
export const LandingPage = () => {
  return (
    <>
      {" "}
      <HeroSectionLanding />
      {/* <FindPerfectProgram /> */}
      <Sponsors />
      <WhatSetsUsApart />
      <TripleGuarantee />
      <WhyApproachWorks />
      <WhyWeDoChallenges />
      <CareerAssessment />
      {/* <WeHaveBestPrograms /> */}
      <OurStory />
      <SuccessStudents />
      {/* <ReadListenWatch /> */}
    </>
  );
};
