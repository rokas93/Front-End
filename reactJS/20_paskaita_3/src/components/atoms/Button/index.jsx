import React from 'react';
import { ButtonStyled } from './Button.styled';

const Button = ({ text, color }) => {
  return <ButtonStyled color={color}>{text}</ButtonStyled>;
};

export default Button;
