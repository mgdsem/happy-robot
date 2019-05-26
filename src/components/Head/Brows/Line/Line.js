import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from 'styles/colors';
import { resetButton } from 'styles/mixins';

const getRotate = (isRotated, isRight) => {
  if (isRight) {
    return !isRotated ? 'rotateZ(20deg)' : 'rotateZ(-20deg)';
  }
  return !isRotated ? 'rotateZ(-20deg)' : 'rotateZ(20deg)';
};

const LineStyled = styled.button`
  ${resetButton};
  width: 5rem;
  height: 0.5rem;
  background-color: ${colors.black};
  transform: ${({ isRight, isRotated }) => getRotate(isRotated, isRight)};
  transition: transform 0.3s ease;
`;

const Line = ({ isRight }) => {
  const [isRotated, setIsRotated] = useState(false);

  return (
    <LineStyled isRight={isRight} isRotated={isRotated} onClick={() => setIsRotated(!isRotated)} />
  );
};

Line.propTypes = {
  isRight: PropTypes.bool,
};

Line.defaultProps = {
  isRight: false,
};

export default Line;
