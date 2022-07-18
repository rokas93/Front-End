import { forwardRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  InputContainerStyled,
  InputStyled,
  InputWrapperStyled,
} from './Input.styled';

const Input = ({ type, placeholder, handleChange }, ref) => {
  return (
    <InputContainerStyled>
      <InputWrapperStyled>
        <FaSearch />
        <InputStyled
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          ref={ref}
        />
      </InputWrapperStyled>
    </InputContainerStyled>
  );
};

export default forwardRef(Input);
