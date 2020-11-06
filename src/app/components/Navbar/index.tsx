import React from 'react';
import { LinksContainer, Nav, Title, Link } from './styled-components';

export function Navbar() {
  return (
    <header>
      <Nav>
        <Title>Bamazon</Title>
        <LinksContainer>
          <Link to="/" exact activeClassName="active">Home</Link>
          <Link to="/books" activeClassName="active">Books</Link>
          <Link to="/profile" activeClassName="active">Profile</Link>
        </LinksContainer>
      </Nav>
    </header>
  );
}