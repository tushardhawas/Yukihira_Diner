import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <div className={`bg-white rounded-2xl shadow-lg w-full max-w-md transition-transform duration-500 ${isActive ? "transform translate-x-full" : ""}`}>
        {/* Sign In Form */}
        <div className={`p-6 transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-100"}`}>
          <h1 className="text-xl font-bold mb-4 text-primary">Sign In</h1>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <Link to="#" className="text-secondary mb-4 block hover:underline">
              Forgot your password?
            </Link>
            <Link to="/" className="w-full">
              <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-highlight transition duration-200">
                Sign In
              </button>
            </Link>
          </form>
          <p className="mt-2 text-center">
            Don't have an account?{" "}
            <button onClick={handleToggle} className="text-secondary hover:underline">
              Sign Up
            </button>
          </p>
        </div>

        {/* Sign Up Form */}
        <div className={`p-6 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-xl font-bold mb-4 text-primary">Create Account</h1>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-highlight transition duration-200">
              Sign Up
            </button>
          </form>
          <p className="mt-2 text-center">
            Already have an account?{" "}
            <button onClick={handleToggle} className="text-secondary hover:underline">
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
