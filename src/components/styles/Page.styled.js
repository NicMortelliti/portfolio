import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;

  h1 {
    border-bottom: 4px solid;
    padding-bottom: 4px;
  }

  p {
    font-size: 1.5rem;
  }
`;