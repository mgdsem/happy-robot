import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

import { flexCenter, resetButton } from 'styles/mixins';
import colors from 'styles/colors';

const noseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
`;

const noseWholeAnimation = isLeftClicked => keyframes`
0% {
  border-radius: 0;
  background-color: ${colors.black}
}
100% {
  border-radius: 50%;
  background-color: ${isLeftClicked ? colors.nosePink : colors.noseBlue};
}
`;

const noseAnimationSettings = '0.5s 4 linear alternate';

const WholesWrapper = styled.div`
  ${flexCenter};
  margin-top: 0.5rem;
  width: 2.7rem;
  justify-content: space-between;
  padding: 0.2rem;

  ${({ isNosePulsing }) =>
    isNosePulsing &&
    css`
      animation: ${noseAnimation} ${noseAnimationSettings};
    `};
`;

const NoseWhole = styled.button`
  ${resetButton};
  background-color: ${colors.black};
  width: 1rem;
  height: 1rem;

  ${({ isNosePulsing, isLeftClicked }) =>
    isNosePulsing &&
    css`
      animation: ${() => noseWholeAnimation(isLeftClicked)} ${noseAnimationSettings};
    `};
`;

const Nose = () => {
  const [isNosePulsing, setIsNosePulsing] = useState(false);
  const [isLeftClicked, setIsLeftClicked] = useState(false);

  return (
    <WholesWrapper isNosePulsing={isNosePulsing} onAnimationEnd={() => setIsNosePulsing(false)}>
      <NoseWhole
        isLeftClicked={isLeftClicked}
        disabled={isNosePulsing}
        isNosePulsing={isNosePulsing}
        onClick={() => {
          setIsNosePulsing(true);
          setIsLeftClicked(true);
        }}
      />
      <NoseWhole
        isNosePulsing={isNosePulsing}
        disabled={isNosePulsing}
        onClick={() => {
          setIsNosePulsing(true);
          setIsLeftClicked(false);
        }}
        isLeftClicked={isLeftClicked}
      />
    </WholesWrapper>
  );
};

export default Nose;
