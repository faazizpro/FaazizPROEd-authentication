import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const CourseDetail = () => {
    const navigate = useNavigate();
    const courseData = useLoaderData();
    // console.log(courseData);
    const { img, info, name, price, user, duration, id } = courseData;
    return (
        <div className='md:flex md:justify-center mt-10  h-scree'>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md  text-gray-100 bg-gray-900">
                <div>
                    <img src={img} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                    <h2 className="mb-1 md:text-4xl md:mb-3 font-semibold">{name}</h2>
                    <p className="text-sm text-gray-400">{info}</p>
                </div>
                <div className="md:flex md:flex-wrap md:justify-between ">
                    <div className='mb-3 md:mb-0'>
                        <h2
                            className=" relative inline-flex items-center rounded bg-indigo-600 px-2 py-1 md:px-2 md:py-2 text-white ">

                            <span className="text-sm font-medium ">
                                Price: {price}
                            </span>
                        </h2>
                    </div>
                    <div className='mb-3 md:mb-0'>
                        <h2
                            className=" relative inline-flex items-center rounded bg-indigo-600 px-2 py-1 md:px-2 md:py-2 text-white ">

                            <span className="text-sm font-medium ">
                                Total Enrolled: {user}+
                            </span>
                        </h2>
                    </div>
                    <div className='mb-3 md:mb-0'>
                        <h2
                            className=" relative inline-flex items-center rounded bg-indigo-600 px-2 py-1 md:px-2 md:py-2 text-white ">

                            <span className="text-sm font-medium ">
                                Duration: {duration}+
                            </span>
                        </h2>
                    </div>
                </div>
                <div onClick={() => {
                    navigate(`/enroll/${id}`);
                }} className='mb-3 md:mb-0 md:flex justify-center '>
                    <h2
                        className=" relative inline-flex items-center rounded bg-indigo-600 px-2 py-1 md:px-10 md:py-4 text-white ">

                        <span className="text-sm md:text-xl font-medium ">
                            Enroll Course Now <FaArrowRight className='inline ml-2'></FaArrowRight>
                        </span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;

