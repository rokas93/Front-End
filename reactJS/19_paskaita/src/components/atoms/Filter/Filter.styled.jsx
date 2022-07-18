import styled from 'styled-components';

export const FilterWrapperStyled = styled.div`
  padding: 8px 0;
`;

export const LabelStyled = styled.label`
  cursor: pointer;
  padding: 8px;
  color: #485fc7;
  font-size: 0.875em;

  &:hover {
    color: #363636;
  }
`;

export const FilterStyled = styled.input`
  display: none;

  &:checked + ${LabelStyled} {
    border-bottom: 1px solid #4a4a4a;
    color: #363636;
  }
`;
