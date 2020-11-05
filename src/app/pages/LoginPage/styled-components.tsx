import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  line-height: 60px;
  color: black;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Poppins', sans-serif;
  padding 10px 0;
`;

export const Input = styled.input`
  width: 280px;
  height: 30px;
  font-size: 16px;
  color: black;
`;

export const Button = styled.button`
  height: 30px;
  width: 100px;
  background: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #fff;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  border: 0;
`;

export const ErrorText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: tomato;
`;
