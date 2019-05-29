import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { flexCenter } from 'styles/mixins';
import colors from 'styles/colors';

const ArmPartsWrapper = styled.div`
  ${flexCenter};
  width: 11.5rem;
  height: 2rem;
  background-color: ${colors.white};

  ${({ isLeft }) =>
    isLeft &&
    css`
      transform: rotateY(180deg);
    `};
`;

const ArmPart = styled.div`
  width: 1rem;
  height: 2rem;
  background-color: ${colors.black};

  ${({ isLast }) =>
    !isLast &&
    css`
      margin-right: 0.5rem;
    `}
`;

const Arm = ({ isLeft }) => (
  <ArmPartsWrapper isLeft={isLeft}>
    <ArmPart />
    <ArmPart />
    <ArmPart />
    <ArmPart />
    <ArmPart />
    <ArmPart />
    <ArmPart />
    <ArmPart isLast />
  </ArmPartsWrapper>
);

Arm.propTypes = {
  isLeft: PropTypes.bool.isRequired,
};

export default Arm;
