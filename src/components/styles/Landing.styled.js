import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin: 2rem;
  padding: 1rem;
  gap: 1rem;

  max-width: 500px;

  img {
    position: fixed;
    bottom: 0;
    left: 0;
    max-width: 20rem;
  }

  .title {
    font-size: xx-large;
  }

  @media (max-width: 650px) or (max-height: 650px) {
    img {
      display: none;
    }
  }
`;

