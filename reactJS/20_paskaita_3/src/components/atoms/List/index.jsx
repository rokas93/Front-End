import React from 'react';
import { Link } from 'react-router-dom';
import { ListStyled } from './List.styled';
import { FaAngleDown } from 'react-icons/fa';
import Dropdown from '../Dropdown';

const List = ({ text, path, dropdown, isHovered, setIsHovered }) => {
  return (
    <ListStyled
      dropdown={dropdown}
      onMouseEnter={(e) => setIsHovered(e.target.dataset.type)}
      onMouseLeave={() => setIsHovered('')}
    >
      <Link to={path} data-type={path}>
        {text}
      </Link>
      {dropdown && <FaAngleDown />}
      {isHovered === path && (
        <Dropdown dropdown={dropdown} setIsHovered={setIsHovered} />
      )}
    </ListStyled>
  );
};

export default List;
