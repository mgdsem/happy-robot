import React, { useState } from 'react';
import styled from 'styled-components';

import { flexCenter, resetButton } from 'styles/mixins';
import colors from 'styles/colors';

const Curve = styled.button`
  ${resetButton};
  width: 10rem;
  height: 3rem;
  border: 0.5rem solid ${colors.grey};
  border-top: 0;
  border-radius: 0 0 120px 120px / 0 0 90px 90px;
  transform: ${({ isRotated }) => isRotated && 'rotateX(180deg)'};
  transition: transform 0.3s ease;
`;

const CurveWrapper = styled.div`
  ${flexCenter};
  width: 10rem;
  height: 3rem;
  margin-top: 2rem;
`;

const Smile = () => {
  const [isRotated, setIsRotated] = useState(false);

  return (
    <CurveWrapper>
      <Curve isRotated={isRotated} onClick={() => setIsRotated(!isRotated)} />
    </CurveWrapper>
  );
};

export default Smile;
