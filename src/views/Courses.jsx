import React from 'react'
import useCourses from '../api/useCourses';
import CourseCard from '../components/CourseCard';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Courses = () => {
    const data = useCourses(
        {
          url: "http://localhost:3001",
           resource: "courses" 
        },
    )
  
    return (
    <>
    <NavBar /> 
      {data.courses.map(({title, dates, id, price, online, duration, imagePath }) => {
      return ( 
      <div className="container" key= {id}>
      <CourseCard 
      id = {id}
      title={title} 
      price={price}  
      duration={duration} 
      online={online}
      dates = {dates}  
      imagePath = {imagePath}
      />  
      </div>
      )  
    }
    )
  }
  <Footer style= {{bottom: "-50px" }} />
  </>
    )
  }

export default Courses; 