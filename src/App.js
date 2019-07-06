import React, { useState } from 'react';

import colors from 'styles/colors';

import GlobalStyles from './styles/globals';
import Robot from './components/Robot';

const App = () => {
  const [bodyColor, setBodyColor] = useState(colors.white);

  return (
    <div>
      <GlobalStyles bodyColor={bodyColor} />
      <Robot setBodyColor={setBodyColor} />
    </div>
  );
};

export default App;
