import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import Home from "./home";
import About from "./about";
import Tip from "./tip";
import Bundle from "./bundle"

const createComponent = component => () => (
  <Bundle load={component}>
    {
      Component => {
        return Component
          ? <Component/>
          : <div>111111</div>;
      }
    }
  </Bundle>
);

export default() => {
  return (<Switch>
    <Route path="/home" component={createComponent(()=><Home/>)}/>
    <Route path="/about" component={createComponent(About)}/>
    <Route path="/tip" component={createComponent(Tip)}/>
    <Redirect to="/home"/>
  </Switch>)
}
