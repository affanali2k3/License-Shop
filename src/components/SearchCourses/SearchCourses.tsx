import React from "react";
import "./SearchCourses.scss";
interface props {
  onSearch: any;
}
export const SearchCourses: React.FC<props> = (props) => {
  const handleChange = (event) => {
    props.onSearch(event.target.value);
  };
  return (
    <div className="search-courses-main">
      <input type="text" name="search" placeholder="Search Course" onChange={handleChange} />
      <div className="search-button">
        <img src="/search.png" />
      </div>
    </div>
  );
};
