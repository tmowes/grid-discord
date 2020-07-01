import styled from 'styled-components';

import { Props } from './types';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 8px;
  background-color: ${props =>
    props.isHome ? 'var(--piktew)' : 'var(--primary)'};
  position: relative;
  transition: border-radius 0.2s, background-color 0.2s;
  &::before {
    display: ${props => (props.hasNotifications ? 'inline' : 'none')};
    width: 9px;
    height: 9px;
    border-radius: 50%;
    position: absolute;
    left: -16px;
    top: calc(50% -4.5px);
    background-color: var(--white);
    content: '';
  }
  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;
    border-radius: 12px;
    position: absolute;
    bottom: -4px;
    right: -4px;
    padding: 0 4px;
    border: 3px solid var(--quaternary);
    text-align: justify;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
    display: ${props =>
      props.mentions && props.mentions > 0 ? 'inline' : 'none'};
    content: '${props => props.mentions && props.mentions}';
  }
  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${props =>
      props.isHome ? 'var(--piktew)' : 'var(--discord)'};
  }
`;
