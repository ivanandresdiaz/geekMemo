import React, { useState } from 'react';
import { SmallContainer } from './styledSmall';

const Small = ({ value, show }) => {

  return (
    <SmallContainer display={show ? 'inline' : 'none'}>
      {value}
    </SmallContainer>
  );
};

export default Small;
