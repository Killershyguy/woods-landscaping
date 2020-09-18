import React from 'react';
import styled from 'styled-components';

const BodyText = styled.p`
  padding-left: 150px;
  padding-right: 150px;
  padding-top: 25px;
  text-align: center;
`;

const trees = require('./magnolia.jpg');

const Image = styled.div`
  height: auto;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${trees});
  background-color: black;
`;

const ImageText = styled.p`
  position: absolute;
  top: 30%;
  left: 34%;
  color: ${p => p.theme.color.gold};
  font-size: 40px;
  text-align: center;
`;

const Wrapper = styled.div`
  background-color: ${p => p.theme.color.white};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding-bottom: 30px;
  width: 100%;
`;

const SubHeadImage = styled.div`
  /** background-color: grey; **/
  height: 300px;
  width: 100%;
  position: relative;
`;

const Title = styled.h1`
  padding-top: 30px;
  text-align: center;
`;

const Home = () => (
  <Wrapper>
    <SubHeadImage>
      <ImageText>
        <strong>
          <i>
            The gold standard in full
            <br /> service luxary landscaping
          </i>
        </strong>
      </ImageText>
      <Image />
    </SubHeadImage>
    <Title>Company Statement</Title>
    <BodyText>
      Bacon ipsum dolor amet pork frankfurter prosciutto andouille hamburger
      chicken sirloin picanha buffalo. Jowl bacon bresaola ribeye, pork belly
      turkey chuck pork loin leberkas ground round. Picanha pastrami brisket
      andouille buffalo rump doner bresaola ball tip chicken capicola. Jowl
      sirloin buffalo pork chop picanha bresaola pork belly leberkas hamburger.
    </BodyText>
    <ReviewWrapper>
      <Title>Reviews</Title>
    </ReviewWrapper>
  </Wrapper>
);

export default Home;
