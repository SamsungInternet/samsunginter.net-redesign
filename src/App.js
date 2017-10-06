import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Header from './components/header'
import Article from './components/article'
import Navigation from './components/navigation';
import Featured from './components/featured';
import Sidebar from './components/sidebar';

import Vr from './img/vr.png'
import Pwa from './img/pwa.png'

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
`

const TopArticle = styled.article`
min-height: 450px;
grid-column: span 3;
grid-row: span 2;
color: white;
background: url(${props => props.bgimg}) no-repeat center #706cf5;
background-blend-mode: soft-light;
background-size: cover;
article {
  font-size: 1.8em;
}
div {
  align-items: flex-start;
}
h2 {
  max-width: 500px;
  margin-top: -10px;
}
`

const Title = styled.h1`
margin: 20px;  
font-size: 1.5em;
font-style: italic;
color: white;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
         <TopArticle
            bgimg="http://placekitten.com/g/700/700"
          >
            <Header />
            <Title>in the spotlight...</Title>
            <Article 
              author="https://www.placecage.com/400/400"
              title="How exclusive tech events can foster an inclusive tech community"
            />
          </TopArticle>
          <Article 
            bgcolor="#c7205e" 
            bgimg="http://placekitten.com/g/500/400"
            icon={Vr}
            hashtag="#webvr"
            author="https://www.placecage.com/200/200"
            title="Web Audio on different platorms"
            right={true}
          />
          <Article 
            bgcolor="#2a4e99"
            author="https://www.placecage.com/100/100"
            bgimg="http://placekitten.com/g/600/500"
            icon={Pwa}
            hashtag="#pwa"
            title="Progressive Web Apps are a toolkit, not a recipe"
            right={false}
          />
        <Navigation />
        <Featured />
        <Sidebar />
      </Wrapper>
    );
  }
}

export default App;
