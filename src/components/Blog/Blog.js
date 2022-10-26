import React from 'react';

const Blog = () => {
    return (
        <div className='h-fit bg-gray-800'>
            <article className=" px-6 py-24  space-y-16  text-gray-50">
                <div className="w-full mx-auto space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold leading-none text-center">Things To Know About React Common Questions</h1>
                </div>
                <div className="text-black bg-white p-5 md:w-2/5 md:mx-auto rounded-xl mb-5">
                    <h2 className='text-3xl md:text-4xl font-bold'>What is cors?</h2>
                    <p className='font-medium mt-3'>
                        CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

                        In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                    </p>
                </div>
                <div className="text-black bg-white p-5 md:w-2/5 md:mx-auto rounded-xl mb-5">
                    <h2 className='text-3xl md:text-4xl font-bold'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p className='font-medium mt-3'>
                        Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized. <br /> <br />

                        Founded in 2011 as a chat API and acquired by Google in 2014, Google Firebase is a platform that now offers active backend as a service (BaaS) for building dynamic web and mobile apps. <br /> <br />

                        Firebase is a good choice if you want to deploy a working product on the cloud rapidly. Plus, as mentioned, you might want to try it out if you need a backend but don't have a backend development background.
                    </p>
                </div>
                <div className="text-black bg-white p-5 md:w-2/5 md:mx-auto rounded-xl mb-5">
                    <h2 className='text-3xl md:text-4xl font-bold'>How does the private route work?</h2>
                    <p className='font-medium mt-3'>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. <br />  <br />

                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </p>
                </div>
                <div className="text-black bg-white p-5 md:w-2/5 md:mx-auto rounded-xl mb-5">
                    <h2 className='text-3xl md:text-4xl font-bold'>What is Node? How does Node work?</h2>
                    <p className='font-medium mt-3'>
                        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. <br /> <br /> Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br /><br />

                        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. <br /><br /> Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                    </p>
                </div>
            </article>
        </div>
    );
};

export default Blog;