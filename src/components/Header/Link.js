import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.div`
  background-color: ${p =>
    p.isLogo ? p.theme.color.white : p.theme.color.darkGreen};
  display: flex;
  justify-content: ${p => (p.isLogo ? 'flex-start' : 'center')};
  padding-top: ${p => (p.isLogo ? '0px' : '10px')};
  padding-bottom: ${p => (p.isLogo ? '0px' : '10px')};
  width: ${p => (p.isLogo ? 'auto' : '100%')};
  color: ${p => p.theme.color.white};
  &:hover {
    background-color: ${p => (p.isLogo ? 'none' : '#274d2a')};
  }
`;

const Link = ({ to, text, children, isLogo }) => (
  <StyledLink
    to={to}
    as={NavLink}
    isLogo={isLogo}
    style={{ textDecoration: 'none' }}
  >
    {text && <p>{text}</p>}
    {children}
  </StyledLink>
);

Link.propTypes = {
  // route to where you want to go
  to: PropTypes.string.isRequired,
  // the text for the links
  text: PropTypes.string,
  // wraps child in link
  children: PropTypes.node,
  // apply logo styling
  isLogo: PropTypes.bool
};

export default Link;
