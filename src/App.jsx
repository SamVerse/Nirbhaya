import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FirstPage } from "./pages/FirstPage/FirstPage";
import { UserHome } from "./pages/UserHome/UserHome";
import OfficialsChat from "./pages/OfficalsChat/OfficialsChat";
import UserSettings from "./pages/UserSettings/userSettings";
import LoginForm from "./pages/authentication/LoginForm";
import Signup from "./pages/authentication/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/userLogin" element={<LoginForm />} />
        <Route path="/userSignup" element={<Signup />} />
        <Route path="/user" element={<UserHome />} />
        <Route path="/user/officalchat" element={<OfficialsChat />} />
        <Route path="/user/settings" element={<UserSettings />} />  
      </Routes>
    </Router>
  );
}

export default App;
