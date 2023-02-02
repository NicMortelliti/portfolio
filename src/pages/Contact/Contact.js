import React, { useEffect, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { email } from "../../data/bioData";
import { copyToClipBoard } from "../../components/helpers";

// Styled components
import { Wrapper } from "../../components/styles/Page.styled";

const Contact = () => {
  const [feedbackIsDisplayed, setFeedbackIsDisplayed] = useState(false);

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
      <button
        className="contact"
        onClick={(e) => copyToClipBoard(e, email, setFeedbackIsDisplayed)}>
        {feedbackIsDisplayed ? (
          <h2>Copied!</h2>
        ) : (
          <h2>
            {email} <MdContentCopy />
          </h2>
        )}
      </button>
    </Wrapper>
  );
};

export default Contact;
