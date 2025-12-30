import React from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HonePage";
import GameDetailPage from "./pages/GameDetails";
import Footer from "./components/Footer";
import Games from "./pages/Games";
import GameOnSale from "./pages/GameOnSale";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/games" element={<Games />} />
                <Route path="/game/:id" element={<GameDetailPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/game-on-sale" element={<GameOnSale />} />
                {/*<Route path="/best-seller" element={<BestSeller />} />*/}
                {/*<Route path="/cart" element={<Cart />} />*/}
                {/*<Route path="/user-profile" element={<UserProfile />} />*/}
                {/*<Route path="/checkout" element={<Checkout />} />*/}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;