import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: var(--quaternary);
  box-shadow: var(--shadow) 0px -1px 0 0;
  z-index: 2;
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
`;
export const Avatar = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);
`;
export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;
export const UserName = styled.strong`
  display: block;
  font-size: 14px;
  color: var(--white);
`;
export const UserTag = styled.span`
  font-size: 14px;
  color: var(--gray);
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  > svg:not(:first-child) {
    margin-left: 6px;
  }
`;
export const MicrophoneIcon = styled(Mic)`
  width: 22px;
  color: var(--white);
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;
export const HeadphoneIcon = styled(Headset)`
  width: 22px;
  color: var(--white);
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;
export const SettingsIcon = styled(Settings)`
  width: 22px;
  color: var(--white);
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;
