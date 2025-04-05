/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.fullname.value;
    const email = form.email.value;

    const existingUser = JSON.parse(localStorage.getItem("user"));

    // ✅ Check if user with this email already exists
    if (existingUser && existingUser.email === email) {
      setError("Email already registered. Try signing in instead.");
      return;
    }

    // ✅ Create new user
    localStorage.setItem("user", JSON.stringify({ name, email }));
    navigate("/account-settings");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0F172A] px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="bg-[#1E293B] text-white p-6 w-96 shadow-[4px_4px_0px_#000] border-2 border-black rounded-lg"
      >
        <h1 className="text-xl font-bold">Create your PopX account</h1>

        {error && (
          <p className="bg-red-600 text-white text-sm mt-2 px-3 py-2 rounded-md border border-black shadow-[2px_2px_0px_#000]">
            {error}
          </p>
        )}

        <form className="mt-4 space-y-2" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-gray-300 font-medium">Full Name*</span>
            <input
              type="text"
              name="fullname"
              className="w-full border-2 border-black rounded-md p-2 mt-1 bg-[#334155] text-white shadow-[2px_2px_0px_#000]"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-300 font-medium">Phone Number*</span>
            <input
              type="text"
              name="phone"
              className="w-full border-2 border-black rounded-md p-2 mt-1 bg-[#334155] text-white shadow-[2px_2px_0px_#000]"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-300 font-medium">Email Address*</span>
            <input
              type="email"
              name="email"
              className="w-full border-2 border-black rounded-md p-2 mt-1 bg-[#334155] text-white shadow-[2px_2px_0px_#000]"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-300 font-medium">Password*</span>
            <input
              type="password"
              name="password"
              className="w-full border-2 border-black rounded-md p-2 mt-1 bg-[#334155] text-white shadow-[2px_2px_0px_#000]"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-300 font-medium">Company Name</span>
            <input
              type="text"
              name="company"
              className="w-full border-2 border-black rounded-md p-2 mt-1 bg-[#334155] text-white shadow-[2px_2px_0px_#000]"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md font-medium border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-none transition"
          >
            Create Account
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
