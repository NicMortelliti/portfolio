import styled from "styled-components";

const mobileWidthLimit = ({ theme }) => theme.mobileWidthLimit;
const color = ({ theme }) => theme.color;
const bgColor = ({ theme }) => theme.bgColor;

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: none;
  display: flex;
  flex-direction: column;

  @media (min-width: ${mobileWidthLimit}) {
    height: 80px;
  }
`;

export const NavbarMainContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 80px;
  background: none;
  border: none;
  color: ${color};
  font-size: 45px;
  cursor: pointer;

  @media (min-width: ${mobileWidthLimit}) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${bgColor};

  @media (min-width: ${mobileWidthLimit}) {
    display: none;
  }
`;
