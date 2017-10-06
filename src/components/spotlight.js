import React, { Component } from 'react';
import styled from 'styled-components'
import Header from './header'
import Article from './article'

import Vr from '../img/vr.png'
import Pwa from '../img/pwa.png'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: #706cf5;
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

class Spotlight extends Component {
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
      </Wrapper>
    );
  }
}

export default Spotlight;
