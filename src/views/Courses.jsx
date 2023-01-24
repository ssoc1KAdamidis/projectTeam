import React from 'react'
import useCourses from '../api/useCourses';
import CourseCard from '../components/CourseCard';
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom'; 

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
    {data.courses.map(({title, dates, id, price, online, duration, imagePath}) => {
      return ( 
      <div class="container">
      <CourseCard key={id}
      title={title} 
      price={price}  
      duration={duration} 
      online={online}
      dates = {dates}  
      imagePath = {imagePath}
      />
      <Link to="/CoursePage">
      <button>View Details</button>
      </Link>
      </div>
      )  
    }
    )
  }
  </>
    )

  }
export default Courses; 