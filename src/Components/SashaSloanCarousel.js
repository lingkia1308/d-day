import React, { useState, useEffect } from "react";
import Button from "./Button.js";
import "../CSS/SashaSloanCarousel.css";

const SashaSloanCarousel = ({ currentStep, nextStep, prevStep, compLen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // List of images & videos
  const media = [
    { type: "image", src: "./sasha-sloan/sasha-sloan.JPG" },
    { type: "image", src: "./sasha-sloan/sasha-sloan-2.JPG" },
    { type: "image", src: "./sasha-sloan/sasha-sloan-3.JPG" },
    { type: "video", src: "./sasha-sloan/sasha-sloan-4.MP4" },
    { type: "video", src: "./sasha-sloan/sasha-sloan-5.MP4" },
    { type: "video", src: "./sasha-sloan/sasha-sloan-6.MP4" },
  ];

  const openModal = (index) => {
    setCurrentMediaIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNext = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const goToPrevious = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  // Reload video when switching between media
  useEffect(() => {
    const mediaElement = document.getElementById("media-element");
    if (mediaElement && media[currentMediaIndex].type === "video") {
      mediaElement.load();
    }
  }, [currentMediaIndex]);

  return (
    <section className="sasha-concert fade-in">
      <h1>Sasha Sloan Concert</h1>
      <p className="concert-memories">
        I still remember how much you love the vibes of a concert. Our first
        concert together was Sasha Sloan, and oh my god, we were listening to
        her songs non-stop just to remember the lyrics! The energy, the music,
        and experiencing it all with you made it so special. It was such a fun
        night, and I realized how much I love going to concerts with you.
        There's something magical about sharing those moments, singing our
        hearts out, and just being lost in the music together. I can’t wait for
        more concerts with you in the future.
      </p>

      <button className="open-modal-button" onClick={() => openModal(0)}>
        Click me to reveal some clips
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {media[currentMediaIndex].type === "image" ? (
              <img
                src={media[currentMediaIndex].src}
                alt={`Media ${currentMediaIndex + 1}`}
              />
            ) : (
              <video id="media-element" controls autoPlay>
                <source src={media[currentMediaIndex].src} type="video/mp4" />
              </video>
            )}

            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
          </div>
          <div className="carousel-navigation">
            <button
              className="carousel-button prev"
              onClick={goToPrevious}
            ></button>
            <button
              className="carousel-button next"
              onClick={goToNext}
            ></button>
          </div>
        </div>
      )}

      <Button
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        compLen={compLen}
      />
    </section>
  );
};

export default SashaSloanCarousel;
