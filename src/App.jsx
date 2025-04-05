import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./components/Signup";
import AccountSettings from "./components/AccountSettings";
import Signin from "./components/Signin";
import Landing from "./components/Landing";

const App = () => {
  return (
    <Router>
      <div className="flex justify-center items-center min-h-screen bg-[#0F172A] text-white">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
