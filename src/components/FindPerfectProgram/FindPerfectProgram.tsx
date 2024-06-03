import React, { useState } from "react";
import "./FindPerfectProgram.scss";
export const FindPerfectProgram = () => {
  const [careerDropdownIsOpen, setCareerDropwdownIsOpen] = useState(false);
  const [courseDropdownIsOpen, setCourseDropwdownIsOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState("Career");
  const [selectedCourse, setSelectedCourse] = useState("Course");

  const toggleCareerDropdown = () => {
    setCareerDropwdownIsOpen(!careerDropdownIsOpen);
  };
  const toggleCourseDropdown = () => {
    setCourseDropwdownIsOpen(!courseDropdownIsOpen);
  };

  const handleCareerItemClick = (item) => {
    setSelectedCareer(item);
    setCareerDropwdownIsOpen(false);
  };
  const handleCourseItemClick = (item) => {
    setSelectedCourse(item);
    setCourseDropwdownIsOpen(false);
  };
  return (
    <div className="find-perfect-program-main">
      <div className="find-perfect-program-secondary">
        <h2>Find the Perfect Program</h2>
        <div className="search">
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleCareerDropdown}>
              <p>{selectedCareer}</p>
              <img src="/dropdown.png" />
            </button>
            {careerDropdownIsOpen && (
              <div className="dropdown-content">
                <a href="#" onClick={() => handleCareerItemClick("Career 1")}>
                  Career 1
                </a>
                <a href="#" onClick={() => handleCareerItemClick("Career 2")}>
                  Career 2
                </a>
                <a href="#" onClick={() => handleCareerItemClick("Career 3")}>
                  Career 3
                </a>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleCourseDropdown}>
              <p>{selectedCourse}</p>
              <img src="/dropdown.png" />
            </button>
            {courseDropdownIsOpen && (
              <div className="dropdown-content">
                <a href="#" onClick={() => handleCourseItemClick("Course 1")}>
                  Course 1
                </a>
                <a href="#" onClick={() => handleCourseItemClick("Course 2")}>
                  Course 2
                </a>
                <a href="#" onClick={() => handleCourseItemClick("Course 3")}>
                  Course 3
                </a>
              </div>
            )}
          </div>

          <button className="search-btn" onClick={() => (window.location.href = "programs")}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
