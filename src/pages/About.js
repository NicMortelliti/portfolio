import React from "react";
import { data } from "../data/bioData";

// Styled components
import { Wrapper } from "../components/styles/Landing.styled";

const About = () => {
  const RenderBio = () => {
    return (
      <>
        {data.map((line, index) => {
          return <p key={index}>{line}</p>;
        })}
      </>
    );
  };

  return (
    <Wrapper>
      <RenderBio />
    </Wrapper>
  );
};

export default About;
