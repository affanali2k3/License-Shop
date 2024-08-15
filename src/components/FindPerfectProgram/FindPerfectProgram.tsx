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
                <p onClick={() => handleCareerItemClick("Real Estate")}>Real Estate</p>
                <p onClick={() => handleCareerItemClick("Home Inspection")}>Home Inspection</p>
                <p onClick={() => handleCareerItemClick("Credit Repair")}>Credit Repair</p>
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
                <p onClick={() => handleCourseItemClick(`${selectedCareer} Challenge`)}>{selectedCareer} Challenge</p>
                <p onClick={() => handleCourseItemClick(`${selectedCareer} Course`)}>{selectedCareer} Course</p>
              </div>
            )}
          </div>

          <button className="search-btn" onClick={() => (window.location.href = "program-02")}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
