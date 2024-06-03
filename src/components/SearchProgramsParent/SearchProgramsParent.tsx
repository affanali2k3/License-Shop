import React, { useState } from "react";
import { SearchPrograms } from "../SearchPrograms/SearchPrograms";
import { ProgramsList } from "../ProgramsList/ProgramsList";

export const SearchProgramsParent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
      <SearchPrograms onSearch={handleSearch} />
      <ProgramsList searchTerm={searchTerm} />
    </>
  );
};
