import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  grid-template-areas:
    "nav"
    "content";

  .nav {
    grid-area: nav;
    display: flex;
    justify-content: end;
    position: sticky;
    top: 20px;
    z-index: 999;
  }

  .content {
    grid-area: content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;
