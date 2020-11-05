import { Link } from 'react-router-dom';
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
  text-align: center;
`;

export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 30px;
  color: grey;
  text-align: center;
`;

export const Button = styled(Link)`
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
`;