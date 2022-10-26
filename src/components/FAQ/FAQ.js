import React from 'react';

const FAQ = () => {
    return (
        <div className='bg-gray-800 h-screen'>
            <section className=" text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-6xl">Frequently Asked Questions</h2>
                    <div className="divide-y divide-gray-700 ">
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5 md:text-3xl">Why buy our course materials and training courseware packages?</h3>
                            <p className="md:pl-0 md:col-span-7 md:text-xl">We provide niche courseware packages and training materials that are highly effective and interactive. For example, we have courses specific to the retail industry such as retail selling skills and retail sales forecasting and planning.</p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5 md:text-3xl">OCan I copy and edit the course materials and use them to train and develop others?</h3>
                            <p className="md:pl-0 md:col-span-7 md:text-xl">We do not allow online or offline re-sale of any of our training materials as is or in any other electronic format. Our programs are created for trainers to use in delivering instructor led training that they can charge participants for attending or for team leaders or managers to use for developing their teams</p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5 md:text-3xl">Can I see samples of your course materials?</h3>
                            <p className="md:pl-0 md:col-span-7 md:text-xl">You can see samples of each program by going to the page of that specific program and scrolling down to the material samples section where you can see random samples of the trainer guide, workbook, and slides. </p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5 md:text-3xl">What payment forms and methods do you accept?</h3>
                            <p className="md:pl-0 md:col-span-7 md:text-xl">All Major Credit and debit cards. We accept Visa, MasterCard, Amex, Discover, JCB, Diner's Club International, Debit, and PayPal. Wire transfers</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;