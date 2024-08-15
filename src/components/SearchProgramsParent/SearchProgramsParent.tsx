import React, { useState } from "react";
import { SearchPrograms } from "../SearchPrograms/SearchPrograms";
import { ProgramsList } from "../ProgramsList/ProgramsList";
import "./SearchProgramParent.scss";
export const SearchProgramsParent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
      <div className="difference-image-div">
        <img src="difference-challenge-program.png" />
      </div>
      {/* <SearchPrograms onSearch={handleSearch} /> */}
      <ProgramsList searchTerm={searchTerm} />
    </>
  );
};
