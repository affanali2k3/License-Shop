import React from "react";
import "./AboveNavbar.scss";

export const AboveNavbar = () => {
  return (
    <div className="above-navbar-main">
      <p>HOW OUR STUDENTS PASS THE EXAM THE 1ST Time</p>
      <div
        className="access"
        onClick={() => {
          window.location.href = "about";
        }}
      >
        <p>YES! ACCESS HOW WE DO IT</p>
      </div>
    </div>
  );
};
