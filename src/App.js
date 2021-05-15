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
  const { authSubscribe, currentUser,authPath } = props;

  useEffect(() => {
    authSubscribe();
  }, [authSubscribe]);




  return (
    <>
      <Router>
        <Switch>
          <Route path="/home">
              {/* {currentUser !== null && <Home loading={loading}/> }
              {currentUser === null && <Redirect to="/"/> } */}
              <Home/>
          </Route>
          <Route path="/signup" >
            {/* {currentUser === null && <Signup/> }
              {currentUser !== null && <Redirect to="/"/> } */}
              <Signup/>
          </Route>
          <Route path="/login" >
              {/* {currentUser === null && <Login/> }
              {currentUser !== null && <Redirect to="/"/> } */}
              <Login/>
          </Route>
          <Route path="/" exact>
              {/* {currentUser === null && <Root/> }
              {currentUser !== null && <Redirect to="/home"/> } */}
              <Root authPath={authPath} currentUser={currentUser}/>
          </Route>
          <Route path='*'>
               {currentUser !== null && <Home/> }
              {currentUser === null && <Redirect to="/"/> }
        </Route>
        </Switch>
      </Router>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    authPath:state.auth.authPAth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authSubscribe: () => dispatch(actions.authSubscribe()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
