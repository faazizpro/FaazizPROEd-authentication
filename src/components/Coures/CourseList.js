import React from 'react';
import { FaStar } from 'react-icons/fa';


const CourseList = ({ scourse }) => {

    const { name, id, img, info, price, user } = scourse;
    console.log(scourse);
    return (
        <section className="bg-gray-900 text-white md:mb-5 rounded-2xl">
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
                </div>
            </div>
        </section>
    );
};

export default CourseList;