import React from 'react'
import NavBar from "../components/NavBar";
import { useParams } from 'react-router';
import useCourses from '../api/useCourses';


const CoursePage = () => {
    let { id } = useParams()
    const data = useCourses(
        {
          url: "http://localhost:3001",
           resource: "courses",
        //    id: {id}
           id
        },
    )


    return(  
   <> 
   <NavBar />
    <div><img src={data.courses.imagePath} alt="" /></div>
 
    </>
    )
}

export default CoursePage