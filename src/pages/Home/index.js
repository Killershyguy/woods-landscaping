import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${p => p.theme.color.black};
  height: 100px;
  width: 100%;
`;

const Home = () => <Wrapper />;

export default Home;
