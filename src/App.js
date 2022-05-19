//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';
import AddStudent from './AddStudent';
import ViewStudents from './ViewStudents';
import UpdateStudent from './UpdateStudent';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './Navbar';



  
  
function App() {
  return (
    <div className="App">
      <Router>
        
      <Navbar/>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/addstu" component={AddStudent}></Route>
        <Route path="/viewstu" component={ViewStudents}></Route>
        <Route path="/updatestu" component={UpdateStudent}></Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
