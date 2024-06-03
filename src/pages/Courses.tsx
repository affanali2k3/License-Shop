import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { SearchCoursesParent } from "../components/SearchCoursesParent/SearchCoursesParent";

export const Courses = () => {
  return (
    <>
      <PageHeader heading="Courses" subHeading="Courses" />
      <SearchCoursesParent />
    </>
  );
};
