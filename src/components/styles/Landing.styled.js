import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  padding: 1rem;
  gap: 1rem;
  img {
    position: fixed;
    bottom: 0;
    left: 0;
    max-width: 20rem;
  }

  h1 {
    font-size: 8vw;
  }

  p {
    font-size: 3vw;
  }

  @media (max-width: 650px) or (max-height: 650px) {
    img {
      display: none;
    }
  }
`;
