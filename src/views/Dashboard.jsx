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
      <Title className="dashboard-title">
        Welcome to our Dashboard
      </Title>
      <div>
        <StatsList url="http://localhost:3001" resource="stats" />
        <br></br>
      </div>
      <div>
        <CourseTable url="http://localhost:3001" resource="courses" />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
