import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";

import { ToastContainer } from "react-toastify"; //toast for using alert pop up message either success or error
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" /> {/* toast message will show the top center */}

      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} /> {/* Navbar  Router (app/) */}
        <Route path="/signup" element={<Signup />} />{/* SignUp Router (app/signup) */}
        <Route path="/login" element={<Login />} />{/* Login Router (app/login) */}
        <Route path="/home" element={<Home />} />{/* Home Router (app/home) */}
      </Routes>
    </BrowserRouter>
  );
}
