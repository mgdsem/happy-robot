import React from 'react';
import styled from 'styled-components';

import { flexCenter } from 'styles/mixins';
import colors from 'styles/colors';

const Round = styled.div`
  ${flexCenter};
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: ${colors.white};
`;

const MiniRound = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${colors.black};
  border-radius: 50%;
`;

const Space = styled.div`
  width: 2rem;
  height: 8rem;
  background-color: transparent;
`;

const RoundWrapper = styled.div`
  ${flexCenter};
`;

const Eyes = () => (
  <RoundWrapper>
    <Round>
      <MiniRound />
    </Round>

    <Space />

    <Round>
      <MiniRound />
    </Round>
  </RoundWrapper>
);

export default Eyes;
