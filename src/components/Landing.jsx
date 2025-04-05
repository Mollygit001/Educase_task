/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion} from "framer-motion";

const Landing = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0F172A] text-white px-4">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="bg-[#1E293B] p-6 w-80 shadow-[4px_4px_0px_#000] border-2 border-black rounded-lg flex flex-col items-center"
      >
        <h1 className="text-xl font-bold text-white">Welcome to PopX</h1>
        <p className="text-gray-300 text-sm mt-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-6 w-full">
          <Link to="/signup">
            <button className="w-full bg-purple-600 text-white py-2 rounded-md font-medium border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-none transition duration-200">
              Create Account
            </button>
          </Link>
          <Link to="/login">
            <button className="w-full mt-2 bg-purple-300 text-black py-2 rounded-md font-medium border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-none transition duration-200">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
