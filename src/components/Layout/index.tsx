import React from 'react';

import { Grid } from './styles';
import ServerList from '../ServerList';
import SeverName from '../SeverName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <SeverName />
      <ChannelList />
      <ChannelInfo />
      <UserInfo />
      <UserList />
    </Grid>
  );
};

export default Layout;
