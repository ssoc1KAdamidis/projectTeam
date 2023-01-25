import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Courses from "./views/Courses";
import NewCourse from "./views/NewCourse";
import CoursePage from "./views/CoursePage"
import ErrorPage from './views/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <ErrorPage/>,
    },
    {
      path: "courses",
      element: <Courses />,
      errorElement: <ErrorPage/>,
    },
    {
      path: "courses/:id",
      element: <CoursePage />,
      errorElement: <ErrorPage/>,
    },
    {
      path: "new",
      element: <NewCourse />,
      errorElement: <ErrorPage/>,
    }
  ]);
  
  export default router;
  