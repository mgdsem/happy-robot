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
  const [isPalmActive, setIsPalmActive] = useState(false);

  console.log(isPalmActive);
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
        <ArmRound onClick={() => setIsPalmActive(!isPalmActive)} />
        <JibMoonWrapper>
          <ArmJib isPalmActive={isPalmActive} />
          <ArmMoon isPalmActive={isPalmActive} />
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
