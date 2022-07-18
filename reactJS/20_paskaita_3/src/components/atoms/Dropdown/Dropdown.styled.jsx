import styled from 'styled-components';

export const DropdowndStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  white-space: nowrap;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top: 2px solid #dbdbdb;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  box-shadow: 0 8px 8px rgb(10 10 10 / 10%);

  a {
    color: #4a4a4a;
    padding-right: 3rem;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  a[data-divaider='true'] {
    border-top: 0.5rem solid #fff;
    margin-top: 0.6rem;
    order: 1;
    position: relative;

    &::before {
      content: ' ';
      position: absolute;

      top: -10px;
      left: 0;
      right: 0;
      border: 1px solid #f5f5f5;
    }
  }
`;
