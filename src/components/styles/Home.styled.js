import styled from "styled-components";

const accent = ({ theme }) => theme.accent;

export const Tagline = styled.h2`
  font-style: italic;
  color: ${accent};
`;
