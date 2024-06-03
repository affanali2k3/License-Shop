import React from "react";
import "./ChallengeCard.scss";

interface props {
  imageUrl: string;
}

export const ChallengeCard: React.FC<props> = (props) => {
  return (
    <div className="challenge-card-main">
      <img src={props.imageUrl} />
    </div>
  );
};
