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

  img {
    width: 70%;
    aspect-ratio: 16/9;
    bottom: 0;
    border: 2px solid lightgray;
    border-bottom: none;
    border-radius: 5px 5px 0 0;
  }
`;

export const TechCont = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Tech = styled.p`
  font-size: medium;
  padding: 5px;
  color: ${dark};
  @media (max-width: ${mobileWidthLimit}) {
    display: none;
  }
`;

export const CardLinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 10px;
`;

export const CardTop = styled.div`
  display: flex;
  border: 1px solid red;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
`;

export const Description = styled.p`
  font-style: italic;
  color: ${dark};
`;
