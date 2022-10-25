import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Course from "../components/Coures/Course";
import FAQ from "../components/FAQ/FAQ";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import Main from "../layout/Main";

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
                element: <Course></Course>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])