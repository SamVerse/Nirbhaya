import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { FirstPage } from "./pages/FirstPage/FirstPage";
import { UserHome } from "./pages/UserHome/UserHome";
import OfficialsChat from "./pages/OfficalsChat/OfficialsChat";
import UserSettings from "./pages/UserSettings/userSettings";
import UserNotifications from "./pages/userNotifications/userNotifications";
import OfficialsDash from "./pages/OfficialDash/OfficialDashboard";
import LoginForm from "./pages/authentication/LoginForm";
import Signup from "./pages/authentication/Signup";
import OfficialMessages from "./pages/OfficialMessages";
import OfficialAlerts from "./pages/officialAlerts";
import OfficialSettings from "./pages/OfficialSettings";
import OfficialLayout from "./pages/OfficialLayout";
import OfficialUserChats from "./pages/OfficialUserChats";
import UserProfile from "./pages/userProfile";
import RedAlertMode from "./pages/RedAlertMode";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/userLogin" element={<LoginForm />} />
        <Route path="/userSignup" element={<Signup />} />
        <Route path="/user" element={<UserHome />} />
        <Route path="/user/officialchat" element={<OfficialsChat />} />
        <Route path="/user/settings" element={<UserSettings />} />
        <Route path="/user/notifications" element={<UserNotifications />} />
        <Route path="/user/redalert" element={<RedAlertMode />} />
        <Route path="/userprofile" element={<UserProfile />} />

         {/* New official routes */}
         <Route path="/official" element={<OfficialLayout />}>
          <Route index element={<OfficialsDash />} />
          <Route path="alerts" element={<OfficialAlerts />} />
          <Route path="messages" element={<OfficialMessages />} />
          <Route path="settings" element={<OfficialSettings />} />
          <Route path="userChats" element={<OfficialUserChats/>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
