import styled from "styled-components";

const Template = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const SocialWrapper = styled(Template)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 3rem;
`;
