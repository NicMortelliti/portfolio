import styled from "styled-components";

const mobileWidthLimit = ({ theme }) => theme.mobileWidthLimit;
const accent = ({ theme }) => theme.accent;

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

export const SocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: ${mobileWidthLimit}) {
    gap: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: large;
  }

  input {
    height: 50px;
  }

  input,
  textArea {
    margin: 0.2rem 0 1.2rem;
    padding: 10px;
    font-size: large;
    font-weight: 400;
    background-color: #ffffffaa;
    backdrop-filter: blur(3px);
    border: none;

    &:focus {
      outline: 3px solid ${accent};
    }
  }
`;
