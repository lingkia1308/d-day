import React, { useState, useEffect } from "react";
import "../CSS/DaNang.css";
import Button from "./Button";

const DaNang = ({ currentStep, nextStep, prevStep, compLen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/da-nang/da-nang-1.jpg",
    "/da-nang/da-nang-2.jpg",
    "/da-nang/da-nang-4.jpg",
    "/da-nang/da-nang-5.jpg",
    "/da-nang/da-nang-6.jpg",
    "/da-nang/da-nang-7.jpg",
    "/da-nang/da-nang-8.jpg",
    "/da-nang/da-nang-9.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="da-nang-gallery">
      {/* Left Side - Slideshow */}
      <div className="slideshow">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Da Nang Memory ${index + 1}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>

      {/* Right Side - Text Content */}
      <div className="text-content">
        <h1>Our Trip to Da Nang</h1>
        <p className="trip-description">
          Remember our trip to Da Nang? Even though the weather wasn’t on our
          side, and the rain kept us indoors most of the time, it turned out to
          be one of the most memorable experiences for me because I was with you
          and it's our first trip together. Those cozy moments in the hotel,
          laughing over little things, sharing stories, and simply being
          together made it so special.
        </p>
        <Button
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
          compLen={compLen}
        />
      </div>
    </section>
  );
};

export default DaNang;
