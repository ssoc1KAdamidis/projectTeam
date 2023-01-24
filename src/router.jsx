import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Courses from "./views/Courses";
import NewCourse from "./views/NewCourse";
import CoursePage from "./views/CoursePage"

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
      path: "courses/:id",
      element: <CoursePage />
    },
    {
      path: "new",
      element: <NewCourse />,
    }
  ]);
  
  export default router;
  