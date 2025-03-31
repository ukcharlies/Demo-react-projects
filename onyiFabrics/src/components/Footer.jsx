import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className=" mb-0 bg-cover bg-dun bg-center text-white py-5 rounded-t-3xl"
      // style={{
      //   backgroundImage: "url('./src/assets/ankara.jpeg')", // Path to your footer.png image
      // }}
    >
      <div className=" flex flex-col md:flex-row  justify-between items-center px-6 lg:px-14">
        {/* Left Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <div
            className="capitalize font-garamond text-3xl p-1 italic bg-clip-text text-transparent"
            style={{
              backgroundImage: "url('./src/assets/nav.png')",
              backgroundSize: "cover",
            }}
          >
            Onyiifabrics
          </div>
          <ul className="flex justify-center md:justify-start space-x-6 mt-4 text-sm uppercase">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/shop" className="hover:underline">
              Shop
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="text-center md:text-right">
          <h2 className="text-lg font-semibold mb-4">
            Subscribe to our newsletter
          </h2>
          <div className="flex justify-center md:justify-end">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button className="bg-white text-gray-800 px-4 py-2 rounded-r-md hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-2 border-t  border-white/50 pt-4">
        <ul className="flex justify-center space-x-5 text-xs uppercase px-4 items-start md:space-x-10 ">
          <li className="hover:underline">Terms and conditions</li>
          <li className="hover:underline">Privacy policy</li>
          <li className="hover:underline">Return policy</li>

          <li className="hover:underline">Cookies policy</li>
          <li className="hover:underline">Cookies settings</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
