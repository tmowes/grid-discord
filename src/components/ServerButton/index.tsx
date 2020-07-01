import React from 'react';

import Logo from '../../assets/logo.svg';

import { Button } from './styles';
import { Props } from './types';

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      className={selected ? 'active' : ''}
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}>
      {isHome && <img src={Logo} alt='Logo' />}
    </Button>
  );
};

export default ServerButton;
