import React from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HonePage";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import Products from "./pages/Products";

function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/games" element={<Products />} />
              <Route path="/game/:id" element={<ProductDetails />} />
              {/*<Route path="/best-seller" element={<BestSeller />} />*/}
              {/*<Route path="/game-on-sale" element={<GameOnSale />} />*/}
              {/*<Route path="/cart" element={<Cart />} />*/}
              {/*<Route path="/login" element={<Login />} />*/}
              {/*<Route path="/register" element={<Register />} />*/}
              {/*<Route path="/user-profile" element={<UserProfile />} />*/}
              {/*<Route path="/checkout" element={<Checkout />} />*/}
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
