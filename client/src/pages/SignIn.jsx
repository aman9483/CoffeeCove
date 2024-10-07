import React, { useState } from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'; // Icons from react-icons library

const SignIn = () => {
  // State to toggle between Sign In and Sign Up forms
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className='mt-28'>

     
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            {isSignUp ? 'Join us today' : 'Get started today'}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            {isSignUp
              ? 'Create an account to enjoy all the services without any ads for free!'
              : 'Sign in to access your account and continue where you left off.'}
          </p>

          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              {isSignUp ? 'Create a new account' : 'Sign in to your account'}
            </p>

            {isSignUp && (
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter your name"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <FaUser className="text-gray-400" />
                  </span>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <FaEnvelope className="text-gray-400" />
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <FaLock className="text-gray-400" />
                </span>
              </div>
            </div>

            {isSignUp && (
              <div>
                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                <div className="relative">
                  <input
                    type="password"
                    id="confirm-password"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Confirm password"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <FaLock className="text-gray-400" />
                  </span>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>

            <p className="text-center text-sm text-gray-500">
              {isSignUp ? 'Already have an account?' : 'No account?'}
              <button
                type="button"
                className="ml-1 text-indigo-600 underline"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? 'Sign in' : 'Sign up'}
              </button>
            </p>
          </form>
        </div>
      </div>
   
    </div>
  );
};

export default SignIn;
