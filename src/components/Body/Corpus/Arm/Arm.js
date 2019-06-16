import React, { useState } from 'react';

import PropTypes from 'prop-types';

import {
  ArmWrapper,
  ArmPartsWrapper,
  ArmPart,
  ArmRound,
  ArmJib,
  ArmMoon,
  Palm,
  JibMoonWrapper,
} from './styled';

const Arm = ({ isLeft }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [isPalmRotatable, setIsPalmRotatable] = useState(false);

  const allowRotation = () => {
    if (isExpanded) {
      setIsPalmRotatable(true);
    }
  };

  const toggleIsExpanded = () => {
    if (isExpanded) {
      setIsPalmRotatable(false);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <ArmWrapper isLeft={isLeft}>
      <ArmPartsWrapper>
        <ArmPart />
        <ArmPart />
        <ArmPart />
        <ArmPart />
        <ArmPart />
        <ArmPart />
        <ArmPart />
        <ArmPart />
      </ArmPartsWrapper>

      <Palm>
        <ArmRound
          onClick={() => setIsRotating(true)}
          disabled={!isPalmRotatable}
          isRotating={isRotating}
        />
        <JibMoonWrapper isRotating={isRotating} onAnimationEnd={() => setIsRotating(false)}>
          <ArmJib isExpanded={isExpanded} />
          <ArmMoon
            isExpanded={isExpanded}
            onClick={toggleIsExpanded}
            onTransitionEnd={allowRotation}
          />
        </JibMoonWrapper>
      </Palm>
    </ArmWrapper>
  );
};

Arm.propTypes = {
  isLeft: PropTypes.bool,
};

Arm.defaultProps = {
  isLeft: false,
};

export default Arm;
