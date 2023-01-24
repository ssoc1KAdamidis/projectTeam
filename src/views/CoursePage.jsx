import React from 'react'
import NavBar from "../components/NavBar";
import { useParams } from 'react-router';

const CoursePage = () => {
    let { id } = useParams()
    return(
        
   <> <NavBar />
         <p>course : {id}</p>
        <div>dsdsds {id}</div>
 </>
    )
}

export default CoursePage