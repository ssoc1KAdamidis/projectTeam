import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useCourses from "../api/useCourses";
import { Spin } from "antd";
import { Link } from "react-router-dom";
/* import Link from "antd/es/typography/Link";*/
import { deleteCourse } from "../api/fetch.jsx";
import moment from "moment";
import { useNavigate, useParams } from "react-router";

const CoursePage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const data = useCourses({
    url: "http://localhost:3001",
    resource: "courses",
    id,
  });

  const handleDelete = (id) => {
    deleteCourse(id);
    navigate("/courses");
  };

  const { description, title, imagePath, price, online, duration, dates } =
    data.courses;
  return data.isLoading ? (
    <Spin />
  ) : (
    <>
      <NavBar />
      <div style={{fontWeight: "bold"}}>
      <br />
      <br />
      <br />
      <div>
        <h2>{title}</h2>
      </div>
      <br />
      <br />
      <div>
        <img
          src={imagePath}
          alt=""
          align="center"
          style={{ width: "1200px", height: "768px" }}
        />
      </div>
      <hr />
      <br />
      <br />
      <div>{description}</div>
      <br />
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
          <button>
            Edit <img src="/edit.avif" alt="edit" width="15px" />
          </button>
        </Link>
      </div>
      <br />
      <div>
        <button onClick={() => handleDelete(id)}>
          Delete <img src="/delete.avif" alt="delete" width="15px" />
        </button>
      </div>
      <br />
      <br />
      </div>
      <Footer style={{ bottom: "-50px" }} />
    </>
  );
};

export default CoursePage;
