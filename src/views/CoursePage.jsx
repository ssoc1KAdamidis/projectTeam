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


    return (  
   <> 
   <NavBar />
   <br />
   <br />
    <div>
    <b>{data.courses.title}</b>
    </div>
    <br />
    <br />
    <br />
    <div>
    <img src={data.courses.imagePath} alt="" width="50%" align="center" />
    </div>
    </>
    )
}

export default CoursePage;