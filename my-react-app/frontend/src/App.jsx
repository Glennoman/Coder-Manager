import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import "./index.css";

// const Layout = ({ children }) => {
//   const location = useLocation();
//   const hideNavbar =
//     location.pathname === "/register" || location.pathname === "/login";

//   return (
//     <>
//       {!hideNavbar && <Navbar />}
//       <main>{children}</main>
//     </>
//   );
// };

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="bg-hero bg-contain">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
