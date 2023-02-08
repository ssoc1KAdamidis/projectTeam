import React from "react";
import { Table } from "antd";
import useCourses from "../api/useCourses";
import moment from "moment";
import { Link } from "react-router-dom";

const CourseTable = ({ url, resource }) => {
  const { courses, isLoading } = useCourses({
    url: `${url}`,
    resource: `${resource}`,
  });

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Online",
      dataIndex: "online",
      render: (value) => {
        return (
          <span>{value ? <span>&#10003;</span> : <span>&#88;</span>}</span>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value) => {
        return <span>{value.normal}&euro;</span>;
      },
    },
    {
      title: "Date",
      dataIndex: "dates",
      render: (value) => {
        return (
          <span>
            {moment(value.start_date).format("DD/MM/YYYY")} -{" "}
            {moment(value.end_date).format("DD/MM/YYYY")}
          </span>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      render: (id) => {
        return (
          <Link to={`courses/${id}`}>
            <button>View Details</button>
          </Link>
        );
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={courses.slice(-5, courses.length)}
      pagination={false}
      loading={isLoading}
      rowKey={(record) => record.id}
      className="courses-table"
    >
    </Table>
  );
};

export default CourseTable;