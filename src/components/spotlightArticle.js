import React, { Component } from 'react';
import styled, { css } from 'styled-components'

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url(${props => props.bgimg}) no-repeat center ${props => props.bgcolor};
  background-blend-mode: soft-light;
  background-size: cover;
  padding: 20px;
  @media (min-width: 820px) {
    grid-column: span 2;
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${ props => props.direction ? 'row-reverse' : 'row'};  
  text-align: ${ props => props.direction ? 'right' : 'left'};  
`

const User = styled.img`
  width: 75px;
  height: 75px;
  flex-shrink: 0;
`

const Title = styled.h2`
  max-width: 250px;
  margin: 20px;
  font-size: 1.2em;
  line-height: 1.4em;
  color: white;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.4);
`

const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Icon = styled.img`
  display: block;
  width: 60px;
  background-size: 30px;
`

const Hashtag = styled.h3`
  font-size: 3em;
  color: white;
  opacity: 0.5;
`

class Article extends Component {
  render() {
    return (
      <Wrapper 
        bgcolor={this.props.bgcolor} 
        bgimg={this.props.bgimg}
      >
        <Info direction={this.props.right}>
          <User src={this.props.author} />
          <Title>{this.props.title}</Title>
        </Info>
        <Type>
          <Hashtag>{this.props.hashtag}</Hashtag>
          <Icon src={this.props.icon} />
        </Type>
      </Wrapper>
    );
  }
}

export default Article;
