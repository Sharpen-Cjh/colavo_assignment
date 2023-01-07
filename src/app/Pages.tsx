import { Routes, Route } from "react-router-dom";

import ServiceMenu from "../components/ServiceMenu";
import DiscountMenu from "../components/DiscountMenu";

import Cart from "../pages/Cart";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Cart />} />
      <Route path="/1" element={<ServiceMenu />} />
      <Route path="/2" element={<DiscountMenu />} />
    </Routes>
  );
};

export default Pages;
