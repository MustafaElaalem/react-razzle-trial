import Home from './components/Home/Home';
import NavBar from "./components/NavBar/NavBar";
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CountPage from './components/countPage';
//to use redux imoort provider from redux
import { Provider } from "react-redux";
import store from "./redux/store";
import RegisterLoginContainer from './components/RegisterLogin/RegisterLoginContainer';
const App = () => (
  <>
    <Provider store={store}>
    <NavBar />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/count" component={CountPage} />
        <Route exact path="/RegisterLogin" component={RegisterLoginContainer} />
      </Switch>
    </main>
    </Provider>
  </>
);

export default App;
