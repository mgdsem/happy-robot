import React from 'react';

import { CorpusWrapper, CorpusStyled } from './styled';
import Arm from './Arm/Arm';

const Corpus = () => (
  <CorpusWrapper>
    <Arm isLeft />
    <CorpusStyled />
    <Arm />
  </CorpusWrapper>
);

export default Corpus;
