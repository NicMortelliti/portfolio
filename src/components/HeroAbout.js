import React from "react";

const name = { first: "Nic", last: "Mortelliti" };

function HeroAbout() {
  return (
    <div className="hero">
      <h1>{`Hey, I'm ${name.first}`}.</h1>
      <h2>I'm a maker.</h2>
    </div>
  );
}

export default HeroAbout;
