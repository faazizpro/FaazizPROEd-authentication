import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Course from "../components/Coures/Course";
import CourseDetail from "../components/Coures/CourseDetail";
import EnrollCourse from "../components/Coures/EnrollCourse";
import Error from "../components/Error/Error";
import FAQ from "../components/FAQ/FAQ";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Main from "../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HeroSection></HeroSection>
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch(`https://b610-lerning-platform-server-side-faazizpro.vercel.app/course/`)
            },
            {
                path: '/course/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-faazizpro.vercel.app/course/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><EnrollCourse></EnrollCourse></PrivateRoute>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-faazizpro.vercel.app/checkout/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])