import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  grid-template-areas:
    "header"
    "content"
    "footer";

  .header {
    grid-area: header;
  }

  .content {
    grid-area: content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer {
    grid-area: footer;
  }
`;
