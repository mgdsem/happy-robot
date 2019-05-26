import React from 'react';
import styled from 'styled-components';

import { flexCenter } from 'styles/mixins';
import colors from 'styles/colors';

const WholesWrapper = styled.div`
  ${flexCenter};
  margin-top: 0.5rem;
  width: 2.7rem;
  justify-content: space-between;
  padding: 0.2rem;
`;

const NoseWhole = styled.div`
  background-color: ${colors.black};
  width: 1rem;
  height: 1rem;
`;

const Nose = () => (
  <WholesWrapper>
    <NoseWhole />
    <NoseWhole />
  </WholesWrapper>
);

export default Nose;
