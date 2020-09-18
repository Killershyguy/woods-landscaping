import React, { useRef } from 'react';
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
  padding-left: 0px;
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

const Services = () => {
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

  const plantRef = useRef(null);
  const hardscapeRef = useRef(null);
  const irrigationRef = useRef(null);
  const maintenanceRef = useRef(null);

  return (
    <Wrapper>
      <Title>Services - Homeowner</Title>
      <ButtonWrapper>
        <Button onClick={() => scrollToRef(plantRef)} text={'Plant Install'} />
        <Button onClick={() => scrollToRef(hardscapeRef)} text={'Hardscapes'} />
        <Button
          onClick={() => scrollToRef(irrigationRef)}
          text={'Irrigation'}
        />
        <Button
          onClick={() => scrollToRef(maintenanceRef)}
          text={'Maintenance'}
        />
      </ButtonWrapper>
      <Title>Plant Installation</Title>
      <SideBySide
        ref={plantRef}
        color={'beige'}
        title={'Plant Installation'}
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
      <SideBySide
        ref={hardscapeRef}
        color={'white'}
        title={'Hardscapes'}
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
      <Title ref={irrigationRef}>Irrigation</Title>
      <SideBySide
        color={'beige'}
        title={'Irrigation'}
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
      <Title ref={maintenanceRef}>Maintenance</Title>
      <SideBySide
        color={'white'}
        title={'Maintenance'}
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
    </Wrapper>
  );
};

export default Services;
