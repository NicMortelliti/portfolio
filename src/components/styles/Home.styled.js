import styled from "styled-components";

const accent = ({ theme }) => theme.accent;
const color = ({ theme }) => theme.color;

export const Tagline = styled.h2`
  font-style: italic;
  color: ${accent};
`;

export const Title = styled.h3`
  color: ${color};
  text-align: center;
`;

export const Symbol = styled.h3`
  color: ${accent};
  text-align: center;
`;
