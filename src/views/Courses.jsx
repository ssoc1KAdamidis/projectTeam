import React from "react";
import useCourses from "../api/useCourses";
import CourseCard from "../components/CourseCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Courses = () => {
  const data = useCourses({
    url: process.env.REACT_APP_API_URL,
    resource: "courses",
  });
  return (
    <>
      <NavBar />
      {data.courses.map(
        ({ title, dates, id, price, online, duration, imagePath }) => {
          return (
            <div className="container" key={id}>
              <CourseCard
                id={id}
                title={title}
                price={price}
                duration={duration}
                online={online}
                dates={dates}
                imagePath={imagePath}
              />
            </div>
          );
        }
      )}
      <Footer />
    </>
  );
};

export default Courses;