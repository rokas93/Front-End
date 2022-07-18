import React from 'react';
import { ButtonStyled } from './Button.styled';

const Button = ({ text, type, handleReset }) => {
  return (
    <ButtonStyled type={type} onClick={handleReset}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
