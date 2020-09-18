import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const GreenBar = styled.div`
  background-color: ${p => p.theme.color.darkGreen};
  height: 6px;
  width: 100%;
  flex-direction: column;
`;

const GoldBar = styled.div`
  background-color: ${p => p.theme.color.gold};
  height: 4px;
  width: 100%;
  flex-direction: column;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  flex-direction: column;
`;

const LogoBar = styled.div`
  background-color: white;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Logo = styled.img`
  max-height: 70px;
`;

const logo = require('./Logo.png');

const LinkWrapper = styled.div`
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Header = () => (
  <Wrapper>
    <GreenBar />
    <LogoBar>
      <Link to="/" isLogo>
        <Logo src={logo} alt="wood's landscaping logo" />
      </Link>
      <a
        href="tel:615-969-6025"
        style={{ textDecoration: 'none', color: 'black' }}
      >
        615-969-6025
      </a>
    </LogoBar>
    <GoldBar />
    <LinkWrapper>
      <Link to="/" text="Home" />
      <Link to="/About" text="About" />
      <Link to="/Services" text="Services" />
      <Link to="/Contact" text="Contact" />
      <Link to="/Gallery" text="Gallery" />
    </LinkWrapper>
    <GoldBar />
  </Wrapper>
);
export default Header;
