import React from "react";
import Button from "./Button.js";
import "../CSS/HowWeMet.css"; // Assuming you have your CSS in a separate file

const HowWeMet = ({ currentStep, nextStep, prevStep, compLen }) => {
  return (
    <section className="how-we-met fade-in">
      <h1>How We Met</h1>
      <p>
        Life has a funny way of bringing people together. It all started when I
        was going through a tough time—I had been in a car accident, and
        suddenly, I found myself without a car. Getting to work felt like a
        challenge, but then <em>you</em> stepped in.
      </p>
      <p>
        You offered to drive me to work, even though we barely knew each other
        at the time. I remember thinking how rare it is to find someone so kind
        and selfless. Deep down, I knew there were only a few people who would
        go out of their way to help me like that, and you were one of them.
      </p>
      <p>
        As time passed, the roles reversed. My car was fixed, but your brother
        returned from China and needed to use yours. Suddenly, I was the one
        driving you to work. Those car rides became my favorite part of the
        day—just you and me, talking, laughing, and slowly but surely, growing
        closer.
      </p>
      <p>
        It was during those moments that I realized something special was
        happening. You weren’t just the person who gave me a ride; you were
        becoming the person I wanted to share every ride with.
      </p>

      <Button
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        compLen={compLen}
      />
    </section>
  );
};

export default HowWeMet;
