import styled from 'styled-components';

export const ListStyled = styled.ul`
  list-style: none;
  cursor: pointer;
`;

export const ListItemStyled = styled.li`
  padding: 0.75em 0.75em;
  font-size: 0.9rem;
  border-bottom: 1px solid #ededed;

  &:hover {
    background-color: #f5f5f5;
  }
`;
