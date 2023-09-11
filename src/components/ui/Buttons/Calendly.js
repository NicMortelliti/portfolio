import React from 'react';
import { MdLink } from '../../styles/Buttons.styled';
import { calendlyLink } from '../../../data/linkData';

const Calendly = () => {
  return (
    <>
      <MdLink href={calendlyLink} target='_blank'>
        Calendly!
      </MdLink>
    </>
  );
};

export default Calendly;
