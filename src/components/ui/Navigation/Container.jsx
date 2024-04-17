import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  NavbarContainer,
  NavbarMainContainer,
  NavbarLinkContainer,
  OpenLinksButton,
  NavbarExtendedContainer,
} from '../../styles/Navigation.styled';
import { internalLinks } from '../../../data/linkData';
import { NavLink } from '.';

// Redux
import { setNavMenuIsOpen } from '../../../features/ui/uiSlice';

function Container({ stuck }) {
  const dispatch = useDispatch();
  const { navMenuIsOpen } = useSelector((state) => state.ui);

  // This dispatch is used several times in this component,
  // so a function was created in case a change needs to be made
  const extendNavbar = () => dispatch(setNavMenuIsOpen());

  const RenderLinks = ({ extended = false }) =>
    internalLinks.map((link, index) => (
      <NavLink key={index} link={link} extended={extended} menu='true' stuck={stuck} onClick={() => extendNavbar()} />
    ));

  return (
    <NavbarContainer extendNavbar={navMenuIsOpen}>
      <NavbarMainContainer>
        <NavbarLinkContainer>
          <RenderLinks />
          <OpenLinksButton onClick={() => extendNavbar()}>
            {navMenuIsOpen ? <h5>&#10005;</h5> : <h5>&#8801;</h5>}
          </OpenLinksButton>
        </NavbarLinkContainer>
      </NavbarMainContainer>
      {navMenuIsOpen ? (
        <NavbarExtendedContainer>
          <RenderLinks extended />
        </NavbarExtendedContainer>
      ) : null}
    </NavbarContainer>
  );
}

export default Container;
