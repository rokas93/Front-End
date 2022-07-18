import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Layouts from './Layouts';
import React, { Suspense } from 'react';
import { ContainerStyled } from './components/Common/Common.styled';

const App = () => {
  return (
    <ContainerStyled>
      <Header />
      <Suspense>
        <Routes>
          {Layouts.map((route) => (
            <Route key={route.id} path={route.path} element={route.page} />
          ))}
        </Routes>
      </Suspense>
    </ContainerStyled>
  );
};

export default App;
