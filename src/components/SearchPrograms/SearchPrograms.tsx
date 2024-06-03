import React from "react";
import "./SearchPrograms.scss";

interface props {
  onSearch: any;
}
export const SearchPrograms: React.FC<props> = (props) => {
  const handleChange = (event) => {
    props.onSearch(event.target.value);
  };
  return (
    <div className="search-programs-main">
      <input type="text" name="search" placeholder="Search Program" onChange={handleChange} />
      <div className="search-button">
        <img src="/search.png" />
      </div>
    </div>
  );
};
