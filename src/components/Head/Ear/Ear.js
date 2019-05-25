import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { flexCenter, resetButton } from 'styles/mixins';
import colors from 'styles/colors';

const EarWrapper = styled.div`
  ${flexCenter};
  width: 27rem;
`;

const Rectangle = styled.div`
  width: 3rem;
  height: 10rem;
  background-color: ${colors.lightBlue};
`;

const TriangleLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 3rem solid transparent;
  border-bottom: 3rem solid transparent;
  border-right: 7rem solid ${colors.lightGreen};
`;

const TriangleRight = styled.div`
  width: 0;
  height: 0;
  border-top: 3rem solid transparent;
  border-bottom: 3rem solid transparent;
  border-left: 7rem solid ${colors.lightGreen};
`;

const Circle = styled.button`
  ${resetButton};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${colors.darkGray};

  &:disabled {
    cursor: default;
    background-color: ${colors.black};
  }
`;

const WavesWrapper = styled.div`
  position: relative;
  width: 15rem;
  height: 20rem;

  transform: ${({ isRight }) => isRight && 'rotateY(180deg)'};
`;

const Wave = styled.div`
  position: absolute;
  top: 50%;
  right: -3rem;
  width: 10rem;
  height: 3rem;
  opacity: 0;
  border-bottom: 0.5rem solid #222;
  border-radius: 0 0 50px 50px / 0 0 20px 20px;
  transform: translateY(-50%) rotateZ(90deg);

  ${({ isEarWaving }) =>
    isEarWaving &&
    css`
      animation: waving 2s linear;
      animation-delay: ${({ animationDelay }) => animationDelay};
      animation-iteration-count: 3;
    `};

  @keyframes waving {
    0% {
      right: -3rem;
      opacity: 1;
      transform: translateY(-50%) rotateZ(90deg) scale(0.8);
    }
    100% {
      right: 9rem;
      opacity: 0;
      transform: translateY(-50%) rotateZ(90deg) scale(1.5);
    }
  }
`;

export const LeftEar = ({ isEarWaving, setIsEarWaving }) => (
  <EarWrapper>
    <WavesWrapper>
      <Wave isEarWaving={isEarWaving} />
      <Wave isEarWaving={isEarWaving} animationDelay="1s" />
      <Wave
        isEarWaving={isEarWaving}
        animationDelay="2s"
        onAnimationEnd={() => setIsEarWaving(false)}
      />
    </WavesWrapper>
    <Circle disabled={isEarWaving} onClick={() => setIsEarWaving(true)} />
    <TriangleLeft />
    <Rectangle />
  </EarWrapper>
);

LeftEar.propTypes = {
  isEarWaving: PropTypes.bool.isRequired,
  setIsEarWaving: PropTypes.func.isRequired,
};

export const RightEar = ({ isEarWaving, setIsEarWaving }) => (
  <EarWrapper>
    <Rectangle />
    <TriangleRight />
    <Circle disabled={isEarWaving} onClick={() => setIsEarWaving(true)} />
    <WavesWrapper isRight>
      <Wave isEarWaving={isEarWaving} />
      <Wave isEarWaving={isEarWaving} animationDelay="1s" />
      <Wave
        isEarWaving={isEarWaving}
        animationDelay="2s"
        onAnimationEnd={() => setIsEarWaving(false)}
      />
    </WavesWrapper>
  </EarWrapper>
);

RightEar.propTypes = {
  isEarWaving: PropTypes.bool.isRequired,
  setIsEarWaving: PropTypes.func.isRequired,
};
