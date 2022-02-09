import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  /* margin: -16px; */
`;

const ShoeWrapper = styled.div`
  min-width: 275px;
  /* margin: 16px;  for older browsers instead of gap but we should give margin -16 to parent also */
  flex: 1;
`;

export default ShoeGrid;
