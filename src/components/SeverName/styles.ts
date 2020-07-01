import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px 0 16px;
  background-color: var(--secondary);
  box-shadow: var(--shadow) 0px 2px 0 0;
  z-index: 2;
`;
export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 32px;
  color: var(--white);
`;
