import styled from "styled-components";

const mobileWidthLimit = ({ theme }) => theme.mobileWidthLimit;
const accent = ({ theme }) => theme.accent;
const color = ({ theme }) => theme.color;
const light = ({ theme }) => theme.light;
const dark = ({ theme }) => theme.dark;

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
    color: ${color};
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
    background-color: ${light};
    backdrop-filter: blur(3px);
    border: 1px solid ${dark};

    &:focus {
      outline: 3px solid ${accent};
    }
  }

  div {
    border-bottom: 2px solid ${accent};
  }
`;

export const ContactConfirmationCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${accent};
  padding: 3rem;
  gap: 1rem;
`;
