import styled from "styled-components";

const dark = ({ theme }) => theme.dark;
const accent = ({ theme }) => theme.accent;
const mobileWidthLimit = ({ theme }) => theme.mobileWidthLimit;

export const Card = styled.div`
  background-color: transparent;
  width: 80vw;
  height: 50vw;
  overflow: hidden;
`;

export const Tech = styled.p`
  padding: 0 40px;
  @media (max-width: ${mobileWidthLimit}) {
    display: none;
  }
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #bbb;
  color: black;

  img {
    width: 100%;
    height: auto;
    opacity: 0.3;
  }

  h1 {
    position: absolute;
    padding: 10px;
    background-color: ${accent};
    box-shadow: 0 0 10px black;
    @media (max-width: ${mobileWidthLimit}) {
      font-size: 20px;
    }
  }
`;

export const CardBack = styled(CardFront)`
  background-color: ${accent};
  color: ${dark};
  transform: rotateY(180deg);

  h1 {
    position: initial;
    background-color: transparent;
    box-shadow: none;
  }
`;

export const CardLinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 10px;
`;
