import React from "react";

const Contact = () => {
  const email = "nic@nicweb.dev";

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(email);
      }}>
      {email}
    </button>
  );
};

export default Contact;
