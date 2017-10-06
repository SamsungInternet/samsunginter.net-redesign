import React, { Component } from 'react';
import styled from 'styled-components'

const Nav = styled.nav`
  grid-column: span 5;
  text-align: center;
`

const Item = styled.a`
    display: inline-block;
    padding: 20px 40px;
    font-size: 1.2em;
    text-decoration: none;
    color: white;
`

class Navigation extends Component {
  render() {
    return (
      <Nav>
        <Item href="#">about</Item>
        <Item href="#">docs</Item>
        <Item href="#">team</Item>
        <Item href="#">blog</Item>
        <Item href="#">support</Item>
        <Item href="#">demos</Item>
      </Nav>
    );
  }
}

export default Navigation;
