import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #000;
  }

  a, a:link, a:visited, a:hover, a:active {
    text-decoration: none;
}
`;

export const ContainerStyled = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
`;
