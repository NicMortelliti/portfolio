import styled from "styled-components";
import { borderThickness } from "../Buttons.styled";
const accent = ({ theme }) => theme.accent;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Section = styled.section`
  box-sizing: border-box;
  position: relative;
`;

export const ProjectTitleList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const ProjectTitle = styled.article`
  display: flex;
  width: 100%;

  p {
    transition: all ease-out 0.5s;
    color: transparent;
    text-shadow: 0 0 0px #e78383;
    font-size: 8.5vw;
    /* padding: 0 2rem; */
    overflow: hidden;
    display: block;
    position: relative;
    cursor: pointer;
  }

  /* Laser beam */
  p:before {
    content: "";
    width: 50%;
    position: absolute;
    border-bottom: solid 8px ${accent};
    left: -50%;
    top: 35px;
    transition: transform 0.5s cubic-bezier(1, 0.04, 0, 1.16);
  }

  p span {
    display: block;
    position: absolute;
    height: 50%;
    width: 100%;
    overflow: hidden;
  }

  p span:first-child:before,
  p span:last-child:before {
    content: ${({ text }) => `"${text}"`};
    color: ${accent};
    display: block;
    transition: ease-out all 0.3s -0.1s;
  }

  /* Top span */
  p span:first-child {
    top: 0;
  }

  /* Bottom span */
  p span:last-child {
    bottom: 0;
  }

  p span:first-child:before {
    transform: translateY(8.5vw);
  }

  p span:last-child:before {
    transform: translateY(-12vw);
  }

  p:hover {
    transition: all ease-out 0s;
    text-shadow: none;
  }

  p:hover:before {
    transform: translateX(100vw);
  }

  p:hover span:first-child:before,
  p:hover span:last-child:before {
    transition: ease-out all 0.3s;
    transition-delay: 0.3s;
  }

  /* Top span hover */
  p:hover span:first-child:before {
    transform: translateY(0);
  }

  /* Bottom span hover */
  p:hover span:last-child:before {
    transform: translateY(-5.6vw);
  }
`;
