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
      <div>
      <Title className="dashboard-title"><h2>Welcome to our Dashboard</h2></Title>
      </div>
      <div style={{marginTop: '50px'}}>
        <StatsList url={process.env.REACT_APP_API_URL} resource="stats" />
      </div>
      <div style={{marginTop: '50px'}}>
        <CourseTable url={process.env.REACT_APP_API_URL} resource="courses" />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;          
