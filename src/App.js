import React from 'react';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom'
import SignIn from './components/signIn';
import Dashboard from './components/dashboard';
function App() {
  return (
    <div className="container-fluid w-100 App-Background height-100 position-fixed overflow-auto">
      <Switch>
      <Route exact path="/" render={()=>(<Redirect to="login"></Redirect>)}></Route>
      <Route path="/login" component={SignIn}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
