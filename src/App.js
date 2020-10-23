import React from 'react';
import './styles/App.css';
import 'fontsource-roboto';
import Nav from './components/Nav.js';
import FrontPage from './components/FrontPage';
import Offering from './components/Offering';
import Team from './components/Team';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <FrontPage />
        <Offering />
        <Team />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
