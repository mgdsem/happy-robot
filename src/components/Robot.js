import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Head from './Head/Head';
import Body from './Body/Body';

const RobotWrapper = styled.div`
  display: block;
`;

const Robot = ({ setBodyColor }) => (
  <RobotWrapper>
    <Head />
    <Body setBodyColor={setBodyColor} />
  </RobotWrapper>
);

Robot.propTypes = { setBodyColor: PropTypes.func.isRequired };

export default Robot;
