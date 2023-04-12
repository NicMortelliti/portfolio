import styled from "styled-components";

const dark = ({ theme }) => theme.dark;
const accent = ({ theme }) => theme.accent;
const mobileWidthLimit = ({ theme }) => theme.mobileWidthLimit;

export const Card = styled.div`
  background-color: white;
  width: 80vw;
  max-width: 750px;
  aspect-ratio: 16 /9;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${accent};
  border-radius: 5px;

  img {
    width: 70%;
    aspect-ratio: 16/9;
    bottom: 0;
    border: 0 solid transparent;
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 10px rgb(0 0 0 / 1);
  }

  transition: transform 0.2s ease;
  :hover {
    transform: scale(1.01);
  }
`;

export const TechCont = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Tech = styled.p`
  font-size: medium;
  padding: 5px;
  color: darkgray;
  ::after {
    content: " |";
    color: ${accent};
  }
  :last-child::after {
    content: "";
  }
  @media (max-width: ${mobileWidthLimit}) {
    display: none;
  }
`;

export const CardTop = styled.div`
  display: flex;
  width: 100%;
`;

export const CardFlex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  flex: ${({ flex }) => flex || "none"};
  justify-content: ${({ justify }) => justify || "space-between"};
  align-items: ${({ align }) => align || "initial"};
  padding: 0 5px;
`;

export const CardLink = styled.a`
  padding-left: 20px;
  color: darkgray;
`;

export const Description = styled.p`
  font-style: italic;
  color: ${dark};
`;
