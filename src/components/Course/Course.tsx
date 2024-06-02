import React, { useState } from "react";
import "./Course.scss";
interface props {
  id: number;
  image: string;
  title: string;
  lectures: number;
  quizzes: number;
  duration: string;
  url: string;
}
export const Course: React.FC<props> = (props) => {
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState("black");

  const handleCourseClick = () => {
    window.location.href = props.url;
  };
  return (
    <div id={`course-${props.id}`} className="course-main">
      <img src={props.image} />
      <div className="content" style={{ background: bgColor, color: color }}>
        <h1>{props.title}</h1>
        <p>Lectures {props.lectures}</p>
        <p>Quizzes {props.quizzes}</p>
        <p>Duration {props.duration} Hours</p>
        <button onClick={handleCourseClick} className="enroll-course-button">
          ENROLL COURSE
        </button>
      </div>
    </div>
  );
};
