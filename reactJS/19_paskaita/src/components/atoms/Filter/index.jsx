import React from 'react';
import {
  FilterWrapperStyled,
  FilterStyled,
  LabelStyled,
} from './Filter.styled';

const Filter = ({ text, type, value, name, id, filterBy, setFilterBy }) => {
  return (
    <FilterWrapperStyled>
      <FilterStyled
        type={type}
        value={value}
        name={name}
        id={id}
        onChange={(e) => setFilterBy(e.target.value)}
        checked={value === filterBy}
      />
      <LabelStyled htmlFor={value}>{text}</LabelStyled>
    </FilterWrapperStyled>
  );
};

export default Filter;
