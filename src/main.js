import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import createHistory from "history/createBrowserHistory";
import {ConnectedRouter, routerReducer, routerMiddleware, push} from "react-router-redux";
import reducers from "./reducers/index"; // Or wherever you keep your reducers
import routers from "./views/router"

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducers, applyMiddleware(middleware));


// webpack3.5.5版本热加载可以实现不刷新页面直接替换
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

ReactDOM.render(<Provider store={store}>
  <ConnectedRouter history={history}>
    {routers()}
  </ConnectedRouter>
</Provider>, document.getElementById("root"));
