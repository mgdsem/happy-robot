import React from 'react';
import PropTypes from 'prop-types';
import { CorpusWrapper, CorpusStyled } from './styled';
import Arm from '../../Arm/Arm';
import Heart from '../Heart/Heart';

const Corpus = ({ setBodyColor }) => (
  <CorpusWrapper>
    <Arm isLeft setBodyColor={setBodyColor} />
    <CorpusStyled>
      <Heart />
    </CorpusStyled>
    <Arm setBodyColor={setBodyColor} />
  </CorpusWrapper>
);

Corpus.propTypes = { setBodyColor: PropTypes.func.isRequired };

export default Corpus;
