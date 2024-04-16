import React from 'react';
import { data } from '../../data/bioData';
import { useFeature } from 'use-feature';

import image from '../../assets/images/nic - sm.webp';

// Styled components
import { Picture, Wrapper } from '../../components/styles/About/About.styled';
import { PageTitle } from '../../components/styles/Layout.styled';

const About = () => {
  const showFeature = useFeature('REACT_APP_PROFILE_PICTURE');

  // For each item in the bio data array, render a paragraph element.
  const RenderBio = () =>
    data.map((line, index) => {
      return <p key={index}>{line}</p>;
    });

  return (
    <Wrapper>
      <Picture>
        <img src={image} alt='Profile' />
      </Picture>
      <PageTitle>About Me</PageTitle>
      <RenderBio />
    </Wrapper>
  );
};

export default About;
