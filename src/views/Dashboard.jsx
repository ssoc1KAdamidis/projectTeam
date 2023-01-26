import React from 'react'
import NavBar from "../components/NavBar";
import { Typography } from "antd";
import StatsList from '../components/StatsList';
import CourseTable from '../components/CourseTable';

const { Title } = Typography;

const Dashboard = () => {
    return (
    <>
    <NavBar />
    <Title style={{fontSize: "25px", fontStyle: "bold", fontFamily: 'Courier new', margin: "50px"}}>Welcome to our Dashboard</Title>
    <div>
      <StatsList url="http://localhost:3001" resource="stats" />
      <br></br>
     </div>
     <div> 
      <CourseTable url="http://localhost:3001" resource="courses" />
    </div>    
    </>
    );
  }
  
  export default Dashboard;