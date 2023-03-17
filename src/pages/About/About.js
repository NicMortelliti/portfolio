import React from "react";
import { data } from "../../data/bioData";

// Styled components
import { Wrapper } from "../../components/styles/About/About.styled";
import { PageTitle } from "../../components/styles/Layout.styled";

const About = () => {
  // For each item in the bio data array, render a paragraph element.
  const RenderBio = () =>
    data.map((line, index) => {
      return <p key={index}>{line}</p>;
    });

  return (
    <Wrapper>
      <PageTitle>About Me</PageTitle>
      <RenderBio />
    </Wrapper>
  );
};

export default About;
