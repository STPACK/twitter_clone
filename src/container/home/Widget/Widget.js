import React from "react";
import classes from "./Widget.module.css";

const Widget = () => {
  return (
    <div className={classes.widget}>
      <div className={classes.widget_search}>
        <input type="text" placeholder="Search Twitter" />
      </div>
    </div>
  );
};

export default Widget;
