import React from 'react';

import {
  Container,
  Avatar,
  Message,
  Header,
  Author,
  MessageDate,
  Content,
} from './styles';
import { Props } from './types';
export { Mention } from './styles';

const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  hasMention,
  role,
}) => {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      <Avatar className={role === 'BOT' ? 'bot' : ''} />
      <Message>
        <Header>
          <Author role={role}>{author}</Author>
          <MessageDate>{date}</MessageDate>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  );
};

export default ChannelMessage;

// roles color change var(--role-color) with props
