import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  padding: calc(0.5em - 1px) 1em;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.375em;
  line-height: 1.5;
  font-size: 1rem;

  ${({ color }) =>
    color === 'primary' &&
    css`
      background-color: #00d1b2;
      color: #fff;
      font-weight: 700;

      &:hover {
        background-color: #00c4a7;
      }
    `}

  ${({ color }) =>
    color === 'secondary' &&
    css`
      background-color: #f5f5f5;
      color: rgba(0, 0, 0, 0.7);

      &:hover {
        background-color: #eee;
      }
    `}
`;
