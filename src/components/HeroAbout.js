// This component displays my name and
// and short 2-4 word blurbs about me
// in large font. Cycling through
// the descriptors.
import React, { useEffect, useState } from "react";

const name = { first: "Nic", last: "Mortelliti" };

const blurbs = [
  "a pilot 🛩️",
  "a developer 💻",
  "an engineer 📐",
  "a photographer 📷",
  "a human 🙋‍♂️",
];

function HeroAbout() {
  const [currentBlurb, setCurrentBlurb] = useState(blurbs[0]);

  // Cycle through blurbs
  useEffect(() => {
    // Initialize iterator to 0
    let i = 0;

    // Every n-seconds, change the current blurb state
    setInterval(() => {
      setCurrentBlurb(blurbs[i]);

      // Reset iterator to 0 if end of array is reached
      i < blurbs.length - 1 ? (i += 1) : (i = 0);
    }, 2000);
  }, []);

  return (
    <div className="hero">
      <h1>{`Hey, I'm ${name.first}`}.</h1>
      <h2>I'm a maker.</h2>
    </div>
  );
}

export default HeroAbout;
