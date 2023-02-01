import React from "react";

import { externalLinks as links } from "../../data/linkData";

// Styled components
import { SocialWrapper as Wrapper } from "../../components/styles/Wrappers.styled";
import { SocialButton as Button } from "../../components/styles/Buttons.styled";

const Socials = () => {
  const RenderLinks = () =>
    links.map(({ to, icon }, index) => {
      return (
        <Button key={index} href={to}>
          <p>{icon}</p>
        </Button>
      );
    });

  return (
    <Wrapper>
      <RenderLinks />
    </Wrapper>
  );
};

export default Socials;
