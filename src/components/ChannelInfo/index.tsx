import React from 'react';

import {
  Container,
  Title,
  Description,
  Separator,
  HashtagIcon,
} from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>chat-geral</Title>
      <Separator />
      <Description>Canal aberto para conversas</Description>
    </Container>
  );
};

export default ChannelInfo;
