import React, { Component } from 'react';
import styled from 'styled-components'

import TwitterImg from '../img/twitterlogo.svg';

const Wrapper = styled.section`
  grid-column: span 4;
  grid-row: span 3;
  padding: 20px;
  background-color: white;
`
class Featured extends Component {
  render() {
    return (
      <Wrapper>
         Oh hai
      </Wrapper>
    );
  }
}

export default Featured;
