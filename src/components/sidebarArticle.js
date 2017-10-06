import React, { Component } from 'react';
import styled, { css } from 'styled-components'

const Wrapper = styled.article`
  padding: 20px;
  color: white;
  background-color: ${props => props.bgcolor}
`
const Title = styled.h5`
  margin-bottom: 1em;
  font-size: 0.8em;
`

const Hashtag = styled.h6`
  font-size: 1.8em;
  text-align: right;
`
const Img = styled.img`
  text-align: right;
`
const Text = styled.p`
  margin-top: 1em;
  font-size: 0.8em;
  line-height: 1.4em;
  text-align: right;
`

class Article extends Component {
  render() {
    return (
      <Wrapper bgcolor={this.props.bgcolor}>
        <Title>{this.props.title}</Title>
        <Hashtag>{this.props.hashtag}</Hashtag>
        <Text>{this.props.text}</Text>
        <Img src={this.props.text} />
      </Wrapper>
    );
  }
}

export default Article;
