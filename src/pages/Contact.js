import React, { useEffect, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { Wrapper } from "../components/styles/Page.styled";

const Contact = () => {
  const [feedbackIsDisplayed, setFeedbackIsDisplayed] = useState(false);

  const email = "nic@nicweb.dev";

  const handleClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setFeedbackIsDisplayed(true);
  };

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
    </Wrapper>
  );
};

export default Contact;
