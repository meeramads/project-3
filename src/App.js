import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeContainer from './EmployeeContainer';
import { Route, Switch } from 'react-router-dom';
import Register from './Register';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component = { Register }/>
        <Route exact path='/employees' component ={ EmployeeContainer } />
      </Switch>
    </main>
  );
}

export default App;
