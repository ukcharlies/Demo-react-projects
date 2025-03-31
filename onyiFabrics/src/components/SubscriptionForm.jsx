import React from "react";
import { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChangee = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error message
  };
  const handleSubscriptionchange = (e) => {
    setIsSubscribed(e.target.checked);
    console.log(isSubscribed);
  };
  const handleSubmit = (e) => {
    //basic verification
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!isSubscribed) {
      setError("Please check the subscribe box");
      return;
    }
    // Send email to backend
    console.log("form suubmitted:", { email, isSubscribed });

    // Clear form
    setEmail("");
    setIsSubscribed(false);
    setError("");
    alert("You have successfully subscribed to our newsletter");
  };
  return (
    <div className="flex flex-col items-center p-6 mb-3 border rounded-md shadow-md max-w-sm lg:max-w-[660px] lg:mb-10 mx-auto bg-white">
      {/* Subscription Form */}
      <h2 className=" font-garamond text-lg font-thin tracking-wider mb-4">
        Receive all our news and updates
      </h2>
      <form className="w-full" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium mb-2" htmlFor="email">
          Email Address *
        </label>
        <input
          value={email}
          onChange={handleEmailChangee}
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:ring-0 focus:border-gray-400 focus:outline-none active:outline-none"
          required
        />
        <div className="flex items-start mb-4">
          <input
            onChange={handleSubscriptionchange}
            checked={isSubscribed}
            type="checkbox"
            id="subscribe"
            className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-500"
          />
          <label htmlFor="subscribe" className="ml-2 text-sm">
            Yes, subscribe me to your newsletter.
          </label>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-gray-400 text-white font-medium py-2 rounded-md hover:bg-red-import transition lg:w-3/5 lg:flex lg:place-self-center lg:place-content-center"
        >
          Subscribe Now
        </button>
      </form>

      {/* Contact Information */}
      <div className="mt-5 text-center text-md text-gray-600 leading-10 font-garamond">
        <p>500 Terry Francine St.</p>
        <p>San Francisco, CA 94158</p>
        <p>
          Email:{" "}
          <a href="mailto:info@my-domain.com" className="text-indigo-500">
            onyiifabrics@gmail.com
          </a>
        </p>
        <p>
          Tel:{" "}
          <a href="tel:1-800-000-0000" className="text-indigo-500">
            08034085950
          </a>
        </p>
      </div>
    </div>
  );
};

export default SubscriptionForm;
