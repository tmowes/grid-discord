import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
  grid-area: CI;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background-color: var(--primary);
  box-shadow: var(--shadow) 0px 2px 0 0;
  z-index: 2;
`;
export const Separator = styled.div`
  height: 32px;
  border-left: 1px solid var(--white);
  opacity: 0.2;
  margin: 0 12px;
`;
export const Title = styled.h1`
  margin-left: 8px;
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;
export const Description = styled.span`
  font-size: 16px;
  color: var(--gray);
`;

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  color: var(--symbol);
`;
