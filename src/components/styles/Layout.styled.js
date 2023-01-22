import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr auto;
  min-height: 100vh;
  grid-template-areas:
    "content nav"
    "content .";

  .nav {
    grid-area: nav;
    display: flex;
    align-items: center;
    height: 100vh;
  }

  .content {
    grid-area: content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
