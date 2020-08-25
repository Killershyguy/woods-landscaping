import React from 'react';
import styled from 'styled-components';
import SideBySide from '../../components/SideBySide';
import Button from '../../components/Button';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 100px;
  padding-bottom: 80px;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

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

const plantInstallation = require('./plantInstallation.jpg');
const hardscape = require('./hardscape.png');

const Services = () => 
<Wrapper>
  <Title>Homeowner</Title>
  <ButtonWrapper>
    <Button text={`plant installation`}></Button>
    <Button text={`test`}></Button>
    <Button text={`test`}></Button>
    <Button text={`test`}></Button>
  </ButtonWrapper>
  <Title>Plant Installation</Title>
  <SideBySide
      text={
        <List>
          <ListItem>Phone Number: 615-969-9382</ListItem>
          <ListItem>Email: Brandt@WoodsLandscapingLLC.com</ListItem>
          <ListItem>Mailing Address: P.O. Box </ListItem>
          <ListItem>Location: Gallatin, TN</ListItem>
        </List>
      }
      image={plantInstallation}
    />
    <Title>Hardscapes</Title>
    <SideBySide
      text={
        <List>
          <ListItem>Phone Number: 615-969-9382</ListItem>
          <ListItem>Email: Brandt@WoodsLandscapingLLC.com</ListItem>
          <ListItem>Mailing Address: P.O. Box </ListItem>
          <ListItem>Location: Gallatin, TN</ListItem>
        </List>
      }
      image={hardscape}
    />
    <Title>Irrigation</Title>
    <SideBySide
      text={
        <List>
          <ListItem>Phone Number: 615-969-9382</ListItem>
          <ListItem>Email: Brandt@WoodsLandscapingLLC.com</ListItem>
          <ListItem>Mailing Address: P.O. Box </ListItem>
          <ListItem>Location: Gallatin, TN</ListItem>
        </List>
      }
      image={plantInstallation}
    />
    <Title>Maintenance</Title>
    <SideBySide
      text={
        <List>
          <ListItem>Phone Number: 615-969-9382</ListItem>
          <ListItem>Email: Brandt@WoodsLandscapingLLC.com</ListItem>
          <ListItem>Mailing Address: P.O. Box </ListItem>
          <ListItem>Location: Gallatin, TN</ListItem>
        </List>
      }
      image={plantInstallation}
    />
</Wrapper>;

export default Services;
