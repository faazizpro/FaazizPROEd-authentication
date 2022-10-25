import { createBrowserRouter } from "react-router-dom";
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
            }
        ]
    }
])