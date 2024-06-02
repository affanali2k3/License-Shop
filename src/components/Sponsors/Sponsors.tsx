import React from "react";
import "./Sponsors.scss";
export const Sponsors: React.FC = () => {
  return (
    <div className="sponsors-main">
      <img className="sponsors" src="/sponsors.png" />
      <img className="sponsors-desktop" src="/sponsors-desktop.png" />
    </div>
  );
};
