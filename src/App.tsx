import React from 'react';
// import './css/app.css';
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HonePage";
import GameDetailPage from "./pages/GameDetails";
import Footer from "./components/Footer";

function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/game/:id" element={<GameDetailPage />} />
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
