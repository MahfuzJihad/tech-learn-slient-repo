import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";
import Premium from "../../Pages/Premium/Premium";
import Signin from "../../Pages/SignIn/Signin";
import Registar from "../../Pages/Registar/Registar";
import FAQ from "../../Pages/Home/Home/FAQ/FAQ";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/course",
        element: <Course></Course>,
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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/course/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course-categories/${params.id}`),
      },
      {
        path: "/new-course/:id",
        element: <Premium></Premium>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/new-course/${params.id}`),
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/registar",
        element: <Registar></Registar>,
      },
    ],
  },
]);
