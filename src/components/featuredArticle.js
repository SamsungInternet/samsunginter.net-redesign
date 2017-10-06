import React, { Component } from 'react';
import styled, { css } from 'styled-components'

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const Pic = styled.div`
  position: relative;
`
const ArticleImg = styled.img`
  display: block;
  width: 110px;
  height: 110px;
  margin-right: 20px;
`
const AuthorImg = styled.img`
  position: absolute;
  bottom: -5px;
  right: 15px;
  width: 50px;
  height: 50px;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
`
const Title = styled.h4`
  font-size: 1.2em;
  margin-bottom: 1em;
`

const Text = styled.p`
  line-height: 1.4em;
  font-size: 0.9em;
  margin-bottom: 1em;
`

const Link = styled.a`
  color: #6b65d8;
  text-decoration: none;
`

class Article extends Component {
  render() {
    return (
      <Wrapper>
        <Pic>
          <ArticleImg src={this.props.articleimg} />
          <AuthorImg src={this.props.authorimg} />
        </Pic>
        <section>
          <Title>{this.props.title}</Title>
          <Text>{this.props.text}</Text>
          <Link href={this.props.url}>read more</Link>
        </section>
      </Wrapper>
    );
  }
}

export default Article;
