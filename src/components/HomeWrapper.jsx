import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home"; // Import Home component

const HomeWrapper = () => {
  const navigate = useNavigate();

  const handleMenuClick = (kategori) => {
    navigate(`/${kategori}`);
  };

  return <Home onMenuClick={handleMenuClick} />;
};

export default HomeWrapper;
