import React from "react";

import { Socials } from "../../components/ui/Buttons/index";
import Memoji from "../../components/ui/Memoji/Memoji";
import { titles } from "../../data/bioData";

// Styled components
import { Wrapper } from "../../components/styles/Landing.styled";
import { MemojiSection, Titles } from "../../components/styles/Layout.styled";

const Home = ({ darkThemeIsSet }) => {
  const DisplayTitles = () => {
    return titles.map((title) => <p>{title}</p>);
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
      <Socials />
      <MemojiSection>
        <Memoji darkThemeIsSet={darkThemeIsSet} />
      </MemojiSection>
    </Wrapper>
  );
};

export default Home;