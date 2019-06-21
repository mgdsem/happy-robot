import React from 'react';
import styled from 'styled-components';

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

export default Robot;
