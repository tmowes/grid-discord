import React from 'react';

import {
  Container,
  HashtagIcon,
  Title,
  InviteIcon,
  SettingsIcon,
} from './styles';
import { Props } from './types';

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <Title>{channelName}</Title>
      </div>
      <div>
        <InviteIcon className='optional' />
        <SettingsIcon className='optional' />
      </div>
    </Container>
  );
};

export default ChannelButton;
