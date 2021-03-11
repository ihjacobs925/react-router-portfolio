import React from 'react';
import './App.css';

import Main from './Pages/Main';
import About from './Pages/About';
import Nav from './Components/Nav';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <main className='main'>
        <Main />
        <About />
        <Footer />
      </main>

      <Nav />
    </div>
  );
}

export default App;
