import React from 'react';
import Home from './components/Home/Home';
import NavBar from "./components/NavBar/NavBar";
import ForgetPassword from "./components/RegisterLogin/ForgetPassword";
import RegisterLoginContainer from "./components/RegisterLogin/RegisterLoginContainer";
import FoundForm from "./components/foundForm/mainComponent";
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

const App = () => (
  <>
    <NavBar />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/foundForm" component={FoundForm} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/RegisterLogin" component={RegisterLoginContainer} />
        <Route exact path="/forgetPassword" component={ForgetPassword} />
        <Redirect from="/home" to="/" />
      </Switch>
    </main>
  </>
);

export default App;
