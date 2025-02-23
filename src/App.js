import React, { useState } from "react";
import "./App.css";
import HowWeMet from "./Components/HowWeMet.js";
import HowIRealised from "./Components/HowIRealised.js";
import SashaSloanCarousel from "./Components/SashaSloanCarousel.js";
import Lany3DGallery from "./Components/Lany3DGallery.js";

export default function LoveStory() {
  const [currentStep, setCurrentStep] = useState(0);
  const componentsLength = 4;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextStep = () => {
    setCurrentStep((prevStep) =>
      prevStep === components.length - 1 ? 0 : prevStep + 1
    );

    scrollToTop();
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep === 0 ? 0 : prevStep - 1));
    scrollToTop();
  };

  const components = [
    <HowWeMet
      key="how-we-met"
      currentStep={currentStep}
      nextStep={nextStep}
      prevStep={prevStep}
      compLen={componentsLength}
    />,
    <HowIRealised
      key="how-i-realised"
      currentStep={currentStep}
      nextStep={nextStep}
      prevStep={prevStep}
      compLen={componentsLength}
    />,
    <SashaSloanCarousel
      key="sasha-carousel"
      currentStep={currentStep}
      nextStep={nextStep}
      prevStep={prevStep}
      compLen={componentsLength}
    />,
    <Lany3DGallery
      key="lany-carousel"
      currentStep={currentStep}
      nextStep={nextStep}
      prevStep={prevStep}
      compLen={componentsLength}
    />,
  ];

  return <div className="full-page-container">{components[currentStep]}</div>;
}
