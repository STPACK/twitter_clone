import React, { useEffect } from "react";
import classes from "./Root.module.css";
import { Button, Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import { CircularProgress } from "@material-ui/core";

const Root = ({ authPath, currentUser }) => {
  const history = useHistory();
  useEffect(() => {
    if (!authPath && currentUser !== null) {
      return history.push("/home");
    }
  }, [authPath, history, currentUser]);

  let content = <CircularProgress />;

  if (authPath || currentUser === null) {
    content = (
      <>
        <Grid container spacing={0} direction="row-reverse">
          <Grid item sm={12} md={6} className={classes.root_part2}>
            <div className={classes.root_content}>
              <div className={classes.icon_twitter2}>
                <TwitterIcon />
              </div>
              <h1>Happening now</h1>
              <h2>Join Twitter Clone today</h2>
              <Button
                variant="outlined"
                className={classes.root_signup}
                component={Link}
                to="/signup"
              >
                Sign up
              </Button>
              <Button
                variant="outlined"
                className={classes.root_login}
                component={Link}
                to="/login"
              >
                Log in
              </Button>
            </div>
          </Grid>
          <Grid item sm={12} md={6} className={classes.root_part1}>
            <div className={classes.icon_twitter}>
              <TwitterIcon />
            </div>
          </Grid>
        </Grid>
      </>
    );
  }

  return content;
};

export default Root;
