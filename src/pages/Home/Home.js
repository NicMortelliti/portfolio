import React from "react";

import Memoji from "../../components/ui/Memoji/Memoji";
import { titles } from "../../data/bioData";

// Styled components
import { MemojiSection } from "../../components/styles/Layout.styled";
import {
  Brief,
  Tagline,
  Title,
  Wrapper,
} from "../../components/styles/Home.styled";

const Home = () => {
  // Render each title to the page
  const DisplayTitles = () => (
    <Title>
      {titles.map((title, index) => (
        <h3 key={index}>{title}</h3>
      ))}
    </Title>
  );
  return (
    <Wrapper>
      <div>
        <h1>Hey!</h1>
        <h1>I'm Nic Mortelliti</h1>
      </div>
      <Tagline>"The flying full stack developer"</Tagline>
      <DisplayTitles />
      <MemojiSection>
        <Memoji />
      </MemojiSection>
    </Wrapper>
  );
};

export default Home;
