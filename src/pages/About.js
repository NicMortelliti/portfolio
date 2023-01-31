import React from "react";
import { data } from "../data/bioData";

// Styled components
import { Wrapper } from "../components/styles/Landing.styled";

const About = () => {
  // For each item in the bio data array, render a paragraph element.
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
