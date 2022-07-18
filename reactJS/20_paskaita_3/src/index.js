import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Container } from './components/organisms/Navigation/Navigation.styled';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);
