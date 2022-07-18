import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/organisms/Navigation';
import { NAV_BUTTONS, MAIN_LOGO, ROUTES } from './data/constants';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation navLinks={ROUTES} navButtons={NAV_BUTTONS} logo={MAIN_LOGO} />
      <Suspense>
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
