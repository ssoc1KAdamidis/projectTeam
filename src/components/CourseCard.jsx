import React from "react";
import { Card } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

const CourseCard = ({ id, title, price, duration, online, dates, imagePath, }) => {
  return (
    <Card
      title={title}
      cover={
        <img alt="Course" src={imagePath} style={{ width: "450", height: "500" }} />
      }
    >
      <div className="course-card-container">
        <p>
          Price: {price.normal}&euro; | Online:{" "}
          {online ? <span>&#10003;</span> : <span>&#88;</span>}
        </p>
        <p>Duration: {duration}</p>
        <p>
          Dates:{" "}
          {moment(dates.start_date).format("DD/MM/YYYY")} -{" "}
          {moment(dates.end_date).format("DD/MM/YYYY")}
        </p>
      </div>
      <Link to={`${id}`}>
        <button>View Details</button>
      </Link>
    </Card>
  );
};

export default CourseCard;