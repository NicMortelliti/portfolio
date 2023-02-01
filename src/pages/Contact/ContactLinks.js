import React from "react";

import { SocialWrapper as Wrapper } from "../../components/styles/Wrappers.styled";
import { SocialButton as Button } from "../../components/styles/Buttons.styled";

const ContactLinks = ({ links }) => {
  const RenderButtons = () => {
    return links.map(({ link: to, icon, text }, index) => (
      <Button key={index} href={to}>
        <h2>{icon}</h2>
        <p>{text}</p>
      </Button>
    ));
  };

  return (
    <Wrapper>
      <RenderButtons />
    </Wrapper>
  );
};

export default ContactLinks;
