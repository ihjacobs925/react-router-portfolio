import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <nav>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/projects" component={Projects} />
        </div>
      </nav>
    </Router>
  );
}

export default App;
