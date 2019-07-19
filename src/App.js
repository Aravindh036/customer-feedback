import React from 'react';
import './App.css';
import './components/Login/Login.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import CustomerLogin from './components/Login/CustomerLogin';
import CompanyLogin from './components/Login/CompanyLogin';
import EmployeeLogin from './components/Login/EmployeeLogin';
import CompanyHome from './components/CompanyHome';
import EmployeeList from './components/EmployeeList';
import Consumer from './components/Consumer';
import Home from './components/Home';
import Feedback from './components/Feedback';

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route  exact path="/" component={Home} />    
     <Route  exact path="/customer/feedback" component={Feedback} />
     <Route exact path="/customer/auth" component={CustomerLogin} />
     <Route exact  path="/customer/:id" component={Consumer} />
     <Route  exact path="/company/auth" component={CompanyLogin} />
     <Route  exact path="/employee/auth" component={EmployeeLogin} />
     <Route  exact path="/company/home" component={CompanyHome} />
     <Route  exact path="/company/employee" component={EmployeeList} />
   </Switch>
   </BrowserRouter>
  );
}

export default App;
