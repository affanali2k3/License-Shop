import React, { useState } from "react";
import { SearchCourses } from "../SearchCourses/SearchCourses";
import { CoursesList } from "../CoursesList/CoursesList";

export const SearchCoursesParent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
      <SearchCourses onSearch={handleSearch} />
      <CoursesList searchTerm={searchTerm} />
    </>
  );
};
