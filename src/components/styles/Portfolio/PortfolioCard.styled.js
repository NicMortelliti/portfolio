import styled from "styled-components";

const dark = ({ theme }) => theme.dark;
const color = ({ theme }) => theme.color;

export const ProjectCard = styled.div`
  overflow: hidden;
`;

export const ProjectContent = styled.div`
  p {
    color: ${color};
    margin: 10px 0 0;
    font-size: 18px;
    top: -50px;
    left: 20px;
  }
`;

export const DescriptionCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img``;
