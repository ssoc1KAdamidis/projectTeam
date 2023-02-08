import { useState, useEffect } from "react";

const useCourses = ({ url, resource, id }) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let endpoint = `${url}/${resource}`;
    if (id !== undefined) {
      endpoint = `${url}/${resource}/${id}`;
    }

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url, resource, id]);

  return { courses, isLoading };
};

export default useCourses;