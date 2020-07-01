import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  UserName,
  UserTag,
  Icons,
  MicrophoneIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <UserName>Julius Mowes</UserName>
          <UserTag>#D469</UserTag>
        </UserData>
      </Profile>
      <Icons>
        <MicrophoneIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
