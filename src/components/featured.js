import React, { Component } from 'react';
import styled from 'styled-components'

import FeaturedArticle from './featuredArticle'
import Star from '../img/star.svg'

const Wrapper = styled.section`
  grid-column: span 4;
  grid-row: span 3;
  padding: 20px;
  background-color: white;
`

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 1em;
  color: #3d3d3d;
  display: flex;
  align-items: center;
`

const Icon = styled.div`
  display: inline-block;
  height: 30px;
  width: 30px;
  margin-right: 10px;
  svg {
    fill: #3d3d3d;
    height: 30px;
    width: 30px;
  }
`

function createSVGPath() {
  return {__html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="35px" viewBox="0 0 37 35" width="37px" xml:space="preserve"><polygon points="19,0.791 24.646,12.229 37.27,14.064 28.135,22.968 30.291,35.541 19,29.604 7.709,35.541   9.865,22.968 0.73,14.064 13.354,12.229 "/></svg>'}
}

class Featured extends Component {
  render() {
    return (
      <Wrapper>
         <Title>
            <Icon dangerouslySetInnerHTML={createSVGPath()} />
           Featured Content
         </Title>
         <FeaturedArticle 
           articleimg="http://placekitten.com/g/200/200"
           authorimg="https://www.placecage.com/50/50"
           title="Using binary data to optimise libraries on the client and the server"
           text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non lectus sed orci elementum blandit eu vel lectus. Morbi venenatis arcu quis lorem viverra, id lacinia magna ullamcorper."
         />
         <FeaturedArticle 
           articleimg="http://placekitten.com/g/140/140"
           authorimg="https://www.placecage.com/60/60"
           title="Using binary data to optimise libraries on the client and the server"
           text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non lectus sed orci elementum blandit eu vel lectus. Morbi venenatis arcu quis lorem viverra, id lacinia magna ullamcorper."
         />
         <FeaturedArticle 
           articleimg="http://placekitten.com/g/400/400"
           authorimg="https://www.placecage.com/70/70"
           title="Using binary data to optimise libraries on the client and the server"
           text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non lectus sed orci elementum blandit eu vel lectus. Morbi venenatis arcu quis lorem viverra, id lacinia magna ullamcorper."
         />
         <FeaturedArticle 
           articleimg="http://placekitten.com/g/800/800"
           authorimg="https://www.placecage.com/80/80"
           title="Using binary data to optimise libraries on the client and the server"
           text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non lectus sed orci elementum blandit eu vel lectus. Morbi venenatis arcu quis lorem viverra, id lacinia magna ullamcorper."
         />
      </Wrapper>
    );
  }
}

export default Featured;
