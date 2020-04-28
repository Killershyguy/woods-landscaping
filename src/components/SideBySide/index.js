import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Title, Paragraph } from '../text';

const Image = styled.img`
  height: auto;
  max-width: 100%;
`;

const Wrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 10%;
`;

const TextWrapper = styled.div`
  flex-direction: column;
  width: 50%;
  padding: 100px;
`;

const ImgWrapper = styled.div`
  flex-direction: column;
  width: 50%;
  padding: 100px;
`;

const SideBySide = ({ text, title, image, imageText }) => (
  <Wrapper>
    <TextWrapper>
      {title && <Title>{title}</Title>}
      <Paragraph>{text}</Paragraph>
    </TextWrapper>
    <ImgWrapper>
      <Image src={image} />
      {imageText && <Paragraph>{imageText}</Paragraph>}
    </ImgWrapper>
  </Wrapper>
);

SideBySide.propTypes = {
  // displays text on the left side
  text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  // displays h1 text on the left
  title: PropTypes.string,
  // displays image on the right side
  image: PropTypes.node.isRequired,
  // displays text under the image
  imageText: PropTypes.string
};

export default SideBySide;
