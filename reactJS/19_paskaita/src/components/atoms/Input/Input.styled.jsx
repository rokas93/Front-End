import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  border-bottom: 1px solid #ededed;
`;

export const InputWrapperStyled = styled.div`
  display: flex;

  border: 1px solid #ccc;
  border-radius: 5px;

  padding: 10px;
  margin: 0.5em 0.75em;

  & svg {
    color: #ccc;
  }

  &:hover {
    border-color: #b5b5b5;
  }

  &:focus-within {
    border-color: #485fc7;
    box-shadow: 0 0 0 0.125em rgb(72 95 199 / 25%);

    & svg {
      color: #363636;
    }
  }
`;

export const InputStyled = styled.input`
  border: none;
  outline: none;
  margin-left: 10px;
  width: 100%;

  &::-webkit-input-placeholder {
    color: #ccc;
  }
`;
