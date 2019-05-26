import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const WavesWrapper = styled.div`
  position: relative;
  width: 15rem;
  height: 20rem;

  transform: ${({ isRight }) => isRight && 'rotateY(180deg)'};
`;

const wave = keyframes`
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
`;

const WaveStyled = styled.div`
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
      animation: ${wave} 2s linear;
      animation-delay: ${({ animationDelay }) => animationDelay};
      animation-iteration-count: 3;
    `};
`;

const Wave = ({ isEarWaving, setIsEarWaving, isRight }) => (
  <WavesWrapper isRight={isRight}>
    <WaveStyled isEarWaving={isEarWaving} />
    <WaveStyled isEarWaving={isEarWaving} animationDelay="1s" />
    <WaveStyled
      isEarWaving={isEarWaving}
      animationDelay="2s"
      onAnimationEnd={() => setIsEarWaving(false)}
    />
  </WavesWrapper>
);

Wave.propTypes = {
  isEarWaving: PropTypes.bool.isRequired,
  setIsEarWaving: PropTypes.func.isRequired,
  isRight: PropTypes.bool,
};

Wave.defaultProps = {
  isRight: false,
};

export default Wave;
