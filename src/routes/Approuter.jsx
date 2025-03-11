import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Layout from "../layouts/layout";  
import Home from "../pages/Home";
import Cart from "../pages/CartManagement";
import Order from "../pages/OrderManagement";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
   
        <Route path="/" element={<Welcome />} />

       
        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
