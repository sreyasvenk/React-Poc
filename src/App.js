import React from 'react';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom'
import SignIn from './components/signIn';
import Dashboard from './components/dashboard';
function App() {
  return (
    <div >
      <Switch>
      <Route exact path="/" render={()=>(<Redirect to="login"></Redirect>)}></Route>
      <Route path="/login" component={SignIn}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
