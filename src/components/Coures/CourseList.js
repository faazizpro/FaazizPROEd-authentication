import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';


const CourseList = ({ scourse }) => {
    const navigate = useNavigate();

    const { name, id, img, info, price, user } = scourse;
    // console.log(scourse);
    return (
        <section className="bg-gray-900 text-white md:mb-20 rounded-2xl">
            <div className="">
                <div
                    className="block rounded-2xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    href="/services/digital-campaigns">
                    <img src={img} alt="" />

                    <h2 className="mt-4 text-xl font-bold text-white">{name}</h2>

                    <p className="mt-1 text-sm text-gray-300">
                        {
                            info.slice(0, 180) + '...'
                        }
                    </p>
                    <div className='mt-5 md:flex md:items-center justify-between'>
                        <div>
                            <h2
                                className=" relative inline-flex items-center rounded bg-indigo-600 px-2 py-1 md:px-2 md:py-2 text-white ">

                                <span className="text-sm font-medium ">
                                    Price: {price}
                                </span>
                            </h2>
                        </div>
                        <div>
                            <h2 className='text-sm md:text-xl text-yellow-500 flex gap-2 items-center md:ml-3 mt-2 md:mt-0'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                {user}+
                            </h2>
                        </div>
                    </div>
                    <div className='mt-5 md: flex md:justify-center md:mt-10'>
                        <div onClick={() => {
                            navigate(`/course/${id}`);
                        }}
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
                                More Details
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseList;