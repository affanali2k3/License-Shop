import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { CoursesList } from "../components/CoursesList/CoursesList";
import { SearchCourses } from "../components/SearchCourses/SearchCourses";

export const Courses = () => {
  return (
    <>
      <PageHeader heading="Courses" subHeading="Courses" />
      <SearchCourses />
      <CoursesList />
    </>
  );
};
