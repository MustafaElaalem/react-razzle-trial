import Home from './components/Home/Home';
import NavBar from "./components/NavBar/NavBar";
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => (
  <>
    <NavBar />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  </>
);

export default App;
