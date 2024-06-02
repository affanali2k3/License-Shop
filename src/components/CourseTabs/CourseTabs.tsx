import React, { useState } from "react";
import "./CourseTabs.scss";
export const CourseTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  let activeBackgroundColor: string = "#081f51";
  let passiveBackgroundColor: string = "#DDDDDD";
  return (
    <div className="course-tabs-main">
      <div
        className="tab"
        style={{
          backgroundColor: activeTab == 0 ? activeBackgroundColor : passiveBackgroundColor,
          color: activeTab == 0 ? "white" : "black",
        }}
      >
        <p>Overview</p>
      </div>
      <div
        className="tab"
        style={{
          backgroundColor: activeTab == 1 ? activeBackgroundColor : passiveBackgroundColor,
          color: activeTab == 1 ? "white" : "black",
        }}
      >
        <p>Cirriculum</p>
      </div>
      <div
        className="tab"
        style={{
          backgroundColor: activeTab == 2 ? activeBackgroundColor : passiveBackgroundColor,
          color: activeTab == 2 ? "white" : "black",
        }}
      >
        <p>Instructor</p>
      </div>
      <div
        className="tab"
        style={{
          backgroundColor: activeTab == 3 ? activeBackgroundColor : passiveBackgroundColor,
          color: activeTab == 3 ? "white" : "black",
        }}
      >
        <p>Reviews</p>
      </div>
    </div>
  );
};
