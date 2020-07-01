import React from 'react';

import {
  Container,
  Icons,
  MicrophoneIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './styles';
import User from '../User';

const UserInfo: React.FC= () => {
  return (
    <Container>
      <User userTag='#D469' nickname='Julius Mowes' />
      <Icons>
        <MicrophoneIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
