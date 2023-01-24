import { useState, useEffect } from 'react';

const useCourses = ({url, resource}) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let endpoint = `${url}/${resource}`;
    
    fetch(endpoint)
      .then((res) => res.json())
      .then(data => {
        setCourses(data)
        setIsLoading(false)
        console.log(data)
      }).catch(error=>{
        console.log(error)
      });
  }, [url, resource]);

  return { courses, isLoading };
};
  
  export default useCourses;