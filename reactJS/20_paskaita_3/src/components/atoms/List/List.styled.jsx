import styled, { css } from 'styled-components';

export const ListStyled = styled.li`
  color: #485fc7;
  font-size: 1.125rem;
  position: relative;
  cursor: pointer;

  svg {
    position: absolute;
    bottom: 15px;
    right: 12px;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    height: 100%;

    ${({ dropdown }) =>
      dropdown &&
      css`
        padding-right: 2em;
      `}
  }

  &:hover > a {
    background-color: #fafafa;
    color: #485fc7;
  }
`;
