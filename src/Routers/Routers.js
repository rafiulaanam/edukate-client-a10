import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Courses from "../Pages/Courses/Courses";
import Error from "../Pages/Error/Error";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    
      {
        path: "/courses/:id",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`)
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader:()=>fetch("http://localhost:5000/courses")
      },

      
    ],
  },
  {
    path:'*',
    element:<Error></Error>

  }
]);
