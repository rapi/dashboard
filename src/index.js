import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-dashboard-pro-react.css?v=1.3.0";
import { Provider } from "react-redux";
import "core-js/modules/es7.promise.finally";
import "babel-polyfill";
import indexRoutes from "routes/index.jsx";
import { PersistGate } from 'redux-persist/integration/react'

import store,{persistor} from "store/index";
const hist = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
          })}
        </Switch>
      </Router>
    </PersistGate>

  </Provider>,
  document.getElementById("root")
);
