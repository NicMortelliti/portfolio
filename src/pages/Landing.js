import React from "react";
import {useNavigate} from "react-router-dom"

// Styled components
import { Wrapper } from "../components/styles/Landing.styled";
import { Button } from "../components/styles/Buttons.styled";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>Welcome!</h1>
      <p>
        This is kind of embarrasing, you've caught me in the midst of creating
        my portfolio.
      </p>
      <p>
        There isn't very much here yet, but feel free to take a look around!
      </p>
      <Button onClick={() => navigate('/contact')}>Contact Me</Button>
    </Wrapper>
  );
};

export default Landing;
