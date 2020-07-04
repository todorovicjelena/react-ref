import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import BasicRef from './basicRef/BasicRef';
import CallBackRef from './callbackRef/CallBackRef';
import ParentComponent from './parentToChildRef/parent/ParentComponent';
import ForwardParent from './forwardRef/parent/ForwardParent';
import FormRef from './formValidation/FormRef';
import NavBar from './navigation/NavBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Route>
        <NavBar />
        <Switch>
          <Route path='/basic' component={BasicRef} />
          <Route path='/callback' component={CallBackRef} />
          <Route path='/parent' component={ParentComponent} />
          <Route path='/forward' component={ForwardParent} />
          <Route path='/form' component={FormRef} />
        </Switch>
      </Route>
    );
  }
}
