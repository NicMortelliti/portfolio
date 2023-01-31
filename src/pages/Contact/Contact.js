import React, { useEffect, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { externalLinks } from "../../data/linkData";
import { email } from "../../data/bioData";

// Styled components
import { Wrapper } from "../../components/styles/Page.styled";
import { LinkCont, Link } from "../../components/styles/Link.styled";

const Contact = () => {
  const [feedbackIsDisplayed, setFeedbackIsDisplayed] = useState(false);

  // External Links
  // Create an array of links with a "to" that points to the external url,
  // as well as the "text" to display.
  // Then map through the links, creating a link for each one.
  const RenderExternalLinks = () => (
    <LinkCont columns>
      {externalLinks.map(({ to, text, icon }, index) => (
        <Link key={index} href={to}>
          <h1 className="icon">{icon}</h1>
          <p className="desc">{text}</p>
        </Link>
      ))}
    </LinkCont>
  );

  // When clicked, we will attempt to copy the email
  // address to the clipboard. This only works on secure
  // connections such as https or localhost. This site
  // will be hosted via https, so it should work fine for
  // most browsers. I tested this behavior on a non-secure
  // connection (192.xxx...) and I did not see the "Copied!"
  // feedback. So it seems to work as intended.
  const handleClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setFeedbackIsDisplayed(true);
  };

  // Watch for changes in the feedbackIsDisplayed state.
  // If the state changes to "true", we start a timer.
  // At the end of the timer, we set the state
  // back to "false".
  useEffect(() => {
    if (feedbackIsDisplayed === true) {
      const timer = setTimeout(() => {
        setFeedbackIsDisplayed(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [feedbackIsDisplayed, setFeedbackIsDisplayed]);

  return (
    <Wrapper>
      <h2>Want to work with me?</h2>
      <h3>Feel free to contact me at the address below.</h3>
      <button className="contact" onClick={(e) => handleClick(e)}>
        {feedbackIsDisplayed ? (
          <h2>Copied!</h2>
        ) : (
          <h2>
            {email} <MdContentCopy />
          </h2>
        )}
      </button>
      <RenderExternalLinks />
    </Wrapper>
  );
};

export default Contact;
