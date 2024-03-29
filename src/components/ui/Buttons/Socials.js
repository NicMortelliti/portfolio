import React from "react";

import { externalLinks as links } from "../../../data/linkData";

// Styled components
import { SocialWrapper as Wrapper } from "../../styles/Contact/Contact.styled";
import { SocialButton as Button } from "../../styles/Buttons.styled";

const Socials = () => {
  const RenderLinks = () =>
    links.map(({ to, icon, text }, index) => {
      return (
        <Button key={index} href={to} target="_blank">
          {icon}
          <p>{text}</p>
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
