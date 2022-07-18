import styled from 'styled-components';

export const PanelStyled = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: 600px;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
`;

export const MessageStyled = styled.p`
  text-align: center;
  padding: 40px 5px;
  color: #ccc;
`;

export const HeaderStyled = styled.p`
  padding: 0.75em 1em;
  font-size: 1.25em;
  font-weight: 700;
  color: #363636;
  background-color: #ededed;
  border-radius: 6px 6px 0 0;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  padding-top: 30px;
`;

// https://bulma.io/documentation/components/panel/
