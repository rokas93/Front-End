import { useState, useRef, useEffect, useMemo } from 'react';
import Input from '../../atoms/Input';
import Filters from '../../molecules/Filters';
import { HeaderStyled, MessageStyled } from './Panel.styled';
import axios from 'axios';
import List from '../../atoms/List';
import Button from '../../atoms/Button';
import { PanelStyled } from './Panel.styled';

const Panel = () => {
  // States
  const [data, setData] = useState(null);
  const [filterBy, setFilterBy] = useState('all');
  const [searchBy, setSearchBy] = useState('');

  // Refs
  const inputElement = useRef(null);

  // Side effects
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => setData(response.data.slice(0, 15)))
      .catch((error) => console.error(error));
  }, []);

  // Functions
  const getFilteredData = () => {
    if (filterBy === 'done') {
      return data.filter(
        (item) => item.completed && item.title.includes(searchBy)
      );
    }

    if (filterBy === 'inProgress') {
      return data.filter(
        (item) => !item.completed && item.title.includes(searchBy)
      );
    }

    return data?.filter((item) => item.title.includes(searchBy));
  };

  const filteredData = useMemo(getFilteredData, [filterBy, searchBy, data]);

  const handleReset = () => {
    setFilterBy('all');
    setSearchBy('');
    inputElement.current.value = null;
  };

  const handleChange = () => {
    setSearchBy(inputElement.current.value);
  };

  return (
    <PanelStyled>
      <HeaderStyled>Todos list</HeaderStyled>
      <Input
        type={'text'}
        placeholder={'Search'}
        ref={inputElement}
        handleChange={handleChange}
      />
      <Filters setFilterBy={setFilterBy} filterBy={filterBy} />
      <List data={filteredData} />
      {!filteredData?.length && <MessageStyled>No data</MessageStyled>}
      <Button
        handleReset={handleReset}
        text={'Reset all filters'}
        type={'reset'}
      />
    </PanelStyled>
  );
};

export default Panel;
