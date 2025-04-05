/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AccountSettings = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0F172A] px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="bg-[#1E293B] text-white p-6 w-96 shadow-[4px_4px_0px_#000] border-2 border-black rounded-lg"
      >
        <h1 className="text-xl font-bold">Account Settings</h1>

        <div className="flex items-center space-x-4 mt-4">
          <img
            src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg"
            alt="profile"
            className="rounded-full border-2 border-black shadow-[2px_2px_0px_#000] h-20 w-20"
          />
          <div>
            <h2 className="font-bold">{user.name || "Guest"}</h2>
            <p className="text-gray-300 text-sm">
              {user.email || "guest@example.com"}
            </p>
          </div>
        </div>

        <p className="text-gray-300 text-sm mt-4">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr.
        </p>

        <button
          onClick={handleSignOut}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-medium border-2 border-black shadow-[4px_4px_0px_#000] transition"
        >
          Sign Out
        </button>
      </motion.div>
    </div>
  );
};

export default AccountSettings;
