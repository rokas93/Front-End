import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
`;

export const NavButton = styled.li`
  .active {
    color: #aaa;
  }

  .inactive {
    color: #000;
  }
`;

export const ButtonsWrapperStyled = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonStyled = styled.button`
  padding: 5px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;

  color: ${(props) => (props.primary ? '#fff' : '#000')};
  background-color: ${(props) => (props.primary ? '#000' : '#fff')};
`;
