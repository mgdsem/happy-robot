// TODO: make refactor to rotate the whole arm component;

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { flexCenter, resetButton } from 'styles/mixins';
import colors from 'styles/colors';

const ArmPartsWrapper = styled.div`
  ${flexCenter};
  width: 15.5rem;
  height: 2rem;
  background-color: ${colors.darkGray};
  border: 0.4rem solid ${colors.darkGray};
  box-sizing: content-box;
  ${({ isLeft }) =>
    isLeft &&
    css`
      transform: rotateY(180deg);
    `};
`;

const ArmWrapper = styled.div`
  ${flexCenter};
`;

const ArmPart = styled.div`
  width: 1.5rem;
  height: 2rem;
  background-color: ${colors.pink};

  ${({ isLast }) =>
    !isLast &&
    css`
      margin-right: 0.5rem;
    `}
`;

const ArmRound = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${colors.darkGray};
`;
const ArmMoon = styled.button`
  ${resetButton};
  width: 3rem;
  height: 2rem;
  border: 0.5rem solid ${colors.grey};
  border-top: 0;
  border-radius: 0 0 120px 120px / 0 0 90px 90px;
  transform: ${({ isLeft }) =>
    isLeft
      ? 'rotateZ(-40deg) translate(2rem, -0.3rem)'
      : 'rotateZ(40deg) translate(-2rem, -0.3rem)'};
`;

const Arm = ({ isLeft }) => (
  <ArmWrapper>
    {isLeft && <ArmMoon isLeft />}
    {isLeft && <ArmRound />}
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
    {!isLeft && <ArmRound />}
    {!isLeft && <ArmMoon />}
  </ArmWrapper>
);

Arm.propTypes = {
  isLeft: PropTypes.bool,
};

Arm.defaultProps = {
  isLeft: false,
};

export default Arm;
