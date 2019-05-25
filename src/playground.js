import React from 'react';

import styled from 'styled-components';
import colors from './styles/colors';
import { flexCenter } from './styles/mixins';
import GlobalStyles from './styles/globals';

const Square = styled.div`
  ${flexCenter};

  width: ${({ styledWidth = 100 }) => `${styledWidth}px`};
  height: 100px;
  background-color: ${({ isGreen }) => (isGreen ? colors.green : colors.red)};

  &:hover {
    background-color: ${colors.blue};
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Square>placeholder</Square>
      <Square styledWidth={200} isGreen>
        placeholder
      </Square>
    </div>
  );
};

export default App;
