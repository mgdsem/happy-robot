import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { flexCenter, resetButton } from 'styles/mixins';
import colors from 'styles/colors';

import Wave from './Wave/Wave';

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

export const LeftEar = ({ isEarWaving, setIsEarWaving }) => (
  <EarWrapper>
    <Wave isEarWaving={isEarWaving} setIsEarWaving={setIsEarWaving} />
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
    <Wave isRight isEarWaving={isEarWaving} setIsEarWaving={setIsEarWaving} />
  </EarWrapper>
);

RightEar.propTypes = {
  isEarWaving: PropTypes.bool.isRequired,
  setIsEarWaving: PropTypes.func.isRequired,
};
