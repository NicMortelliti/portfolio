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
    <div>
      <h1>{`My name is ${name.first} ${name.last}`}</h1>
      <h3>I am</h3>
      <h2>{currentBlurb}</h2>
    </div>
  );
}

export default HeroAbout;
