import './App.css';
import React from 'react'
import Home from "./routes/Home";
import Contactus from "./routes/Contactus";
import Admin from "./routes/Admin";
import Addstudents from "./routes/Addstudents";
import Viewstudents from "./routes/Viewstudents";
import Editstudents from "./routes/Editstudents";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Studentdetails from "./routes/Studentdetails";
import Navbar from "./routes/Navbar";
import Logout from "./routes/Logout";
import { Redirect, Route, Switch } from 'react-router-dom';
import Adminnavbar from './routes/Adminnavbar';
import Homeadmin from './routes/Homeadmin';


function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Homeadmin}/>
        <Route exact path="/contact" component={Contactus}/>
        <Route exact path="/logout" component={Logout}/>
        <Route exact path="/addstudent" component={Addstudents}/>
        <Route exact path="/viewstudent/:id" component={Viewstudents}/>
        <Route exact path="/editstudent/:id" component={Editstudents}/>
        <Route exact path="/studentdetails" component={Studentdetails}/>
        <Redirect to="/"/>
      </Switch>
    </>
  );
}

export default App;
