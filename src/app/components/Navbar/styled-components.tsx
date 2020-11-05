import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: #202124;
`;

export const LinksContainer = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  color: lightseagreen;
`;

export const Link = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 24px;
  border-bottom: 2px solid transparent;

  &.active {
    border-bottom: 2px solid tomato;
    color: tomato;
  }
`;