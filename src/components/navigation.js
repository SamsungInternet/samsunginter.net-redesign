import React, { Component } from 'react';
import styled from 'styled-components'
import Menu from '../img/menu.svg'

const Nav = styled.nav`
position: absolute;
top: 0;
right: 0;
width: 60px;
height: 60px;
overflow: hidden;
background: url(${Menu}) no-repeat center #706cf5;
background-size: 30px;
text-align: center;
@media (min-width: 820px) {
    grid-column: span 5;
    position: relative;
    background: transparent;
    width: auto;
  }
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
