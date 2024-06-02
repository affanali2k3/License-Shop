import React from "react";
import "./ChallengesSection.scss";
import { ChallengeCard } from "../ChallengeCard/ChallengeCard";
export const ChallengesSection = () => {
  return (
    <section className="challenges-main">
      <ChallengeCard imageUrl="/challenge-1.png" />
      <ChallengeCard imageUrl="/challenge-2.png" />
    </section>
  );
};
