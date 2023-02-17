import React from "react";
import { data } from "../../data/bioData";

// Styled components
import { Wrapper } from "../../components/styles/Page.styled";

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
      <h1>About Me</h1>
      <RenderBio />
    </Wrapper>
  );
};

export default About;
