import styled from 'styled-components';

export const ModalOverlayStyled = styled.div`
  position: fixed;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.15);
`;

export const ModalWrapperStyled = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;

  .form-animate {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const ModalStyled = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
`;

export const ModalHeaderStyled = styled.div`
  position: relative;
  text-align: center;
  padding: 20px 10px;
  color: #000;

  span {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 10px;

    color: #000;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
