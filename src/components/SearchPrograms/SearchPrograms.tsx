import React from "react";
import "./SearchPrograms.scss";
export const SearchPrograms = () => {
  return (
    <div className="search-programs-main">
      <input type="text" name="search" placeholder="Search Program" />
      <div className="search-button">
        <img src="/search.png" />
      </div>
    </div>
  );
};
