import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Organisms/Navigation';
import Home from './Templates/Home';
import About from './Templates/About';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
