import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr auto;
  min-height: 100vh;
  grid-template-areas:
    "content nav"
    "content nav";

  .nav {
    grid-area: nav;
    display: flex;
    align-items: center;
    min-height: 100vh;

    border: 1px solid yellow;
  }

  .content {
    grid-area: content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid blue;
  }
`;
