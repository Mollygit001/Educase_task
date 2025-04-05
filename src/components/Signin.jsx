/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = "PopX User";

    localStorage.setItem("user", JSON.stringify({ name, email }));
    navigate("/account-settings");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0F172A] px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="bg-[#1E293B] text-white p-6 w-80 shadow-[4px_4px_0px_#000] border-2 border-black rounded-lg"
      >
        <h1 className="text-xl font-bold">Signin to your PopX account</h1>
        <p className="text-gray-300 text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form className="mt-4 space-y-2" onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-gray-300 font-medium">Email Address</span>
            <input
              type="email"
              name="email"
              className="w-full border-2 border-black rounded-md p-2 mt-1 bg-[#334155] text-white shadow-[2px_2px_0px_#000]"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-300 font-medium">Password</span>
            <input
              type="password"
              name="password"
              className="w-full border-2 border-black rounded-md p-2 mt-1 bg-[#334155] text-white shadow-[2px_2px_0px_#000]"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full bg-gray-400 text-white py-2 rounded-md font-medium border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-none transition"
          >
            Signin
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signin;
