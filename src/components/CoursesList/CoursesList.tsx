import React from "react";
import "./CoursesList.scss";
import { Course } from "../Course/Course";
interface props {
  searchTerm: string;
}
export const CoursesList: React.FC<props> = (props) => {
  const courses = [
    {
      id: 1,
      title: "DL/MD Legislative",
      type: "continuing-education",
      lectures: 22,
      quizzes: 5,
      duration: "3",
      images: "course-legis.png",
      url: "course-legislative",
    },
    {
      id: 2,
      title: "DL/MD Ethics",
      type: "continuing-education",
      lectures: 22,
      quizzes: 5,
      duration: "3",
      images: "course-legislative.png",
      url: "course-ethics",
    },
    {
      id: 3,
      title: "DL/MD Brokerage",
      type: "continuing-education",
      lectures: 22,
      quizzes: 5,
      duration: "3",
      images: "course-brokerage.png",
      url: "course-brokerage",
    },
    {
      id: 4,
      title: "DL/MD Fair Housing",
      type: "continuing-education",
      lectures: 22,
      quizzes: 5,
      duration: "3",
      images: "course-housing.png",
      url: "course-fair-housing",
    },
    {
      id: 5,
      title: "Pre Licensing",
      type: "pre-licensing",
      lectures: 22,
      quizzes: 5,
      duration: "3",
      images: "course-legis.png",
      url: "pre-licensing",
    },
  ];

  const filteredContinuingEducationCourses = courses.filter(
    (course) => course.type === "continuing-education" && course.title.toLowerCase().includes(props.searchTerm.toLowerCase())
  );

  const filteredPreLicensingCourses = courses.filter(
    (course) => course.type === "pre-licensing" && course.title.toLowerCase().includes(props.searchTerm.toLowerCase())
  );
  return (
    <section className="courses-list-main">
      <div className="continuing-education-category category-splitter">
        <h1>Continuing Education</h1>
      </div>
      {filteredContinuingEducationCourses.map((course, index) => (
        <Course
          key={index}
          url={course.url}
          id={index}
          image={course.images}
          title={course.title}
          lectures={course.lectures}
          duration={course.duration}
          quizzes={course.quizzes}
        />
      ))}

      <div className="pre-licensing-category category-splitter">
        <h1>Pre-Licensing</h1>
      </div>
      {filteredPreLicensingCourses.map((course, index) => (
        <Course
          key={index}
          url={course.url}
          id={index}
          image={course.images}
          title={course.title}
          lectures={course.lectures}
          duration={course.duration}
          quizzes={course.quizzes}
        />
      ))}
    </section>
  );
};
