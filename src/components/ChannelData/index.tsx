import React from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage,{Mention} from '../ChannelMessage';

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          author='Julius Mowes'
          date='01/07/2020'
          content={
            <>
              <Mention>@Patrick Pegoretti</Mention>, 
              'Hoje ventou pakas'
            </>
          }
          hasMention
        />
        <ChannelMessage
          author='Julius Mowes'
          date='01/07/2020'
          content='Hoje ventou pakas'
          hasMention
        />
        <ChannelMessage
          author='Patrick Pegoretti'
          role='BOT'
          date='01/07/2020'
          content='Ontem tbm kkks'
        />
        <ChannelMessage
          author='Patrick Pegoretti'
          role='BOT'
          date='01/07/2020'
          content='Ontem tbm kkks'
        />
        <ChannelMessage
          author='Julius Mowes'
          date='01/07/2020'
          content={
            <>
              <Mention>@Patrick Pegoretti</Mention>, 
              'Hoje ventou pakas'
            </>
          }
          hasMention
        />
        <ChannelMessage
          author='Julius Mowes'
          date='01/07/2020'
          content='Hoje ventou pakas'
          hasMention
        />
        <ChannelMessage
          author='Patrick Pegoretti'
          role='BOT'
          date='01/07/2020'
          content='Ontem tbm kkks'
        />
        <ChannelMessage
          author='Patrick Pegoretti'
          role='BOT'
          date='01/07/2020'
          content='Ontem tbm kkks'
        />
        <ChannelMessage
          author='Julius Mowes'
          date='01/07/2020'
          content={
            <>
              <Mention>@Patrick Pegoretti</Mention>, 
              'Hoje ventou pakas'
            </>
          }
          hasMention
        />
        <ChannelMessage
          author='Julius Mowes'
          date='01/07/2020'
          content='Hoje ventou pakas'
          hasMention
        />
        <ChannelMessage
          author='Patrick Pegoretti'
          role='BOT'
          date='01/07/2020'
          content='Ontem tbm kkks'
        />
        <ChannelMessage
          author='Patrick Pegoretti'
          role='BOT'
          date='01/07/2020'
          content='Ontem tbm kkks'
        />
        <ChannelMessage
          author='Julius Mowes'
          date='01/07/2020'
          content={
            <>
              <Mention>@Patrick Pegoretti</Mention>, 
              'Hoje ventou pakas'
            </>
          }
          hasMention
        />
        <ChannelMessage
          author='Julius Mowes'
          date='01/07/2020'
          content='Hoje ventou pakas'
          hasMention
        />
        <ChannelMessage
          author='Patrick Pegoretti'
          role='BOT'
          date='01/07/2020'
          content='Ontem tbm kkks'
        />
        <ChannelMessage
          author='Patrick Pegoretti'
          role='BOT'
          date='01/07/2020'
          content='Ontem tbm kkks'
        />
      </Messages>
      <InputWrapper>
        <Input type='text' placeholder='Digite sua mensagem' />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
