import styled from "styled-components";

const color = ({ theme }) => theme.color;

export const ProjectCard = styled.div`
  overflow: hidden;
`;

export const ProjectContent = styled.div`
  position: relative;
  top: -500px;
  p {
    color: ${color};
    margin: 10px 0 0 20px;
    font-size: 18px;
  }

  img {
    display: block;
    margin: 20px auto 0 20px;
    width: 60%;
    height: auto;
    position: relative;
  }
`;

export const DescriptionCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img``;
