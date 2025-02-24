import React, { useState } from "react";
import { motion } from "framer-motion";
import "../CSS/Lany3DGallery.css";
import Button from "./Button";

const Lany3DGallery = ({ currentStep, nextStep, prevStep, compLen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const media = [
    { type: "image", src: "/lany/lany-1.jpg" },
    { type: "image", src: "/lany/lany-2.jpg" },
    { type: "image", src: "/lany/lany-3.jpg" },
    { type: "video", src: "/lany/lany-4.mp4" },
    { type: "video", src: "/lany/lany-5.mp4" },
    { type: "video", src: "/lany/lany-7.mp4" },
  ];

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="lany-container">
      {/* Left Section - Title & Description */}
      <div className="lany-info">
        <h2 className="gallery-title">LANY Concert</h2>
        <p className="gallery-description">
          Experience the best moments of the LANY concert with a collection of
          images and videos showcasing the incredible performances and
          atmosphere!
        </p>
      </div>

      {/* Right Section - Gallery */}
      <div className="lany-concert">
        <div className="carousel-container">
          <div className="carousel">
            <motion.div
              className="carousel-inner"
              animate={{ rotateY: -currentIndex * (360 / media.length) }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {media.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item ${
                    index === currentIndex ? "active" : ""
                  }`}
                  style={{
                    transform: `rotateY(${
                      index * (360 / media.length)
                    }deg) translateZ(400px)`,
                  }}
                >
                  {item.type === "image" ? (
                    <img src={item.src} alt="Lany" />
                  ) : (
                    <video
                      src={item.src}
                      muted
                      loop
                      controls
                      onClick={(e) => (e.target.muted = !e.target.muted)}
                    />
                  )}
                </div>
              ))}
            </motion.div>

            <button className="prev-btn" onClick={prev}>
              ◀
            </button>
            <button className="next-btn" onClick={next}>
              ▶
            </button>
          </div>
        </div>
      </div>
      <Button
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        compLen={compLen}
      />
    </div>
  );
};

export default Lany3DGallery;
