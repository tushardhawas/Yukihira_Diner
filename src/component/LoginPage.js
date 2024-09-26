import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className={`bg-white rounded-2xl shadow-lg w-full max-w-lg transition-transform duration-500 ${isActive ? "transform translate-x-full" : ""}`}>
        <div className={`p-8 transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-100"}`}>
          <h1 className="text-2xl font-bold mb-6">Sign In</h1>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <Link to="#" className="text-purple-600 mb-4 block hover:underline">
              Forgot your password?
            </Link>
            <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200">
            <Link to="/">Sign In</Link>
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <button onClick={handleToggle} className="text-purple-600 hover:underline">
              Sign Up
            </button>
          </p>
        </div>

        <div className={`p-8 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-2xl font-bold mb-6">Create Account</h1>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200">
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <button onClick={handleToggle} className="text-purple-600 hover:underline">
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
