import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ServiceButton = styled.div`
  display: flex;
  background-color: ${p => p.theme.color.darkGreen};
  padding: 18px 50px;
  width: 180px;
  justify-content: center;
  color: white;
  &:hover {
    background-color: #274d2a;
  }
  border-radius: 5px;
`;

const Button = ({ text, onClick }) => (
  <ServiceButton onClick={onClick}>{text}</ServiceButton>
);

Button.propTypes = {
  // displays text on the left side
  text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};

export default Button;
