import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: var(--secondary);
`;
export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  color: var(--gray);
`;
export const AddCategoryIcon = styled(Add)`
  width: 24px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;
