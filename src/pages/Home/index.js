import React from 'react';
import styled from 'styled-components';

const BodyText = styled.p`
  padding-left: 150px;
  padding-right: 150px;
  font-family: ${p => p.theme.font.PlayfairDisplay};
  text-align: center;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`;

const ImageText = styled.p`
  position: absolute;
  top: 20%;
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
  width: 100%;
`;

const SubHeadImage = styled.div`
  background-color: grey;
  height: 300px;
  width: 100%;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
`;

const trees = require('./magnolia.jpg');

const Home = () => 
  <Wrapper>
    <SubHeadImage>
      <ImageText><strong><i>The gold standard in full<br /> service luxary landscaping</i></strong></ImageText> 
      <Image src={trees} style={{ opacity: 0.3, }}/>
    </SubHeadImage>
    <Title>Company Statement</Title>
    <BodyText>Bacon ipsum dolor amet pork frankfurter prosciutto andouille hamburger chicken sirloin picanha buffalo. Jowl bacon bresaola ribeye, pork belly turkey chuck pork loin leberkas ground round. Picanha pastrami brisket andouille buffalo rump doner bresaola ball tip chicken capicola. Jowl sirloin buffalo pork chop picanha bresaola pork belly leberkas hamburger.</BodyText>
    <ReviewWrapper>
      <Title>Reviews</Title>
    </ReviewWrapper>
  </Wrapper>;

export default Home;
