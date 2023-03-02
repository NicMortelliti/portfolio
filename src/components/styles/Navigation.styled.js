import styled from "styled-components";
import { internalLinks } from "../../data/linkData";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(${internalLinks.length}, 1fr);
  gap: 3rem;

  @media (max-width: 650px) or (max-height: 650px) {
    display: block;
    float: center;
    width: 100vw;
    a {
      display: ${({ menuIsOpen }) => (menuIsOpen ? "block" : "none")};
    }
  }
`;

export const MenuIconWrapper = styled.div`
  display: none;

  @media (max-width: 650px) or (max-height: 650px) {
    display: block;
    place-content: center;
    font-size: 2rem;
    line-height: 3rem;
  }
`;
