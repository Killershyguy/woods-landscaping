import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Title, Paragraph, SubTitle } from '../text';

const CenterText = styled.p`
  text-align: center;
`;

const Image = styled.img`
  height: auto;
  max-width: 100%;
  border: 10px solid ${p => p.theme.color.darkGreen};
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
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  padding-bottom: 100px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0;
`;

const ImgWrapper = styled.div`
  flex-direction: column;
  width: 50%;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  padding-bottom: 100px;
`;

const SideBySide = ({ text, title, image, imageText, subTitle }) => (
  <Wrapper>
    <TextWrapper>
      <TitleWrapper>
        {title && <Title>{title}</Title>}
        <SubTitle>{subTitle}</SubTitle>
      </TitleWrapper>
      <Paragraph>{text}</Paragraph>
    </TextWrapper>
    <ImgWrapper>
      <Image src={image} />
      {imageText && <CenterText>{imageText}</CenterText>}
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
