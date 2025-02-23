import React from "react";
import Button from "./Button.js";
import "../CSS/HowIRealised.css"; // Assuming you have your CSS in a separate file

const HowIRealised = ({ currentStep, nextStep, prevStep, compLen }) => {
  return (
    <section className="how-we-realised fade-in">
      <h1>How I Realized</h1>
      <p>
        It was the day she left for Bali. We had spent so much time together
        after the car accident, driving to work every day, sharing laughter, and
        weaving memories. Her absence felt like a void I couldn't ignore. Day by
        day, I felt an unspoken connection growing within me.
      </p>
      <p>
        When she left, something shifted. I missed her smile, her presence, and
        her warmth. Fear crept in—fear of falling again, of getting hurt because
        of my past. So, I withdrew. I stopped texting her, convincing myself
        that distance was the safest choice.
      </p>
      <p>
        But then, despite the cold shoulder I gave her, she reached out. Even
        after my silence, she texted me. Her words carried a truth I wasn’t
        prepared for—she felt the same way. My heart skipped a beat. In that
        moment, I realized that my feelings were real, undeniable, and
        beautifully mutual.
      </p>
      <p>That was the moment I knew. I was in love with her.</p>

      <Button
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        compLen={compLen}
      />
    </section>
  );
};

export default HowIRealised;
