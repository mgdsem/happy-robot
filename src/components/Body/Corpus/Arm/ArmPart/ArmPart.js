import React, { useState } from 'react';

import styled from 'styled-components';
import colors from 'styles/colors';
import { randomColor } from 'helpers/math';
import { resetButton } from 'styles/mixins';

const ArmPartStyled = styled.button`
  ${resetButton};

  width: 1.5rem;
  height: 2rem;
  background-color: ${colors.pink};

  &:hover {
    background-color: ${({ color }) => color};
  }

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }
`;

const ArmPart = ({ setBodyColor }) => {
  const [color] = useState(randomColor());

  return <ArmPartStyled color={color} onClick={() => setBodyColor(color)} />;
};

export default ArmPart;
