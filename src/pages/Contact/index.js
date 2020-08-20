import React from 'react';
import styled from 'styled-components';
import SideBySide from '../../components/SideBySide';

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Title = styled.h1`
  padding-top: 25px;
  text-align: center;
`;

const ownerImage = require('./landscaping.jpg');

const Contact = () => (
  <Wrapper>
    <Title>Contact</Title>
    <SideBySide
      text={
        <List>
          <ListItem>Phone Number: 615-969-9382</ListItem>
          <ListItem>Email: Brandt@WoodsLandscapingLLC.com</ListItem>
          <ListItem>Mailing Address: P.O. Box </ListItem>
          <ListItem>Location: Gallatin, TN</ListItem>
        </List>
      }
      image={ownerImage}
    />
  </Wrapper>
);

export default Contact;
