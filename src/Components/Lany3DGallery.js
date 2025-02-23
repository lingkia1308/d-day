import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../CSS/Lany3DGallery.css";
import Button from "./Button";

const media = [
  { type: "image", src: "./lany/lany-2.jpg" },
  //   { type: "image", src: "./lany/lany-3.jpg" },
  { type: "video", src: "./lany/lany-5.mp4" },
  { type: "video", src: "./lany/lany-7.mp4" },
  { type: "image", src: "./lany/lany-1.jpg" },
];

const Lany3DGallery = ({ currentStep, nextStep, prevStep, compLen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.querySelector(".full-page-container").style.backgroundColor =
      "linear-gradient(135deg, #1A1A2E, #16213E)"; // Change to desired color
    return () => {
      document.querySelector(".full-page-container").style.backgroundColor = ""; // Reset on unmount
    };
  }, []);

  const next = () => {
    const activeVideo = document.querySelector(`.carousel-item.active video`);
    if (activeVideo) activeVideo.pause();

    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prev = () => {
    const activeVideo = document.querySelector(`.carousel-item.active video`);
    if (activeVideo) activeVideo.pause();

    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <div className="lany-concert">
      <h2 className="gallery-title">LANY Concert</h2>
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
                className="carousel-item"
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
      <div className="lany-button-container">
        <Button
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
          compLen={compLen}
        />
      </div>
    </div>
  );
};

export default Lany3DGallery;
