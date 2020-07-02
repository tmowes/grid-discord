import React from 'react';

import { Container, Role } from './styles';
import User from '../User';

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <User nickname='Julius Mowes' />
      <Role>Offline - 18</Role>
      <User nickname='Patrick Pegoretti' role='BOT' />
      <User nickname='Random Mowes' />
      <User nickname='Random Fulano'/>
      <User nickname='Arrow Pegoretti'/>
      <User nickname='Patrick Pegoretti' role='BOT' />
      <User nickname='Random Mowes' />
      <User nickname='Random Fulano'/>
      <User nickname='Arrow Pegoretti'/>
      <User nickname='Patrick Pegoretti' role='BOT' />
      <User nickname='Random Mowes' />
      <User nickname='Random Fulano'/>
      <User nickname='Arrow Pegoretti'/>
      <User nickname='Patrick Pegoretti' role='BOT' />
      <User nickname='Random Mowes' />
      <User nickname='Random Fulano'/>
      <User nickname='Arrow Pegoretti'/>
      <User nickname='Patrick Pegoretti' role='BOT' />
      <User nickname='Random Mowes' />
      <User nickname='Random Fulano'/>
      <User nickname='Arrow Pegoretti'/>
      <User nickname='Patrick Pegoretti' role='BOT' />
      <User nickname='Random Mowes' />
      <User nickname='Random Fulano'/>
      <User nickname='Arrow Pegoretti'/>
    </Container>
  );
};

export default UserList;
