import React, { Component } from 'react';
import styled from 'styled-components'

import TwitterImg from '../img/twitterlogo.svg';
import GithubImg from '../img/githublogo.svg';
import MediumImg from '../img/mediumlogo.svg';
import FacebookImg from '../img/facebooklogo.svg';
import InstaImg from '../img/instalogo.svg';
import LogoImg from '../img/sdevhublogo.svg';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  @media (min-width: 820px) {
    padding: 20px;
    align-items: center;
  }
`

const Logo = styled.img`
  height: 45px;
  @media (min-width: 820px) {
    height: 60px;
  }
`

const Social = styled.ul`
  position: absolute;
  right: 15px;
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  @media (min-width: 820px) {
    position: relative;
    flex-direction: row;
    margin-top: 0;
  }
`
const SocialLink = styled.a`
  display: block;
  width: 30px;
  height: 30px;
  margin: 10px 0;
  overflow: hidden;
  text-indent: -999px;
  background: url(${props => props.type}) no-repeat center;
  background-size: 30px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  @media (min-width: 820px) {
    position: relative;
    margin: 0 10px;
  }
`

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Logo src={LogoImg} />
        <Social>
            <li>
                <SocialLink href="#" type={TwitterImg}>Twitter</SocialLink>
            </li>
            <li>
                <SocialLink href="#" type={GithubImg}>Github</SocialLink>
            </li>
            <li>
                <SocialLink href="#" type={MediumImg}>Medium</SocialLink>
            </li>
            <li>
                <SocialLink href="#" type={FacebookImg}>Facebook</SocialLink>
            </li>
            <li>
                <SocialLink href="#" type={InstaImg}>Instagram</SocialLink>
            </li>
        </Social>
      </Wrapper>
    );
  }
}

export default Header;
