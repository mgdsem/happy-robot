import React, { useState } from 'react';

import {
  HeadBase,
  EyesWrapper,
  NoseWrapper,
  SmileWrapper,
  HeadWrapper,
  EarWrapper,
  BrowsWrapper,
  NeckWrapper,
} from './styled';
import Nose from './Nose/Nose';
import Eyes from './Eyes/Eyes';
import Brows from './Brows/Brows';
import Smile from './Smile/Smile';
import { LeftEar, RightEar } from './Ear/Ear';
import Neck from './Neck/Neck';

const Head = () => {
  const [isEarWaving, setIsEarWaving] = useState(false);
  console.log(isEarWaving);

  return (
    <div>
      <BrowsWrapper>
        <Brows />
      </BrowsWrapper>

      <HeadWrapper>
        <EarWrapper>
          <LeftEar isEarWaving={isEarWaving} setIsEarWaving={setIsEarWaving} />
        </EarWrapper>

        <HeadBase>
          <EyesWrapper>
            <Eyes />
          </EyesWrapper>
          <NoseWrapper>
            <Nose />
          </NoseWrapper>
          <SmileWrapper>
            <Smile />
          </SmileWrapper>
        </HeadBase>

        <EarWrapper>
          <RightEar isEarWaving={isEarWaving} setIsEarWaving={setIsEarWaving} />
        </EarWrapper>
      </HeadWrapper>

      <NeckWrapper>
        <Neck />
      </NeckWrapper>
    </div>
  );
};

export default Head;
