import styled, { css, keyframes } from 'styled-components';

import { flexCenter, resetButton } from 'styles/mixins';
import colors from 'styles/colors';

// const rotating = keyframes`
//   0% {
//     transform: rotate(0);
//   }
//   50% {
//     transform: rotate(90deg);
//   }
//   100% {
//     transform: rotate(180deg);
//   }
// `;

const rotating = keyframes`
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

export const LegsWrapper = styled.div`
  ${flexCenter};
  justify-content: space-between;

  width: 20rem;
`;

export const LegWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;

  ${({ isRotating }) =>
    isRotating &&
    css`
      animation: ${rotating} 2s 1 ease-in-out;
      ${({ isLeftClicked }) => isLeftClicked && 'animation-direction: reverse'}
    `}
`;

export const LegPart = styled.div`
  width: 3rem;
  height: 5rem;
  border-radius: 40%;
  background-color: ${colors.darkGray};
  border: 0.2rem solid ${colors.black};
`;

export const LegRound = styled.button`
  ${resetButton};

  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${colors.pink};
  border: 0.3rem solid ${colors.black};
`;
