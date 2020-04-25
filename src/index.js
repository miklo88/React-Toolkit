import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers/combine-reducers";

ReactDOM.render(
  <Provider store={createStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
