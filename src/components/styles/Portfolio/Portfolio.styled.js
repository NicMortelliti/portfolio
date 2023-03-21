import styled from "styled-components";
import { borderThickness } from "../Buttons.styled";
const accent = ({ theme }) => theme.accent;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100%;
`;

export const Section = styled.section`
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
`;

export const ProjectTitleList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.article`
  display: flex;
  background: #fda9a9;

  align-items: center;
  justify-content: center;
  position: relative;

  p {
    transition: all ease-out 0.5s;
    color: transparent;
    text-shadow: 0 0 0px #e78383;
    font-size: 3rem;
    padding: 0 1rem;
    overflow: hidden;
    display: block;
    position: relative;
    cursor: pointer;
  }

  p:before {
    content: "";
    width: 50%;
    position: absolute;
    border-bottom: solid 8px #fff;
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
    color: #fff;
    display: block;
    transition: ease-out all 0.3s -0.1s;
  }

  p span:first-child {
    top: 0;
  }

  p span:last-child {
    bottom: 0;
  }

  p span:first-child:before {
    transform: translateY(41px);
  }

  p span:last-child:before {
    transform: translateY(-95px);
  }

  p:hover {
    transition: all ease-out 0s;
    text-shadow: none;
  }

  p:hover:before {
    transform: translateX(42rem);
  }

  p:hover span:first-child:before,
  p:hover span:last-child:before {
    transition: ease-out all 0.3s;
    transition-delay: 0.3s;
  }

  p:hover span:first-child:before {
    transform: translateY(0);
  }

  p:hover span:last-child:before {
    transform: translateY(-28px);
  }
`;
