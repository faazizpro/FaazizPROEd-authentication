import React from 'react';
import './HeroSection.css';
import hero from '../../../Assets/hero.png'
import CourseCard from '../../CourseCard/CourseCard';
import CourseAPI from '../../CourseAPI/CourseAPI';


const HeroSection = () => {
    return (
        <div className='bg-gray-900 text-white main-sec'>
            <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                {/* <!--Left Col--> */}
                <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
                    <p className="uppercase tracking-loose text-rose-300 lg:text-xl lg:font-bold">START TO SUCCESS</p>
                    <h1 className="font-bold lg:text-5xl my-4 text-white">Upgrade Yourself</h1>
                    <p className="leading-normal mb-4 lg:text-xl font-bold">Access To 5000+ Courses from 300 Instructors  & Institutions</p>
                    <button className="bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent">See All Courses</button>
                </div>
                {/* <!--Right Col--> */}
                <div className="w-full lg:w-1/2 lg:py-6 text-center">
                    {/* <!--Add your product image here--> */}
                    <img src={hero} alt="" />
                </div>
            </div>


            {/* Course Card Section */}
            <CourseCard></CourseCard>

        </div>
    );
};

export default HeroSection;