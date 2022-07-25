// This component displays my name and
// and short 2-4 word blurbs about me
// in large font. Cycling through
// the descriptors.
import React from "react";

const name = { first: "Nic", last: "Mortelliti" };

const blurbs = [
  "a pilot",
  "a developer",
  "an engineer",
  "a photographer",
  "a human",
];

function HeroAbout() {
  return (
    <div>
      <h1>{`My name is ${name.first} ${name.last}`}</h1>
      <h3>I am</h3>
      <h2>{blurbs[0]}</h2>
    </div>
  );
}

export default HeroAbout