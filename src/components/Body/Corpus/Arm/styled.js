import styled, { css } from 'styled-components';

import { flexCenter, resetButton } from 'styles/mixins';
import colors from 'styles/colors';

export const ArmWrapper = styled.div`
  ${flexCenter};

  ${({ isLeft }) =>
    isLeft &&
    css`
      transform: rotateY(180deg);
    `};
`;

export const ArmPartsWrapper = styled.div`
  ${flexCenter};
  width: 15.5rem;
  height: 2rem;
  background-color: ${colors.darkGray};
  border: 0.4rem solid ${colors.darkGray};
  box-sizing: content-box;
`;

export const ArmPart = styled.div`
  width: 1.5rem;
  height: 2rem;
  background-color: ${colors.pink};

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }
`;

export const ArmRound = styled.button`
  ${resetButton};

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${colors.darkGray};
`;

export const JibMoonWrapper = styled.div`
  ${flexCenter};
  transform: rotateZ(-40deg);
  transform-origin: -10% 50%;
  height: 4rem;
  overflow-x: hidden;
`;

export const ArmJib = styled.div`
  width: 5rem;
  height: 0.5rem;
  background-color: ${colors.black};
  transform: ${({ isExpanded }) => !isExpanded && 'translateX(-5rem)'};
  transition: transform 1.5s linear;
`;

export const ArmMoon = styled.button`
  ${resetButton};
  width: 3rem;
  height: 2rem;
  border: 0.5rem solid ${colors.grey};
  border-top: 0;
  border-radius: 0 0 120px 120px / 0 0 90px 90px;
  transition: transform 1.5s linear;
  transform: ${({ isExpanded }) =>
    isExpanded ? 'rotateZ(90deg) translateY(0.5rem)' : 'rotateZ(90deg) translateY(5.5rem)'};
`;

export const Palm = styled.div`
  ${flexCenter};
`;
