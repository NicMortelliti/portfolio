import styled from "styled-components";

const color = ({ theme }) => theme.color;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 10%;

  gap: 2rem;

  .contact {
    cursor: pointer;
    border: 0.13rem solid ${color};
    border-top: none;
    background-color: transparent;
    padding-bottom: 0.5rem;
    width: 26ch;
    line-height: 1.5;
  }
`;
