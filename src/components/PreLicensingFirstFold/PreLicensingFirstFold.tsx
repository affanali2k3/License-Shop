import React from "react";
import "./PreLicensingFirstFold.scss";

interface props {
  type: string;
  title: string;
}
export const PreLicensingFirstFold: React.FC<props> = (props) => {
  return (
    <section className="pre-licensing-first-fold-main">
      <h1>
        {props.title} {props.type}
      </h1>
      <p>
        Last Update: <span>26 May, 2024</span>
      </p>
    </section>
  );
};
