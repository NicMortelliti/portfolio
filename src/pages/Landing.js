import React from "react";

import memoji from "../assets/images/memoji-wave.png";

// Styled components
import { Wrapper } from "../components/styles/Landing.styled";

const Landing = () => {
  return (
    <Wrapper>
      <h1>Hey, I'm Nic Mortelliti</h1>
      <p>Web Developer | Systems Engineer | Pilot</p>
      <img src={memoji} alt="memoji" />
    </Wrapper>
  );
};

export default Landing;
