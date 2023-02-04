import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import useCourses from "../api/useCourses";
import { Spin } from "antd";
import { Link } from "react-router-dom";
/* import Link from "antd/es/typography/Link";*/
import { deleteCourse } from "../api/fetch.jsx";
import moment from 'moment';


const CoursePage = () => {
  let { id } = useParams();
  const data = useCourses({
    url: "http://localhost:3001",
    resource: "courses",
    id,
  });

  const { description, title, imagePath, price, online, duration, dates } =
    data.courses;
  return data.isLoading ? (
    <Spin />
  ) : (
    <>
      <NavBar />
      <br />
      <div>
        <h2>
          <b>{title}</b>
        </h2>
      </div>
      <br />
      <br />
      <div>
        <img src={imagePath} alt="" width="60%" align="center" />
      </div>
      <hr />
      <br />
      <br />
      <div>
        <b>{description}</b>
      </div>
      <br />
      <p>
        <b>
          Price: {price.normal} <span>&euro;</span>
        </b>
      </p>
      <p>
        <b>
          Online:
          <span>{online ? <span>&#10003;</span> : <span>&#88;</span>}</span>
        </b>
      </p>
      <p>
        <b>Duration: {duration}</b>
      </p>
      <p>
        <b>
          Dates:
          <span>
          {moment(dates.start_date).format("DD/MM/YYYY")} - {moment(dates.end_date).format("DD/MM/YYYY")}
          </span>
        </b>
      </p>
      <div>
     <Link to={`/edit/${id}`}>
      <button>Edit <img src="/edit.avif" alt="edit" width="15px" /></button>
      </Link>
      </div>
      <br />
      <div>
        <button onClick={() => handleDelete(id)}>Delete <img src="/delete.avif" alt="delete" width="15px" /></button>
      </div>
      <br />
      <br />
      <Footer style= {{bottom: "-50px" }} />
    </>
  );
};


async function handleDelete(id) {
await deleteCourse(id)
window.location.href = '/courses';  /* not working here */
};


export default CoursePage;