import React, { Component } from 'react';
import styled from 'styled-components'

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
`

const Icon = styled.svg`
  polygon {
    fill: red;
    height: 30px;
    width: 30px;
  }
`

function createSVGPath() {
  return {__html: '<polygon points="19,0.791 24.646,12.229 37.27,14.064 28.135,22.968 30.291,35.541 19,29.604 7.709,35.541   9.865,22.968 0.73,14.064 13.354,12.229 "/>'}
}

class Featured extends Component {
  render() {
    return (
      <Wrapper>
         <Title>
            <Icon dangerouslySetInnerHTML={createSVGPath()} />
           Featured Content</Title>
      </Wrapper>
    );
  }
}

export default Featured;
