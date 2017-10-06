import React, { Component } from 'react';
import styled from 'styled-components';
import SidebarArticle from './sidebarArticle';

import TwitterImg from '../img/twitterlogo.svg';

const Wrapper = styled.aside`
  display: grid;
  grid-row: span 3;
`
class Sidebar extends Component {
  render() {
    return (
      <Wrapper>
         <SidebarArticle 
           bgcolor="#706cf5"
           title="upcoming event"
           hashtag="#SDC2017"
           text="Team Samsung Internet will be out in force at this year's Samsung Developer Conference"
         />
         <SidebarArticle 
           bgcolor="#31aeb4"
           title="upcoming event"
           hashtag="#SDC2017"
           text="Team Samsung Internet will be out in force at this year's Samsung Developer Conference"
         />
         <SidebarArticle 
           bgcolor="#706cf5"
           title="upcoming event"
           hashtag="#SDC2017"
           text="Team Samsung Internet will be out in force at this year's Samsung Developer Conference"
         />
      </Wrapper>
    );
  }
}

export default Sidebar;
