import React from 'react';
import Filter from '../../atoms/Filter';
import { FiltersStyled } from './Filters.styled';

const Filters = ({ setFilterBy, filterBy }) => {
  return (
    <FiltersStyled>
      <Filter
        text={'All'}
        type={'radio'}
        value={'all'}
        name={'filter'}
        id={'all'}
        setFilterBy={setFilterBy}
        filterBy={filterBy}
      />
      <Filter
        text={'Done'}
        type={'radio'}
        value={'done'}
        name={'filter'}
        id={'done'}
        setFilterBy={setFilterBy}
        filterBy={filterBy}
      />
      <Filter
        text={'In progress'}
        type={'radio'}
        value={'inProgress'}
        name={'filter'}
        id={'inProgress'}
        setFilterBy={setFilterBy}
        filterBy={filterBy}
      />
    </FiltersStyled>
  );
};

export default Filters;
