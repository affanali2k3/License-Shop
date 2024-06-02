import React from "react";
import "./ChallengeCard.scss";

interface props {
  imageUrl: string;
}

export const ChallengeCard: React.FC<props> = (props) => {
  return (
    <div>
      <img src={props.imageUrl} />
    </div>
  );
};
