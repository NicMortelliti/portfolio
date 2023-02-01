import React from "react";

import Socials from "./Socials";

// Styled components
import { Wrapper } from "../../components/styles/Landing.styled";

const Home = () => {
  return (
    <Wrapper>
      <div>
        <h1>Hey,</h1>
        <h1>I'm Nic Mortelliti</h1>
      </div>
      <p>Web Developer | Systems Engineer | Pilot</p>
      <Socials />
    </Wrapper>
  );
};

export default Home;
