import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 16px;
  margin-right: 4px;
  background-color: transparent;
  box-shadow: var(--shadow) 0px 1px 0 0;
  z-index: 2;
  &.mention {
    background-color: var(--mention-message);
    border-left: 2px solid var(--mention-detail);
    padding-left: 14px;
  }
  & + div {
    margin-top: 8px;
  }
`;
export const Avatar = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--secondary);
  cursor: pointer;
  &.bot {
    background-color: var(--mention-detail);
  }
`;
export const Message = styled.div`
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
`;
export const Author = styled.strong`
  color: var(--white);
  font-size: 14px;
  &::after {
    ${props => {
      if (props.role) {
        return css`
          display: inline;          
          font-size: 10px;
          background-color: var(--discord);
          color: var(--white);
          margin-left: 8px;
          padding: 2px;
          border-radius: 4px;
          text-transform: uppercase;
          content:'${props.role}';
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
export const MessageDate = styled.time`
  margin-left: 8px;
  color: var(--gray);
  font-size: 12px;
`;
export const Content = styled.p`
  text-align: left;
  color: var(--white);
  font-size: 14px;
`;

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
