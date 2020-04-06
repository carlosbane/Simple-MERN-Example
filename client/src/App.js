import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';
import Footer from './components/Footer';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const App = () => {
  return(
    <div>
      <Nav />
      <Body />
      <Footer />
    </div>
  )
}

export default App;
