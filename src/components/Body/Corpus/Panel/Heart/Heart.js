import React, { useState } from 'react';
import styled from 'styled-components';

import { flexCenter, resetButton } from 'styles/mixins';
import colors from 'styles/colors';

const Wrapper = styled.div`
  ${flexCenter};

  margin-top: 3rem;
  position: relative;
`;

const emotions = {
  happy: 'happy',
  rude: 'rude',
  sad: 'sad',
  angry: 'angry',
};

// const generateRotation = (currentEmo => {
//   switch (currentEmo) {
//     case emotions.happy:
//       return null;
//     case emotions.rude:
//       return 'rotateZ(90deg)';
//     case emotions.sad:
//       return 'rotateZ(180deg)';
//     case emotions.angry:
//       return 'rotateZ(270deg)';
//     default:
//       return null;
//   };
// };

const generateRotation = currentEmo => {
  if (currentEmo === emotions.happy) {
    return null;
  }
  if (currentEmo === emotions.rude) {
    return 'rotateZ(90deg)';
  }
  if (currentEmo === emotions.sad) {
    return 'rotateZ(180deg)';
  }
  if (currentEmo === emotions.angry) {
    return 'rotateZ(270deg)';
  }
};

const SwitchWrapper = styled.div`
  position: relative;
  transform: ${({ currentEmo }) => generateRotation(currentEmo)};
  transition: transform 1s ease-in-out;
`;

const Switch = styled.div`
  width: 13rem;
  height: 13rem;
  background-color: ${colors.lightBlue};
  border-radius: 50%;
  border: 0.5rem double ${colors.black};
`;

const Pointer = styled.div`
  width: 0.5rem;
  height: 2rem;
  background-color: ${colors.black};
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

const EmoLabelsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 13rem;
  height: 13rem;
`;

const EmoLabel = styled.p`
  position: absolute;
  font-family: 'Varela Round', sans-serif;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  transform: ${({ axis }) => `translate${axis}(-50%)`};
`;

const HeartWrapper = styled.div`
  ${flexCenter};
  position: absolute;
`;

const HeartCore = styled.button`
  ${resetButton};

  position: relative;
  background-color: ${colors.black};
  height: 3rem;
  transform: rotate(-45deg);
  width: 3rem;

  &::before,
  &::after {
    content: '';
    background-color: ${colors.black};
    border-radius: 50%;
    height: 3rem;
    position: absolute;
    width: 3rem;
  }

  &::before {
    top: -1.5rem;
    left: 0;
  }
  &::after {
    top: 0;
    left: 1.5rem;
    right: 2rem;
  }
`;

const Heart = () => {
  const [currentEmo, setCurrentEmo] = useState(emotions.happy);

  const generateNewEmo = () => {
    switch (currentEmo) {
      case emotions.happy:
        return emotions.rude;
      case emotions.rude:
        return emotions.sad;
      case emotions.sad:
        return emotions.angry;
      case emotions.angry:
        return emotions.happy;
      default:
        return emotions.happy;
    }
  };

  console.log(currentEmo);
  return (
    <Wrapper>
      <SwitchWrapper currentEmo={currentEmo}>
        <Switch />
        <Pointer />
      </SwitchWrapper>
      <EmoLabelsWrapper>
        <EmoLabel bottom="105%" left="50%" axis="X">
          HAPPY
        </EmoLabel>
        <EmoLabel top="50%" left="105%" axis="Y">
          RUDE
        </EmoLabel>
        <EmoLabel top="105%" left="50%" axis="X">
          SAD
        </EmoLabel>
        <EmoLabel top="50%" right="105%" axis="Y">
          ANGRY
        </EmoLabel>
      </EmoLabelsWrapper>

      <HeartWrapper>
        <HeartCore onClick={() => setCurrentEmo(generateNewEmo())} />
      </HeartWrapper>
    </Wrapper>
  );
};

export default Heart;
