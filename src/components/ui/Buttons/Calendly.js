import React from 'react';
import { MdLink } from '../../styles/Buttons.styled';
import { calendlyLink } from '../../../data/linkData';

const Calendly = () => {
  return (
    <>
      <MdLink href={calendlyLink} target='_blank'>
        Setup a meeting with me on Calendly!
      </MdLink>
    </>
  );
};

export default Calendly;
