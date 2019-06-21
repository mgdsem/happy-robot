import React, { useState } from 'react';

import { LegsWrapper, LegWrapper, LegPart, LegRound } from './styled';

const Leg = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [isLeftClicked, setIsLeftClicked] = useState(false);

  const setRotations = () => {
    setIsRotating(true);
    setIsLeftClicked(true);
    console.log('dziala');
  };

  console.log({ isRotating, isLeftClicked });

  const resetRotations = () => {
    setIsRotating(false);
    setIsLeftClicked(false);
  };

  return (
    <LegsWrapper>
      <LegWrapper
        isRotating={isRotating}
        onAnimationEnd={() => resetRotations()}
        isLeftClicked={isLeftClicked}
      >
        <LegPart />
        <LegRound onClick={() => setRotations()} isLeftClicked={isLeftClicked} />
        <LegPart />
      </LegWrapper>
      <LegWrapper
        isRotating={isRotating}
        onAnimationEnd={() => setIsRotating(false)}
        isLeftClicked={isLeftClicked}
      >
        <LegPart />
        <LegRound onClick={() => setIsRotating(true)} />
        <LegPart />
      </LegWrapper>
    </LegsWrapper>
  );
};

export default Leg;
