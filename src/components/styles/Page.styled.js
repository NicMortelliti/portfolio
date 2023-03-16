import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;

  h1 {
    border-bottom: 4px solid ${({ theme }) => theme.accent};
    padding-bottom: 4px;
  }

`;
