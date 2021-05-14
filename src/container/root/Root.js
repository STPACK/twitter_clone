import React from "react";
import classes from "./Root.module.css";
import { Button, Grid } from "@material-ui/core";
import {Link} from 'react-router-dom';
import TwitterIcon from "@material-ui/icons/Twitter";

const Root = () => {
 
  return (
    <Grid container spacing={0}>
      <Grid item xs={6} className={classes.root_part1}>
        <div className={classes.icon_twitter}>
          <TwitterIcon />
        </div>
      </Grid>
      <Grid item xs={6} className={classes.root_part2}>
        <div className={classes.root_content}>
          <div className={classes.icon_twitter2}>
            <TwitterIcon />
          </div>
          <h1>Happening now</h1>
          <h2>Join Twitter Clone today</h2>
          <Button variant="outlined" className={classes.root_signup} component={Link} to="/signup" >Sign up</Button>
          <Button variant="outlined" className={classes.root_login}  component={Link} to="/login" >Log in</Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Root;
