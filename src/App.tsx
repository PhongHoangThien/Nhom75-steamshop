import React from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HonePage";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductOnSale from "./pages/ProductOnSale";
import ForgotPassword from "./pages/ForgotPassword";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
          <NavBar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              {/*<Route path="/best-seller" element={<BestSeller />} />*/}
              <Route path="/product-on-sale" element={<ProductOnSale />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/order-history" element={<UserProfile />} />
              {/*<Route path="/checkout" element={<Checkout />} />*/}
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
