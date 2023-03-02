import React from "react";

import { Socials } from "../../components/ui/Buttons/index";
import Memoji from "../../components/ui/Memoji/Memoji";

// Styled components
import { Wrapper } from "../../components/styles/Landing.styled";
import { MemojiSection } from "../../components/styles/Layout.styled";

const Home = ({ darkThemeIsSet }) => {
  return (
    <Wrapper>
      <div>
        <h1>Hey,</h1>
        <h1>I'm Nic Mortelliti</h1>
      </div>
      <p>Web Developer | Systems Engineer | Pilot</p>
      <Socials />
      <MemojiSection>
        <Memoji darkThemeIsSet={darkThemeIsSet} />
      </MemojiSection>
    </Wrapper>
  );
};

export default Home;
