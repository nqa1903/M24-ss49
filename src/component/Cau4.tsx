import React from 'react'

export default function Cau4() {
  return (
    <>
     <h3 className="w-80 text-center">Create Account</h3>
      <div className="w-96 py-2">
        <label htmlFor="" className="py-2 relative">
          <input
            type="email"
            className="h-10 w-80 border-2 border-black border-opacity-50 rounded-lg outline-none focus:border-blue-500 focus:text-black transition duration-200 px-2"
          />
          <span className="text-black text-opacity-80 absolute left-0 top-1.5 mx-2 px-2 transition duration-200 input-text">
            Email
          </span>
        </label>
      </div>
      <div className="w-96 py-2">
        <label htmlFor="" className="py-2 relative">
          <input
            type="email"
            className="h-10 w-80 border-2 border-black border-opacity-50 rounded-lg outline-none focus:border-blue-500 focus:text-black transition duration-200 px-2"
          />
          <span className="text-black text-opacity-80 absolute left-0 top-1.5 mx-2 px-2 transition duration-200 input-text">
            Password
          </span>
        </label>
      </div>
      <div className="w-96 py-2">
        <label htmlFor="" className="py-2 relative">
          <input
            type="email"
            className="h-10 w-80 border-2 border-black border-opacity-50 rounded-lg outline-none focus:border-blue-500 focus:text-black transition duration-200 px-2"
          />
          <span className="text-black text-opacity-80 absolute left-0 top-1.5 mx-2 px-2 transition duration-200 input-text">
            Confirm Password
          </span>
        </label>
      </div>
      <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded-lg hover:bg-white group py-1.5 px-2.5 w-80 ">
        <span className="w-80 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="relative w-full text-center text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">
          Create an account
        </span>
      </button>
      <div className="w-80 text-center">
        Already have an account ?{" "}
        <a href="" className="font-semibold transition duration-200 hover:text-indigo-600">
          Login here
        </a>
      </div>
    </>
  )
}
