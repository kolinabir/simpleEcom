import React from "react";
import logo from "../src/images/Logo.svg";

const Header = () => {
  return (
    <div className="bg-[#1C2B35] flex justify-around py-2">
      <img src={logo} alt="" />
      <ul className="text-white space-x-5 flex items-center text-sm">
        <li>Order</li>
        <li>Order Review</li>
        <li>Manage Inventory</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Header;
