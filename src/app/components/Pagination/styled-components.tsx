import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;


export const PageLink = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  color: #fff;
  background: tomato;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  border: 0;
`;
export const SwitchButton = styled(PageLink)`
  height: 30px;
  width: 30px;
  border-radius: 50%;

  &:disabled {
    background: grey;
  }
`;
export const SelectedPageLink = styled(PageLink)`
  background: lightseagreen;
`;