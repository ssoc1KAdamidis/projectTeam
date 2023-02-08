import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Typography } from "antd";
import StatsList from "../components/StatsList";
import CourseTable from "../components/CourseTable";

const { Title } = Typography;

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <br />
      <Title className="dashboard-title">Welcome to our Dashboard</Title>
      <br />
      <br />
      <br />
      <div>
        <StatsList url={process.env.REACT_APP_API_URL} resource="stats" />
        <br />
        <br />
      </div>
      <div>
        <CourseTable url={process.env.REACT_APP_API_URL} resource="courses" />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;