import React from 'react';

import { Container, Avatar, UserName } from './styles';
import { Props } from './types';

const User: React.FC<Props> = ({ userTag, nickname, role }) => {
  return (
    <Container>
      <Avatar className={role === 'BOT' ? 'bot' : ''} />
      <UserName userTag={userTag} nickname={nickname} role={role} />
    </Container>
  );
};

export default User;
