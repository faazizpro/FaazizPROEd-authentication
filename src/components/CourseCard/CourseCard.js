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
        </div>
    );
};

export default CourseCard;

