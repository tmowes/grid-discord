import styled, { css } from 'styled-components';
import { Props } from './types';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0;
  background-color: transparent;
  transition: background-color 0.2s;
  border-radius: 16px 8px 8px 16px;
  &:hover {
    background-color: var(--hoverLight);
  }
`;
export const Avatar = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--primary);
  cursor: pointer;
  &.bot {
    background-color: var(--mention-detail);
  }
`;
export const UserName = styled.strong<Props>`
  flex-direction: column;
  margin-left: 8px;
  &::before{
  font-size: 12px;
  font-weight: 500;
  color: var(--white);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  content: '${props => props.nickname && props.nickname}';
  }
  &::after {
    ${props => {
      if (props.role) {
        return css`
          display: inline;          
          font-size: 10px;
          background-color: var(--discord);
          color: var(--white);
          margin-left: 4px;
          padding: 2px;
          border-radius: 4px;
          text-transform: uppercase;
          content:'${props.role}';
        `;
      } else if (props.userTag) {
        return css`
          display: block;
          background-color: transparent;
          text-transform: uppercase;
          color: var(--gray);
          font-size: 11px;
          text-align: left;
          font-weight: normal;
          content:'${props.userTag}';
        `;
      } else {
        return css`
          display: none;
          content: '';
        `;
      }
    }};
  }
`;
