import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-transparent shadow-sm">
      <div className=" p-4 flex justify-between items-center rounded-2xl">
        <img
          src="./src/assets/shopping-bag.png"
          alt="shopping-cart"
          className=" size-14 mr-5 md:hidden"
        />
        <img
          src="./src/assets/logo.png"
          alt=""
          className=" size-28 rounded-lg"
        />
        <div className=" font-garamond space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-500">
            About
          </Link>
          <Link to="/shop" className="hover:text-orange-500">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-orange-500">
            Contact
          </Link>
        </div>
        <img
          src="./src/assets/user.png"
          alt="usr-profile"
          className=" size-12 mr-5 hidden md:flex"
        />
        <img
          src="./src/assets/menu.png"
          alt="usr-profile"
          className=" size-12 mr-5 md:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
// <div className=" flex justify-around align-middle">
//   <div>logo</div>
//   <div>
//     <ul className="flex space-x-10 font-light italic font-garamond text-lg px-3">
//       <li className="hover:font-bold px-1">Home</li>
//       <li className="hover:font-bold px-1">Shop</li>
//       <li className="hover:font-bold px-1">About</li>
//       <li className="hover:font-bold px-1">Contact</li>
//     </ul>
//   </div>
// </div>
