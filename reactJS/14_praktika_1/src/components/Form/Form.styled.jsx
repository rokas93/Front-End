import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 50px 50px 50px;

  input {
    padding: 17px 20px;
    width: 100%;
    font-size: 14px;

    border: 1px solid #ebebeb;
    border-radius: 5px;

    outline: none;
  }

  input:focus {
    border-image-source: linear-gradient(to right, #9face6, #74ebd5);
    border-radius: 5px;
    border-image-slice: 1;
  }

  button {
    background-image: linear-gradient(to left, #74ebd5, #9face6);
    padding: 17px 20px;

    font-size: 14px;
    font-weight: 700;
    color: #fff;

    border: none;
    border-radius: 5px;

    cursor: pointer;
  }
`;

export const FormErrorMsgStyled = styled.span`
  color: #ea2027;
  font-size: 0.8rem;
`;
