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
    border-bottom: 4px solid ${({ theme }) => theme.accent};
    padding-bottom: 4px;
  }

  p {
    font-size: clamp(16px, 18px, 22px);
    text-align: left;
    margin: 10px 30px;
    max-width: 600px;
  }
`;
