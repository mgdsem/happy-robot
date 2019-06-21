import React from 'react';

import { CorpusWrapper, CorpusStyled } from './styled';
import Arm from './Arm/Arm';

const Corpus = ({ setBodyColor }) => (
  <CorpusWrapper>
    <Arm isLeft setBodyColor={setBodyColor} />
    <CorpusStyled />
    <Arm setBodyColor={setBodyColor} />
  </CorpusWrapper>
);

export default Corpus;
