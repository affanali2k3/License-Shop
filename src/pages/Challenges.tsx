import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { WeGuaranteeSuccess } from "../components/WeGuaranteeSuccess/WeGuaranteeSuccess";
import { ChallengesSection } from "../components/ChallengesSection/ChallengesSection";

export const Challenges = () => {
  return (
    <>
      <PageHeader heading="Challenges" subHeading="Challenges" />
      <WeGuaranteeSuccess />
      <ChallengesSection />
    </>
  );
};
