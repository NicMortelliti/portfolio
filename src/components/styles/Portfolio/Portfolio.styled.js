import styled from "styled-components";
const accent = ({ theme }) => theme.accent;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Section = styled.section`
  box-sizing: border-box;
  position: relative;
`;

export const ProjectTitle = styled.div`
  p {
    transition: all ease-out 0.5s;
    color: transparent;
    text-shadow: 0 0 0px #e78383;
    font-size: 50px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    width: 100%;
    display: flex;
    margin: 0 0 3rem;
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
    display: flex;
    position: absolute;
    height: 50%;
    width: 100%;
    overflow: hidden;
    flex: 0 0 auto;
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
    transform: translateY(30px);
  }

  p span:last-child:before {
    transform: translateY(-70px);
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
    transform: translateY(-33px);
  }
`;
