import styled from 'styled-components';
import { AlternateEmail } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CD;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 12px 0 16px;
  background-color: var(--primary);
`;

export const Messages = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 46px - 68px);
  /* max-height: calc(100vh - 114px); */
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  /* padding: 0 12px; */
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 16px 0 32px;
  border-radius: 8px;
  background-color: var(--chat-input);
  font-size: 16px;
  color: var(--white);
  position: relative;
  &::placeholder {
    color: var(--gray);
  }
  ~ svg {
    position: relative;
    top: -50%;
    left: 8px;
    transition: 180ms ease-in-out;
  }
`;
export const InputIcon = styled(AlternateEmail)`
  width: 22px;
  color: var(--gray);
`;
