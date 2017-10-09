import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import Menu from '../img/menu.svg'

const NavShowing = css`
  width: 100%;
  height: 100vh;
  padding-top: 10px;
  transition: width 0.2s ease;
  background-color: #706cf5;
  z-index: 1;
  a {
    flex-shrink: 0;
    width: 100%;
  }
`

const Nav = styled.nav`
  position: absolute;
  top: 60px;
  right: 0;
  width: 0;
  height: 60px;
  text-align: center;
  
  ${props => props.showing ? NavShowing : ''}
  
  @media (min-width: 820px) {
    grid-column: span 5;
    position: relative;
    width: auto;
    top: 0;
  }
`

const Item = styled.a`
  display: inline-block;
  padding: 20px 40px;
  font-size: 1.2em;
  text-decoration: none;
  color: white;
`

const NavControl = styled.button`
  position: absolute;
  top: -60px;
  right: 0;
  height: 60px;
  width: 60px;
  border: 0;
  text-indent: -9999px;
  overflow: hidden;
  background: url(${Menu}) no-repeat center #706cf5;
  background-size: 30px;
  @media (min-width: 820px) {
    display: none;
  }
`

class Navigation extends Component {
  state = {
    visible: false
  };
  showHideMenu() {
    console.log(this.state);
    if (this.state.visible === false) {
      this.setState({visible: true})
    } else {
      this.setState({visible: false})
    }
  }
  render() {
    return (
      <Nav showing={this.state.visible}>
        <NavControl onClick={this.showHideMenu.bind(this)}>Show Menu</NavControl>
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
