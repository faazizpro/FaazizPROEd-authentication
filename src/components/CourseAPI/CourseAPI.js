import React from 'react';
import { Link } from 'react-router-dom';

const CourseAPI = ({ course }) => {
    const { name, id, img, info, price, user } = course;
    console.log(course);
    return (
        <div>
            <section className="bg-gray-900 text-white">
                <div className="">
                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="/services/digital-campaigns"
                    >
                        <img src={img} alt="" />

                        <h2 className="mt-4 text-xl font-bold text-white">{name}</h2>

                        <p className="mt-1 text-sm text-gray-300">
                            {
                                info.slice(0, 180) + '...'
                            }
                        </p>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseAPI;