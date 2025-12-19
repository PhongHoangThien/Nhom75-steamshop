import React from 'react';
// import './css/app.css';
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HonePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GameDetailPage from "./pages/ProductDetails";
import Footer from "./components/Footer";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/game/:id" element={<GameDetailPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
