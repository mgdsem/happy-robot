import React from 'react';
import styled from 'styled-components';

import { flexCenter } from 'styles/mixins';
import colors from 'styles/colors';
import { randomColor } from 'helpers/math';

const NeckPart = styled.div`
  width: 100%;
  height: 1rem;
  background-color: ${colors.warmGrey};
  box-sizing: content-box;
  border: 0.2rem solid black;
  border-top-width: ${({ isFirst }) => isFirst && '0.4rem'};
  border-bottom-width: ${({ isLast }) => isLast && '0.4rem'};

  &:hover {
    background-color: ${({ color }) => color};
  }
`;

const NeckPartsWrapper = styled.div`
  ${flexCenter};
  flex-direction: column;
  height: 6rem;
  width: 4rem;
`;

const Neck = () => (
  <NeckPartsWrapper>
    <NeckPart isFirst color={randomColor()} />
    <NeckPart color={randomColor()} />
    <NeckPart color={randomColor()} />
    <NeckPart color={randomColor()} />
    <NeckPart color={randomColor()} />
    <NeckPart isLast color={randomColor()} />
  </NeckPartsWrapper>
);

export default Neck;
