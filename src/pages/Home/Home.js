import React from "react";

import { Socials } from "../../components/ui/Buttons/index";
import Memoji from "../../components/ui/Memoji/Memoji";
import { titles } from "../../data/bioData";

// Styled components
import { Wrapper } from "../../components/styles/Landing.styled";
import { MemojiSection, Titles } from "../../components/styles/Layout.styled";

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
      <Titles>
        <DisplayTitles />
      </Titles>
      <h2>"The flying full stack developer"</h2>
      <MemojiSection>
        <Memoji />
      </MemojiSection>
    </Wrapper>
  );
};

export default Home;
