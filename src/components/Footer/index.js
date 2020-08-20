import React from 'react';
import styled from 'styled-components';
import Link from '../Header/Link';

const GoldBar = styled.div`
  background-color: ${p => p.theme.color.gold};
  height: 4px;
  width: 100%;
  flex-direction: column;
`;

const Logo = styled.img`
  max-height: 70px;
`;

const logo = require('../Header/Logo.png');

const LogoBar = styled.div`
  background-color: ${p => p.theme.color.maroon};
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Wrapper = styled.div`
  width: 100%;
  flex-direction: column;
`;

const Footer = () => (
  <Wrapper>
    <GoldBar />
    <LogoBar>
      <Link to="/" isLogo>
        <Logo src={logo} alt="woods landscaping" />
      </Link>
      <a href="mailto:brandtwood@woodlanscaping" style={{ textDecoration: 'none' }}>
        Brandt@WoodsLandscapingLLC.com
      </a>
      <a href="tel:615-969-9382" style={{ textDecoration: 'none' }}>615-969-9382</a>
    </LogoBar>
  </Wrapper>
);
export default Footer;
