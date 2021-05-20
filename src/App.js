import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./store/action/index";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Home, Root, Login, Signup } from "./container/index";

function App(props) {
  const { authSubscribe, currentUser, authPath,authCheck } = props;

  useEffect(() => {
    authSubscribe();
  }, [authSubscribe]);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signup">
            {currentUser !== null ? <Redirect to="/" /> : <Signup />}
          </Route>
          <Route path="/login">
            {currentUser !== null ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/" exact>
            <Root authPath={authPath} currentUser={currentUser} authCheck={authCheck} />
          </Route>
          <Route path="*">
            {currentUser !== null && <Home />}
            {currentUser === null && <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    authPath: state.auth.authPath,
    authCheck: state.auth.authCheck,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authSubscribe: () => dispatch(actions.authSubscribe()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
