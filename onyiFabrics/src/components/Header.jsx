import React, { useState, useEffect } from "react";

const Header = () => {
  const images = [
    {
      src: "../src/assets/quality-2.jpeg",
      text: "Where Quality Meets Excellence",
    },
    {
      src: "../src/assets/quality.jpg",
      text: "Crafting Essential Experiences",
    },
    {
      src: "../src/assets/creativy.webp",
      text: "Unleashing Boundless Creativity",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Image with Dynamic Text */}
      <div className="w-full h-[calc(2.5/3*100vh)] relative overflow-hidden">
        <div
          key={currentIndex}
          className="w-full h-full absolute transition-transform duration-[2s] ease-out transform scale-105"
          style={{
            backgroundImage: `url(${images[currentIndex].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Static and Dynamic Text */}
        <div className="absolute bottom-16 left-8 text-orange-500 ">
          <h1 className="text-5xl font-bold mb-2">Discover</h1>
          <p className="text-2xl italic">{images[currentIndex].text}</p>
          {/* Button */}
          <button className="mt-4 px-6 py-2 bg-white text-dun rounded-full shadow-md relative overflow-hidden group">
            <span className="inline-flex">
              {Array.from("Learn More").map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block group-hover:animate-wave`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </button>
        </div>
      </div>
      {/* Second Image with Text */}
      <div className="w-full flex items-center place-content-end px-4 relative">
        <img
          src="../src/assets/header-pics2.jpeg"
          alt="Second Image"
          className="w-1/3 h-60 object-cover mt-5"
        />
        {/* Welcome Text */}
        <div className="absolute top-4 left-8 text-2xl font-light capitalize text-dun italic tracking-wider">
          Elevating styles <br />
          <span className="ml-32 block text-3xl font-semibold">
            "Fabric Meets Art"
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
