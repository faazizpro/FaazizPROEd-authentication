import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseList from './CourseList';
import CourseSideBar from './CourseSideBar';

const Course = () => {
    
    const courses = useLoaderData();
    return (
        <div className='md:flex'> 
            <div className='md:text-3xl flex-1  md:p-5'>
                <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 '>
                    {
                        courses.map(scourse => <CourseList
                        key={scourse.id}
                        scourse={scourse}
                        ></CourseList>)
                    }
                </div>
            </div>
            <div className=' md:flex-initial md:w-2/6'>
                <h2 className='text-center font-bold md:text-5xl mt-3'>Our All Courses</h2>
                    <div className='text-center font-bold md:text-5xl mt-3'>
                    {   
                        courses.map(scourse => <CourseSideBar
                        key={scourse.id}
                        scourse={scourse}
                        ></CourseSideBar>)
                    }
                    </div>
                
            </div>
        </div>
    );
};

export default Course;