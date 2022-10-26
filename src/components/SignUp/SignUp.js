import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, user } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('Error: ', error);
            })
    }
    return (
        <div className='bg-gray-900 md:flex justify-center h-screen'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm text-gray-400">Sign up to access your account</p>
                </div>
                <form onSubmit={handleSubmit} novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="name" className="block mb-2 text-sm">Your Name</label>
                            <input type="text" name="name" id="name" placeholder="Your Name" required className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                        <Link to='/login' rel="noopener noreferrer" className="text-xs hover:underline text-gray-400">Already have an account? Please Login</Link>
                    </div>
                    <div className="space-y-2">
                        <div>
                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign Up</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;