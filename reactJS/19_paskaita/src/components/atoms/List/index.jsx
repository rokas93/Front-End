import React from 'react';
import { ListItemStyled, ListStyled } from './List.styled';

const List = ({ data }) => {
  return (
    <ListStyled>
      {data?.map((item) => (
        <ListItemStyled key={item.id}>{item.title}</ListItemStyled>
      ))}
    </ListStyled>
  );
};

export default List;
