import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Courses from "./views/Courses";
import NewCourse from "./views/NewCourse";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "courses",
      element: <Courses />,
    },
    {
      path: "new",
      element: <NewCourse />,
    },
  ]);
  
  export default router;
  