import styled from "styled-components";

const accent = ({ theme }) => theme.accent;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  margin: 0 80px;
`;

export const Picture = styled.div`
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  border: 6px solid ${accent};

  & > img {
    width: auto;
    height: 150%;
    margin-top: -20px;
    filter: saturate(100%) contrast(110%);
  }
`;
