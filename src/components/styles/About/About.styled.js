import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  margin: 0 30px;
`;

export const Picture = styled.div`
  border-radius: 50%;
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;

  & > img {
    width: auto;
    height: 100%;
    margin-left: -50px;
  }
`;
