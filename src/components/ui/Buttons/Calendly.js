import React from 'react';
import { InlineWidget } from 'react-calendly';
import { calendlyLink } from '../../../data/linkData';

const Calendly = () => {
  return (
    <div style={{ border: '1px solid black' }}>
      <InlineWidget url={calendlyLink} />
    </div>
  );
};

export default Calendly;
