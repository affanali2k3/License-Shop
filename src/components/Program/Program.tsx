import React, { useState } from "react";
import "./Program.scss";
interface props {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  url: string;
  comingSoon: boolean;
}
export const Program: React.FC<props> = (props) => {
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState("black");

  const handleProgramClick = () => {
    window.location.href = props.url;
  };
  return (
    <div id={`program-${props.id}`} className="program-main">
      <img src={props.image} />
      <div className="content" style={{ background: bgColor, color: color }}>
        {/* <h1>{props.title}</h1> */}
        {/* <p>{props.subtitle}</p> */}
        <button onClick={handleProgramClick} className="join-program-button">
          {props.comingSoon ? "COMING SOON" : "JOIN PROGRAM"}
        </button>
      </div>
    </div>
  );
};
