import styled from "styled-components";

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
  justify-content: end;
  color: ${accent};

  img {
    width: 70%;
    aspect-ratio: 16/9;
    bottom: 0;
  }
`;

export const Tech = styled.p`
  padding: 0 40px;
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
`;
