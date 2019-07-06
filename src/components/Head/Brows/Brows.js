import React from 'react';
import styled from 'styled-components';

import { flexCenter } from 'styles/mixins';

import Line from './Line/Line';

const LineWrapper = styled.div`
  ${flexCenter};
  justify-content: space-between;
  width: 25rem;
  margin-top: 7rem;
  padding: 0 2.5rem;
`;

const Brows = () => (
  <LineWrapper>
    <Line />
    <Line isRight />
  </LineWrapper>
);

export default Brows;
