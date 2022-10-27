import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Header from "../Pages/Components/Header/Header";

import Login from "../Pages/Components/Login/Login";
import Register from "../Pages/Components/Register/Register";

import About from "../Pages/NavPages/About/About";
import Blog from "../Pages/NavPages/Blog/Blog";
import Contact from "../Pages/NavPages/Contact/Contact";
import Courses from "../Pages/NavPages/Courses/Courses";
import Faq from "../Pages/NavPages/FAQ/Faq";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      children:[
        {
            path: "/",
            element: <Header></Header>,
          },
          {
            path: "/login",
            element: <Login></Login>,
          },
          {
            path: "/register",
            element: <Register></Register>,
          },
          {
            path: "/about",
            element: <About></About>,
          },
          {
            path: "/contact",
            element: <Contact></Contact>,
          },
          {
            path: "/faq",
            element: <Faq></Faq>,
          },
          {
            path: "/blog",
            element: <Blog></Blog>,
          },
        
          {
            path: "/courses",
            element: <Courses></Courses>,
            loader:()=>fetch('http://localhost:5000/courses')
          },
      ]
    },
  ])

