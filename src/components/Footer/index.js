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
  /* max-height: 70px; */
  width: 200px;
`;

const logo = require('../Header/Logo.png');
// const trees = require('./tree-silhouette.jpg');

const LogoBar = styled.div`
  background-color: #3b3739;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: right;
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
      <a
        href="mailto:brandtwood@woodlanscaping"
        style={{ textDecoration: 'none', color: 'white' }}
      >
        Brandt@WoodsLandscapingLLC.com
      </a>
      <a
        href="tel:615-969-6025"
        style={{ textDecoration: 'none', color: 'white', width: 200 }}
      >
        615-969-6025
      </a>
    </LogoBar>
  </Wrapper>
);
export default Footer;
