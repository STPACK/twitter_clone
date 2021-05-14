import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import {tweetReducer ,authReducer} from './store/reducer/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  tweet: tweetReducer,
  auth:authReducer
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
   <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
   </React.StrictMode>,
  document.getElementById("root")
);
