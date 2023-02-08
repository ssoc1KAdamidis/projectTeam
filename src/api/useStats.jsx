import { useState, useEffect } from "react";

const useStats = ({ url, resource }) => {
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${url}/${resource}`)
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url, resource]);

  return { stats, isLoading };
};

export default useStats;