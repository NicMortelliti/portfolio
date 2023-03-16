import React from "react";

import Memoji from "../../components/ui/Memoji/Memoji";
import { titles } from "../../data/bioData";

// Styled components
import { Wrapper } from "../../components/styles/Landing.styled";
import { MemojiSection } from "../../components/styles/Layout.styled";
import { Tagline, Title, Symbol } from "../../components/styles/Home.styled";

const Home = () => {
  // Render each title to the page
  const DisplayTitles = () => {
    return titles.map((title, index) => {
      return (
        <>
          <Title key={index}>{title}</Title>
          {index < Object.keys(titles).length - 1 ? (
            <Symbol>&#9679;</Symbol>
          ) : null}
        </>
      );
    });
  };

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
