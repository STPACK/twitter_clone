import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import classes from "./Login.module.css";
import * as actions from "../../store/action/index";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link, useHistory } from "react-router-dom";
import { Button, CircularProgress, TextField } from "@material-ui/core";

const Login = React.memo((props) => {
  const { loginHandler, currentUser,loading } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  
  useEffect(() => {
    if (currentUser !== null) history.push("/home");
  }, [currentUser,history]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    loginHandler(email, password);
  };

  return (
    <>
      <div className={classes.login}>
        <Link to="/">
          <TwitterIcon />
        </Link>
        <h1>Log in to Twitter</h1>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.login_form}>
            <TextField
              label="EMAIL"
              className={classes.login_input}
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="PASSWORD"
              className={classes.login_input}
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className={classes.login_button} disabled={loading}>
              
              {!loading ?"Login": <CircularProgress size={25} />}
            </Button>
          </div>
        </form>
        <Link to="/signup"> Sign up for twitter</Link>
      </div>
    </>
  );
});

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    loading :state.auth.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginHandler: (email, password) =>
      dispatch(actions.authSignIn(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
