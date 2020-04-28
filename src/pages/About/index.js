import React from 'react';
import styled from 'styled-components';
import SideBySide from '../../components/SideBySide';

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
`;

const ownerImage = require('./Brandt-Wood.jpg');

const About = () => (
  <Wrapper>
    <SideBySide
      title={`Wood's Landscaping \n Est. 2004`}
      text={`Lorem ipsum Lorem ipsum \n\n Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum `}
      image={ownerImage}
      imageText="Owner - Brandt Wood"
    />
  </Wrapper>
);

export default About;
