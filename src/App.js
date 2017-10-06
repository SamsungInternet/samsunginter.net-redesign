import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Spotlight from './components/spotlight';
import Navigation from './components/navigation';


const Wrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
`
class App extends Component {
  render() {
    return (
      <Wrapper>
        <Spotlight />
        <Navigation />
      </Wrapper>
    );
  }
}

export default App;
