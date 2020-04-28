import React from 'react';
import styled from 'styled-components';
import Link from '../Header/Link';

const GoldBar = styled.div`
  background-color: gold;
  height: 20px;
  width: 100%;
  flex-direction: column;
`;

const Logo = styled.img`
  max-height: 100px;
`;

const logo = require('../Header/Logo.png');

const LogoBar = styled.div`
  background-color: grey;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

const Wrapper = styled.div`
  background-color: grey;
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
      <a href="mailto:brandtwood@woodlanscaping">
        Brandt@WoodsLandscapingLLC.com
      </a>
      <a href="tel:615-969-9382">615-969-9382</a>
    </LogoBar>
  </Wrapper>
);
export default Footer;
