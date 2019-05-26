// TODO: remove if no svg will be used

import React from 'react';
import PropTypes from 'prop-types';
import InlineSVG from 'inline-svg-react';
import styled from 'styled-components';

const SvgWrapper = styled.span`
  svg {
    width: ${({ svgWidth }) => `${svgWidth}rem`};
    height: ${({ svgHeight }) => `${svgHeight}rem`};
  }
`;

const SvgElement = ({ src, width, height }) => (
  <SvgWrapper svgWidth={width} svgHeight={height}>
    <InlineSVG icon={src} />
  </SvgWrapper>
);

SvgElement.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default SvgElement;
