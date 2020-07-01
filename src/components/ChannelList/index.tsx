import React from 'react';

import { Container, Category, Title, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <Title>Canais de texto</Title>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName='chat-geral' />
      <ChannelButton channelName='trabalho' />
      <ChannelButton channelName='code' selected />
      <ChannelButton channelName='lives' />
      <ChannelButton channelName='english-only' />
      <ChannelButton channelName='ajuda' />
    </Container>
  );
};

export default ChannelList;
