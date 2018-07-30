import React, {Component} from "react";

import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import createHistory from "history/createBrowserHistory";
import {ConnectedRouter, routerReducer, routerMiddleware, push} from "react-router-redux";
import reducers from "../reducers/index"; // Or wherever you keep your reducers
import routers from "./router"

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducers, applyMiddleware(middleware));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers/index", () => {
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }


export default() => {
  return (<Provider store={store}>
    <ConnectedRouter history={history}>
      {routers()}
    </ConnectedRouter>
  </Provider>)
}
