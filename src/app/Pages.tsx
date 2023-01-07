import { Routes, Route } from "react-router-dom";

import Cart from "../pages/Cart";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Cart />} />
    </Routes>
  );
};

export default Pages;
