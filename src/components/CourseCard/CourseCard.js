import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseAPI from '../CourseAPI/CourseAPI';

const CourseCard = () => {
    const [allcourse, setAllCourse] = useState([]);

    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side-faazizpro.vercel.app/course')
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
                }
            </div>
            <div className='mt-5 md:flex md:justify-center'>
                <Link to='/course'
                    className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                    href="/download"
                    >
                    <span
                        className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4"
                    >
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>

                    <span className="text-sm font-medium transition-all group-hover:mr-4">
                        All Courses
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;

