import React from "react";
import "../CSS/Button.css";

const Button = ({ currentStep, nextStep, prevStep, compLen }) => {
  return (
    <div className="button-container">
      {currentStep > 0 && (
        <button className="confession-button prev-button" onClick={prevStep}>
          ◀ Previous
        </button>
      )}
      <button className="confession-button next-button" onClick={nextStep}>
        {currentStep === compLen - 1 ? "Restart 💖" : "Next ▶"}
      </button>
    </div>
  );
};

export default Button;
