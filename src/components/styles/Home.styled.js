import styled from "styled-components";

const accent = ({ theme }) => theme.accent;

export const Tagline = styled.h2`
  font-style: italic;
  color: ${accent};
`;

export const Title = styled.div`
  text-align: center;

  /* Add a bullet point between titles */
  h3:not(:last-child)::after {
    color: ${accent};
    white-space: pre;
    content: "\\a\\25cf\\a";
  }
`;
