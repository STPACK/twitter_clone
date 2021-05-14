import React from "react";
import classes from "./SidebarOption.module.css";


const SidebarOption = (props) => {
  const { Icon, text } = props;
  return (
   
      <div className={classes.sidebarOption}>
        <Icon className={classes.sidebar__icon} />
        <h2>{text}</h2>
      </div>
  
  );
};

export default SidebarOption;
