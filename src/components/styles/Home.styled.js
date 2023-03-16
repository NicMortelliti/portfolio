import styled from "styled-components";

const accent = ({ theme }) => theme.accent;
const light = ({ theme }) => theme.light;

export const Tagline = styled.h2`
  font-style: italic;
  color: ${accent};
`;

export const Title = styled.h3`
  color: ${light};
  text-align: center;
`;

export const Symbol = styled.h3`
  color: ${accent};
  text-align: center;
`;
