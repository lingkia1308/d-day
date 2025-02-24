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
        I still remember how much you love the energy of live music—the way you
        get lost in the moment, singing along and soaking up every note. Our
        first concert together, Sasha Sloan, was such a special night. I can’t
        help but smile thinking about how we played her songs on repeat for
        weeks, trying to learn every word so we could sing along together. And
        when we were there, surrounded by the music and the crowd, it felt like
        it was just you and me in our own little world. Those moments with you
        are the ones I hold onto, and I can’t wait for all the concerts we’ll go
        to in the future—more nights of dancing, laughing, and just being
        together. You make everything better, and I’m so grateful to share these
        experiences with you.
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
