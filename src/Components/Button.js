import React from "react";
import "../CSS/Button.css";

const Button = ({ currentStep, nextStep, prevStep, compLen }) => {
  return (
    <>
      {currentStep > 0 && (
        <button className="confession-button prev-button" onClick={prevStep}>
          ◀
        </button>
      )}
      <button className="confession-button next-button" onClick={nextStep}>
        {currentStep === compLen - 1 ? "💖" : "▶"}
      </button>
    </>
  );
};

export default Button;
