import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/shared/Home/Home";
import AboutMe from "../components/shared/AboutMe/AboutMe";
import Skills from "../components/shared/Skills/Skills";
import Services from "../components/shared/Services/Services";
import Projects from "../components/shared/Projects/Projects";
import ContactMe from "../components/shared/ContactMe/ContactMe";


const router = createBrowserRouter([
{
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'aboutMe',
            element:<AboutMe></AboutMe>
        },
        {
            path:'skills',
            element:<Skills></Skills>
        },
        {
            path: 'services',
            element: <Services></Services>
        },
        {
            path:'projects',
            element:<Projects></Projects>
        },
        {
            path:'contactMe',
            element: <ContactMe></ContactMe>
        }
    ]
}                     








])

export default router;