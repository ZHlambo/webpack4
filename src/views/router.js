import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import Home from "./home";
import About from "./about";
import Tip from "./tip";

export default() => {
  return (<Switch>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/tip" component={Tip}/>
    <Redirect to="/home"/>
  </Switch>)
}
