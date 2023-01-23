import React from 'react'
import useCourses from '../api/useCourses';
import CourseCard from '../components/CourseCard';
import NavBar from "../components/NavBar";

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
    {data.courses.map(({title, dates, id, price, online, duration, imagePath}) =>{
      return(     
      <CourseCard key={id} 
      title={title} 
      price={price}  
      duration={duration} 
      online={online}
      imagePath = {imagePath}
      dates = {dates} />      
      )      
    })}   
    </>  
    );
  }
    
    
  
  
  export default Courses;