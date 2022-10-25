import React from 'react';

const HeroSection = () => {
    return (
        <div className='hero-bg'>
            <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
		    {/* <!--Left Col--> */}
		<div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
			<p className="uppercase tracking-loose">Witty Tagline</p>
			<h1 className="font-bold text-3xl my-4">My Super App</h1>
			<p className="leading-normal mb-4">Enter your super app's description here... The key is to find the right length.  Don't want it to be too long, but then don't want it to be too short so that it looks weird between the title and button below.</p>
			<button className="bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent">Super Button</button>
		</div>
		{/* <!--Right Col--> */}
		<div className="w-full lg:w-1/2 lg:py-6 text-center">
			{/* <!--Add your product image here--> */}
			<svg className="fill-current text-gray-900 w-3/5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
		</div>
	</div>

	{/* <!--Container--> */}
	<div className="bg-white h-screen">
		<div className="container mx-auto pt-24 md:pt-16 px-6">
			<p className="py-4"><i className="em em-wave"></i> <i className="em em-world_map"></i></p>		
		</div>
	</div>

        </div>
    );
};

export default HeroSection;