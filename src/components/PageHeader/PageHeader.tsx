import React from "react";
import "./PageHeader.scss";
interface props {
  heading: string;
  subHeading: string;
}
export const PageHeader: React.FC<props> = (props) => {
  return (
    <section className="page-header-main">
      <h1>{props.heading}</h1>
      <p>
        Home / <span>{props.subHeading}</span>
      </p>
    </section>
  );
};
