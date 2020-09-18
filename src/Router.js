import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

const Container = styled.div`
  width: 100%;
  flex-direction: column;
`;
const Router = () => (
  <BrowserRouter basename={''}>
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
      </Switch>
      <Footer />
    </Container>
  </BrowserRouter>
);
export default Router;
