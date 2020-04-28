import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const GoldBar = styled.div`
  background-color: gold;
  height: 20px;
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
  padding: 5px;
`;

const Logo = styled.img`
  max-height: 100px;
`;

const logo = require('./Logo.png');

const LinkWrapper = styled.div`
  flex-direction: row;
  justify-content: center;
`;

const Header = () => (
  <Wrapper>
    <GoldBar />
    <LogoBar>
      <Link to="/" isLogo>
        <Logo src={logo} alt="dope cereal" />
      </Link>
      <a href="tel:615-969-9382">615-969-9382</a>
    </LogoBar>
    <LinkWrapper>
      <Link to="/" text="Home" />
      <Link to="/About" text="About" />
      <Link to="" text="Services" />
      <Link to="/Contact" text="Contact" />
      <Link to="" text="Gallery" />
    </LinkWrapper>
  </Wrapper>
);
export default Header;
