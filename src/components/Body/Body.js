import React from 'react';

import styled from 'styled-components';

import { flexCenter } from 'styles/mixins';
import colors from 'styles/colors';

import Corpus from './Corpus/Corpus';
import Legs from './Corpus/Legs/Legs';

const BodyLegsWrapper = styled.div`
  ${flexCenter};
`;

const Body = ({ setBodyColor }) => (
  <div>
    <Corpus setBodyColor={setBodyColor} />
    <BodyLegsWrapper>
      <Legs />
    </BodyLegsWrapper>
  </div>
);

export default Body;
