import React from 'react';
import './styles/App.css';
import 'fontsource-roboto';
import Nav from './components/Nav.js';
import FrontPage from './components/FrontPage';
import Mission from './components/Mission';
import Offering from './components/Offering';
import Footer from './components/Footer';
import Team from './components/Team.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <FrontPage />
        <Offering />
        <Team />
        <Mission />
        <Footer />
      </div>
    </div>
  );
}

export default App;
