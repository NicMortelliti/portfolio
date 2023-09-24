import React from 'react';
import { InlineWidget } from 'react-calendly';
import { calendlyLink } from '../../../data/linkData';

const Calendly = () => {
  return <InlineWidget url={calendlyLink} />;
};

export default Calendly;
