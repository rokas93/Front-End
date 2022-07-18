import React from 'react';
import { DropdowndStyled } from './Dropdown.styled';
import { Link } from 'react-router-dom';

const Dropdown = ({ dropdown, setIsHovered }) => {
  return (
    <DropdowndStyled>
      {dropdown?.map((item) => (
        <Link
          key={item.text}
          to={item.path}
          data-divaider={item.divaider}
          onClick={() => setIsHovered('')}
        >
          {item.text}
        </Link>
      ))}
    </DropdowndStyled>
  );
};

export default Dropdown;
