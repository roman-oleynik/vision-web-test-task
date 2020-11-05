import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 576px) {
    & {
      flex-direction: row;
      justify-content: center;
      align-items: stretch;
      flex-wrap: wrap;
    }
  }
`;

export const BookContainer = styled.div`
  min-height: 40px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  margin: 5px;
  border: 2px solid #202124;
  border-radius: 6px;
`;

export const BookTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  line-height: 60px;
  color: black;
`;

export const BookAuthor = styled.i`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 30px;
  color: grey;
  text-align: center;
`;

export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 30px;
  color: grey;
  text-align: center;
`;