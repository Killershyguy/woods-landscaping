import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ServiceButton = styled.button`
    background-color: brown;
    border: none;
    display: inline-block;
    padding: 15px 32px;
    width: 100px;
`;

const Button = ({text}) => (
<ServiceButton>{text}</ServiceButton>
);

Button.propTypes = {
    // displays text on the left side
    text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
  };

export default Button;