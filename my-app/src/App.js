// src/App.js
import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import CustomNavbar from "./pages/navbar";


// Pages
import HomePage from "./pages/Homepage.jsx";
import SymptomsChecker from "./pages/symptomschecker.jsx";
import GeneralHealth from "./pages/generalhealth";
import ChatBotHome from "./pages/chatbothome";
import HairSkin from "./pages/haircareform";
import HairSkinSolution from "./pages/hairskinsolution";
import AIWork from "./pages/aiworking";
import DataSecurity from "./pages/datasecure.jsx";
import UploadImage from "./pages/uploadimage.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import GeneralQuestion from "./pages/generalquestions.jsx";
import BPCare from "./pages/bpcare.jsx";
import Cancercare from "./pages/cancer-care.jsx";
import { AuthProvider, useAuth } from "./pages/context/UserAuth.js";



const AppRoutes = () => {
  const { isLoggedIn } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);


  return (
    <>
      

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/symptomschecker" element={<SymptomsChecker />} />
        <Route path="/generalhealth" element={<GeneralHealth />} />
        <Route path="/chatbot" element={<ChatBotHome />} />
        <Route path="/haircareform" element={<HairSkin />} />
        <Route path="/hairsolution" element={<HairSkinSolution />} />
        <Route path="/aiworking" element={<AIWork />} />
        <Route path="/datasecure" element={<DataSecurity />} />
        <Route path="/uploadimage" element={<UploadImage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/generalquestions" element={<GeneralQuestion />} />
        <Route path="/bpcare" element={<BPCare />}/>
        <Route path="/cancer-care" element={<Cancercare />}/>
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <HomePage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
