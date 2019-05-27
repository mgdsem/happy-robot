import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';

import { flexCenter } from 'styles/mixins';
import colors from 'styles/colors';

const Round = styled.div`
  ${flexCenter};
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: ${colors.white};
`;

const eyesAnimation = keyframes`
  0% {
    background-color: ${colors.black};
  }
  100% {
    background-color: ${colors.red};
  }
`;

const MiniRound = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${colors.black};
  border-radius: 50%;

  ${({ isEarWaving }) =>
    isEarWaving &&
    css`
      animation: ${eyesAnimation} 0.7s infinite alternate;
    `};
`;

const Space = styled.div`
  width: 2rem;
  height: 8rem;
  background-color: transparent;
`;

const RoundWrapper = styled.div`
  ${flexCenter};
`;

const Eyes = ({ isEarWaving }) => (
  <RoundWrapper>
    <Round>
      <MiniRound isEarWaving={isEarWaving} />
    </Round>

    <Space />

    <Round>
      <MiniRound isEarWaving={isEarWaving} />
    </Round>
  </RoundWrapper>
);

Eyes.propTypes = {
  isEarWaving: PropTypes.bool.isRequired,
};

export default Eyes;
