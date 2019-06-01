import styled from 'styled-components';

import { flexCenter } from 'styles/mixins';
import colors from 'styles/colors';

export const CorpusWrapper = styled.div`
  ${flexCenter};
`;

export const CorpusStyled = styled.div`
  width: 35rem;
  height: 30rem;
  background-color: ${colors.pink};
  border-radius: 8%;
  border: 0.5rem double ${colors.black};
`;
