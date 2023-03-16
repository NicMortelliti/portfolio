import React from "react";

import Memoji from "../../components/ui/Memoji/Memoji";
import { titles } from "../../data/bioData";

// Styled components
import { Wrapper } from "../../components/styles/Landing.styled";
import { MemojiSection, Titles } from "../../components/styles/Layout.styled";
import { Tagline } from "../../components/styles/Home.styled";

const Home = () => {
  // Render each title to the page
  const DisplayTitles = () => {
    return titles.map((title, index) => <p key={index}>{title}</p>);
  };

  return (
    <Wrapper>
      <div>
        <h1>Hey,</h1>
        <h1>I'm Nic Mortelliti</h1>
      </div>
      <Tagline>"The flying full stack developer"</Tagline>
      <Titles>
        <DisplayTitles />
      </Titles>
      <MemojiSection>
        <Memoji />
      </MemojiSection>
    </Wrapper>
  );
};

export default Home;
