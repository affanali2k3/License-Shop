import React from "react";
import "./SearchCourses.scss";
export const SearchCourses = () => {
  return (
    <div className="search-courses-main">
      <input type="text" name="search" placeholder="Search Course" />
      <div className="search-button">
        <img src="/search.png" />
      </div>
    </div>
  );
};
