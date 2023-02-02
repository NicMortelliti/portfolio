import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { email } from "../../data/bioData";
import { Socials } from "../../components/ui/Buttons/index";
import { copyToClipBoard, runTimer } from "../../components/helpers";

// Styled components
import { Wrapper } from "../../components/styles/Page.styled";
import { CopyField } from "../../components/styles/Buttons.styled";

const Contact = () => {
  const [feedbackIsDisplayed, setFeedbackIsDisplayed] = useState(false);

  // When clicked, copy email address to system
  // clipboard and display the feedback message.
  const handleClick = (e) => {
    copyToClipBoard(e, email, setFeedbackIsDisplayed);
    runTimer(setFeedbackIsDisplayed);

    return null;
  };

  // Determine what string to display in
  // the email field.
  // If [feedbackIsDisplayed] is true, display "Copied!".
  // Otherwise, display the email and the copy symbol.
  const RenderString = () => {
    switch (feedbackIsDisplayed) {
      case true:
        return <h2>Copied!</h2>;

      default:
        return (
          <h2>
            {email} <MdContentCopy />
          </h2>
        );
    }
  };

  return (
    <Wrapper>
      <h2>Want to work with me?</h2>
      <h3>Email or reach out on social media</h3>
      <CopyField onClick={(e) => handleClick(e)}>
        <RenderString />
      </CopyField>
      <Socials />
    </Wrapper>
  );
};

export default Contact;
