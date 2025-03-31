import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-lg lg:mt-5 lg:mb-5">
      {/* Header */}
      <div
        className="capitalize font-garamond text-3xl p-1 italic bg-clip-text text-transparent mb-2"
        style={{
          backgroundImage: "url('./src/assets/nav.png')",
          backgroundSize: "cover",
        }}
      >
        Get in touch
      </div>

      {/* Social Media Links */}

      {/* Store Information */}
      <div className="mb-10 text-gray-700 font-garamond text-lg">
        <h2 className="text-2xl font-semibold mb-2">Store Name</h2>
        <p className="mb-1">500 Terry Francine St.</p>
        <p className="mb-1">San Francisco, CA 94158</p>
        <p>
          Tel:{" "}
          <a
            href="tel:0-803-408-5950"
            className="text-orange-500 hover:underline"
          >
            0-803-408-5950
          </a>
        </p>
      </div>

      {/* Delivery Services */}
      <div className="text-gray-700 font-garamond text-lg">
        <h2 className="text-2xl font-semibold mb-6">Delivery Services</h2>
        <p className="mb-6 leading-relaxed">
          At <strong>onyiiFabrics</strong>, we provide reliable delivery
          services exclusively for Lagos-based customers. Orders are processed
          within <strong>1-2 business days</strong> and delivered within{" "}
          <strong>3-5 business days</strong>.
        </p>
        <p className="mb-4">
          Delivery fees depend on your location within Lagos and will be
          displayed at checkout.
        </p>
        <p className="mb-4">
          For further assistance or inquiries, reach out to us via:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Email:{" "}
            <a
              href="mailto:onyiifabrics@gmail.com"
              className="text-orange-500 hover:underline"
            >
              onyiifabrics@gmail.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              href="tel:08034085950"
              className="text-orange-500 hover:underline"
            >
              08034085950
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center space-x-10 mt-8">
        <a
          href="https://facebook.com/yourbusinesspage"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-blue-600 text-4xl hover:text-blue-800 flex flex-col items-center"
        >
          <FaFacebookF />
          <div className="mt-2 h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
        </a>
        <a
          href="https://instagram.com/yourbusinesspage"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-pink-500 text-4xl hover:text-pink-700 flex flex-col items-center"
        >
          <FaInstagram />
          <div className="mt-2 h-1 w-0 bg-pink-500 group-hover:w-full transition-all duration-300"></div>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
