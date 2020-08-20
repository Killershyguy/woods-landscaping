import React from 'react';
import styled from 'styled-components';
import SideBySide from '../../components/SideBySide';

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  padding-top: 25px;
  text-align: center;
`;

const ownerImage = require('./Brandt-Wood.jpg');

const About = () => (
  <Wrapper>
    <Title>About</Title>
    <SideBySide
      title={`Wood's Landscaping`}
      subTitle={`Est. 2004`}
      text={`Lorem ipsum Lorem ipsum \n\n Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum `}
      image={ownerImage}
      imageText={`Owner - Brandt Wood`}
    />
  </Wrapper>
);
export default About;
