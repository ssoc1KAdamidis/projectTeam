import React from "react";
import { Card } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

const CourseCard = ({
  id,
  title,
  price,
  duration,
  online,
  dates,
  imagePath,
}) => {
  return (
    <Card title={title} cover={<img alt="example" src={imagePath}/>}>
      <p>
        Price: <b>{price.normal}</b>&euro; | Online:
        {online ? <span>&#10003;</span> : <span>&#88;</span>}
      </p>
      <p>
        Duration: <b>{duration}</b>
      </p>
      <p>
        Dates:
        <b>
        {moment(dates.start_date).format("DD/MM/YYYY")} - {moment(dates.end_date).format("DD/MM/YYYY")}
        </b>
      </p>
      <Link to={`${id}`}>
        <button>View Details</button>
      </Link>
    </Card>
  );
};

export default CourseCard;
