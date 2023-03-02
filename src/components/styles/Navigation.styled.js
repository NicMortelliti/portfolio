import styled from "styled-components";
import { internalLinks } from "../../data/linkData";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(${internalLinks.length}, 1fr);
  gap: 3rem;

  #hamburger {
    display: none;
  }

  @media (max-width: 650px) or (max-height: 650px) {
    display: block;
    float: right;

    #hamburger {
      display: flex;
    }
  }
`;
