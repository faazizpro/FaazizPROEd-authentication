import React from 'react';

const FAQ = () => {
    return (
        <div className='bg-gray-800 h-screen'>
            <section className=" text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-6xl">Frequently Asked Questions</h2>
                    <div className="divide-y divide-gray-700 ">
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5 md:text-3xl">Optio maiores eligendi molestiae totam dolores similique?</h3>
                            <p className="md:pl-0 md:col-span-7 md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5 md:text-3xl">Optio maiores eligendi molestiae totam dolores similique?</h3>
                            <p className="md:pl-0 md:col-span-7 md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5 md:text-3xl">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</h3>
                            <p className="md:pl-0 md:col-span-7 md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5 md:text-3xl">Magni reprehenderit possimus debitis?</h3>
                            <p className="md:pl-0 md:col-span-7 md:text-xl">Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;