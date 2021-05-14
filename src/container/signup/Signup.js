import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux';
import *as actions from '../../store/action/index';
import classes from "./Signup.module.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import {Link,useHistory} from 'react-router-dom';
import { Button, TextField } from "@material-ui/core";

const Signup = React.memo((props) => {
  const {SignupHandler,currentUser} =props
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();
  useEffect(() => {
    if (currentUser !== null) history.push("/home");
  }, [currentUser,history]);

  const onSubmitHandler = (event)=>{
    event.preventDefault()
    SignupHandler(email,password,username,photoUrl)
  }
    return (
        <div className={classes.signup}>
      <Link to="/">
      <TwitterIcon />
      </Link>
      <h1>Sign up to Twitter</h1>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.signup_form}>
          <TextField label="Email" className={classes.signup_input} type="email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <TextField label="Password" className={classes.signup_input} type="password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <TextField label="Username" className={classes.signup_input} type="text" variant="outlined" value={username} onChange={(e)=>setUsername(e.target.value)} />
          <TextField label="Avatar Url" className={classes.signup_input} type="text" variant="outlined" value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)} />
          <Button type="submit" className={classes.signup_button}>
            Sign up
          </Button>
        </div>
      </form>
      <Link to="/login"> Log in to twitter</Link>
    </div>
    )
})

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SignupHandler: (email, password,username,photoUrl) =>
      dispatch(actions.authSignUp(email, password,username,photoUrl)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Signup)
