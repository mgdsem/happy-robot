import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import { flexCenter } from 'styles/mixins';

import Corpus from './Corpus/Panel/Corpus/Corpus';
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

Body.propTypes = { setBodyColor: PropTypes.func.isRequired };

export default Body;
