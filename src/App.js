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
import { CircularProgress } from "@material-ui/core";

function App(props) {
  const { authSubscribe, currentUser } = props;

  useEffect(() => {
    authSubscribe();
  }, [authSubscribe]);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Root} />
          <Redirect  to="/home" />
        </Switch>
      </Router>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authSubscribe: () => dispatch(actions.authSubscribe()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
