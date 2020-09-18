import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  height: auto;
  flex-direction: column;
  width: 100%;
`;

const Image = styled.img`
  height: 400px;
  max-width: 100%;
`;

const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 45px;
`;

const Title = styled.h1`
  padding-bottom: 25px;
  padding-top: 25px;
  text-align: center;
`;

const test = require('./captainCrunch.jpg');
// const test2 = require('./captainCrunch2.jpg');
// const test3 = require('./captainCrunch3.jpg');

const Gallery = () => (
  <Wrapper>
    <Title>Gallery</Title>
    <ImageRow>
      <Image src={test} />
      <Image src={test} />
      <Image src={test} />
    </ImageRow>
    <ImageRow>
      <Image src={test} />
      <Image src={test} />
      <Image src={test} />
    </ImageRow>
    <ImageRow>
      <Image src={test} />
      <Image src={test} />
      <Image src={test} />
    </ImageRow>
  </Wrapper>
);

export default Gallery;
