import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CourseAPI from '../CourseAPI/CourseAPI';

const CourseCard = () => {
    const [allcourse, setAllCourse] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => setAllCourse(data));
    }, [])
    return (
        <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Our Top 6 Course For You</h2>

                <p className="mt-4 text-gray-300">
                    People are buying our courses because they are getting benefits. We can't assure you but if you follow our instruction, you can do better after completing the course.
                </p>
            </div>

            <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allcourse.map(course => <CourseAPI
                        key={course.id}
                        course={course}
                    ></CourseAPI>)
                    // allcourse.map(course => <p
                    // key={course.id}>
                    //     {course.name}
                    // </p>)
                }
            </div>

            <div className="mt-12 text-center">
                <a
                    href="#"
                    className="mt-8 inline-flex items-center rounded border border-pink-600 bg-pink-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-pink-500"
                >
                    <span className="text-sm font-medium"> Get Started </span>

                    <svg
                        className="ml-3 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default CourseCard;

