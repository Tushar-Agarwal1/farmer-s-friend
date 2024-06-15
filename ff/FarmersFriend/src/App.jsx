import React from 'react';
import WeatherPage from './Components/WeatherPage';
import { Navigate,BrowserRouter, Routes, Route } from 'react-router-dom'; // Change Route to Routes
import Header from './Components/Header';
import DashBoard from './Components/DashBoard';
import CropSuitPage from './Components/CropSuitPage';
import CommunityPage from './Components/CommunityPage';
import './App.css'
import AboutUs from './Components/About';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
function App() {
  const { authUser } = useAuthContext();
  return (
    
       <div className="App" style={{backgroundColor:'white'}}>
        <Header />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/crop-suitability" element={<CropSuitPage />} />
          <Route path="/weather-forecast" element={<WeatherPage />} />
          <Route path="/community-forum" element={authUser ? <Navigate to='/home' /> : <SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path='/home' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/home' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/home' /> : <SignUp />} />
        </Routes>
        <Toaster />
      </div>
    
  );
}

export default App;
