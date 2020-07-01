import styled from 'styled-components';
import { PersonAdd, Settings } from 'styled-icons/material';
import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  background-color: transparent;
  transition: background-color 0.2s;
  > div {
    display: flex;
  }
  > div svg.optional {
    display: none;
  }
  &.active,
  &:hover {
    background-color: var(--quinary);
    > div span {
      color: var(--white);
    }
    > div svg.optional {
      display: inline;
    }
  }
`;
export const Title = styled.span`
  font-size: 14px;
  color: var(--senary);
  margin-left: 8px;
`;
export const HashtagIcon = styled(Hashtag)`
  width: 16px;
  color: var(--symbol);
`;
export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  color: var(--senary);
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;
export const SettingsIcon = styled(Settings)`
  width: 16px;
  color: var(--senary);
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
  margin-left: 8px;
`;
