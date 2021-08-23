import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Organisms/Navigation';
import Home from './Templates/Home';
import About from './Templates/About';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Planet from './Templates/Planet';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/planet" component={Planet} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
