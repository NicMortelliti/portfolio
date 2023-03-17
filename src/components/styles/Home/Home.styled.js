import styled from "styled-components";

const accent = ({ theme }) => theme.accent;
const mobileWidthLimit = ({ theme }) => theme.mobileWidthLimit;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  padding: 1rem;
  gap: 1rem;
  img {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 20rem;
  }

  div > h1 {
    font-size: clamp(30px, 6vw, 10vw);
    border: none;
  }

  h2 {
    text-align: center;
    font-style: italic;
    margin: 40px 0;
  }

  p {
    text-align: center;
    font-size: 1rem;
  }

  @media (max-width: ${mobileWidthLimit}) {
    img {
      display: none;
    }
  }
`;

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

export const Brief = styled.p`
  text-align: right;
`;
