import React, {useState} from 'react';
import NavBar from "./components/section/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HonePage";
import ProductDetails from "./pages/product/ProductDetails";
import Footer from "./components/section/Footer";
import Products from "./pages/product/Products";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./pages/Cart";
import ProductOnSale from "./pages/product/ProductOnSale";
import ForgotPassword from "./pages/auth/ForgotPassword";
import UserProfile from "./pages/auth/UserProfile";
import BestSeller from "./pages/product/ProductBestSeller";
import Checkout from "./pages/cart/Checkout";
import OrderConfirmation from "./pages/cart/OrderConfirmation";
import ScrollToTop from "./components/common/ScrollToTop";
import FilterProduct from "./pages/product/FilterProduct";
import PaymentMethod from "./pages/cart/PaymentMethod";


function App() {
    const [order, setOrder] = useState(null)

  return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <NavBar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/product-on-sale" element={<ProductOnSale />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/order-history" element={<UserProfile />} />
              <Route path="/wishlist" element={<UserProfile />} />
              <Route path="/change-password" element={<UserProfile />} />
              <Route path="/checkout" element={<Checkout setOrder={setOrder}/>} />
              <Route path="/order-confirmation" element={<OrderConfirmation order={order} />} />
              <Route path="/filter-product" element={<FilterProduct />} />
              <Route path="/payment-method" element={<PaymentMethod />} />
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
