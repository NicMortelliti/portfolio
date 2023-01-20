import React from "react";
import { useNavigate } from "react-router-dom";

import memoji from "../assets/images/memoji-wave.png";

// Styled components
import { Wrapper } from "../components/styles/Landing.styled";
import { Button } from "../components/styles/Buttons.styled";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>Hey! I'm Nic Mortelliti</h1>
      <p>Web Developer / Systems Engineer / pilot.</p>
      <Button onClick={() => navigate("/contact")}>Contact Me</Button>
      <img src={memoji} alt="memoji" />
    </Wrapper>
  );
};

export default Landing;
