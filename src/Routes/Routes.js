import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/shared/Home/Home";
import AboutMe from "../components/shared/AboutMe/AboutMe";
import Skills from "../components/shared/Skills/Skills";
import Services from "../components/shared/Services/Services";
import Projects from "../components/shared/Projects/Projects";
import ContactMe from "../components/shared/ContactMe/ContactMe";
import DashboardLayout from "../Layout/DashboardLayout";
import CreateProjects from "../Dashboard/CreateProjects";
import CreateBlogs from "../Dashboard/CreateBlogs";
import CreateSkills from "../Dashboard/CreateSkills";
import Blog from "../Blog/Blog";

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
        path: "aboutMe",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "skills",
        element: <Skills></Skills>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "projects",
        element: <Projects></Projects>,
      },
      {
        path: "contactMe",
        element: <ContactMe></ContactMe>,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "create-project",
        element: <CreateProjects />,
      },
      {
        path: "create-Blog",
        element: <CreateBlogs />,
      },
      {
        path: "create-skill",
        element: <CreateSkills />,
      },
    ],
  },
]);

export default router;
