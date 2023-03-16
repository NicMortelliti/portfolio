import styled from "styled-components";
const mobileWidthLimit = ({ theme }) => theme.mobileWidthLimit;

export const SocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: ${mobileWidthLimit}) {
    flex-direction: column;
    gap: 0;
  }
`;
