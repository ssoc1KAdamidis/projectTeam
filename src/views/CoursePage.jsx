import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useCourses from "../api/useCourses";
import { Spin } from "antd";
import { Link } from "react-router-dom";
import { deleteCourse } from "../api/fetch.jsx";
import moment from "moment";
import { useNavigate, useParams } from "react-router";

const CoursePage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const data = useCourses({
    url: process.env.REACT_APP_API_URL,
    resource: "courses",
    id,
  });

  const handleDelete = (id) => {
    deleteCourse(id);
    navigate("/courses");
  };

  const { description, title, imagePath, price, online, duration, dates } = data.courses;
  return data.isLoading ? (
    <Spin />
  ) : (
    <>
      <NavBar />
      <div className="course-page-container">
        <div>
          <h5>{title}</h5>
        </div>
        <div style={{margin: '27px'}}>
          <img
            className="image-course-card"
            src={imagePath}
            alt="Course"
            align="center"
          />
        </div>   
        <div>{description}</div>
        <hr />
        <p>
          Price: {price.normal} <span>&euro;</span>
        </p>
        <p>
          Online:
          <span>{online ? <span>&#10003;</span> : <span>&#88;</span>}</span>
        </p>
        <p>Duration: {duration}</p>
        <p>
          Dates:
          <span>
            {moment(dates.start_date).format("DD/MM/YYYY")} -{" "}
            {moment(dates.end_date).format("DD/MM/YYYY")}
          </span>
        </p>
        <div>
          <Link to={`/edit/${id}`}>
            <button>Edit <img src="/edit.avif" alt="Edit course" width="15px" /></button>
          </Link>
        </div>
        <div>
          <button onClick={() => handleDelete(id)}>Delete <img src="/delete.avif" alt="Delete course" width="15px" /></button>
        </div>
        </div>
      <Footer />
    </>
  );
};

export default CoursePage;